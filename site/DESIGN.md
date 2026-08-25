# Design System: NinjaHire vs Juicebox War-Game Briefing

This site has its own design system. It does **not** inherit the parent
`DESIGN.md` (Arrive Finance). Nothing from that system applies here.

## Intent

A defense briefing, not a SaaS landing page. The reader is a founder who is
being told his company cannot win a fight. The design has to earn the right to
say that: dense, sourced, calm, and unmistakably analytical. Every visual
decision serves legibility of evidence.

Rules that follow from that:

- No gradient hero. No stock illustration. No emoji. No decorative motion.
- No rounded-pill "friendly" UI. Corners are 2px to 6px. Edges are hairlines.
- Charts and diagrams are hand-authored SVG or CSS. No chart library, no runtime
  Mermaid, no CDN.
- Prose is the fallback. If a claim can be a table, a rail, a meter, or a
  diagram, it becomes one.

## Color

Dark base. Two company accents and nothing else at that saturation, so the
reader learns the code by section 3 and never has to re-read a legend.

### Base

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B0E13` | Page background |
| `--bg-raised` | `#121722` | Cards, table body |
| `--bg-sunk` | `#080A0E` | Diagram wells, code-ish blocks |
| `--line` | `#232C3A` | Hairline borders |
| `--line-soft` | `#1A212C` | Interior rules, table row dividers |
| `--ink` | `#E8ECF2` | Primary text |
| `--ink-dim` | `#A6B0C0` | Secondary text |
| `--ink-faint` | `#6F7B8C` | Captions, source refs, axis labels |

`--ink` on `--bg` is about 14.9:1. `--ink-dim` on `--bg` is about 7.7:1.
`--ink-faint` on `--bg` is about 4.6:1 and is used only at 13px+ regular
weight or larger, which clears AA for normal text.

### Company accents (exactly two)

| Token | Value | Company |
|---|---|---|
| `--jb` | `#F2A03C` | Juicebox AI (amber) |
| `--jb-soft` | `rgba(242,160,60,0.13)` | Juicebox fills |
| `--nh` | `#3FC7C0` | NinjaHire (teal) |
| `--nh-soft` | `rgba(63,199,192,0.13)` | NinjaHire fills |

Both clear 8:1 on `--bg`. They are far apart in hue and in the two most common
color-vision deficiencies, and they are never the only signal: every colored
chip also carries a text label.

Use them **only** for company identity. Never for "good/bad", never for
emphasis, never for links.

### Confidence scale (deliberately muted, low chroma)

These must never compete with the company accents. They sit at roughly half the
chroma so a page dense with tags still reads as a page about two companies.

| Token | Value | Tag | Meaning |
|---|---|---|---|
| `--c-v` | `#7FA98D` | `[V]` | Verified against a named source |
| `--c-i` | `#8894AE` | `[I]` | Inferred from behavior or category norms |
| `--c-a` | `#A2977E` | `[A]` | Assumed, no evidence either way |
| `--c-d` | `#C08585` | `[Disputed]` | Sources conflict, or the founder contradicts it |
| `--c-flag` | `#D96A6A` | `[!]` | Load-bearing claim this report refuses to repeat as fact |

`--c-flag` is reserved for exactly two claims, everywhere they appear:
NinjaHire's "2.4B+ profiles" (unverifiable) and "500+ recruiters daily"
(contradicted by the founder). Those are rendered struck through or in a warning
frame, never as plain body text.

### Outcome colors (tables and meters only)

| Token | Value | Use |
|---|---|---|
| `--tie` | `#8A93A3` | Tie rows and chips |
| `--meter` | `#4A5768` | Durability meter track |

## Type

| Role | Face | Fallback stack | Notes |
|---|---|---|---|
| Headings | Newsreader | `Georgia, 'Times New Roman', serif` | Editorial serif with real character. Optical sizing on, weights 400/500/600. |
| Body / UI | Inter | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif` | 400/500/600. |
| Numbers | JetBrains Mono | `'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace` | 400/500/700. **Every** figure, price, percentage, count, and confidence tag uses it, with `font-variant-numeric: tabular-nums`. |

Loaded from Google Fonts via a single `<link>`. That is the one permitted
external request. Every face has a real fallback stack, so the page is fully
legible with fonts blocked.

### Scale

Fluid, clamped, based on a 1.25 ratio at the small end opening to 1.333 at
display sizes.

| Token | Value |
|---|---|
| `--t-xs` | `0.75rem` (12px) |
| `--t-sm` | `0.8125rem` (13px) |
| `--t-base` | `0.9375rem` (15px) |
| `--t-md` | `1.0625rem` (17px) |
| `--t-lg` | `clamp(1.25rem, 1.0rem + 1.0vw, 1.5rem)` |
| `--t-xl` | `clamp(1.6rem, 1.2rem + 1.7vw, 2.1rem)` |
| `--t-2xl` | `clamp(2.1rem, 1.4rem + 3.0vw, 3.2rem)` |
| `--t-3xl` | `clamp(2.6rem, 1.5rem + 4.6vw, 4.4rem)` |

Body line-height 1.62. Heading line-height 1.12. Measure capped at 68ch for
prose blocks.

## Space

A 4px base scale as custom properties: `--s1` 4, `--s2` 8, `--s3` 12, `--s4` 16,
`--s5` 24, `--s6` 32, `--s7` 48, `--s8` 64, `--s9` 96, `--s10` 128.

Section vertical rhythm: `--s9` top and bottom at desktop, `--s7` at mobile.
Content max width 1200px. Prose max width 68ch.

## Components

**Confidence chip.** Inline, mono, 11px, uppercase, 1px border in its own color
at 45% alpha, background at 10% alpha, text at full color. Carries a `title` and
an `aria-label` so the meaning is available on hover, on focus, and to a screen
reader. Chips appear inside tables, inside SVG diagram nodes, inside cards.
Never stripped from a claim.

**Flagged claim.** `--c-flag` 1px left border, faint red wash, a `[!]` chip, and
a one-line reason directly beneath. The claim text itself is never presented as
settled fact.

**Company chip.** Small mono label with the company's accent as border and text.
Used in the comparison table to say who wins each row. Always includes the word,
never color alone.

**Stat tile.** Mono figure at `--t-2xl`, label in `--t-xs` uppercase tracked,
source ref in `--ink-faint`. Border-left 2px in the owning company's accent when
the figure belongs to one company.

**Durability meter.** Five 12px segments. Filled segments use `--ink-dim`,
empty use `--meter`. A mono `n/5` label always accompanies it, so the meter is
never the only channel.

**Step rail.** Numbered nodes in a wrapping flex row with chevron connectors.
Pre-divergence nodes are neutral; post-divergence nodes carry the owning
company's accent.

## Motion

Transitions capped at 140ms, on color and border only. No transforms on scroll,
no parallax, no reveal animations, no counters.

`@media (prefers-reduced-motion: reduce)` disables all transitions and sets
`scroll-behavior: auto`.

**Global `scroll-behavior: smooth` is forbidden.** It breaks deep links landing
on load and makes fragment navigation unreliable. Section offsets under the
sticky nav are handled with `scroll-margin-top` instead.

## Responsive

- Desktop (>= 1024px): full layout, real tables, side-by-side SWOT grids.
- Tablet (768-1023px): single-column diagrams, tables intact.
- Mobile (< 768px): every `<table>` collapses to stacked cards using
  `data-label` attributes on cells. The `<body>` never scrolls horizontally.
  Wide SVG diagrams live inside their own `overflow-x: auto` well with a visible
  scroll hint. That inner scroll is intentional and is the only horizontal
  scroll on the page.

## Accessibility

- Skip-to-content link, visible on focus.
- Every SVG has `role="img"`, a `<title>`, and a `<desc>`.
- Focus ring: 2px `--ink` outline with a 2px offset, never removed.
- Filter buttons are real `<button>`s with `aria-pressed`; the result count is
  announced through an `aria-live` region.
- Nav marks the current section with `aria-current="true"`.
- All body text meets AA. Accent text is used at 13px+ and clears AA on `--bg`.

## Voice

No em dashes anywhere in site copy. Recast the sentence. No filler, no
hype, no invented numbers. If the source report does not say it, the site does
not say it.
