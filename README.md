# NinjaHire vs Juicebox AI: competitive war-game briefing

**Live site: https://vivekally.github.io/ninjahire-vs-juicebox/**

A single-page research microsite built from a competitive war-game analysis of
[NinjaHire](https://ninjahire.co) against [Juicebox AI](https://juicebox.ai).
Current as of **August 25, 2026**.

## What this is

A nine-section briefing that answers one question: should NinjaHire fight
Juicebox head-to-head in AI candidate sourcing, or flank into a segment Juicebox
does not serve?

The verdict is on the first screen. The rest is the evidence for it: a 20-row
head-to-head comparison, an ICP overlap map, hypothetical architecture diagrams
for both products, the four workflows and where they diverge, SWOT and TOWS,
a moat assessment, a seven-move playbook, an unsoftened honest assessment, and
the full source and confidence ledger.

Sections:

1. Verdict
2. Head to Head
3. Who Buys
4. Under the Hood
5. The Workflows
6. SWOT and TOWS
7. Battle Plan
8. Straight Talk
9. Method

## Who it is for

Praneeth Patlola, founder of NinjaHire, and anyone advising a bootstrapped,
pre-revenue company deciding whether to enter a market a well-funded incumbent
already owns.

## How to read the confidence tags

Every claim on the site carries a small colored chip. The chips are the point of
the report, not decoration: an outside analysis built from public sources is only
useful if it is honest about which parts are fact and which are reasoning.
**V** means verified and traceable to a named source in section 9. **I** means
inferred from observable product behavior, job postings, or category norms, and
is not directly sourced. **A** means assumed, with no evidence either way, stated
so the assumption is visible rather than hidden. **D** means disputed, where
sources conflict with each other or the founder contradicts a public claim.
**!** is reserved for two load-bearing claims the briefing refuses to repeat as
fact: NinjaHire's "2.4B+ profiles" figure, which is unverifiable, and the site's
"500+ recruiters daily" traction claim, which the founder contradicts. Hover any
chip for its full meaning. One important caveat runs throughout: for NinjaHire
product capabilities, *verified* means verified as a marketing claim, not
verified as working, because no third-party review of the product exists.

## Repository layout

```
site/           the deployed static site
  index.html    the whole briefing, one page
  styles.css    design tokens and layout
  app.js        scroll-spy nav and comparison-table filters
  DESIGN.md     this site's design system
research/
  source-report.md   the underlying analysis, unedited
```

## Tech

Vanilla HTML, CSS, and about 120 lines of JavaScript. No framework, no build
step, no npm install, no analytics, no trackers. Every diagram is hand-authored
inline SVG. The only external request is a Google Fonts stylesheet, and every
typeface has a real fallback stack. The page works opened directly from disk as
a `file://` URL.

Published with GitHub Pages from `/site` on `main`.

## Disclaimer

This is an outside analysis built from public sources. It is not an audit, not
investment advice, and not a substitute for customer discovery.
