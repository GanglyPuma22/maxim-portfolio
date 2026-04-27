import {
  archiveGroups,
  capabilityBands,
  currentRoleProject,
  featuredProjects,
  flagshipDeck,
  homeProjects,
  projectMap,
  projects,
  siteMeta,
} from './data/projects.js';

const app = document.querySelector('#app');
const BASE_PATH = '/maxim-portfolio';

const withBasePath = (path = '/') => {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalized === '/' ? '/' : normalized}`;
};

const stripBasePath = (pathname) => {
  if (pathname === BASE_PATH) return '/';
  if (pathname.startsWith(`${BASE_PATH}/`)) return pathname.slice(BASE_PATH.length) || '/';
  return pathname;
};

const routeHref = (path = '/', hash = '') => `${withBasePath(path)}${hash}`;
const assetUrl = (url = '') => (/^(https?:|data:|blob:)/.test(url) ? url : withBasePath(url));

const homeSlideshowState = {
  index: 0,
  timer: null,
};

const slideshowIntervals = new Set();

const rememberInterval = (intervalId) => {
  slideshowIntervals.add(intervalId);
  return intervalId;
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const routeFromLocation = () => {
  const strippedPath = stripBasePath(window.location.pathname);
  const segments = strippedPath.split('/').filter(Boolean);

  if (segments[0] === 'projects' && segments[1]) {
    return { type: 'project', slug: segments[1] };
  }

  return { type: 'home' };
};

const clearHomeSlideshow = () => {
  slideshowIntervals.forEach((intervalId) => window.clearInterval(intervalId));
  slideshowIntervals.clear();
  homeSlideshowState.timer = null;
};

const scrollToHashIfNeeded = () => {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target) {
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
};

const isWideMedia = (media) => Boolean(media && (media.wide || media.kind === 'embed' || media.kind === 'paired'));

const renderMedia = (projectOrMedia, variant = 'wide', options = {}) => {
  const media = projectOrMedia?.media ? projectOrMedia.media : projectOrMedia;
  const title = projectOrMedia?.title || 'Project media';

  if (!media || media.kind === 'placeholder') {
    return `
      <div class="media-placeholder ${variant === 'detail' ? 'media-placeholder-detail' : ''} ${variant === 'cover' ? 'media-placeholder-cover' : ''}">
        <span class="media-placeholder-kicker">${escapeHtml(projectOrMedia?.visibility || 'Media not packaged')}</span>
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(media?.caption || 'Visuals can be added in a later pass.')}</p>
      </div>
    `;
  }

  const loading = options.loading || media.loading || (variant === 'cover' || variant === 'detail' ? 'eager' : 'lazy');
  const fetchPriority = options.fetchPriority || media.fetchPriority || (loading === 'eager' ? 'high' : 'low');
  const decoding = options.decoding || media.decoding || 'async';

  if (media.kind === 'paired') {
    return `
      <div class="paired-media paired-media-${variant}">
        ${media.items
          .map((item, index) => renderMedia(item, variant, { loading: index === 0 ? loading : 'lazy', fetchPriority: index === 0 ? fetchPriority : 'low' }))
          .join('')}
      </div>
    `;
  }

  if (media.kind === 'video') {
    const preload = options.preload || media.preload || 'none';
    return `
      <figure class="project-media project-media-${variant} project-media-video">
        <video src="${escapeHtml(assetUrl(media.src))}" controls preload="${escapeHtml(preload)}" playsinline${media.poster ? ` poster="${escapeHtml(assetUrl(media.poster))}"` : ''}></video>
        ${variant === 'cover' ? '' : `<figcaption>${escapeHtml(media.caption || '')}</figcaption>`}
      </figure>
    `;
  }

  if (media.kind === 'embed') {
    return `
      <figure class="project-media project-media-${variant} project-media-embed">
        <iframe
          src="${escapeHtml(assetUrl(media.src))}"
          title="${escapeHtml(media.alt || title)}"
          loading="${escapeHtml(loading)}"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        ${variant === 'cover' ? '' : `<figcaption>${escapeHtml(media.caption || '')}</figcaption>`}
      </figure>
    `;
  }

  const expandable = variant !== 'cover' && variant !== 'tile' && variant !== 'thumb';
  const dataAttrs = expandable
    ? ` data-expandable="true" data-full-src="${escapeHtml(assetUrl(media.src))}" data-caption="${escapeHtml(media.caption || media.alt || '')}" data-alt="${escapeHtml(media.alt || title)}"`
    : '';

  return `
    <figure class="project-media project-media-${variant}">
      <img src="${escapeHtml(assetUrl(media.src))}" alt="${escapeHtml(media.alt || title)}" loading="${escapeHtml(loading)}" decoding="${escapeHtml(decoding)}" fetchpriority="${escapeHtml(fetchPriority)}"${dataAttrs} />
      ${variant === 'cover' ? '' : `<figcaption>${escapeHtml(media.caption || '')}</figcaption>`}
    </figure>
  `;
};

const renderMediaGallery = (items = []) => {
  if (!items.length) return '';

  return `
    <section class="media-gallery section-block section-block-soft">
      <div class="section-heading section-heading-tight">
        <p class="section-kicker">Selected media</p>
        <h2>Selected visuals.</h2>
      </div>
      <div class="media-gallery-grid">
        ${items
          .map((item) => {
            if (item.kind === 'sequence') {
              return `
                <div class="gallery-item gallery-item-sequence gallery-item-wide">
                  <div class="gallery-sequence-track">
                    ${item.steps
                      .map(
                        (step, index) => `
                          <div class="gallery-sequence-step">
                            <img
                              src="${escapeHtml(step.src)}"
                              alt="${escapeHtml(step.alt || 'Sequence image')}"
                              loading="lazy"
                              decoding="async"
                              fetchpriority="low"
                              data-expandable="true"
                              data-full-src="${escapeHtml(step.src)}"
                              data-alt="${escapeHtml(step.alt || 'Sequence image')}"
                              data-caption="${escapeHtml(step.caption || '')}"
                            />
                            <p>${escapeHtml(step.caption || '')}</p>
                          </div>
                          ${index < item.steps.length - 1 ? '<span class="gallery-sequence-arrow" aria-hidden="true">→</span>' : ''}
                        `,
                      )
                      .join('')}
                  </div>
                </div>
              `;
            }
            if (item.kind === 'video') {
              return `
                <figure class="gallery-item gallery-item-video${item.wide ? ' gallery-item-wide' : ''}">
                  <video src="${escapeHtml(assetUrl(item.src))}" controls preload="none" playsinline></video>
                  <figcaption>${escapeHtml(item.caption || '')}</figcaption>
                </figure>
              `;
            }
            if (item.kind === 'embed') {
              return `
                <figure class="gallery-item gallery-item-video gallery-item-embed${item.wide ? ' gallery-item-wide' : ''}">
                  <iframe
                    src="${escapeHtml(assetUrl(item.src))}"
                    title="${escapeHtml(item.alt || 'Embedded media')}"
                    loading="lazy"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <figcaption>${escapeHtml(item.caption || '')}</figcaption>
                </figure>
              `;
            }
            return `
              <figure class="gallery-item${item.wide ? ' gallery-item-wide' : ''}">
                <img src="${escapeHtml(assetUrl(item.src))}" alt="${escapeHtml(item.alt || 'Gallery image')}" loading="lazy" decoding="async" fetchpriority="low"
                  data-expandable="true"
                  data-full-src="${escapeHtml(assetUrl(item.src))}"
                  data-alt="${escapeHtml(item.alt || 'Gallery image')}"
                  data-caption="${escapeHtml(item.caption || '')}" />
                <figcaption>${escapeHtml(item.caption || '')}</figcaption>
              </figure>
            `;
          })
          .join('')}
      </div>
    </section>
  `;
};

const renderLinks = (links = []) => {
  if (!links.length) return '';

  return `
    <ul class="link-list">
      ${links
        .map(
          (link) => `
            <li>
              <a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">
                ${escapeHtml(link.label)}
              </a>
            </li>
          `,
        )
        .join('')}
    </ul>
  `;
};

const renderBullets = (items = []) => {
  if (!items.length) return '';
  return `
    <ul class="bullet-list">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
    </ul>
  `;
};

const renderTags = (tags = []) => {
  if (!tags.length) return '';

  return `
    <div class="tag-row">
      ${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
    </div>
  `;
};

const renderDisplayTitle = (project, tagName = 'h1') => {
  const lines = project.titleLines?.length ? project.titleLines : [project.title];
  return `<${tagName}>${lines.map((line) => escapeHtml(line)).join('<br />')}</${tagName}>`;
};

const renderProjectHeroSupport = (project) => {
  const parts = [];

  if (project.challenge) {
    parts.push(`<p class="project-challenge">${escapeHtml(project.challenge)}</p>`);
  }

  if (project.heroFacts?.length) {
    parts.push(`
      <div class="hero-fact-row">
        ${project.heroFacts.map((fact) => `<span class="hero-fact-pill">${escapeHtml(fact)}</span>`).join('')}
      </div>
    `);
  }

  if (!parts.length) return '';

  return `<div class="project-hero-support">${parts.join('')}</div>`;
};

const renderInlineSlideshow = (items = [], options = {}) => {
  if (!items.length) return '';

  const rootClassName = options.className || 'inline-slideshow';
  const intervalMs = options.intervalMs || 4600;

  return `
    <div class="${escapeHtml(rootClassName)}" data-inline-slideshow data-inline-interval="${intervalMs}">
      <div class="inline-slideshow-stage">
        <div class="inline-slideshow-slides">
          ${items
            .map(
              (item, index) => `
                <div class="inline-slideshow-slide${index === 0 ? ' is-active' : ''}" data-inline-slide ${index === 0 ? '' : 'hidden'}>
                  ${renderMedia(item, 'detail', { loading: index === 0 ? 'eager' : 'lazy', fetchPriority: index === 0 ? 'high' : 'low' })}
                </div>
              `,
            )
            .join('')}
        </div>
      </div>
      ${
        items.length > 1
          ? `
              <div class="inline-slideshow-nav" aria-label="Slideshow navigation">
                <button type="button" class="inline-slideshow-arrow inline-slideshow-arrow-prev" data-inline-nav="prev" aria-label="Previous slide">←</button>
                <div class="inline-slideshow-dots">
                  ${items
                    .map(
                      (_, index) => `
                        <button
                          class="inline-slideshow-dot ${index === 0 ? 'is-active' : ''}"
                          type="button"
                          data-inline-to="${index}"
                          aria-label="Show slide ${index + 1}"
                          aria-pressed="${index === 0 ? 'true' : 'false'}"
                        ></button>
                      `,
                    )
                    .join('')}
                </div>
                <button type="button" class="inline-slideshow-arrow inline-slideshow-arrow-next" data-inline-nav="next" aria-label="Next slide">→</button>
              </div>
            `
          : ''
      }
    </div>
  `;
};

const renderDetailSections = (sections = []) => {
  if (!sections.length) return '';

  return sections
    .map(
      (section) => `
        <section class="detail-panel detail-panel-article">
          <div>
            <p class="panel-kicker">${escapeHtml(section.title)}</p>
            <p>${escapeHtml(section.body)}</p>
          </div>
          ${section.bullets?.length ? renderBullets(section.bullets) : ''}
        </section>
      `,
    )
    .join('');
};

const renderFlagshipSlide = (project, index) => `
  <article class="flagship-slide" data-slide-index="${index}" ${index === 0 ? '' : 'hidden'}>
    <a class="flagship-slide-link" href="${routeHref(`/projects/${project.slug}`)}" data-router>
      <div class="flagship-slide-media-wrap">
        ${renderMedia(project, 'cover', { loading: index === 0 ? 'eager' : 'lazy', fetchPriority: index === 0 ? 'high' : 'low' })}
      </div>
      <div class="flagship-slide-overlay">
        <div class="flagship-slide-topline">
          <span class="flagship-slide-domain">${escapeHtml(project.domain)}</span>
          <span class="flagship-slide-availability">${escapeHtml(project.visibility)}</span>
        </div>
        <div class="flagship-slide-bottom">
          <div class="flagship-slide-meta">
            <h2>${escapeHtml(project.title)}</h2>
            <p class="flagship-slide-statement">${escapeHtml(project.heroStatement || project.summary)}</p>
          </div>
          <div class="flagship-slide-side">
            <div class="flagship-slide-facts">
              ${(project.heroFacts || []).map((fact) => `<span>${escapeHtml(fact)}</span>`).join('')}
            </div>
            <span class="flagship-cta">Open project →</span>
          </div>
        </div>
      </div>
    </a>
  </article>
`;

const renderFlagshipNav = () => `
  <div class="flagship-nav">
    ${flagshipDeck
      .map(
        (project, index) => `
          <button class="flagship-nav-item ${index === 0 ? 'is-active' : ''}" type="button" data-slide-to="${index}" aria-label="Show ${escapeHtml(project.title)}" aria-pressed="${index === 0 ? 'true' : 'false'}">
            <span class="flagship-nav-index">0${index + 1}</span>
            <span class="flagship-nav-copy">
              <strong>${escapeHtml(project.title)}</strong>
            </span>
          </button>
        `,
      )
      .join('')}
  </div>
`;

const renderFlagshipCard = (project) => `
  <article class="flagship-card">
    <a class="flagship-card-media" href="${routeHref(`/projects/${project.slug}`)}" data-router>
      ${renderMedia(project, 'tile')}
    </a>
    <div class="flagship-card-body">
      <p class="section-kicker">${escapeHtml(project.cardDomain || project.domain)}</p>
      <h3><a href="${routeHref(`/projects/${project.slug}`)}" data-router>${escapeHtml(project.title)}</a></h3>
      <p>${escapeHtml(project.summary)}</p>
      <div class="flagship-card-footer">
        <span>${escapeHtml(project.visibility)}</span>
        <a class="inline-link" href="${routeHref(`/projects/${project.slug}`)}" data-router>Open project →</a>
      </div>
    </div>
  </article>
`;

const renderCurrentRoleSection = (project) => {
  if (!project) return '';

  const homeSectionNote = project.homeSectionNote !== undefined ? project.homeSectionNote : project.homeBlurb;
  const homeGallery = project.homeGallery?.length ? project.homeGallery : [project.media].filter(Boolean);
  const homeSummary = project.homeSummaryHtml
    ? `<p class="project-summary">${project.homeSummaryHtml}</p>`
    : `<p class="project-summary">${escapeHtml(project.summary)}</p>`;

  return `
    <section class="current-role-band section-block section-block-soft" id="current-role">
      <div class="current-role-copy">
        <p class="section-kicker section-kicker-home">Current role</p>
        <h2>${escapeHtml(project.title)}</h2>
        ${homeSummary}
        ${homeSectionNote ? `<p class="current-role-note">${escapeHtml(homeSectionNote)}</p>` : ''}
        <div class="hero-actions">
          <a class="button-primary" href="${routeHref(`/projects/${project.slug}`)}" data-router>Open current role →</a>
          <a class="button-secondary" href="${routeHref('/', '#featured')}">See selected projects</a>
        </div>
      </div>
      <div class="current-role-media">
        ${renderInlineSlideshow(homeGallery, { className: 'inline-slideshow inline-slideshow-compact', intervalMs: 5000 })}
      </div>
    </section>
  `;
};

const renderArchiveGroup = (group) => {
  const groupProjects = group.slugs.map((slug) => projectMap.get(slug)).filter(Boolean);

  return `
    <section class="archive-group">
      <div class="archive-group-heading">
        <h3>${escapeHtml(group.title)}</h3>
      </div>
      <div class="archive-group-list">
        ${groupProjects
          .map(
            (project) => `
              <article class="archive-item">
                <a class="archive-item-media" href="${routeHref(`/projects/${project.slug}`)}" data-router>
                  ${renderMedia(project, 'thumb')}
                </a>
                <div class="archive-item-copy">
                  <p class="archive-kicker">${escapeHtml(project.domain)}</p>
                  <h4>
                    <a href="${routeHref(`/projects/${project.slug}`)}" data-router>${escapeHtml(project.title)}</a>
                  </h4>
                  <p>${escapeHtml(project.summary)}</p>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
};

const renderProjectIndex = () => `
  <section class="project-index section-block section-block-soft deferred-home-section" id="project-index">
    <div class="section-heading section-heading-tight">
      <h2>All Projects</h2>
    </div>
    <div class="project-index-grid">
      ${homeProjects
        .map(
          (project) => `
            <a class="project-index-item" href="${routeHref(`/projects/${project.slug}`)}" data-router>
              <span>${escapeHtml(project.title)}</span>
              <small>${escapeHtml(project.domain)}</small>
            </a>
          `,
        )
        .join('')}
    </div>
  </section>
`;

const setupHomeSlideshow = () => {
  clearHomeSlideshow();

  const slides = [...document.querySelectorAll('.flagship-slide')];
  const navItems = [...document.querySelectorAll('[data-slide-to]')];
  const previousButton = document.querySelector('[data-slide-nav="prev"]');
  const nextButton = document.querySelector('[data-slide-nav="next"]');

  if (!slides.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let currentIndex = Math.min(homeSlideshowState.index, slides.length - 1);

  const applyIndex = (nextIndex) => {
    currentIndex = (nextIndex + slides.length) % slides.length;
    homeSlideshowState.index = currentIndex;

    slides.forEach((slide, index) => {
      slide.hidden = index !== currentIndex;
      slide.classList.toggle('is-active', index === currentIndex);
    });

    navItems.forEach((item, index) => {
      const active = index === currentIndex;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  };

  const startTimer = () => {
    if (homeSlideshowState.timer) {
      window.clearInterval(homeSlideshowState.timer);
      homeSlideshowState.timer = null;
    }
    if (prefersReducedMotion || slides.length < 2) return;
    homeSlideshowState.timer = window.setInterval(() => {
      applyIndex(currentIndex + 1);
    }, 5200);
  };

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      const nextIndex = Number(item.dataset.slideTo || 0);
      applyIndex(nextIndex);
      startTimer();
    });
  });

  previousButton?.addEventListener('click', () => {
    applyIndex(currentIndex - 1);
    startTimer();
  });

  nextButton?.addEventListener('click', () => {
    applyIndex(currentIndex + 1);
    startTimer();
  });

  applyIndex(currentIndex);
  startTimer();
};

const setupInlineSlideshows = () => {
  const slideshowRoots = [...document.querySelectorAll('[data-inline-slideshow]')];
  if (!slideshowRoots.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  slideshowRoots.forEach((root) => {
    const slides = [...root.querySelectorAll('[data-inline-slide]')];
    const dots = [...root.querySelectorAll('[data-inline-to]')];
    const previousButton = root.querySelector('[data-inline-nav="prev"]');
    const nextButton = root.querySelector('[data-inline-nav="next"]');
    if (!slides.length) return;

    let currentIndex = 0;

    const applyIndex = (nextIndex) => {
      currentIndex = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, index) => {
        const active = index === currentIndex;
        slide.hidden = !active;
        slide.classList.toggle('is-active', active);
      });
      dots.forEach((dot, index) => {
        const active = index === currentIndex;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    };

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        applyIndex(Number(dot.dataset.inlineTo || 0));
      });
    });

    previousButton?.addEventListener('click', () => {
      applyIndex(currentIndex - 1);
    });

    nextButton?.addEventListener('click', () => {
      applyIndex(currentIndex + 1);
    });

    applyIndex(0);

    const intervalMs = Number(root.dataset.inlineInterval || 4600);
    if (!prefersReducedMotion && slides.length > 1) {
      rememberInterval(
        window.setInterval(() => {
          applyIndex(currentIndex + 1);
        }, intervalMs),
      );
    }
  });
};

const renderHome = () => {
  document.title = 'Maxim Mounier — Portfolio';

  const heroTitle = siteMeta.titleLines?.length ? siteMeta.titleLines.map((line) => escapeHtml(line)).join('<br />') : escapeHtml(siteMeta.title);

  app.innerHTML = `
    <section class="hero-stage section-block">
      <div class="hero-stage-grid">
        <div class="hero-stage-copy">
          <p class="section-kicker section-kicker-home">${escapeHtml(siteMeta.name)} · ${escapeHtml(siteMeta.role)}</p>
          <h1>${heroTitle}</h1>
          ${
            siteMeta.introParagraphs?.length
              ? `<div class="hero-stage-intro-group">${siteMeta.introParagraphs.map((paragraph) => `<p class="hero-stage-intro">${paragraph}</p>`).join('')}</div>`
              : `<p class="hero-stage-intro">${escapeHtml(siteMeta.intro)}</p>`
          }
          <div class="hero-actions">
            <a class="button-primary" href="${routeHref('/', '#current-role')}">Current role</a>
            <a class="button-secondary" href="${routeHref('/', '#featured')}">Selected projects</a>
          </div>
        </div>
        <div class="hero-stage-portrait">
          <img class="hero-stage-portrait-img"
               src="${escapeHtml(assetUrl(siteMeta.profile.src))}"
               alt="${escapeHtml(siteMeta.profile.alt)}"
               loading="eager"
               decoding="async"
               fetchpriority="high"
               data-expandable="true"
               data-full-src="${escapeHtml(assetUrl(siteMeta.profile.src))}"
               data-alt="${escapeHtml(siteMeta.profile.alt)}"
               data-caption="${escapeHtml(siteMeta.profile.caption || '')}" />
        </div>
      </div>
    </section>

    ${renderCurrentRoleSection(currentRoleProject)}

    <section class="flagship-stage section-block" id="featured" aria-label="Selected project slideshow">
      <div class="flagship-stage-head">
        <div>
          <p class="section-kicker section-kicker-home">Selected projects</p>
        </div>
        <div class="flagship-stage-controls">
          <button type="button" class="slide-nav-button" data-slide-nav="prev" aria-label="Previous project">←</button>
          <button type="button" class="slide-nav-button" data-slide-nav="next" aria-label="Next project">→</button>
        </div>
      </div>
      <div class="flagship-slides">
        ${flagshipDeck.map((project, index) => renderFlagshipSlide(project, index)).join('')}
      </div>
      ${renderFlagshipNav()}
    </section>

    <section class="section-block section-block-soft deferred-home-section" id="featured-grid">
      <div class="section-heading">
        <p class="section-kicker section-kicker-home">Project lineup</p>
        <h2>Independent projects that explain how I build outside the day job.</h2>
      </div>
      <div class="flagship-grid">
        ${featuredProjects.map((project) => renderFlagshipCard(project)).join('')}
      </div>
    </section>

    <section class="section-block section-block-soft deferred-home-section" id="archive">
      <div class="section-heading section-heading-tight archive-section-heading">
        <div class="archive-section-intro">
          <img class="archive-section-brand" src="${assetUrl('/media/penn-logo.png')}" alt="University of Pennsylvania logo" loading="lazy" decoding="async" />
          <div class="archive-section-heading-copy">
            <p class="section-kicker section-kicker-home">Undergraduate work</p>
            <h2>Undergraduate-era projects across aerospace, robotics, software, and fabrication.</h2>
          </div>
        </div>
      </div>
      <div class="archive-groups">
        ${archiveGroups.map((group) => renderArchiveGroup(group)).join('')}
      </div>
    </section>

    ${renderProjectIndex()}
  `;

  setupHomeSlideshow();
  setupInlineSlideshows();
  scrollToHashIfNeeded();
};

const renderProjectDetail = (project) => {
  document.title = `${project.title} — Maxim Mounier`;

  const detailSummary = project.detailSummary || project.summary;
  const currentIndex = projects.findIndex((entry) => entry.slug === project.slug);
  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const detailHeroMedia = project.detailHeroMedia || project.media;
  const wideHero = isWideMedia(detailHeroMedia);
  const heroLead = `
    <div class="project-hero-copy">
      <p class="section-kicker">${escapeHtml(project.domain)}</p>
      ${renderDisplayTitle(project, 'h1')}
      <p class="project-summary">${escapeHtml(detailSummary)}</p>
    </div>
  `;
  const heroSupport = renderProjectHeroSupport(project);

  app.innerHTML = `
    <article class="project-page project-page-shell">
      <a class="back-link" href="${routeHref('/')}" data-router>← Back to portfolio</a>

      <section class="project-hero section-block ${wideHero ? 'project-hero-stacked' : ''}">
        ${wideHero ? `${heroLead}
        <div class="project-hero-media project-hero-media-wide">
          ${renderMedia(detailHeroMedia, 'detail', { loading: 'eager', fetchPriority: 'high', preload: 'metadata' })}
        </div>
        ${heroSupport}` : `${heroLead.replace('</div>', `${heroSupport}</div>`)}
        <div class="project-hero-media">
          ${renderMedia(detailHeroMedia, 'detail', { loading: 'eager', fetchPriority: 'high', preload: 'metadata' })}
        </div>`}
      </section>

      ${renderMediaGallery(project.gallery || [])}

      <section class="project-layout section-block section-block-soft">
        <div class="project-main-column">
          <div class="detail-panel detail-panel-article">
            <div>
              <p class="panel-kicker">What I owned</p>
              <p>${escapeHtml(project.role)}</p>
            </div>
          </div>

          ${renderDetailSections(project.detailSections)}

          ${
            project.approach?.length
              ? `
                <div class="detail-panel detail-panel-article">
                  <div>
                    <p class="panel-kicker">Key decisions</p>
                  </div>
                  ${renderBullets(project.approach)}
                </div>
              `
              : ''
          }

          ${
            project.outcomes?.length
              ? `
                <div class="detail-panel detail-panel-article">
                  <div>
                    <p class="panel-kicker">Results</p>
                  </div>
                  ${renderBullets(project.outcomes)}
                </div>
              `
              : ''
          }
        </div>

        <aside class="project-side-column">
          <div class="project-facts">
            <div>
              <span class="note-label">Status</span>
              <p>${escapeHtml(project.status)}</p>
            </div>
            ${
              project.showVisibility === false
                ? ''
                : `<div>
                    <span class="note-label">What’s public</span>
                    <p>${escapeHtml(project.visibility)}</p>
                  </div>`
            }
            <div>
              <span class="note-label">Domain</span>
              <p>${escapeHtml(project.domain)}</p>
            </div>
          </div>

          ${
            project.links?.length
              ? `
                <div class="detail-panel detail-panel-quiet">
                  <p class="panel-kicker">Project links</p>
                  ${renderLinks(project.links)}
                </div>
              `
              : ''
          }

          ${
            project.stack?.length
              ? `
                <div class="detail-panel detail-panel-quiet">
                  <p class="panel-kicker">Tools and skills</p>
                  ${renderTags(project.stack)}
                </div>
              `
              : ''
          }

        </aside>
      </section>

      <section class="project-nav section-block section-block-soft">
        ${
          previous
            ? `<a class="project-nav-link" href="${routeHref(`/projects/${previous.slug}`)}" data-router>
                <span class="note-label">Previous project</span>
                <strong>${escapeHtml(previous.title)}</strong>
              </a>`
            : '<span class="project-nav-spacer"></span>'
        }
        ${
          next
            ? `<a class="project-nav-link project-nav-link-next" href="${routeHref(`/projects/${next.slug}`)}" data-router>
                <span class="note-label">Next project</span>
                <strong>${escapeHtml(next.title)}</strong>
              </a>`
            : '<span class="project-nav-spacer"></span>'
        }
      </section>
    </article>
  `;
};

const renderNotFound = () => {
  document.title = 'Not found — Maxim Mounier';
  app.innerHTML = `
    <section class="section-block not-found">
      <p class="section-kicker">Not found</p>
      <h1>That project does not exist in this portfolio.</h1>
      <a class="button-primary" href="${routeHref('/')}" data-router>Return home</a>
    </section>
  `;
};

const renderRoute = () => {
  clearHomeSlideshow();
  closeLightbox();
  const route = routeFromLocation();

  if (route.type === 'project') {
    const project = projectMap.get(route.slug);
    if (!project) {
      renderNotFound();
      return;
    }

    renderProjectDetail(project);
    window.scrollTo({ top: 0 });
    return;
  }

  renderHome();
};

const sameOrigin = (href) => {
  const url = new URL(href, window.location.origin);
  return url.origin === window.location.origin;
};

document.addEventListener('click', (event) => {
  const expandable = event.target.closest('[data-expandable="true"]');
  if (expandable) {
    event.preventDefault();
    openLightbox(expandable);
    return;
  }

  const anchor = event.target.closest('a');
  if (!anchor) return;
  if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;
  if (!sameOrigin(anchor.href)) return;

  const url = new URL(anchor.href);
  const routePath = stripBasePath(url.pathname);
  const isInternalProject = routePath.startsWith('/projects/');
  const isHomeNavigation = routePath === '/';

  if (!isInternalProject && !isHomeNavigation) return;

  event.preventDefault();
  window.history.pushState({}, '', `${url.pathname}${url.hash}`);
  renderRoute();
});

const lightboxState = {
  items: [],
  index: 0,
};

const lightbox = (() => {
  const root = document.createElement('div');
  root.className = 'lightbox';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-hidden', 'true');
  root.innerHTML = `
    <button type="button" class="lightbox-nav lightbox-nav-prev" aria-label="Previous image">←</button>
    <button type="button" class="lightbox-nav lightbox-nav-next" aria-label="Next image">→</button>
    <button type="button" class="lightbox-close" aria-label="Close image viewer">×</button>
    <figure class="lightbox-figure">
      <img class="lightbox-image" alt="" />
      <figcaption class="lightbox-caption"></figcaption>
    </figure>
  `;
  document.body.appendChild(root);
  return {
    root,
    image: root.querySelector('.lightbox-image'),
    caption: root.querySelector('.lightbox-caption'),
    closeButton: root.querySelector('.lightbox-close'),
    previousButton: root.querySelector('.lightbox-nav-prev'),
    nextButton: root.querySelector('.lightbox-nav-next'),
  };
})();

const resolveLightboxItems = (sourceElement) => {
  const groupRoot =
    sourceElement.closest('[data-inline-slideshow]') ||
    sourceElement.closest('.media-gallery') ||
    sourceElement.closest('.project-hero') ||
    sourceElement.closest('.hero-stage');

  const items = groupRoot ? [...groupRoot.querySelectorAll('[data-expandable="true"]')] : [sourceElement];
  return items.length ? items : [sourceElement];
};

const setLightboxItem = (nextIndex) => {
  if (!lightboxState.items.length) return;

  lightboxState.index = (nextIndex + lightboxState.items.length) % lightboxState.items.length;
  const sourceElement = lightboxState.items[lightboxState.index];
  const src = sourceElement.dataset.fullSrc || sourceElement.getAttribute('src');
  if (!src) return;

  lightbox.image.src = src;
  lightbox.image.alt = sourceElement.dataset.alt || sourceElement.getAttribute('alt') || '';
  const caption = sourceElement.dataset.caption || '';
  lightbox.caption.textContent = caption;
  lightbox.caption.hidden = !caption;

  const showNav = lightboxState.items.length > 1;
  lightbox.previousButton.hidden = !showNav;
  lightbox.nextButton.hidden = !showNav;
};

const openLightbox = (sourceElement) => {
  lightboxState.items = resolveLightboxItems(sourceElement);
  lightboxState.index = Math.max(lightboxState.items.indexOf(sourceElement), 0);
  setLightboxItem(lightboxState.index);
  lightbox.root.classList.add('is-open');
  lightbox.root.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
};

const closeLightbox = () => {
  if (!lightbox.root.classList.contains('is-open')) return;
  lightbox.root.classList.remove('is-open');
  lightbox.root.setAttribute('aria-hidden', 'true');
  lightbox.image.src = '';
  lightboxState.items = [];
  lightboxState.index = 0;
  document.body.classList.remove('lightbox-open');
};

const navigateLightbox = (direction) => {
  if (lightboxState.items.length < 2) return;
  setLightboxItem(lightboxState.index + direction);
};

lightbox.previousButton.addEventListener('click', (event) => {
  event.stopPropagation();
  navigateLightbox(-1);
});

lightbox.nextButton.addEventListener('click', (event) => {
  event.stopPropagation();
  navigateLightbox(1);
});

lightbox.root.addEventListener('click', (event) => {
  if (event.target === lightbox.root || event.target === lightbox.closeButton) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (!lightbox.root.classList.contains('is-open')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') navigateLightbox(-1);
  if (event.key === 'ArrowRight') navigateLightbox(1);
});

window.addEventListener('popstate', renderRoute);
window.addEventListener('beforeunload', clearHomeSlideshow);

renderRoute();
