# Content Source of Truth — School of Research Rebuild

This document tracks all factual claims and verifiable content for the `/consortium` page rebuild.

## Load-Bearing Brand Facts (DO NOT CHANGE without stakeholder approval)

### Research Systems
- **Morbius**: Autonomous scientific discovery across chemistry and materials science
- **Prometheus**: Agentic research system for deep literature analysis and insight generation (also described as "biomedical/drug discovery" in some contexts)
- **Parallax**: Quantitative research and portfolio optimization under uncertainty (also "market intelligence")
- **Aethel**: General reasoning system (mentioned in nav, not part of residency program content)

### Contact & Links
- Email: `support@orbitiqlabs.space`
- Domain: `orbitiqlabs.space`
- Social: X, LinkedIn, YouTube, Instagram (links in footer)

### Brand Lines
- "Built by scientists. For scientists."
- "Intelligence in Orbit Around Discovery"

### Navigation Structure (existing, must preserve)
- Aethel
- Residency (may become "School" — flagged for confirmation)
- Systems
- Data
- Research
- About

## Current Residency Page Claims (NEEDS VERIFICATION)

These exist on the current `/consortium` page but require stakeholder confirmation before reuse:

- **Program Duration**: "21 weeks" [[VERIFY — new design may use different framing]]
- **Timeline**: "18–24 months" stat [[VERIFY — source unknown]]
- **7-step numbered program** [[VERIFY — new design uses 6-station loop instead]]
- **Mentor names/photos**: None currently shown (uses "assembling review network" language)
- **Outcomes stats**: [[VERIFY — no specific numbers on current page]]

## New Page Content (from brief, pre-approved)

### Chapter Copy
All chapter copy in the SOP (§4.1–4.9) is pre-approved and should be used verbatim, including:
- 9 chapter headlines and body copy
- 6-station research loop descriptions
- Weekly rhythm (Mon–Fri structure)
- 7 dossier artifacts
- 5 research tracks
- Readiness checklist

### Fictional/Example Content (must keep disclaimers)
- Research log feed (Chapter 5): MUST be labeled "A typical research log might look like this"
- Track example questions/directions (Chapter 7): Must read as "illustrative," not guaranteed assignments

## Assets

### Image Host
- Path: `/public/paintings/` (verified)
- Format: JPG/PNG, WebP for optimization
- Existing hero: `greek-hero-bg.jpg` (currently used in consortium hero)

### Fonts (existing, reuse)
- Display: `Fraunces` (loaded via Google Fonts)
- Sans: `Inter`
- Mono: `JetBrains Mono`

## Technical Facts

### Framework
- **TanStack Start** (React-based, file-based routing)
- Route: `/src/routes/consortium.tsx`
- Component: `/src/components/consortium/ConsortiumPage.tsx`

### Styling
- **Tailwind CSS v4** with custom utilities
- CSS Variables in `src/styles.css`
- Existing color tokens: `--background`, `--foreground`, `--surface`, `--accent`, `--morbius`, `--prometheus`, `--parallax`
- Animation library: Currently none (uses CSS animations) — will add **GSAP + ScrollTrigger** and **Framer Motion** per SOP

### Shared Components (must preserve)
- `<SiteNav />` - `/src/components/site/SiteNav.tsx`
- `<SiteFooter />` - `/src/components/site/SiteFooter.tsx`
- `<ResidencyApplicationForm />` - `/src/components/consortium/ResidencyApplicationForm.tsx` (may adapt for new page)

## Change Log

| Date | Change | Approver |
|------|--------|----------|
| 2026-08-11 | Document created for School of Research rebuild | System |
| TBD | Nav label "Residency" → "School" confirmation needed | [[PENDING]] |
| TBD | Program duration/structure verification needed | [[PENDING]] |

## Questions for Stakeholder

1. **Nav label**: Keep "Residency" or change to "School of Research"?
2. **Program duration**: Is "21 weeks" still accurate, or is this being replaced?
3. **Mentor network**: Are there confirmed mentor names/photos to include, or stay with "assembling" language?
4. **Application flow**: Does dedicated `/consortium/apply` route exist, or use modal with existing form?
5. **Track CTAs**: Where should "Explore this frontier" button link to (detail modal, application, or just scroll to Chapter 9)?
