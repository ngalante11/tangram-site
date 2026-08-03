# Tangram — Lifecycle Email Sequences

Full copy, ready to load into Klaviyo/HubSpot once connected. Every subject line has an
A/B alt. Voice per `01-messaging-voice.md`. From name: **Tan at Tangram** (or a real
founder name if you prefer a human sender — recommended for the trust plays).

**Legal footer (every email):** physical address + one-click unsubscribe. Required for
CAN-SPAM. Do not send without it.

---

## SEQUENCE A — Welcome / Activation
**Trigger:** free trial started. **Goal:** get them to build lesson #1 fast (activation
= the #1 predictor of conversion).

### A1 — sent immediately
**Subject:** You're in. Let's build your first lesson.
**Subject (alt):** Welcome to Tangram — your first lesson is 5 minutes away
**Preview:** No credit card, 3 free lessons, one strong method.
**Body:**
> Hi {{ first_name | default: "there" }},
>
> Welcome to Tangram. You've got 3 free lessons to feel what a real planning method
> feels like — no credit card, no catch.
>
> Here's the fastest way to get the "oh, THIS is different" moment: build one lesson,
> then tell Tan who's actually in your class — your ELLs, your IEP accommodations, your
> reading levels. Watch it adapt every section for you.
>
> **[Build your first lesson →]**
>
> Start wherever you are — a topic, an objective, a standard, your curriculum. Six ways
> to begin, seven guided pieces, and coaching built into each one.
>
> — Tan
>
> P.S. It works with Danielson, Marzano, and UbD — so what you build walks into an
> observation ready.

### A2 — sent +1 day (only if no lesson built)
**Subject:** Stuck on where to start? Start here.
**Subject (alt):** Your first Tangram lesson (the 2-minute version)
**Body:**
> Hi {{ first_name | default: "there" }},
>
> Quick nudge — the hardest part is the blank page, and Tangram is built to skip it.
> Don't overthink your first lesson. Pick a standard you're teaching this week and let
> Tan do the building. You can always tweak.
>
> **[Build one now — it takes about 5 minutes →]**
>
> The magic is in step 3: add your students. That's when a lesson becomes *your class's*
> lesson.
>
> — Tan

### A3 — sent +2 days after first lesson built
**Subject:** You built one. Now watch it adapt.
**Body:**
> Nice — you built your first lesson. Here's the part most planning tools can't do:
> tell Tangram about your *other* classes and get a version tailored to each, at no
> extra cost per copy.
>
> One build. Every class you teach that day.
>
> **[Adapt your lesson for another class →]**
>
> — Tan

---

## SEQUENCE B — Trial Conversion
**Trigger:** trial active, runs alongside A. **Goal:** convert to paid before the 3 free
lessons run out. Suppress anyone who's already upgraded.

### B1 — day 2 of trial (the methodology story)
**Subject:** Why Tangram isn't "just another AI tool"
**Subject (alt):** What your AI lesson planner was actually trained on
**Body:**
> Hi {{ first_name | default: "there" }},
>
> Most AI lesson tools are trained on a patchwork of whatever's on the internet. That's
> why the output feels generic — and why you end up rewriting it for every class.
>
> Tangram is different on purpose. Tan is powered by an original methodology our founders
> developed over 50+ years, refined across hundreds of districts and thousands of teachers
> coached. We didn't curate other people's best practices. We built something new.
>
> That's why your lessons come out observation-ready — and why the adaptations for your
> ELLs and IEP students actually hold up.
>
> **[Build another lesson and feel the difference →]**
>
> — Tan

### B2 — when 1 free lesson remains (or day 4)
**Subject:** You've got one free lesson left
**Subject (alt):** Before your free lessons run out
**Body:**
> Hi {{ first_name | default: "there" }},
>
> You're one lesson away from the end of your free trial — and hopefully one lesson into
> getting your Sunday nights back.
>
> Keep the whole thing going for less than a coffee a month:
>
> - **Starter — $4.99/mo** (10 lessons/mo, all 7 pieces, all frameworks, tailored versions)
> - **Standard — $7.99/mo** (25 lessons/mo, priority support) · *most popular*
> - **Pro — $9.99/mo** (unlimited)
>
> **[Choose your plan →]**  ·  Cancel anytime.
>
> — Tan

### B3 — trial end / last call
**Subject:** Last call — plus a founding spot if you want it
**Body:**
> Hi {{ first_name | default: "there" }},
>
> Your free lessons are up. If Tangram earned a place in your week, here's the best deal
> we offer:
>
> **Founding Member — $5.99/mo, locked forever.** First 500 teachers only. 25 lessons/mo,
> early feature access, and a direct line to us. The price never goes up, even as we add
> more.
>
> **[Claim your founding spot →]**
>
> Whatever you decide — thank you for planning with us. Your students aren't generic, and
> now your lessons don't have to be either.
>
> — Tan

---

## SEQUENCE C — Founding Member Drive (broadcast, not triggered)
**Audience:** trial users who didn't convert + any non-paying list segment. **Goal:**
urgency via the first-500 scarcity. **Send:** week 3, single email + a 48-hr reminder.

### C1
**Subject:** First 500 teachers only: lock $5.99/mo forever
**Subject (alt):** The founding price disappears at 500 members
**Body:**
> Hi {{ first_name | default: "there" }},
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
> **[Claim your founding spot →]**
>
> — The Tangram team
>
> _{{ Only reference a specific "spots left" number if it's pulled from real data. }}_

### C2 — reminder +48h (only if spots remain)
**Subject:** Re: your founding spot (going fast)
**Body:**
> Quick reminder — Founding Member spots are limited to the first 500, and once they're
> gone, the locked-forever price goes with them.
>
> **[Lock $5.99/mo forever →]**
>
> — The Tangram team

---

## A/B & optimization backlog
- Test human founder sender vs. "Tan" persona on trust emails (B1, C1).
- Test subject-line curiosity (alt) vs. direct (primary) — keep winners.
- Add a plain-text version of every email (deliverability).
- Once analytics connected: measure trial-start→open→click→upgrade, cut the weakest email.
