# Portfolio UI Improvements V2 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Apply the documented portfolio UI fixes, then make a restrained design-review pass and document the changes for handoff.

**Architecture:** The site is a static, data-driven Node-served portfolio. Requested copy changes live in `data/projects.js`, layout and visual changes live in `styles.css`, and regression checks use a small Node test script that reads those files.

**Tech Stack:** Plain HTML, CSS, JavaScript modules, Node built-in test runner.

---

### Task 1: Regression Checks

**Files:**
- Create: `scripts/ui-regression.test.mjs`
- Modify: `package.json`

**Steps:**
1. Add a Node test that asserts the requested FFC caption appears, the old caption is gone, and CSS exposes hooks for balanced hero columns, compact slideshow nav, nearer lightbox controls, and a larger archive brand.
2. Add `npm test` as `node --test scripts/ui-regression.test.mjs`.
3. Run `npm test` and confirm it fails against the current UI.

### Task 2: Requested UI Fixes

**Files:**
- Modify: `data/projects.js`
- Modify: `styles.css`

**Steps:**
1. Replace all three FFC captions with `Future Flight Central - air traffic control tower simulator at NASA Ames.`
2. Make the hero stage a balanced two-column layout on desktop, widen intro text, center and enlarge the portrait in the right half, and keep the mobile portrait readable.
3. Change inline slideshow controls from a full-width three-column spread to a compact centered cluster with arrows adjacent to dots.
4. Constrain lightbox media and place fullscreen arrows beside the image area instead of the browser edges.
5. Move the Penn logo to the top-right of the archive intro and enlarge it to read like a brand mark near the headline.
6. Run `npm test`.

### Task 3: Design Review Pass and Handoff

**Files:**
- Modify: `styles.css`
- Create: `docs/handoffs/2026-04-27-portfolio-ui-improvements-v2.md`

**Steps:**
1. Review the rendered page for nearby design issues caused or exposed by the requested fixes.
2. Apply restrained improvements only where they strengthen hierarchy, spacing, or responsive behavior.
3. Document git cleanup, branch name, requested changes, review-pass changes, verification commands, and remaining risks in the handoff doc.
4. Run `npm test` and a local server smoke check.
