# Kit Welcome Sequence — Audit & Enhancement

Based on the live 3-email sequence in Kit (as of Aug 11 2026). The existing emails are
good. This keeps them, fixes a few small things, and adds the 2–3 emails that fill the
real gaps — so the trial actually converts, not just informs.

## The current sequence (what's live)

| # | Timing | Subject | Job | Verdict |
|---|---|---|---|---|
| 1 | Immediately | Welcome to Tangram | Welcome + build first lesson | ✅ Keep |
| 2 | +4 days | The difference is in the details | Methodology / differentiation | ✅ Keep (great) |
| 3 | +5 days | Your free trial wraps up soon | Pricing + Founding Member | ✅ Keep |

## The gaps (what's missing)

1. **No activation nudge early on.** If a teacher signs up and *doesn't build a lesson*,
   nothing pulls them back until day 4. Activation (building lesson #1) is the #1 predictor
   of conversion — we're leaving it to chance for 4 days.
2. **The "wow" is described, never shown.** Email 2 *tells* them lessons adapt for
   different classes. Nobody *walks them through* the one-build-→-five-versions moment,
   which is the single most convincing thing Tangram does.
3. **No true "last day" email.** Email 3 (day 5) says the trial "wraps up soon." There's
   no final, higher-urgency nudge on the actual last day. That last email is often the
   highest-converting one in the whole sequence.

## Three small fixes to the existing emails

- **Email 2 typo/voice:** "your free lessons are waiting" → capitalize, and warm it:
  *"Your free lessons are waiting — build one and see the difference for yourself."*
- **Voice, Email 1:** "a lesson personalization engine built by educators" → our positioning
  is warmer: *"an AI planning partner built by educators."* ("Engine" reads cold.)
- **⚠️ Claims consistency (please verify):** the emails mention **"650+ districts,"
  "40 personalized outputs," "100 outputs," "real-time collaboration."** The website says
  **"hundreds of districts"** and its pricing cards list *lessons* and features
  (all frameworks, tailored versions, early access, direct feedback line) — not "outputs"
  or "real-time collaboration." **Pick the true numbers/features and make site + email
  match.** If it's really 650+ districts, use that everywhere (more specific = more
  credible). If "outputs"/"real-time collaboration" are real plan features, add them to the
  site; if not, cut them from the email. No invented specifics on either side.

---

## NEW EMAIL A — insert at Day 2 (activation)

_Goal: pull non-starters back to build lesson #1. Ideally send only to people who haven't
built one yet (needs a `lesson-built` tag from the app); if that's not available, send to
all — it's still a useful nudge._

**Subject:** Stuck on the blank page? Start here.
**Subject (alt):** Your first Tangram lesson takes about 5 minutes
**Body:**
> Hi {{ first_name }},
>
> The hardest part of any lesson is the blank page — and Tangram is built to skip it.
>
> Don't overthink your first one. Pick a standard you're teaching this week and let Tan
> build it with you: six ways to start, seven guided pieces.
>
> Then do the one thing that makes Tangram click — tell it who's actually in your class.
> Your ELLs, your IEP accommodations, your reading levels. Watch it tailor the lesson to
> them.
>
> **[Build your first lesson →]**
>
> — The Tangram Team

---

## NEW EMAIL B — insert at Day 3 (show the "wow")

_Goal: make the one-build-→-many-versions magic concrete. This is the conversion
workhorse._

**Subject:** Build it once. Teach all five periods.
**Subject (alt):** The part other planning tools can't do
**Body:**
> Hi {{ first_name }},
>
> Here's the part most planning tools simply can't do.
>
> Build one lesson in Tangram, then tell it about your other classes — the section with
> eight ELLs, the one with six IEPs, your honors group. It hands you a version built for
> each: same objective, the right level of support, every time. No rewriting. No extra
> cost per version.
>
> That's the difference between planning one lesson and planning five. It's also the
> difference between a working Sunday and a free one.
>
> **[See it adapt for your classes →]**
>
> — The Tangram Team

---

## NEW EMAIL C — Day 6/7 (true last call)

_Goal: final urgency on the actual last day. Escalates from Email 3's "wraps up soon" to
"today." Single clear CTA._

**Subject:** Last day of your free lessons
**Subject (alt):** This is the last nudge
**Body:**
> Hi {{ first_name }},
>
> This is the last one — your free lessons are up. If Tangram earned a spot in your week,
> here's the best deal we offer:
>
> **Founding Member — $5.99/month, locked for life.** First 500 teachers only. The price
> never goes up, even as we add more.
>
> **[Claim your founding spot →]**
>
> Whatever you decide, thank you for planning with us. Your students aren't generic — and
> now your lessons don't have to be either.
>
> — The Tangram Team

---

## Recommended final timeline

| Day | Email | Status |
|---|---|---|
| 0 | Welcome to Tangram | existing ✅ |
| 2 | Stuck on the blank page? (NEW A) | add |
| 3 | Build it once. Teach all five periods. (NEW B) | add |
| 4 | The difference is in the details | existing ✅ |
| 5 | Your free trial wraps up soon | existing ✅ |
| 6–7 | Last day of your free lessons (NEW C) | add |

Six emails, one week, escalating from welcome → activation → wow → proof → pricing →
last call. Every link goes to app.gettangram.com. Add each new email in Kit via the
sequence's **Add Email** button and set the delay shown.

## Two things to confirm
- **What enrolls someone into this sequence today?** If trial signup (in-app) already adds
  them to Kit, your trigger is solved and the [integration spec](kit-integration-spec.md)
  is only needed for the `customer` suppression tag. If this sequence is only for
  newsletter signups, we still need the `trial-started` wire-up.
- **Suppression:** is there anything today that stops emailing someone once they upgrade
  mid-trial? If not, that's the one automation worth adding (tag `customer` → remove from
  sequence).
