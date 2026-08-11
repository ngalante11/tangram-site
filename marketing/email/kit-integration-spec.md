# Kit ↔ Tangram App Integration Spec

**Goal:** because teachers start their trial **in the app** (app.gettangram.com), Kit can't
know it happened on its own. The app must tag the subscriber in Kit on two events. That's
what turns the [New Trial Nurture sequence](kit-setup.md) from "manual" into "fully
automated."

Hand this doc to whoever works on the Tangram app backend. It's ~a half-day task.

---

## The two events to send to Kit

| App event | What to do in Kit | Why |
|---|---|---|
| **Trial started** (account created / free trial begins) | Create-or-update the subscriber with their email, then add tag **`trial-started`** | Triggers the 7-day nurture sequence |
| **Upgraded to paid** (checkout success) | Add tag **`customer`** to that subscriber | Suppresses the sales emails so we don't pitch a customer |

Optional but useful later: tag **`founding-member`** when someone buys that specific plan;
add a `plan` custom field; tag **`lesson-built`** the first time they build a lesson (lets
us make emails A2/A3 conditional instead of purely time-based).

---

## Option A — Direct Kit API (cleanest, recommended)

Kit's current API (v4) authenticates with an API key sent in the `X-Kit-Api-Key` header.
Create the key in Kit → **Settings → Developer / API Keys**. Store it server-side as an
environment variable (`KIT_API_KEY`) — never in client code, never in the repo.

> ⚠️ Confirm exact endpoint paths and field names against the current docs at
> **developers.kit.com** before shipping — treat the calls below as the shape, not gospel.

**1. On trial start — create/upsert the subscriber:**
```http
POST https://api.kit.com/v4/subscribers
X-Kit-Api-Key: $KIT_API_KEY
Content-Type: application/json

{ "email_address": "teacher@example.com", "first_name": "Jordan" }
```

**2. Then add the `trial-started` tag** (get the tag's numeric id once from
`GET /v4/tags`, or create the tag in the Kit UI and copy its id):
```http
POST https://api.kit.com/v4/tags/{trial_started_tag_id}/subscribers
X-Kit-Api-Key: $KIT_API_KEY
Content-Type: application/json

{ "email_address": "teacher@example.com" }
```

**3. On upgrade — add the `customer` tag** (same call, different tag id):
```http
POST https://api.kit.com/v4/tags/{customer_tag_id}/subscribers
X-Kit-Api-Key: $KIT_API_KEY
Content-Type: application/json

{ "email_address": "teacher@example.com" }
```

That's it. Adding `trial-started` fires the sequence via the Visual Automation already set
up in Kit. Adding `customer` removes them from it.

**Implementation notes:**
- Make the calls idempotent — tagging an already-tagged subscriber is safe.
- Fire them from the backend event handlers (trial-created, checkout-succeeded), not the
  browser.
- Handle failures gracefully (retry/queue); a dropped tag = a missed email, not a crash.
- Respect consent: only subscribe teachers who've agreed to marketing email. Keep a clear
  unsubscribe path (Kit handles the unsub link automatically).

---

## Option B — No-code middleware (Zapier / Make)

If you'd rather not touch the API, Kit has native Zapier + Make integrations with a
**"Add Tag to Subscriber"** action.

```
[ App emits webhook on trial-start ] → [ Zapier catches it ] → [ Kit: Add Tag 'trial-started' ]
[ App emits webhook on upgrade    ] → [ Zapier catches it ] → [ Kit: Add Tag 'customer' ]
```

Still needs the app to emit a webhook on those two events (small backend task), but no
direct Kit API code. Slightly slower and a paid Zapier/Make tier for volume, but faster to
stand up.

---

## Recommended rollout

1. **This week (no dev needed):** send the **Founding Member broadcast** to your existing
   Kit list — steps in [kit-setup.md Part 4](kit-setup.md). Immediate conversions from
   people already on your list.
2. **Build the sequence + automations** in Kit now (also no dev) so they're ready and
   tested — [kit-setup.md Parts 1–3](kit-setup.md).
3. **Wire the `trial-started` tag** (Option A or B). The moment it's live, every new trial
   signup drops into the nurture arc automatically.
4. **Wire the `customer` tag** next so upgraders stop getting sales emails.

---

## What to confirm / decide
- Who owns the app backend work, and can they take Option A this sprint?
- Does the app already collect marketing-email consent at signup? (Needed before we
  auto-subscribe anyone.)
- Kit plan/volume: make sure your Kit tier covers your expected subscriber count.
