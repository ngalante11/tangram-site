# Kit (ConvertKit) Setup Pack — Tangram Email

Everything you need to stand up Tangram's email in **Kit**. The copy lives in
[`sequences.md`](sequences.md); this file maps it to Kit's building blocks and gives
click-by-click steps. No coding required for the basic setup.

> **From name:** Tangram (or a founder's name — recommended for the trust emails).
> **From email:** something@gettangram.com (verify the domain in Kit → Settings → Email
> so you send from your own domain, not a kit.com address). This alone improves
> deliverability a lot.

---

## How the pieces map to Kit

| What we drafted | Kit building block |
|---|---|
| Welcome + Trial-conversion emails | **One Sequence:** "New Trial Nurture" (6 emails over 7 days) |
| "Fire on trial start" | **Visual Automation:** trigger → subscribe to the sequence |
| Stop emailing once they upgrade | **Automation rule:** tag `customer` → remove from sequence |
| Founding Member drive | **2 Broadcasts** (initial + 48h reminder to non-openers/clickers) |
| Audience segments | **Tags:** `trial-started`, `customer`, `founding-member` |

**Why one merged sequence instead of two?** In Kit, a Sequence is a simple time-ordered
list. Rather than run the "welcome" and "trial-conversion" tracks in parallel (which
overlap and get confusing in one ESP), I've merged them into a single clean 7-day arc.
Same emails, ordered by day.

---

## The dependency to know about (important)

Kit sends email; it doesn't know what happens **inside your product**. For the automation
to fire, Tangram's app has to tell Kit two things by tagging the subscriber:

1. **`trial-started`** — added when someone starts the free trial. *This is what triggers
   the whole sequence.*
2. **`customer`** — added when they upgrade to paid. *This is what stops the sales emails
   so you don't pitch someone who already bought.*

**How the tag gets set** (pick one, easiest first):
- **If your signup form is a Kit form** → the `trial-started` tag can be added on form
  submit. Works today, no dev.
- **If signup happens in-app** → a developer wires Kit's API (or a Zapier/Make step) to
  tag the subscriber on trial start and on upgrade. ~1 short task.

Until the `customer` tag exists, the sequence still runs — you just risk emailing a new
customer one extra "upgrade" nudge. Low stakes to start; worth wiring soon.

---

## PART 1 — The "New Trial Nurture" Sequence

**Build it:** Kit → **Automate → Sequences → New Sequence** → name it `New Trial Nurture`.
Add 6 emails. For each, set the delay shown, paste the subject + body from
[`sequences.md`](sequences.md), and use the mapping below.

| # | Send timing | Email (from sequences.md) | Subject |
|---|---|---|---|
| 1 | Immediately | A1 — Welcome | You're in. Let's build your first lesson. |
| 2 | 1 day later | A2 — Where to start | Stuck on where to start? Start here. |
| 3 | 1 day later | B1 — Methodology story | Why Tangram isn't "just another AI tool" |
| 4 | 1 day later | A3 — Watch it adapt | You built one. Now watch it adapt. |
| 5 | 2 days later | B2 — Pricing / before lessons run out | You've got one free lesson left |
| 6 | 2 days later | B3 — Last call + Founding Member | Last call — plus a founding spot if you want it |

That's a 6-email, ~7-day arc. Kit lets you A/B test subject lines per email — use the
`(alt)` subjects in `sequences.md` as the B variant.

**Settings for the sequence:**
- Send window: only send Tue–Thu mornings? Optional — Kit can hold emails to a preferred
  time. For a 7-day trial, daily is fine.
- Exclude `customer` (see Part 3) so upgraders stop receiving it.

---

## PART 2 — The Visual Automation (the trigger)

**Build it:** Kit → **Automate → Visual Automations → New Automation.**

```
  [ Trigger: Tag added → 'trial-started' ]
                 │
                 ▼
  [ Action: Subscribe to sequence → 'New Trial Nurture' ]
```

That's the whole thing. Anyone who gets the `trial-started` tag enters the nurture arc.

---

## PART 3 — Stop emailing customers (suppression)

**Build it:** a second Visual Automation.

```
  [ Trigger: Tag added → 'customer' ]
                 │
                 ▼
  [ Action: Remove from sequence → 'New Trial Nurture' ]
                 │
                 ▼
  [ Action: (optional) Subscribe to 'Customer Onboarding' later ]
```

This guarantees you never pitch the Starter plan to someone who already upgraded.

---

## PART 4 — Founding Member drive (Broadcasts, not a sequence)

This is a time-bound push, so it's a **Broadcast**, not an automated sequence.

**Broadcast 1** — Kit → **Broadcasts → New Broadcast.**
- **Audience:** subscribers **NOT** tagged `customer` and **NOT** tagged
  `founding-member`. (Kit → filter by tag.)
- **Subject:** *First 500 teachers only: lock $5.99/mo forever* (copy = C1 in sequences.md)
- Send.

**Broadcast 2 (48h later)** — reminder to people who didn't act.
- **Audience:** recipients of Broadcast 1 who **did not click** (Kit lets you create a
  segment from "did not click" of a prior broadcast), still not `customer`.
- **Subject:** *Re: your founding spot (going fast)* (copy = C2)
- Send.

> ⚠️ **Keep the scarcity honest.** Only reference a specific "spots left" number if it's
> real. If you can't pull the live count, keep it to "first 500 only" without a countdown.

---

## PART 5 — First-week checklist

- [ ] Verify your sending domain in Kit (Settings → Email). Don't skip — deliverability.
- [ ] Set From name/email and a real physical address in the footer (legal requirement).
- [ ] Build the `New Trial Nurture` sequence (Part 1), paste all 6 emails.
- [ ] Create tags: `trial-started`, `customer`, `founding-member`.
- [ ] Build the trigger automation (Part 2) and the suppression automation (Part 3).
- [ ] Decide how `trial-started` gets set (Kit form vs. app/API) and wire it.
- [ ] **Send yourself a test:** add the tag to your own address, confirm the sequence fires
      and renders on mobile, check every link goes to app.gettangram.com.
- [ ] Only after a clean test: turn the automation on for real subscribers.

---

## What I need from you to go further

- **Do you already have a list in Kit** (even a small one)? If so, we can send the
  Founding Member broadcast this week.
- **Where does trial signup happen** — a Kit form, or in-app? That decides whether the
  trigger works today or needs a quick dev wire-up.
- If you want it fully hands-off, we can plan the Kit **API** integration (tag on trial
  start + on upgrade). That needs an API key stored as an environment variable — I'll
  guide the setup; never paste the key into chat.
