import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [app, projects, styles, indexHtml, server] = await Promise.all([
  readFile(new URL('../app.js', import.meta.url), 'utf8'),
  readFile(new URL('../data/projects.js', import.meta.url), 'utf8'),
  readFile(new URL('../styles.css', import.meta.url), 'utf8'),
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
  readFile(new URL('../server.mjs', import.meta.url), 'utf8'),
]);

test('uses the updated Future Flight Central caption everywhere', () => {
  const updatedCaption = 'Future Flight Central - air traffic control tower simulator at NASA Ames.';
  const oldCaption = 'Future Flight Central tower simulator at NASA Ames. Public NASA media.';

  assert.equal(projects.includes(oldCaption), false);
  assert.equal(Array.from(projects.matchAll(new RegExp(updatedCaption, 'g'))).length, 3);
});

test('hero intro uses balanced desktop columns with a larger centered portrait', () => {
  assert.match(styles, /\.hero-stage-grid\s*{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s+minmax\(0,\s*1fr\)/s);
  assert.match(styles, /\.hero-stage-intro-group\s*{[^}]*max-width:\s*68ch/s);
  assert.match(styles, /\.hero-stage-portrait\s*{[^}]*justify-content:\s*center/s);
  assert.match(styles, /\.hero-stage-portrait-img\s*{[^}]*max-width:\s*min\(46vw,\s*430px\)/s);
});

test('NASA slideshow controls sit in a compact centered cluster', () => {
  assert.match(styles, /\.inline-slideshow-nav\s*{[^}]*grid-template-columns:\s*auto auto auto/s);
  assert.match(styles, /\.inline-slideshow-nav\s*{[^}]*justify-content:\s*center/s);
});

test('fullscreen lightbox arrows sit near the image area', () => {
  assert.match(styles, /\.lightbox-figure\s*{[^}]*position:\s*relative/s);
  assert.match(styles, /\.lightbox-close,\s*\.lightbox-nav\s*{[^}]*z-index:\s*3/s);
  assert.match(styles, /\.lightbox-nav-prev\s*{[^}]*left:\s*max\(18px,\s*calc\(\(100vw - min\(1280px,\s*92vw\)\) \/ 2 \+ 18px\)\)/s);
  assert.match(styles, /\.lightbox-nav-next\s*{[^}]*right:\s*max\(18px,\s*calc\(\(100vw - min\(1280px,\s*92vw\)\) \/ 2 \+ 18px\)\)/s);
});

test('Penn archive brand is a larger top-right mark', () => {
  assert.match(styles, /\.archive-section-intro\s*{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\) auto/s);
  assert.match(styles, /\.archive-section-brand\s*{[^}]*width:\s*clamp\(190px,\s*18vw,\s*250px\)/s);
  assert.match(styles, /\.archive-section-brand\s*{[^}]*justify-self:\s*end/s);
});

test('mobile flagship slide has enough vertical room for title text', () => {
  assert.equal(styles.includes('@media (max-width: 680px)'), true);
  assert.equal(styles.includes('.flagship-slides {\n    aspect-ratio: 3 / 5;'), true);
  assert.equal(styles.includes('.flagship-slide h2 {\n    font-size: clamp(2.1rem, 12vw, 3.2rem);'), true);
  assert.equal(styles.includes('.flagship-slide-facts span {\n    max-width: 100%;\n    white-space: normal;'), true);
});


test('GitHub Pages build uses the repo base path for root assets', () => {
  assert.match(indexHtml, /href="\/maxim-portfolio\/styles\.css"/);
  assert.match(indexHtml, /src="\/maxim-portfolio\/app\.js"/);
  assert.match(indexHtml, /href="\/maxim-portfolio\/"/);
});


test('local dev server strips the repo base path before resolving files', () => {
  assert.match(server, /const BASE_PATH = '\/maxim-portfolio';/);
  assert.match(server, /normalizedPath === BASE_PATH/);
  assert.match(server, /normalizedPath\.startsWith\(`\$\{BASE_PATH\}\/`\)/);
});

test('sequence gallery media uses the GitHub Pages base path', () => {
  assert.match(app, /src="\$\{escapeHtml\(assetUrl\(step\.src\)\)\}"/);
  assert.match(app, /data-full-src="\$\{escapeHtml\(assetUrl\(step\.src\)\)\}"/);
});
