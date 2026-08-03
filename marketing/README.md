# Tangram Marketing Machine

The operating system for Tangram's marketing. Everything here is built to run on a
weekly cadence with one goal right now: **free-trial signups from overwhelmed
gen-ed teachers.**

## How it's organized

| File / folder | What it is |
|---|---|
| `00-strategy-brief.md` | The 90-day plan. Objective, audience, funnel, KPIs, weekly cadence. |
| `01-messaging-voice.md` | The single source of truth for how Tangram sounds and what it claims. Every asset draws from here. |
| `02-content-calendar.md` | 4-week rolling calendar across blog, social, and email. Assign, draft, ship. |
| `blog/` | Full SEO article drafts, ship-ready. |
| `social/` | Platform-native post packs (captions, scripts, hooks). |
| `email/` | Lifecycle sequences (welcome, trial-conversion, founding member). |

## The weekly loop (the "machine")

1. **Mon — Plan:** pull next week's row from `02-content-calendar.md`.
2. **Tue–Wed — Draft:** produce assets into the folders above, drawing voice/claims from `01-messaging-voice.md`.
3. **Thu — Review:** you approve. Nothing outward-facing ships without your yes.
4. **Fri — Queue & ship:** schedule into connected tools.
5. **Following Mon — Measure:** log results, feed the next brief.

## The real channel stack (what we actually have)

No Klaviyo/HubSpot/Ahrefs/social scheduler. Here's how each channel actually ships:

| Channel | How it goes live | Status |
|---|---|---|
| **Blog** | Convert the markdown posts to on-brand HTML pages, add to the Vercel site (`/blog/`), push → auto-deploys. **No external service needed — fully in our control.** | Ready to publish |
| **Social graphics** | **Canva** (connected) — routine auto-drafts branded designs; Nicole exports. | Live |
| **Social posting** | No scheduler → **native/manual**. Machine prepares a copy-paste-ready queue + the Canva graphic per post. | Manual |
| **Email** | No ESP yet. Sequences stay drafted and ready. When there's a list, pick a **free-tier ESP** (e.g. MailerLite/Mailchimp free) and we load them. | Parked |
| **SEO data** | No Ahrefs → use free signals (Google autocomplete, Search Console once verified). Drafts don't need it. | Free-tier |

Everything here is a ready-to-flip-live draft until Nicole approves go-live.

## Guardrails baked in

- Every claim traces to `01-messaging-voice.md` → "What we can say / can't say."
- No fabricated teacher testimonials or fake stats. Ever.
- Founding Member scarcity ("first 500") must stay truthful — update the count from real data.
