export const siteMeta = {
  name: 'Maxim Mounier',
  role: 'Simulation Engineer · NASA Ames',
  title: 'Simulation and control systems, plus agentic AI tooling.',
  titleLines: ['Simulation and control systems,', 'plus agentic AI tooling.'],
  intro:
    'Simulation engineer at NASA Ames with work spanning airspace simulation, embedded systems, and voice-first agentic tooling.',
  introParagraphs: [
    `Hi, I'm Maxim Mounier, a simulation engineer at NASA Ames working on software for research simulations that support the national airspace system, especially around novel air traffic management concepts, aerospace vehicles, aerospace systems and operations, human factors, and aviation safety.`,
    `I studied mechanical engineering at the University of Pennsylvania, where I got to stay close to both software and physical systems: embedded work, manufacturing, controls, and the messy interfaces between them.`,
    `Before joining SimLabs full time, I interned in NASA's <a class="inline-rich-link" href="https://www.nas.nasa.gov/areas/technical_areas.html" target="_blank" rel="noreferrer">Advanced Supercomputing Division</a>, working on CFD post-processing for air-taxi and space-helicopter research. I now work in the <a class="inline-rich-link" href="https://www.nasa.gov/ames/aviationsystems/research-capabilities/" target="_blank" rel="noreferrer">Aerospace Simulation Research & Development Branch</a>. Outside work, I spend a lot of time building embedded control systems and voice-first agentic AI tools that make AI feel more usable in practice.`,
  ],
  subIntro:
    'The current NASA role stands on its own at the top. The project list below focuses on independent and public work, with undergraduate projects separated out at the bottom.',
  orientationHeadline:
    'Current role at NASA Ames, then the systems and products built around it.',
  siteGuide:
    'Start with the current role, then the selected projects. The bottom section keeps the undergraduate-era work in view without mixing it into the current story.',
  positioning: [
    'Simulation and flight systems at NASA Ames',
    'Embedded + operator-facing systems',
    'Voice and agent workflow tooling',
    'Aerospace, robotics, and manufacturing roots',
  ],
  quickFacts: [
    'Currently at NASA Ames SimLabs (Vertical Motion Simulator and Future Flight Central)',
    'Comfortable from firmware and sensors up through product UI',
    'Best work lives where real constraints meet a cleaner operator experience',
  ],
  ctaLabel: 'See the featured work',
  ctaHref: '/#featured',
  githubUrl: 'https://github.com/GanglyPuma22',
  profile: {
    src: '/media/legacy/maxim-profile.jpg',
    alt: 'Portrait of Maxim Mounier in a white jacket with water in the background.',
    caption: 'Profile photo.',
  },
};

export const capabilityBands = [
  {
    title: 'Simulation and flight systems',
    body:
      'Day work at NASA Ames means integrating researcher systems into the Vertical Motion Simulator, collecting high-fidelity data during runs, and building tools around the air-traffic tower simulator at Future Flight Central.',
  },
  {
    title: 'Embedded systems with a real operator model',
    body:
      'Hardware here is not firmware in isolation. It is sensing, desired state, schedules, cloud sync, and the interface someone uses when the system drifts or fails.',
  },
  {
    title: 'Agentic tooling for real workflows',
    body:
      'Voice Bridge, Skill Viewer, and the testing surfaces all come from the same instinct: give agents a real boundary, keep secrets server-side, and make the useful complexity legible.',
  },
  {
    title: 'Aerospace and shop-floor roots',
    body:
      'The older hardware work earns its place because it shows controls, mechanisms, machining, and build discipline. It keeps the newer software work grounded.',
  },
];

export const projects = [
  {
    slug: 'nasa-simulation-engineering',
    title: 'NASA Ames - Simulation Engineering',
    titleLines: ['NASA Ames -', 'Simulation Engineering'],
    eyebrow: 'Current role · simulation systems · NASA Ames SimLabs',
    tier: 'current',
    status: 'Active role since October 2023',
    visibility: 'Public role · public deliverables only',
    showVisibility: false,
    domain: 'Simulation / flight systems / data infrastructure',
    summary:
      'Simulation engineer at NASA Ames, working across the Vertical Motion Simulator, Future Flight Central, and related research tooling for simulator integration, high-fidelity data collection, visual systems, and operator-facing utilities.',
    homeSummaryHtml:
      'Simulation engineer at NASA Ames, working across the <a class="inline-rich-link" href="https://www.nasa.gov/ames/vms/" target="_blank" rel="noreferrer">Vertical Motion Simulator</a>, <a class="inline-rich-link" href="https://www.nasa.gov/future-flight-central/" target="_blank" rel="noreferrer">Future Flight Central</a>, and related research tooling for simulator integration, high-fidelity data collection, visual systems, and operator-facing utilities.',
    homeBlurb:
      'Current work at NASA Ames, plus earlier internship research that fed directly into the simulation side of the portfolio.',
    homeSectionNote: '',
    heroStatement:
      'Real-time simulator integration, high-fidelity data, and operator tools that have to work during a research run.',
    heroFacts: ['VMS integration', 'FFC visual systems', 'NLP transcription tooling'],
    challenge:
      'The job sits inside working research facilities: real-time constraints at the VMS, live tower simulation at FFC, mixed Linux and Windows infrastructure, and data that needs to be usable right after a run.',
    role:
      'Integrating researcher systems into the VMS, building and maintaining tooling around FFC, leading AI/NLP transcription work across both facilities, and supporting public-safe software around Boeing surrogate-aircraft testing at Ames.',
    approach: [
      'Treat the simulator as a production system: test matrices in, high-fidelity data out, with traceable runs.',
      'Built a flight-data up-sampler for a new image generation system at FFC so tower visuals stay smooth during simulation work.',
      'Kept the newer NLP and operator tooling grounded in how researchers actually run sessions across both facilities.',
    ],
    outcomes: [
      'Researcher hardware lands inside the VMS without disrupting the operating envelope.',
      'Transcription and speaker recognition moved from an ad-hoc idea into a real internal capability path.',
      'Cross-platform automation reduces the manual setup surface across the internal computer network.',
    ],
    proofPoints: [
      'Published and presented earlier CFD post-processing work at the 50th European Rotorcraft Forum.',
      'Public résumé documents the role; specifics shown here stay at the level of public role description.',
      'Featured here because it best explains the current engineering identity behind the rest of the portfolio.',
    ],
    detailSections: [
      {
        title: 'Current SimLabs work',
        body:
          'The work is operationally heavy. Simulation runs follow test matrices. Data has to be high fidelity and ready to use. Researcher systems have to integrate cleanly with a real-time operating system. Tower visuals at FFC have to stay smooth even as the underlying flight data changes shape.',
        bullets: [
          'Integrate external researcher systems into the VMS pipeline.',
          'Collect and preserve high-fidelity data during research operations.',
          'Build operator-facing tooling around FFC, including live traffic display and an up-sampler for the new image generation system.',
        ],
      },
      {
        title: 'Earlier NASA internship',
        body:
          'Before joining SimLabs full time, I interned in NASA\'s Advanced Supercomputing Division and worked on CFD post-processing for rotor simulations. That internship is where the published paper and European Rotorcraft Forum presentation came from.',
        bullets: [
          'Built Python software to post-process CFD simulation results run on NASA supercomputers.',
          'Compared simulation outputs against experimental data and automated discrepancy plots and test runs.',
          'Published and presented "Comparing Methods to Extract Sectional Angle of Attack From Blade-Resolved Rotor Simulations."',
        ],
      },
      {
        title: 'Boeing surrogate-operations support',
        body:
          'One public slice of the work tied into Boeing\'s autonomous taxi demonstrations at Ames. My part was the monitoring and simulation-side software around the surrogate Cessna Caravan test vehicle and the local-airspace tooling connected to that work.',
        bullets: [
          'Developed software to monitor the Boeing surrogate Cessna Caravan during autonomous taxi testing.',
          'Built supporting local-airspace display and software-emulation utilities around the FFC environment.',
          'Kept the portfolio description aligned with public Boeing and NASA reporting rather than internal detail.',
        ],
      },
    ],
    sourceNotes: ['Maxim-Mounier-CV-2026', 'CV-Maxim-Mounier-2025', 'Metis-Simulation-Engineer-Resume-2024'],
    stack: ['real-time OS', 'flight simulation', 'NLP / speaker recognition', 'Linux + Windows automation', 'high-fidelity data pipelines'],
    privacyNote:
      'Only the public role, public media, and publicly discussed research work are referenced here. Internal system specifics, vendor names, and any sensitive details are deliberately left out.',
    links: [
      { label: 'Future Flight Central', url: 'https://www.nasa.gov/future-flight-central/' },
      { label: 'Vertical Motion Simulator', url: 'https://www.nasa.gov/ames/vms/' },
      { label: 'Aerospace Simulation Research & Development Branch', url: 'https://www.nasa.gov/ames/aviationsystems/research-capabilities/' },
      { label: 'Advanced Supercomputing Division', url: 'https://www.nas.nasa.gov/areas/technical_areas.html' },
      { label: 'Rotor-simulation paper', url: 'https://www.researchgate.net/publication/384056717_Comparing_methods_to_extract_sectional_angle_of_attack_from_blade-resolved_rotor_simulations' },
      { label: 'Boeing autonomous taxi article', url: 'https://www.boeing.com/features/2025/06/boeing-teams-test-auto-airplane-taxiing' },
    ],
    media: {
      kind: 'image',
      src: '/media/nasa-simulation/future-flight-central.jpg',
      alt: 'Future Flight Central tower simulator at NASA Ames with operator stations and panoramic airport visuals.',
      caption: 'Future Flight Central - air traffic control tower simulator at NASA Ames.',
      wide: true,
    },
    detailHeroMedia: {
      kind: 'paired',
      items: [
        {
          kind: 'image',
          src: '/media/nasa-simulation/future-flight-central.jpg',
          alt: 'Future Flight Central tower simulator at NASA Ames with operator stations and panoramic airport visuals.',
          caption: 'Future Flight Central - air traffic control tower simulator at NASA Ames.',
          wide: true,
        },
        {
          kind: 'image',
          src: '/media/nasa-simulation/vertical-motion-simulator-full-view.png',
          alt: 'Full view of the Vertical Motion Simulator inside its ten-story tower at NASA Ames.',
          caption:
            'The Vertical Motion Simulator is the world’s largest motion flight simulator moving within a 10 story tower at NASA Ames.',
        },
      ],
    },
    homeGallery: [
      {
        kind: 'image',
        src: '/media/nasa-simulation/future-flight-central.jpg',
        alt: 'Future Flight Central tower simulator at NASA Ames with operator stations and panoramic airport visuals.',
        caption: 'Future Flight Central - air traffic control tower simulator at NASA Ames.',
      },
      {
        kind: 'image',
        src: '/media/nasa-simulation/vertical-motion-simulator-full-view.png',
        alt: 'Full view of the Vertical Motion Simulator inside its ten-story tower at NASA Ames.',
        caption:
          'The Vertical Motion Simulator is the world’s largest motion flight simulator moving within a 10 story tower at NASA Ames.',
      },
      {
        kind: 'image',
        src: '/media/nasa-simulation/vms-lunar-lander-cockpit.jpg',
        alt: 'Lunar lander cockpit configuration inside the Vertical Motion Simulator at NASA Ames.',
        caption: 'VMS Lunar Lander configuration with Bonnie Andro-Avila "flying" the Lunar Lander simulation from the left standing seat.',
      },
      {
        kind: 'image',
        src: '/media/nasa-simulation/aviation-systems-capabilities.jpg',
        alt: 'NASA Ames aviation systems simulation environment showing a city-scale operational scenario.',
        caption: 'VMS S-Cab UAM out the window views and passenger ride quality simulation',
      },
      {
        kind: 'image',
        src: '/media/nasa-simulation/boeing-caravan-taxi.jpeg',
        alt: 'Boeing surrogate Cessna Caravan aircraft during autonomous taxi testing at NASA Ames.',
        caption: 'The Boeing Caravan test vehicle helps test systems in development for future use on commercial jetliners.',
      },
    ],
    gallery: [
      {
        kind: 'image',
        src: '/media/nasa-simulation/vms-lunar-lander-cockpit.jpg',
        alt: 'Lunar lander cockpit configuration inside the Vertical Motion Simulator at NASA Ames.',
        caption: 'VMS Lunar Lander configuration with Bonnie Andro-Avila "flying" the Lunar Lander simulation from the left standing seat.',
      },
      {
        kind: 'image',
        src: '/media/nasa-simulation/vertical-motion-simulator-full-view.png',
        alt: 'Full view of the Vertical Motion Simulator inside its ten-story tower at NASA Ames.',
        caption:
          'The Vertical Motion Simulator is the world’s largest motion flight simulator moving within a 10 story tower at NASA Ames.',
      },
      {
        kind: 'image',
        src: '/media/nasa-simulation/aviation-systems-capabilities.jpg',
        alt: 'NASA Ames aviation systems simulation environment showing a city-scale operational scenario.',
        caption: 'VMS S-Cab UAM out the window views and passenger ride quality simulation',
        wide: true,
      },
      {
        kind: 'image',
        src: '/media/nasa-simulation/boeing-caravan-taxi.jpeg',
        alt: 'Boeing surrogate Cessna Caravan aircraft during autonomous taxi testing at NASA Ames.',
        caption: 'The Boeing Caravan test vehicle helps test systems in development for future use on commercial jetliners.',
        wide: true,
      },
    ],
  },
  {
    slug: 'tank-control-system',
    title: 'Tank Control System',
    eyebrow: 'Featured · embedded control · private system with public technical write-up',
    tier: 'featured',
    status: 'Active private system',
    visibility: 'Private system / public technical write-up',
    domain: 'Embedded / controls / cloud orchestration',
    summary:
      'A long-running enclosure control stack built around ESP32 boards, a Raspberry Pi bridge, Firebase-backed configuration, and an operator-facing web surface for schedules, devices, sensors, and camera streaming.',
    homeBlurb:
      'It started as a better way to run a lizard tank. It now reads like a real embedded product with cloud state, local authority, and room to grow.',
    heroStatement:
      'Embedded control work that goes past relay toggles into real system boundaries.',
    heroFacts: ['ESP32 + Pi authority split', 'Firebase-configured devices', 'Schedules stay local enough to survive bridge trouble'],
    challenge:
      'The hard part was never just switching lights on and off. It was keeping schedules, sensor reads, desired state, reported state, and remote UI from fighting each other.',
    role:
      'Owned the architecture, firmware patterns, Firebase data model, schedule behavior, and the direction of the operator-facing control surface.',
    approach: [
      'Kept always-on GPIO and schedule evaluation on the ESP32 while the Pi handles cloud bridge duties and media-heavy work.',
      'Used Firebase Realtime Database as the source of truth for which devices and sensors exist so the system can grow from configuration instead of firmware forks.',
      'Separated desired state from reported state so automation, manual overrides, and actual hardware behavior can be debugged without guesswork.',
    ],
    outcomes: [
      'Dynamic device and sensor lifecycle now comes from cloud configuration instead of hardcoded board assumptions.',
      'The v2 architecture makes schedule execution more resilient when the bridge layer is unhealthy.',
      'The project carries both embedded credibility and product-thinking credibility, which is why it belongs near the top of the portfolio.',
    ],
    proofPoints: [
      'Repo README documents the v2 authority split, desired vs reported state, and schedule evaluation flow.',
      'Hardware photos show the camera board, controller stack, and the physical environment the software was built for.',
      'The public write-up is strong enough to explain the system without exposing internal access or private operating details.',
    ],
    detailSections: [
      {
        title: 'What makes it interesting',
        body:
          'Plenty of hobby control projects stop at wiring a board and flipping relays. This one kept going until the system could absorb new devices, preserve operator intent, and survive a less-than-perfect bridge layer.',
        bullets: [
          'Schedules are evaluated locally on the main board instead of depending on round-trips for every action.',
          'Firebase changes are queued and applied safely in the main loop rather than directly inside stream callbacks.',
          'Trigger identity carries through desired and reported state so the UI, logs, and firmware are all talking about the same thing.',
        ],
      },
      {
        title: 'Why it reads like product work',
        body:
          'The value here is not just electronics. It is that the system has an operator model: configuration, schedules, telemetry, and camera streaming all have to fit together cleanly enough to live with.',
        bullets: [
          'Cloud config creates or removes devices and sensors without reflashing every time the hardware changes.',
          'The public write-up deliberately avoids old guest credentials and anything that would weaken the real deployment.',
        ],
      },
    ],
    sourceNotes: ['tank_control_system/README.md', 'tank_control_system/docs/v2-architecture-spec.md'],
    stack: ['ESP32', 'Raspberry Pi', 'Firebase RTDB', 'PlatformIO', 'camera streaming'],
    privacyNote:
      'This page intentionally leaves out the old guest login, private deployment details, and any internal-only implementation notes that do not need to be public.',
    links: [
      { label: 'GitHub', url: 'https://github.com/GanglyPuma22/tank_control_system' },
      { label: 'Demo video', url: 'https://www.youtube.com/watch?v=e1EvU5OcsTQ' },
    ],
    media: {
      kind: 'image',
      src: '/media/legacy/tank-hardware.jpg',
      alt: 'Tank Control System hardware assembly with relays and sensors in a 3D-printed housing.',
      caption: 'Hardware assembly photo from the first tank controller pass.',
    },
    detailHeroMedia: {
      kind: 'embed',
      src: 'https://www.youtube.com/embed/e1EvU5OcsTQ?rel=0',
      alt: 'Tank Control System demo video.',
      caption: 'Public demo video.',
    },
    gallery: [
      {
        kind: 'image',
        src: '/media/tank-block-diagram-v2.png',
        alt: 'Updated Tank Control System block diagram showing the cloud, board, bridge, and video-server split.',
        caption: 'Updated control-system diagram showing the board, Pi bridge, cloud config, and video path.',
        wide: true,
      },
      {
        kind: 'image',
        src: '/media/legacy/tank-camera-board.jpg',
        alt: 'Tank camera board mounted on a perfboard.',
        caption: 'Separate ESP32-CAM board.',
      },
      {
        kind: 'image',
        src: '/media/legacy/yasha-closeup.jpg',
        alt: 'Close-up photo of Yasha the lizard inside the enclosure.',
        caption: 'The system has a real user, even if he is a lizard.',
      },
    ],
  },
  {
    slug: 'voice-bridge',
    title: 'Voice Bridge',
    titleLines: ['Voice Bridge'],
    eyebrow: 'Featured · voice workflow product · private / unreleased',
    tier: 'featured',
    status: 'Private build in progress',
    visibility: 'Private / unreleased',
    domain: 'Voice UX / agent workflows / handoff systems',
    cardDomain: 'Voice UX / agent workflows',
    summary:
      'A browser and mobile-first voice surface for OpenClaw that supports both live and local voice modes, and hands longer work off into tracked Telegram/OpenClaw tasks instead of vague background magic. Live mode uses an ElevenLabs VoiceAgent layer, while local mode runs on fully local models for minimal cost but increased latency.',
    homeBlurb:
      'Voice as a serious interface with truth boundaries, not a party trick.',
    heroStatement:
      'Voice UI with explicit handoff and a backend someone can actually trust.',
    heroFacts: ['Live and local voice modes', 'Tracked task handoff', 'Server-issued tokens, not browser secrets'],
    challenge: '',
    role:
      'Driving the product shape, backend contract, security posture, local-mode architecture, and the boundary between conversation and delegated work.',
    approach: [
      'Built a server-orchestrated voice backend so the browser never holds ElevenLabs secrets and local mode can reuse the same prompt and tool surface.',
      'Added task-backed handoff endpoints and callback helpers so longer requests have a durable record and can report status back into the voice session.',
      'Kept live and local modes close enough to compare while accepting that schema translation, TTS, and STT are different transport layers.',
    ],
    outcomes: [
      'Cleaner split between quick conversational turns and tracked follow-up work.',
      'Local mode v1 exists, including Whisper-backed transcription, browser TTS cleanup, and a more usable tap-to-record flow.',
      'The remaining hard problems are the right ones: confirmation integrity, architecture cleanup, and release discipline.',
    ],
    proofPoints: [
      'README documents the browser/mobile shell, secure token flow, task endpoints, and local-first deployment shape.',
      'Local-mode pass landed shared tools, server-orchestrated local turns, browser TTS cleanup, and tap-to-record controls.',
      'Architecture docs show the system maturing from one-off voice behavior toward explicit task and topic routing.',
    ],
    detailSections: [
      {
        title: 'What is already real',
        body:
          'This is not a landing page pretending to be a product. The repo already has login, server-issued token endpoints, tracked task creation, status callbacks, transcript storage, and a shared backend contract for live and local modes.',
        bullets: [
          'Live mode leans on ElevenLabs for the speech loop.',
          'Local mode uses Ollama plus Whisper and keeps the backend in charge of prompts, tool schemas, and turn orchestration.',
          'Task status can be persisted and read back instead of disappearing into a black box.',
        ],
      },
      {
        title: 'Why it matters',
        body:
          'The interesting product decision is the refusal to fake certainty. When a request needs real work, Voice Bridge tries to turn that into an explicit tracked handoff instead of pretending the voice layer can do everything by itself.',
        bullets: [
          'Useful for operations-minded users, not just demos.',
          'Better trust boundary for future release work, because success can be tied to backend records rather than vibes.',
        ],
      },
    ],
    sourceNotes: [
      'apps/voice-bridge/README.md',
      'apps/voice-bridge/docs/voice-bridge-architecture-handoff.md',
    ],
    stack: ['Node.js', 'WebRTC', 'ElevenLabs', 'Ollama', 'Whisper server', 'task callbacks'],
    privacyNote:
      'High-level by design. The live environment includes auth, secrets, and transport details that should not be published while the product is private, but the portfolio now uses a real demo clip plus a cleaned-up system diagram.',
    links: [],
    media: {
      kind: 'image',
      src: '/media/voice-bridge/demo-preview.gif',
      alt: 'Animated preview from the current Voice Bridge demo.',
      caption: 'Animated preview from the current Voice Bridge demo.',
      wide: true,
    },
    detailHeroMedia: {
      kind: 'video',
      src: '/media/voice-bridge/demo-v1-web.mp4',
      poster: '/media/voice-bridge/dashboard-screenshot.png',
      alt: 'Voice Bridge demo video.',
      caption: 'Demo video from the current Voice Bridge build.',
      wide: true,
    },
    gallery: [
      {
        kind: 'image',
        src: '/media/voice-bridge/diagram-v2.png',
        alt: 'Updated Voice Bridge architecture diagram showing browser and mobile input, shared backend, live and local voice paths, and tracked task handoff.',
        caption: 'Updated architecture diagram for the shared live/local backend flow.',
        wide: true,
      },
    ],
  },
  {
    slug: 'openclaw-skill-viewer',
    title: 'OpenClaw Skill Viewer',
    eyebrow: 'Featured · local-first tooling · public repo',
    tier: 'featured',
    status: 'Released v0.1',
    visibility: 'Public repo and live landing page',
    domain: 'Developer tooling / product UI',
    summary:
      'A local-first dashboard for browsing OpenClaw skills across bundled, workspace, and custom roots, checking readiness, and inspecting the files behind each skill without digging through folders by hand.',
    homeBlurb:
      'A small developer product with a sharp point of view: solve the annoying workflow cleanly, then stop.',
    heroStatement:
      'A real product answer to a small but stubborn developer problem.',
    heroFacts: ['Multi-root skill discovery', 'Readiness filters', 'Markdown and raw source views'],
    challenge:
      'OpenClaw skills can live in several places at once, which makes simple questions like what is available or ready to use more annoying than they should be.',
    role:
      'Created the product concept, information architecture, local API layer, and the interface that turns raw skill folders into something you can scan in seconds.',
    approach: [
      'Normalized skills from multiple roots into one browsable library instead of making users inspect directories manually.',
      'Pulled readiness from local OpenClaw status so the dashboard answers practical questions, not just cataloging ones.',
      'Kept the scope local-first and intentionally small instead of drifting into a fake admin platform.',
    ],
    outcomes: [
      'Turns a power-user-only workflow into a fast, legible UI.',
      'Shows comfort with both product decisions and implementation details in a tool that still feels lightweight.',
      'Released publicly with clear positioning around what it is and what it is not.',
    ],
    proofPoints: [
      'Public repo, public landing page, and v0.1 release all exist.',
      'The README lays out the user problem crisply and keeps the non-goals explicit.',
      'The product has enough polish to feel intentional without overbuilding the scope.',
    ],
    detailSections: [
      {
        title: 'Why it works',
        body:
          'Skill Viewer does not try to manage everything. It answers the questions a real OpenClaw user keeps hitting: what is installed, what is ready, where did it come from, and what is inside it.',
        bullets: [
          'Library sorting is based on real local update data.',
          'Readiness filters and file-tree inspection make the app useful before any future editing features exist.',
          'The local-first boundary is a feature, not a missing enterprise roadmap.',
        ],
      },
    ],
    sourceNotes: ['apps/openclaw-skill-viewer/README.md'],
    stack: ['React', 'TypeScript', 'Vite', 'Express', 'filesystem watchers'],
    privacyNote: 'Public repo; safe to discuss at both the product and implementation level.',
    links: [
      { label: 'GitHub', url: 'https://github.com/GanglyPuma22/openclaw-skill-viewer' },
      { label: 'Live landing page', url: 'https://ganglypuma22.github.io/openclaw-skill-viewer/' },
      { label: 'Release v0.1.0', url: 'https://github.com/GanglyPuma22/openclaw-skill-viewer/releases/tag/v0.1.0' },
    ],
    media: {
      kind: 'image',
      src: '/media/skill-viewer/demo.gif',
      alt: 'Animated demo of OpenClaw Skill Viewer browsing and drilling into a skill.',
      caption: 'Animated walkthrough from the released build.',
      wide: true,
    },
    detailHeroMedia: {
      kind: 'image',
      src: '/media/skill-viewer/demo.gif',
      alt: 'Animated demo of OpenClaw Skill Viewer browsing and drilling into a skill.',
      caption: 'Short walkthrough from the v0.1 release.',
      wide: true,
    },
    gallery: [
      {
        kind: 'image',
        src: '/media/skill-viewer/clickthrough-large.png',
        alt: 'Skill Viewer detail clickthrough showing skill metadata.',
        caption: 'Detail clickthrough showing readiness and metadata.',
      },
    ],
  },
  {
    slug: 'transcription-server',
    title: 'Transcription Server',
    eyebrow: 'Featured · self-hosted infrastructure · public repo',
    tier: 'featured',
    status: 'Public repo',
    visibility: 'Public',
    domain: 'Voice infrastructure / deployment tooling',
    summary:
      'A self-hosted speech-to-text deployment wrapper built so voice notes and Voice Bridge local-mode workflows can offload transcription to another box instead of bogging down the main workstation.',
    homeBlurb:
      'Less about ML novelty than about keeping a useful workflow fast and boring in the best way.',
    heroStatement:
      'A small STT utility with better operations instincts than most bigger projects.',
    heroFacts: ['Pi-friendly default path', 'Optional NVIDIA fast path', 'Agent-friendly HTTP handoff'],
    challenge:
      'Voice notes are great until Whisper is running on the same machine as everything else. Then the nice workflow becomes the reason the rest of your day slows down.',
    role:
      'Designed the deployment shape, helper scripts, remote deploy flow, and public repo presentation around that one practical problem.',
    approach: [
      'Wrapped an upstream Whisper server with scripts for deploy, restart, sync, status, and client-side upload behavior.',
      'Kept the tracked path CPU-first and safe for a Pi while still documenting an optional NVIDIA build for fast local transcription.',
      'Framed the repo around a real agent workflow instead of generic platform talk.',
    ],
    outcomes: [
      'Moves STT load off the main machine so voice-heavy workflows stay pleasant to use.',
      'Keeps the repo easy to inspect and fork instead of hiding the operational story.',
      'Pairs well with Voice Bridge and other local agent tooling without pretending to be a SaaS.',
    ],
    proofPoints: [
      'README documents both the Pi-friendly path and the optional GPU path with unusual clarity.',
      'The helper scripts show good day-two operations thinking, not just initial setup thinking.',
      'The repo is honest about its scope: thin wrapper, local/private use, not public Internet hardening.',
    ],
    detailSections: [
      {
        title: 'The real win',
        body:
          'The HTTP endpoint is not the interesting part by itself. The interesting part is that transcription becomes predictable: a separate box, a stable deploy path, obvious restart commands, and clear client helpers for local automation.',
        bullets: [
          'Safe default bind is localhost, not wide-open network exposure.',
          'Optional GPU support exists because some voice workflows genuinely need the speed, but the repo keeps that as an explicit opt-in path.',
        ],
      },
    ],
    sourceNotes: ['apps/transcription-server/README.md'],
    stack: ['Docker Compose', 'Whisper server', 'shell tooling', 'LAN deployment', 'optional NVIDIA path'],
    privacyNote: 'Public repo; real deployment secrets and override values stay outside version control.',
    links: [{ label: 'GitHub', url: 'https://github.com/GanglyPuma22/transcription-server' }],
    media: {
      kind: 'image',
      src: '/media/transcription-architecture.png',
      alt: 'Architecture diagram for the transcription server workflow.',
      caption: 'Architecture diagram from the public repo README.',
      wide: true,
    },
    gallery: [],
  },
  {
    slug: 'cuarenta',
    title: 'Cuarenta',
    eyebrow: 'Featured · realtime game product · private / unreleased',
    tier: 'featured',
    status: 'Polished private prototype',
    visibility: 'Private / unreleased',
    domain: 'Realtime UI / game systems / product polish',
    cardDomain: 'Realtime UI / game systems',
    summary:
      'A modern web implementation of Cuarenta built around reconnectable multiplayer sessions, drag-first play, clearer move previews, and a board-centered layout that is easier to read mid-hand.',
    homeBlurb:
      'The range piece: front-end craft, rules modeling, and interaction taste in a game that is easy to make confusing.',
    heroStatement:
      'Careful interaction design in a small four-player card game.',
    heroFacts: ['Realtime multiplayer', 'Drag-first move previews', 'Same-browser rejoin flow'],
    challenge:
      'Cuarenta gets messy fast. The UI has to help players read the board, understand captures, and recover from disconnects without turning the whole thing into a rules lecture.',
    role:
      'Owned the React rewrite direction, board-centered layout, Firebase-backed multiplayer shape, rejoin flow, and most of the interaction decisions that make the game readable.',
    approach: [
      'Rebuilt the app around a cleaner lobby, shareable rejoin links, and a same-browser resume path that works for real interruptions.',
      'Pushed previews directly onto board targets so players can see match versus addition intent before committing a move.',
      'Kept the release story honest: the frontend is strong, but the backend trust model still is not ready for a wide-open public demo.',
    ],
    outcomes: [
      'The current prototype looks and feels much more intentional than the old version.',
      'Recent work hardened drag-hover semantics, clarified preview badges, and cleaned up board-card accessibility and dialog behavior.',
      'It adds real evidence of front-end product taste without breaking the overall portfolio story.',
    ],
    proofPoints: [
      'README covers the gameplay surface, reconnect flow, and the remaining public-release blockers with unusual honesty.',
      'The repo already documents anonymous-auth assumptions and the limits of the current trust model.',
      'A good range piece: not infrastructure-heavy, yet still carrying real state and UX complexity.',
    ],
    detailSections: [
      {
        title: 'What got materially better',
        body:
          'The latest passes did not just restyle the board. They made the game easier to read. Move intent can be previewed on the board itself, the rails are arranged around the felt, and reconnect/share controls were pushed into a smaller footprint.',
        bullets: [
          'Drag-hover now previews match versus addition directly on target cards.',
          'The left and right rails were rebalanced so the board stays the center of gravity.',
          'Rules and scoring references live inside the app instead of sending players away mid-game.',
        ],
      },
      {
        title: 'What still blocks public release',
        body:
          'The main blocker is backend trust, not the interface. Anonymous ownership, abuse control, and a safer public demo boundary still need another pass before this should be pushed as a public multiplayer game.',
        bullets: [
          'The repo already moved to emulator-first local setup and a less dangerous default config.',
          'That is a real improvement, but it is not the same as a finished public trust model.',
        ],
      },
    ],
    sourceNotes: ['Cuarenta/README.md', 'Cuarenta/docs/release-draft.md'],
    stack: ['React 19', 'Vite', 'Firebase RTDB', 'drag interactions'],
    privacyNote:
      'Stays private and unreleased for now because the current backend model is still being tightened.',
    links: [
      { label: 'GitHub', url: 'https://github.com/GanglyPuma22/Cuarenta' },
      { label: 'Live game', url: 'https://cuarenta-dfbf1.web.app/' },
    ],
    media: {
      kind: 'image',
      src: '/media/cuarenta/gameplay-screenshot.png',
      alt: 'Cuarenta gameplay view with the felt-centered board, side rails, and hand cards visible.',
      caption: 'Gameplay screenshot from the current build.',
    },
    gallery: [
      {
        kind: 'image',
        src: '/media/cuarenta/host-game-screenshot.png',
        alt: 'Cuarenta landing screen for hosting or joining a match.',
        caption: 'Host or join screen for starting a new match.',
        wide: true,
      },
      {
        kind: 'image',
        src: '/media/cuarenta/rules-screenshot.png',
        alt: 'Rules and scoring popup inside the Cuarenta game.',
        caption: 'Rules and scoring popup kept inside the game table.',
        wide: true,
      },
    ],
  },
  {
    slug: 'ahto',
    title: 'AHTO',
    eyebrow: 'Featured · testing infrastructure · public v0.1 surface',
    tier: 'featured',
    status: 'Public v0.1',
    visibility: 'Public v0.1 repo',
    domain: 'Integration testing / workflow design',
    summary:
      'A test-matrix-driven integration testing surface that preserves the workflow model, adapter contracts, and durable output artifacts without publishing the private setup that originally surrounded it.',
    homeBlurb:
      'The value here is judgment: what to package, what to document, and what to keep out of the public repo.',
    heroStatement:
      'A public testing surface trimmed down to the parts that actually travel well.',
    heroFacts: ['Matrix-driven runs', 'Hardware sync gate', 'Defect and run-summary artifacts'],
    challenge:
      'Open-sourcing an internal testing capability is easy to do badly. The trick is keeping the useful model and stripping away the private environment assumptions.',
    role:
      'Defined the v0.1 public boundary, wrote the docs surface, shaped the adapter contract story, and kept the release focused on durable artifacts instead of private glue.',
    approach: [
      'Centered the repo around the core orchestration model, replaceable adapters, and one sanitized end-to-end example.',
      'Made hardware sync a first-class concept because stale runtime invalidates integration test results fast.',
      'Kept OpenClaw optional to avoid turning the project into a wrapper with no identity of its own.',
    ],
    outcomes: [
      'The repo communicates a real testing philosophy instead of a pile of scripts.',
      'Reviewers can understand the system without live credentials, hardware access, or browser-profile secrets.',
      'A solid example of responsible public packaging instead of indiscriminate dumping.',
    ],
    proofPoints: [
      'Architecture docs explain the three-layer model clearly: core, adapters, and examples.',
      'The public v0.1 surface is intentionally narrow and reviewable offline.',
      'The repo keeps private environment details out while preserving the workflow itself.',
    ],
    detailSections: [
      {
        title: 'The part worth showing',
        body:
          'AHTO is interesting because it treats testing as a workflow with durable outputs. That means row-level evidence, defect records, run summaries, and a hardware-sync gate that keeps garbage results from looking trustworthy.',
        bullets: [
          'The matrix source, browser adapter, and hardware gate are all replaceable edges.',
          'The public example is sanitized on purpose so the architecture can be reviewed cleanly.',
        ],
      },
    ],
    sourceNotes: ['open-source-repos/AHTO/README.md', 'open-source-repos/AHTO/docs/architecture.md'],
    stack: ['Node.js', 'test matrices', 'adapter contracts', 'artifact emitters', 'documentation'],
    privacyNote: 'Public repo by design, with internal environment details intentionally stripped out.',
    links: [{ label: 'GitHub', url: 'https://github.com/GanglyPuma22/AHTO' }],
    media: {
      kind: 'image',
      src: '/media/ahto-workflow-v2.png',
      alt: 'Updated AHTO workflow diagram showing matrix input, hardware sync, adapters, and durable artifacts.',
      caption: 'Updated workflow diagram from the public docs.',
      wide: true,
    },
    gallery: [],
  },
  {
    slug: 'penn-jet-propulsion-club',
    title: 'Penn Jet Propulsion Club',
    titleLines: ['Penn Jet', 'Propulsion Club'],
    eyebrow: 'Aerospace · electronics + controls + manufacturing',
    tier: 'archive',
    status: 'Three-year team project',
    visibility: 'Public deck and video evidence',
    domain: 'Aerospace / manufacturing / electronics',
    summary:
      'Electronics, controls, and fabrication work on a small-scale jet engine team, including FADEC-related sensor and fuel-control work plus hands-on manufacturing support.',
    homeBlurb: 'Aerospace weight that still feels real.',
    challenge:
      'The work mixed controls thinking with manufacturing reality: sensors, RPM feedback, fuel delivery, and parts that had to survive actual test hardware.',
    role:
      'Member of the electronics and controls team. Designed hardware and testing setups, including a controls rig for an electronic ducted fan test (load cell + Hall effect) before applying it on the real engine. Also contributed to manufacturing.',
    approach: [
      'Built up controls and sensing on an electronic ducted fan test stand before risking the real engine.',
      'Worked on RC model plane communications for a separate design-build-fly competition.',
      'Stayed hands-on through manufacturing and assembly, not just analysis.',
    ],
    outcomes: ['Real aerospace and machine-shop credibility, with photos and a working-engine clip to back it up.'],
    detailSections: [
      {
        title: 'What the deck shows',
        body:
          'The team manufactured and assembled a working small-scale jet engine over three years. The video below is the engine running. The stills cover the outdoor setup plus a stator-manufacturing sequence that shows how the part design and machining approach had to adapt after an early failure.',
      },
    ],
    sourceNotes: ['old portfolio slides 11-12', 'pptx media3.mp4'],
    stack: ['electronics', 'controls', 'machining', 'team hardware development'],
    privacyNote: 'All media here comes from the existing portfolio deck.',
    links: [],
    media: {
      kind: 'image',
      src: '/media/penn-jet/jet-engine-test.png',
      alt: 'Penn Jet engine on the test stand.',
      caption: 'Jet engine on the test stand from the team build.',
    },
    detailHeroMedia: {
      kind: 'video',
      src: '/media/penn-jet/jet-running.mp4',
      poster: '/media/penn-jet/jet-engine-test.png',
      alt: 'Penn Jet engine running on the test stand.',
      caption: 'Engine running on the stand.',
      wide: true,
    },
    gallery: [
      {
        kind: 'image',
        src: '/media/legacy/penn-jet-engine.webp',
        alt: 'Penn Jet engine outdoors on a bench.',
        caption: 'Outdoor test setup.',
      },
      {
        kind: 'sequence',
        steps: [
          {
            kind: 'image',
            src: '/media/penn-jet/electronics-detail.jpg',
            alt: 'Early stator piece showing broken fins after machining.',
            caption: 'Stator fins failed during turning before the gaps were reinforced.',
          },
          {
            kind: 'image',
            src: '/media/penn-jet/manufacturing-1.jpg',
            alt: 'Stator piece with bondo used to support the fins during machining.',
            caption: 'Retry with bondo packed between the fins to support the lathe pass.',
          },
          {
            kind: 'image',
            src: '/media/penn-jet/manufacturing-2.jpg',
            alt: 'Completed stator after the reinforced machining pass.',
            caption: 'Completed stator after the reinforced machining pass.',
          },
        ],
      },
    ],
  },
  {
    slug: 'small-sada',
    title: 'Small SADA',
    eyebrow: 'Aerospace · senior design · two-DOF solar array drive',
    tier: 'archive',
    status: 'Senior design project',
    visibility: 'Public report, code, video',
    domain: 'Aerospace / controls / electromechanical systems',
    summary:
      'A two-degree-of-freedom solar array drive assembly project for CubeSat use, backed by code, report, CAD, manufacturing photos, and demo video.',
    homeBlurb: 'One of the strongest archive items because the evidence packet is unusually solid.',
    challenge:
      'The work combined controls, mechanisms, manufacturing, and assembly discipline rather than living in just one engineering lane.',
    role:
      'Designed and manufactured the body of the system, including the two-plate internal gear mechanism that allows yaw rotation. Designed parts in SolidWorks, generated CNC toolpaths, and ran them on a 3-axis mill. Contributed to the final system build.',
    approach: [
      'Spent months on system requirements, down-selection by decision matrix, and design iteration before committing to manufacturing.',
      'Built the yaw-rotation mechanism as a two-plate internal gear arrangement to keep the package small enough for a 3U CubeSat.',
      'Generated CNC toolpaths in Mastercam and ran them on the mill rather than handing the parts off.',
    ],
    outcomes: ['Reinforces aerospace and controls range with more evidence than a typical class project.'],
    detailSections: [
      {
        title: 'What the deck shows',
        body:
          'CAD overview, the internal mechanism, system block diagrams, control loop sketches, manufacturing photos, CNC toolpaths, the assembly process, integration shots, and test plots.',
      },
    ],
    sourceNotes: ['old portfolio slides 6-10', 'pptx media2.mp4'],
    stack: ['control systems', 'mechanisms', 'CAD', 'CNC manufacturing'],
    privacyNote: 'Public report, code, and presentation make this safe to discuss in detail.',
    links: [
      { label: 'GitHub', url: 'https://github.com/GanglyPuma22/SmallSADA' },
      { label: 'Report', url: 'https://drive.google.com/file/d/14cBlPCrI64g15N8HRzxMOtOKpsuosvBC/view?usp=sharing' },
      { label: 'Presentation clip', url: 'https://youtu.be/UR8_711DZhc?list=PLA-GNJTD2Bq3r3hPS0R5rDWlGs84vzm1e&t=381' },
    ],
    media: {
      kind: 'image',
      src: '/media/small-sada/cad-overview.png',
      alt: 'CAD overview of the Small SADA assembly.',
      caption: 'CAD overview from the senior design deck.',
    },
    detailHeroMedia: {
      kind: 'video',
      src: '/media/small-sada/demo.mp4',
      poster: '/media/small-sada/integration.png',
      alt: 'Small SADA demo clip.',
      caption: 'System demo clip.',
      wide: true,
    },
    gallery: [
      { kind: 'image', src: '/media/small-sada/final-assembly-diagram.png', alt: 'Annotated Small SADA assembly diagram calling out the internal mechanism and supporting structure.', caption: 'Annotated assembly diagram for the two-plate internal gear mechanism.' },
      { kind: 'image', src: '/media/small-sada/system-block.png', alt: 'System block diagram for Small SADA.', caption: 'System block diagram.' },
      { kind: 'image', src: '/media/small-sada/control-loop.png', alt: 'Control loop diagram for Small SADA.', caption: 'Control loop sketch.' },
      { kind: 'image', src: '/media/small-sada/manufacturing.jpg', alt: 'Manufacturing photo for Small SADA.', caption: 'Manufacturing photo.' },
      { kind: 'image', src: '/media/small-sada/cnc-toolpath.png', alt: 'CNC toolpath visualization for Small SADA.', caption: 'CNC toolpath in Mastercam.' },
      { kind: 'image', src: '/media/small-sada/assembly-step.png', alt: 'Assembly step for Small SADA.', caption: 'Assembly step.' },
      { kind: 'image', src: '/media/small-sada/integration.png', alt: 'Integration shot of Small SADA.', caption: 'Integration shot.' },
      { kind: 'image', src: '/media/small-sada/test-plot.png', alt: 'Test plot from Small SADA.', caption: 'Test data plot.' },
    ],
  },
  {
    slug: 'graduate-robotics',
    title: 'Graduate Robotics — Block Stacking',
    titleLines: ['Graduate Robotics', 'Block Stacking'],
    eyebrow: 'Robotics · 7-DOF arm · simulation + hardware',
    tier: 'archive',
    status: 'Graduate course project',
    visibility: 'Public repo and video',
    domain: 'Robotics / autonomy',
    summary:
      'Forward kinematics, inverse kinematics, velocity kinematics, RRT and potential-field planning for a 7-DOF arm, validated in simulation and then on hardware for a final block-stacking task.',
    homeBlurb: 'Compact robotics proof: kinematics, planning, and hardware validation in one project.',
    challenge:
      'Move from kinematics and planning work in ROS/Gazebo into behavior that still held up on real hardware, then close the gap with static block detection and stacking for the final lab.',
    role: 'Implemented the kinematics stack and planners, then ran them in simulation and on the lab arm, including the final block-detection and stacking pipeline.',
    approach: [
      'Wrote the kinematics, RRT and potential-field planners, and the simulation interface in Python with ROS packages.',
      'Validated extensively in simulation, then on the hardware arm, comparing discrepancies between sim and real.',
      'Added static block detection and a stacking pipeline for the final project deliverable.',
    ],
    outcomes: ['Adds concise robotics and autonomy proof.'],
    detailSections: [],
    sourceNotes: ['old portfolio slide 4'],
    stack: ['ROS', 'Python', 'simulation', 'kinematics', 'RRT', 'potential field'],
    privacyNote: 'Public repo and video.',
    links: [
      { label: 'GitHub', url: 'https://github.com/GanglyPuma22/FinalLabMeam520' },
      { label: 'Demo video', url: 'https://www.youtube.com/watch?v=MwpCNFopuuQ' },
    ],
    media: {
      kind: 'image',
      src: '/media/robotics/sim-stack.png',
      alt: 'Simulation view of the 7-DOF arm stacking blocks.',
      caption: 'Simulation view of the stacking task.',
    },
    detailHeroMedia: {
      kind: 'embed',
      src: 'https://www.youtube.com/embed/MwpCNFopuuQ?rel=0',
      alt: 'Graduate Robotics demo video.',
      caption: 'Public demo video.',
    },
    gallery: [
      {
        kind: 'sequence',
        steps: [
          {
            kind: 'image',
            src: '/media/robotics/sim-stack.png',
            alt: 'Simulation view of the 7-DOF arm stacking blocks.',
            caption: 'Simulation run to validate controls before hardware run (Step 1)',
          },
          {
            kind: 'image',
            src: '/media/robotics/planner-detail.png',
            alt: 'Planner detail from the project.',
            caption: 'Gripper grabbing block to validate sim (Step 2)',
          },
          {
            kind: 'image',
            src: '/media/robotics/hardware-stack.png',
            alt: 'Hardware view of the arm stacking blocks.',
            caption: 'Hardware Run',
          },
        ],
      },
    ],
  },
  {
    slug: 'semi-autonomous-car',
    title: 'Semi-Autonomous Car',
    titleLines: ['Semi-Autonomous Car'],
    eyebrow: 'Mechatronics · ESP32 · wall following + IR beacon',
    tier: 'archive',
    status: 'Graduate course project',
    visibility: 'Public video',
    domain: 'Mechatronics / controls',
    summary:
      'A graduate mechatronics project: an ESP32-driven car that follows walls with ultrasound sensors and detects an IR beacon several meters out using a filtered double op-amp circuit hand-soldered for the project.',
    homeBlurb: 'Supporting mechatronics evidence with a real circuit and a real demo.',
    challenge:
      'The car had to handle sensing, control thresholds, and IR signal detection well enough to survive the course demo.',
    role: 'Built the ESP32 firmware in C++, designed and soldered the filtered double op-amp circuit, and tuned the wall-following + beacon-finding behavior.',
    approach: [
      'Used ultrasound sensors for wall following with thresholded control.',
      'Designed an analog front end (filtered double op-amp) so the IR beacon was detectable from several meters.',
      'Programmed the ESP32 in C++ with attention to GPIO interrupts and timing.',
    ],
    outcomes: ['Adds continuity between robotics, controls, and later embedded work.'],
    detailSections: [],
    sourceNotes: ['old portfolio slide 5'],
    stack: ['ESP32', 'C++', 'analog front end', 'mechatronics'],
    privacyNote: 'Public video evidence.',
    links: [{ label: 'Demo short', url: 'https://youtube.com/shorts/IPoaRwU-tbI?feature=share' }],
    media: {
      kind: 'image',
      src: '/media/semi-autonomous-car/car-board-rotated.jpg',
      alt: 'Semi-Autonomous Car board and chassis.',
      caption: 'Board and chassis from the build.',
    },
    detailHeroMedia: {
      kind: 'embed',
      src: 'https://www.youtube.com/embed/IPoaRwU-tbI?rel=0',
      alt: 'Semi-Autonomous Car demo video.',
      caption: 'Public demo short.',
    },
    gallery: [
      { kind: 'image', src: '/media/semi-autonomous-car/wall-following.jpg', alt: 'Wall-following test for the car.', caption: 'Wall-following test.' },
      { kind: 'image', src: '/media/semi-autonomous-car/full-car-view.png', alt: 'Final build of the semi-autonomous car.', caption: 'Final Car Design - Fully Built' },
    ],
  },
  {
    slug: 'matlab-mario',
    title: 'MatlabMario',
    eyebrow: 'Archive · early game systems experiment',
    tier: 'archive',
    status: 'Older public repo',
    visibility: 'Public repo',
    domain: 'Games / MATLAB / interaction logic',
    summary:
      'A small 8-bit Mario clone built in MATLAB with sprite art, audio cues, class-based game objects, collision checks, a side-scrolling level, and a countdown-to-finish win condition.',
    homeBlurb: 'Honest evidence that interactive systems and game feel showed up early.',
    challenge:
      'Build something recognizably Mario-like inside MATLAB without a game engine, while keeping motion, collisions, and sound responsive enough to feel playable.',
    role:
      'Built the game loop, sprite handling, collision checks, level layout, timing, and sound behavior.',
    approach: [
      'Separated Mario, blocks, and coins into their own class definitions instead of keeping the whole project in one script.',
      'Preloaded images and sound files up front, then updated handles during play so the game stayed smoother than constant replotting would allow.',
      'Combined simple physics, collision checks, and a long scrolling level into a single MATLAB playable demo.',
    ],
    outcomes: [
      'Shows early comfort with event-driven UI logic and interactive state, even in an unusual environment for game work.',
      'An honest software range piece, lighter than the flagship work but still memorable.',
    ],
    detailSections: [
      {
        title: 'Why it earns the space',
        body:
          'Not here to compete with the current flagship projects. Stays because it is specific, public, and revealing. The repo shows a clear attempt to make an old-school platformer feel responsive using only MATLAB, custom sprites, and hand-built object logic.',
        bullets: [
          'The public repo includes separate Mario, Block, and Coin classes.',
          'The start script lays out the level, timer, pits, finish flag, and sound triggers directly in code.',
        ],
      },
    ],
    sourceNotes: ['MatlabMario/READ_ME.txt', 'MatlabMario/start.m'],
    stack: ['MATLAB', 'GUI', 'sprites', 'collision checks', 'audio'],
    privacyNote: 'Public repo; media here is from the repository art and sprite assets because a gameplay capture was not packaged with the repo.',
    links: [{ label: 'GitHub', url: 'https://github.com/GanglyPuma22/MatlabMario' }],
    media: {
      kind: 'image',
      src: '/media/matlab-mario/background.jpg',
      alt: 'Pixel-art background from the MatlabMario repo showing clouds, hills, and ground tiles.',
      caption: 'Background art from the public MATLAB game repo.',
    },
    gallery: [
      {
        kind: 'image',
        src: '/media/matlab-mario/mario-standing.png',
        alt: 'Standing Mario sprite from the MatlabMario repo.',
        caption: 'Standing player sprite used by the game.',
      },
      {
        kind: 'image',
        src: '/media/matlab-mario/mario-jumping.png',
        alt: 'Jumping Mario sprite from the MatlabMario repo.',
        caption: 'Jumping sprite used during movement and collision sequences.',
      },
    ],
  },
  {
    slug: 'heat-engine',
    title: 'Heat Engine',
    eyebrow: 'Manufacturing · machine-shop course',
    tier: 'archive',
    status: 'Course project',
    visibility: 'Public video',
    domain: 'Mechanical design / manufacturing',
    summary:
      'Manufacturing-course work proving out machine-shop fundamentals, tolerance-aware design, and assembly discipline.',
    homeBlurb: 'Range proof from the shop floor.',
    challenge: 'The project demanded real fabrication skills, not just a CAD file and a report.',
    role: 'Designed, manufactured, and assembled the engine for the course deliverable.',
    approach: ['Held in the archive tier with images from the build and a working video.'],
    outcomes: ['Supports the claim that the portfolio is grounded in real build work, not just software.'],
    detailSections: [],
    sourceNotes: ['old portfolio slides 13-14'],
    stack: ['manufacturing', 'mechanical systems'],
    privacyNote: 'Public video and deck imagery.',
    links: [{ label: 'Demo short', url: 'https://youtube.com/shorts/WBjB18JZJQU?feature=share' }],
    media: {
      kind: 'image',
      src: '/media/heat-engine/engine-detail.jpg',
      alt: 'Heat engine detail photo.',
      caption: 'Detail of the manufactured heat engine.',
    },
    detailHeroMedia: {
      kind: 'embed',
      src: 'https://www.youtube.com/embed/WBjB18JZJQU?rel=0',
      alt: 'Heat Engine demo video.',
      caption: 'Public demo short.',
    },
    gallery: [
      { kind: 'image', src: '/media/heat-engine/build-1.jpg', alt: 'Heat engine build photo 1.', caption: 'Build photo.' },
      { kind: 'image', src: '/media/heat-engine/build-2.jpg', alt: 'Heat engine build photo 2.', caption: 'Another build photo.' },
      { kind: 'image', src: '/media/legacy/heat-engine.jpg', alt: 'Heat engine setup outdoors.', caption: 'Outdoor test setup.' },
    ],
  },
  {
    slug: 'carousel',
    title: 'Carousel',
    eyebrow: 'Mechanism design · bevel gear drive',
    tier: 'archive',
    status: 'Team project',
    visibility: 'Public report and video',
    domain: 'Mechanism design / fabrication',
    summary:
      'Carousel sub-team project focused on bevel-gear drive design, moving assemblies, and fabrication for a collaborative mechanical build.',
    homeBlurb: 'A well-documented archive piece with actual mechanism interest.',
    challenge: 'The team had to make parts from different sub-teams coexist without interference and still move cleanly.',
    role: 'Worked on the bevel-gear drive train and fabrication for the sub-team contribution.',
    approach: ['Supported with the existing report and video.'],
    outcomes: ['Strengthens the mechanical and fabrication side of the portfolio arc.'],
    detailSections: [],
    sourceNotes: ['old portfolio slides 15-16'],
    stack: ['mechanism design', 'fabrication'],
    privacyNote: 'Safe to reference from public report and video.',
    links: [
      { label: 'Report', url: 'https://docs.google.com/document/d/108XskEy7AELcBuXqKhccAWXho-CfuO36F03K1TI-EnY/edit?usp=sharing' },
      { label: 'Demo short', url: 'https://www.youtube.com/shorts/vWkD5eJ99RM' },
    ],
    media: {
      kind: 'image',
      src: '/media/carousel/cad-assembly.png',
      alt: 'CAD assembly view from the carousel project.',
      caption: 'CAD assembly view of the carousel.',
    },
    detailHeroMedia: {
      kind: 'embed',
      src: 'https://www.youtube.com/embed/vWkD5eJ99RM?rel=0',
      alt: 'Carousel demo video.',
      caption: 'Public demo short.',
    },
    gallery: [
      { kind: 'image', src: '/media/carousel/bevel-detail.png', alt: 'Bevel gear detail.', caption: 'Bevel gear drive detail.' },
      { kind: 'image', src: '/media/carousel/exploded-view.png', alt: 'Exploded view of the carousel.', caption: 'Exploded view.' },
      { kind: 'image', src: '/media/carousel/build-photo.jpg', alt: 'Carousel build photo.', caption: 'Build photo.' },
      { kind: 'image', src: '/media/carousel/render.png', alt: 'Carousel render.', caption: 'Render of the assembled carousel.' },
      { kind: 'image', src: '/media/legacy/carousel-assembly.webp', alt: 'CAD assembly view.', caption: 'Earlier assembly view.' },
    ],
  },
  {
    slug: 'vawt',
    title: 'VAWT',
    eyebrow: 'Energy · vertical-axis wind turbine experiment',
    tier: 'archive',
    status: 'Team project',
    visibility: 'Public videos',
    domain: 'Mechanical systems / energy',
    summary:
      'A vertical-axis wind turbine experiment with a built prototype, CAD, and recorded test runs.',
    homeBlurb: 'Light archive texture from the energy side of the engineering record.',
    challenge: 'The project lived or died on whether the design could be built, tested, and compared honestly.',
    role: 'Contributed to the build and testing.',
    approach: ['Kept brief; the deck imagery and videos do most of the work.'],
    outcomes: ['Adds texture to the earlier engineering record.'],
    detailSections: [],
    sourceNotes: ['old portfolio slide 17'],
    stack: ['mechanical prototyping', 'energy experiment'],
    privacyNote: 'Public video.',
    links: [
      { label: 'Demo video 1', url: 'https://www.youtube.com/watch?v=0zGNBO2WvlQ' },
      { label: 'Demo video 2', url: 'https://www.youtube.com/watch?v=erm7tneRpc8' },
    ],
    media: {
      kind: 'image',
      src: '/media/vawt/build.jpg',
      alt: 'VAWT prototype build.',
      caption: 'VAWT prototype build.',
    },
    detailHeroMedia: {
      kind: 'embed',
      src: 'https://www.youtube.com/embed/0zGNBO2WvlQ?rel=0',
      alt: 'VAWT demo video.',
      caption: 'Public demo video.',
    },
    gallery: [
      { kind: 'image', src: '/media/vawt/cad.png', alt: 'VAWT CAD model.', caption: 'CAD model.' },
      { kind: 'image', src: '/media/vawt/test.jpg', alt: 'VAWT test setup.', caption: 'Test setup.' },
    ],
  },
  {
    slug: 'water-tower',
    title: 'Water Tower',
    eyebrow: 'Build systems · structural redesign',
    tier: 'archive',
    status: 'Team project',
    visibility: 'Public report and video',
    domain: 'Build systems / structural thinking',
    summary:
      'A water tower build with structural redesign after the first buckling-prone version failed load testing.',
    homeBlurb: 'Useful part of the earlier build-system record.',
    challenge: 'The team had to rethink the structure after the first design failed load testing.',
    role: 'Contributed to the redesign and rebuild.',
    approach: ['Linked to the original report and video.'],
    outcomes: ['Preserves depth in the earlier portfolio without recreating the whole slide deck.'],
    detailSections: [],
    sourceNotes: ['old portfolio slide 18'],
    stack: ['structural build', 'documentation'],
    privacyNote: 'Public artifacts.',
    links: [
      { label: 'Report', url: 'https://docs.google.com/document/d/1cxEeilRerLbGmpuzYxOFmSWV113a8c4KT8Hc7rt-L9w/edit' },
      { label: 'Demo short', url: 'https://youtube.com/shorts/uo-GWIRv1Ww' },
    ],
    media: {
      kind: 'image',
      src: '/media/water-tower/cad-1.png',
      alt: 'Water tower CAD view.',
      caption: 'CAD view from the redesign.',
    },
    detailHeroMedia: {
      kind: 'embed',
      src: 'https://www.youtube.com/embed/uo-GWIRv1Ww?rel=0',
      alt: 'Water Tower demo video.',
      caption: 'Public demo short.',
    },
    gallery: [
      { kind: 'image', src: '/media/water-tower/cad-2.png', alt: 'Second water tower CAD view.', caption: 'Second CAD view.' },
      { kind: 'image', src: '/media/water-tower/diagram.png', alt: 'Water tower diagram.', caption: 'Structural diagram.' },
      { kind: 'image', src: '/media/water-tower/build-1.jpg', alt: 'Water tower build photo 1.', caption: 'Build photo.' },
      { kind: 'image', src: '/media/water-tower/build-2.jpg', alt: 'Water tower build photo 2.', caption: 'Another build photo.' },
    ],
  },
];

export const currentRoleSlug = 'nasa-simulation-engineering';
export const currentRoleProject = projects.find((project) => project.slug === currentRoleSlug);

export const featuredProjects = projects.filter((project) => project.tier === 'featured');
export const archiveProjects = projects.filter((project) => project.tier === 'archive');
export const homeProjects = projects.filter((project) => project.slug !== currentRoleSlug);

export const flagshipDeck = [
  'tank-control-system',
  'voice-bridge',
  'openclaw-skill-viewer',
  'transcription-server',
  'cuarenta',
].map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean);

export const archiveGroups = [
  {
    title: 'Aerospace, robotics, and controls',
    slugs: ['penn-jet-propulsion-club', 'small-sada', 'graduate-robotics', 'semi-autonomous-car'],
  },
  {
    title: 'Software Projects',
    slugs: ['matlab-mario'],
  },
  {
    title: 'Mechanical design, fabrication and manufacturing work',
    slugs: ['heat-engine', 'carousel', 'vawt', 'water-tower'],
  },
];

export const projectMap = new Map(projects.map((project) => [project.slug, project]));
