# Project text rewrite v1

Date: 2026-04-27
Branch: `project-text-rewrite-v1`

## Scope
- Rewrite **project detail page** copy only.
- Leave homepage / main-page project card copy alone.
- Make the voice sound more like Maxim: more specific, less portfolio-builder / AI-ish.
- Ground changes in existing repo docs, READMEs, media, and prior review notes.

## What changed
### Rendering / structure
- Added `detailSummary` so project pages can have a stronger first paragraph **without changing homepage summaries**.
- Renamed two detail-page panel headers for cleaner framing:
  - `How it was shaped` → `Key decisions`
  - `Why it matters here` → `Results`

### Projects rewritten
- NASA Ames - Simulation Engineering
- Tank Control System
- Voice Bridge
- OpenClaw Skill Viewer
- Transcription Server
- Cuarenta
- AHTO
- Penn Jet Propulsion Club
- Small SADA
- Graduate Robotics — Block Stacking
- Semi-Autonomous Car
- MatlabMario

### Rewrite pattern
Across those project pages, the pass mainly tightened:
- opening detail summaries
- challenge / role framing
- key decisions / approach bullets
- results / outcomes bullets
- one or more detail sections where the old copy still sounded too abstract or meta

## Notable wins
- **Voice Bridge** now reads much more like a real product/architecture story and less like agent-tooling marketing copy.
- **Tank Control System** feels more lived-in and grounded in actual system boundaries.
- **NASA** is clearer about the public-safe slice of the work.
- **Cuarenta** now sounds like a project Maxim actually built for friends, not a generic frontend case study.
- **Archive projects** (Penn Jet, SADA, robotics, mechatronics car, MatlabMario) now feel more human and memory-based instead of résumé-expanded.

## Verification
- `npm test`
- Browser spot-check: homepage still shows existing main-page summary copy
- Browser spot-check: `/projects/voice-bridge` shows the new detail-page-specific summary and rewritten sections

## Remaining factual nits worth Maxim checking
These are not blockers for review, but they are the places where a final factual polish pass would help most.

- **NASA Ames - Simulation Engineering**
  - Is the Boeing autonomous taxi wording exactly how Maxim wants it framed publicly?
  - Is the Rust up-sampler mention precise enough for public wording?

- **Tank Control System**
  - Keep the explicit Yasha mention, or make it slightly more neutral?

- **Voice Bridge**
  - Is naming OpenClaw directly on the project page the desired public framing?
  - Is “private build in progress” the best status label, or should it read closer to unreleased / internal / active private development?

- **OpenClaw Skill Viewer**
  - If there is a favorite public release / landing page link, the page could later be tightened around that proof.

- **Transcription Server**
  - The current wording is strong, but if Maxim has a preferred short public name for the project, that would help consistency.

- **Cuarenta**
  - The trust-model caveat is good; could still be tuned depending on how cautious Maxim wants the public posture to be.

- **AHTO**
  - If Maxim wants the acronym expanded on-page, that can be done in a later pass.

- **Penn Jet / Small SADA / Robotics / Semi-Autonomous Car / MatlabMario**
  - These are now much more readable, but the next quality bump would come from any extra exact dates, course names, subsystem names, or team-role specifics Maxim wants to preserve.

## Recommended next step
- Open PR into `main` for Maxim review.
- After review comments, do one last factual-tightening pass on any projects where Maxim wants sharper wording or safer public boundaries.
