# Project text rewrite v1 handoff

- Repo: `/home/mmounier/.openclaw/workspace/apps/maxim-portfolio`
- Branch: `project-text-rewrite-v1`
- PR: https://github.com/GanglyPuma22/maxim-portfolio/pull/3
- Base: `main`
- Commit: `bfe3a33` (`Rewrite portfolio project detail copy`)

## What changed

This pass rewrote project-detail copy so the pages read more like Maxim describing the work himself and less like a portfolio trying to justify itself.

Two implementation choices kept the scope tight:

1. Added `detailSummary` fields in `data/projects.js` so project-detail top summaries could change without rewriting homepage card text.
2. Updated `renderProjectDetail` in `app.js` to prefer `project.detailSummary || project.summary`, and renamed the detail-page meta labels from `How it was shaped` / `Why it matters here` to `Key decisions` / `Results`.

## Projects materially rewritten

Priority / strongest pass:
- NASA Ames - Simulation Engineering
- Voice Bridge
- AHTO
- Tank Control System
- Small SADA
- Penn Jet Propulsion Club

Additional meaningful rewrites:
- Cuarenta
- Transcription Server
- OpenClaw Skill Viewer
- Graduate Robotics
- Semi-Autonomous Car
- MatlabMario
- Heat Engine
- Carousel
- VAWT
- Water Tower

## Major themes changed

- Removed portfolio-meta framing like "why this belongs here" and similar self-justification language from detail pages.
- Cut or reduced OpenClaw-ish/system phrasing on project pages in favor of concrete engineering tradeoffs, constraints, and outcomes.
- Shifted voice toward first-person ownership where the sourcing supported it.
- Kept uncertain claims soft and factual instead of trying to make every project sound bigger than it was.
- Preserved homepage/main-page copy on purpose; detail-page copy was the target for this pass.

## Project-by-project notes / outstanding uncertainties

### NASA Ames - Simulation Engineering
- Confidence is high on the public-facing scope.
- Still intentionally conservative because the role sits close to active research work.
- Homepage summary still contains older wording because homepage copy was left untouched by design.

### Voice Bridge
- Strong source grounding from README + architecture handoff.
- Product wording is clearer now, but release state and naming could still shift as the private build evolves.
- Homepage blurb still contains the older "truth boundaries" phrasing because homepage copy was not part of this pass.

### AHTO
- The public/private boundary is clearer now.
- Still some unavoidable abstraction because the repo is a public slice of a broader internal testing approach.
- Homepage summary still uses older packaging language because the main-page copy was intentionally not rewritten.

### Tank Control System
- Strong factual grounding from repo docs and V2 architecture spec.
- The page is more direct now, but some future-facing V2 wording may still want another pass once implementation settles further.

### Small SADA
- Grounding is good from the existing portfolio/source material.
- Still somewhat constrained by how much detailed public documentation exists compared with the flagship software projects.

### Penn Jet Propulsion Club
- Rewritten around controls fixtures, sensing, manufacturing, and the working engine outcome.
- Exact phrasing around team safety justification was softened because the source support is more contextual than fully documented.

### Cuarenta
- The project story is much more human now.
- Public-release blocker language is still necessarily about trust/server authority because that is the real open issue.
- Homepage blurb still contains the older "range piece" phrasing because homepage copy was intentionally left alone.

### Transcription Server
- Grounded in the public README and surrounding portfolio context.
- Could benefit from another pass later if the repo grows more implementation detail or a stronger public demo.

### OpenClaw Skill Viewer
- Clearer now, but still limited by how much public-facing narrative the source repo currently carries.

### Graduate Robotics
- Better grounded in the actual sim-to-hardware arc and block-stacking deliverable.
- Still concise because the available source material is thinner than a full project report.

### Semi-Autonomous Car
- The analog front-end and demo constraints come through better now.
- Still somewhat summary-level because the public evidence packet is mostly video/report level.

### MatlabMario
- Intentionally kept light and personal.
- No major factual uncertainty; this one mainly benefited from sounding less synthetic.

### Heat Engine / Carousel / VAWT / Water Tower
- Archive pages were tightened and made less generic.
- These remain brief because the goal was cleanup, not a full historical reconstruction.

## Verification notes

- `node --check app.js`
- `node --check data/projects.js`
- `npm test` → pass (8/8)
- Started the local dev server and verified project routes returned successfully.
- Browser render spot checks confirmed the updated detail-page summaries and the renamed `Key decisions` / `Results` sections were showing on the rendered project pages.

## Scope notes

- Local `main` was not used as the working base; the branch was created from the latest `origin/main`.
- Work was completed on `project-text-rewrite-v1` and pushed separately.
- `main` was not pushed to.
- Remaining banned/meta phrases that still exist are confined to homepage/main-page fields that were intentionally left untouched to respect scope.
