# ▶ DO THIS IN KIT — final, copy-paste ready

Two jobs, ~15 minutes total. Everything below is final copy — paste as-is.
(Claude can't access Kit directly, so you run these; the writing is done.)

**From name:** a founder's name (recommended for trust) or "Tangram."
**Every email already needs:** your physical address + one-click unsubscribe (Kit adds the
unsub automatically; set the address in Settings once).

---

## JOB 1 — Add 3 emails to your existing "Welcome" sequence (~8 min)

Your live sequence today: **Welcome to Tangram** (immediately) → **The difference is in the
details** (+4 days) → **Your free trial wraps up soon** (+5 days). It covers welcome +
methodology + pricing. It's missing an early activation nudge, the "watch it adapt" wow,
and a true last-call. Add these three.

**In Kit:** Automate → Sequences → open your Welcome sequence → **Add Email** for each,
set the delay, paste subject + body.

### ADD #1 — place it SECOND (delay: +2 days after signup)
**Subject:** Stuck on the blank page? Start here.
**Body:**
> Hi {{ subscriber.first_name | default: "there" }},
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
> [Build your first lesson →](https://app.gettangram.com)
>
> — The Tangram Team

### ADD #2 — place it THIRD (delay: +1 day after #1)
**Subject:** Build it once. Teach all five periods.
**Body:**
> Hi {{ subscriber.first_name | default: "there" }},
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
> [See it adapt for your classes →](https://app.gettangram.com)
>
> — The Tangram Team

### ADD #3 — place it LAST (delay: +2 days after "Your free trial wraps up soon")
**Subject:** Last day of your free lessons
**Body:**
> Hi {{ subscriber.first_name | default: "there" }},
>
> This is the last one — your free lessons are up. If Tangram earned a spot in your week,
> here's the best deal we offer:
>
> **Founding Member — $5.99/month, locked for life.** First 500 teachers only. The price
> never goes up, even as we add more.
>
> [Claim your founding spot →](https://app.gettangram.com)
>
> Whatever you decide, thank you for planning with us. Your students aren't generic — and
> now your lessons don't have to be either.
>
> — The Tangram Team

**Final sequence order:** Welcome (0) → Blank page (+2) → Build it once (+3) → The
difference (+4) → Wraps up soon (+5) → Last day (+7). Then **send yourself a test.**

---

## JOB 2 — Send the Founding Member broadcast to your list (~5 min)

This one goes to the teachers already on your list. **You click send.**

**In Kit:** Broadcasts → New Broadcast.
- **Audience:** your whole list, EXCLUDING anyone tagged `customer` (if you have that tag).
  If you don't have a customer tag yet, send to all — acceptable for a founding push.
- **Subject:** First 500 teachers only: lock $5.99/mo forever
- **Body:**
> Hi {{ subscriber.first_name | default: "there" }},
>
> We're opening 500 Founding Member spots — and only 500. Here's what you lock in:
>
> - **$5.99/mo, forever.** The price never increases, no matter how much we add.
> - 25 lessons a month
> - Early access to every new feature
> - A direct feedback line to the founders
>
> This is for the teachers who get what we're building: not another AI generator, but a
> planning partner built on a real method. If that's you, grab a spot before they're gone.
>
> [Claim your founding spot →](https://app.gettangram.com)
>
> — The Tangram team

> ⚠️ **Keep it honest:** only add a specific "X spots left" number if it's real. If you
> can't pull the live count, leave it at "first 500 only" with no countdown.

### Optional reminder (send +48h, only to non-openers of the above)
**Subject:** Re: your founding spot (going fast)
**Body:**
> Quick reminder — Founding Member spots are limited to the first 500, and once they're
> gone, the locked-forever price goes with them.
>
> [Lock $5.99/mo forever →](https://app.gettangram.com)
>
> — The Tangram team

---

## After you send
Tell me the broadcast's open/click numbers in a day or two and I'll tell you what to
adjust. Once the app tags `trial-started` on signup (see `kit-integration-spec.md`), the
whole welcome+conversion flow runs automatically for every new teacher.
