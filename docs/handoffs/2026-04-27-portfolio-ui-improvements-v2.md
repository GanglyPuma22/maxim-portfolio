# Portfolio UI Improvements V2 Handoff

Date: 2026-04-27
Branch: `ui-improvements-v2`
Base branch: `main`

## Git Cleanup

- Rebuilt `main` as a clean single-commit branch from the local initial commit.
- Removed `tmp_improvements_folder/` from the tracked tree so the 127 MB `Voice_Bridge_Demo_V1.mp4` is no longer reachable from `main`.
- Changed `.gitignore` to ignore only `tmp_improvements_folder/`, keeping the real portfolio data and web media tracked so the site remains runnable from a clone.
- Pushed clean `main` to `origin` and created `ui-improvements-v2` from it.

## Requested UI Changes

- Updated all Future Flight Central captions in `data/projects.js` to:
  `Future Flight Central - air traffic control tower simulator at NASA Ames.`
- Reworked the intro hero desktop layout to use two balanced columns.
- Widened the intro text measure from 60ch to 68ch so the copy stacks less tall.
- Enlarged and centered the profile image in the right half with a desktop max size of `min(46vw, 430px)`.
- Tightened NASA inline slideshow controls into a centered arrow-dot-arrow cluster.
- Moved fullscreen lightbox arrows inward so they align near the image area instead of the browser edges.
- Moved the Penn logo to the top-right of the undergraduate intro and enlarged it to a desktop width of `clamp(190px, 18vw, 250px)`.

## Design Review Changes

- Fixed a mobile selected-project slide issue where `Tank Control System` and the fact pills could clip or overflow.
- Increased mobile flagship slide height with a `3 / 5` aspect ratio.
- Reduced mobile flagship heading size and allowed long fact pills to wrap within the card.

## Added Verification

- Added `scripts/ui-regression.test.mjs`.
- Added `npm test` to run the Node built-in test runner.
- The test checks the FFC caption, hero layout hooks, compact slideshow controls, lightbox arrow positioning, Penn logo sizing/positioning, and mobile flagship slide overflow rules.

## Verification Run

- `npm test` passes.
- Local server smoke-tested at `http://127.0.0.1:4175`.
- Playwright geometry checks were run for desktop and mobile.
- Penn logo was checked after scrolling into view because it uses lazy loading.

## Notes For Next Agent

- The blank image regions in full-page Playwright screenshots are caused by native lazy-loaded images below the first viewport, not missing assets. Scroll elements into view before judging those images.
- No deployment setup was added.
- The working branch has not been pushed yet unless a later session does so.
