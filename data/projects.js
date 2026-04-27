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
    detailSummary:
      'I work on software around the Vertical Motion Simulator and Future Flight Central at NASA Ames. The public slice of that work covers real-time simulator integration, high-fidelity data collection, visual-system support, and newer transcription tooling.',
    homeSummaryHtml:
      'Simulation engineer at NASA Ames, working across the <a class="inline-rich-link" href="https://www.nasa.gov/ames/vms/" target="_blank" rel="noreferrer">Vertical Motion Simulator</a>, <a class="inline-rich-link" href="https://www.nasa.gov/future-flight-central/" target="_blank" rel="noreferrer">Future Flight Central</a>, and related research tooling for simulator integration, high-fidelity data collection, visual systems, and operator-facing utilities.',
    homeBlurb:
      'Current work at NASA Ames, plus earlier internship research that fed directly into the simulation side of the portfolio.',
    homeSectionNote: '',
    heroStatement:
      'Real-time simulator integration, high-fidelity data, and operator tools that have to work during a research run.',
    heroFacts: ['VMS integration', 'FFC visual systems', 'NLP transcription tooling'],
    challenge:
      'Most of the job lives inside active research runs. The simulator has to stay usable in real time, tower visuals have to stay smooth, and the data needs to be ready as soon as a session ends.',
    role:
      'I integrate researcher systems into the VMS, build tooling around FFC, and lead transcription and speaker-recognition work around recordings from both facilities. I also worked on public-facing monitoring and local-airspace software connected to Boeing\'s autonomous taxi tests at Ames.',
    approach: [
      'Integrated external researcher systems into the VMS while keeping the simulator usable during piloted runs.',
      'Built a Rust flight-data up-sampler for FFC\'s new image-generation system so 1 Hz aircraft data still looks smooth in the tower.',
      'Kept the transcription work tied to real recorded sessions, speaker recognition, and the way researchers actually review runs afterward.',
    ],
    outcomes: [
      'Research teams can bring new systems into the simulator environment without treating every run like a one-off setup.',
      'FFC visuals stay smooth enough to be usable even when upstream flight data is coarse.',
      'The transcription effort grew from an idea into a real internal project, including follow-on work and intern support.',
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
          'The day-to-day work is a mix of simulation plumbing and research support. Some problems are about getting outside systems into the VMS cleanly. Others are about making sure researchers leave a session with the data, visuals, and follow-up tools they need instead of another manual cleanup step.',
        bullets: [
          'Integrate outside researcher systems into the VMS pipeline.',
          'Collect and preserve high-fidelity data during simulation sessions.',
          'Build tooling around FFC, including local-airspace displays and visual-system support.',
        ],
      },
      {
        title: 'Earlier NASA internship',
        body:
          'Before SimLabs, I interned in NASA\'s Advanced Supercomputing Division. I wrote Python tools to post-process rotor CFD results, compare them against experimental data, and automate the plots and test runs I kept repeating by hand.',
        bullets: [
          'Built Python software to post-process CFD simulation results run on NASA supercomputers.',
          'Compared simulation outputs against experimental data and automated discrepancy plots and test runs.',
          'Published and presented "Comparing Methods to Extract Sectional Angle of Attack From Blade-Resolved Rotor Simulations."',
        ],
      },
      {
        title: 'Boeing surrogate-operations support',
        body:
          'One public piece of the work supported Boeing\'s autonomous taxi demonstrations at Ames. My part was on the simulation and monitoring side around the surrogate Cessna Caravan and the local-airspace tooling used around that effort.',
        bullets: [
          'Developed software to monitor the surrogate Cessna Caravan during autonomous taxi testing.',
          'Built local-airspace display and software-emulation tools around the FFC environment.',
          'Kept this page limited to what is already public in Boeing and NASA material.',
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
    detailSummary:
      'What started as a better way to run my lizard\'s enclosure turned into an embedded system I actually live with: ESP32 control boards, a Raspberry Pi bridge, Firebase-backed configuration, schedules, sensors, and a remote web UI.',
    homeBlurb:
      'It started as a better way to run a lizard tank. It now reads like a real embedded product with cloud state, local authority, and room to grow.',
    heroStatement:
      'Embedded control work that goes past relay toggles into real system boundaries.',
    heroFacts: ['ESP32 + Pi authority split', 'Firebase-configured devices', 'Schedules stay local enough to survive bridge trouble'],
    challenge:
      'The hard part was not toggling relays. It was keeping schedules, sensor reads, desired state, reported state, and remote control from drifting out of sync once the system had to work every day.',
    role:
      'I designed the architecture, wrote the firmware patterns, shaped the Firebase data model, and kept the system honest about desired state versus what the hardware was actually doing.',
    approach: [
      'Kept always-on GPIO control and schedule evaluation on the ESP32 while the Pi handled cloud sync and heavier media work.',
      'Let Firebase define which devices and sensors exist so the system can grow from configuration instead of firmware forks.',
      'Split desired state from reported state so automation, manual overrides, and actual hardware behavior can be debugged without guessing.',
    ],
    outcomes: [
      'Adding or removing devices is now a configuration problem instead of a reflash-everything problem.',
      'Schedules keep running on the board even when the Pi or cloud path is unhealthy.',
      'Logs, UI state, and firmware all point to the same trigger identity, which makes failures much easier to trace.',
    ],
    proofPoints: [
      'Repo README documents the v2 authority split, desired vs reported state, and schedule evaluation flow.',
      'Hardware photos show the camera board, controller stack, and the physical environment the software was built for.',
      'The public write-up is strong enough to explain the system without exposing internal access or private operating details.',
    ],
    detailSections: [
      {
        title: 'How it grew',
        body:
          'This started as a better way to manage Yasha\'s tank, then slowly stopped feeling like a weekend relay project. Once there were schedules, sensors, streaming, and remote control in the mix, the real job became preserving behavior I could trust day to day.',
        bullets: [
          'Remote control mattered, but so did keeping the enclosure behavior sane when the network path misbehaved.',
          'The camera ended up on a separate ESP32-CAM board because the physical setup and cabling wanted their own lane.',
        ],
      },
      {
        title: 'What had to stay local',
        body:
          'The Pi/ESP32 split came out of experience, not theory. The Pi is great for cloud sync and video. The board is the part that should still know how to run the enclosure if the bridge is slow or offline.',
        bullets: [
          'Schedules are evaluated locally on the main board instead of round-tripping through the Pi for every action.',
          'Firebase stream updates are queued and applied in the main loop rather than inside the callback.',
          'Desired and reported state stay separate so the web UI can show intent and reality without conflating them.',
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
    detailSummary:
      'Voice Bridge is the voice front end I built for OpenClaw. It runs in the browser and on mobile, supports both live and local voice modes, and turns longer requests into tracked tasks instead of pretending the conversation already finished.',
    homeBlurb:
      'Voice as a serious interface with truth boundaries, not a party trick.',
    heroStatement:
      'Voice UI with explicit handoff and a backend someone can actually trust.',
    heroFacts: ['Live and local voice modes', 'Tracked task handoff', 'Server-issued tokens, not browser secrets'],
    challenge:
      'The hard part was not speech recognition by itself. It was making voice feel honest: quick requests should stay conversational, longer work should turn into something trackable, and secrets should stay on the server.',
    role:
      'I shaped the product, designed the backend contract, built the local-mode architecture, and defined the handoff between a voice conversation and a real piece of follow-up work.',
    approach: [
      'Issued live-session tokens from the server so the browser never needs provider secrets.',
      'Kept live and local modes on one shared backend so task state, transcripts, and tool behavior do not drift into two different products.',
      'Added explicit task handoff endpoints so longer requests come back as tracked work with status updates, not fake instant success.',
    ],
    outcomes: [
      'The current build already supports live mode, local mode, transcript storage, and tracked task creation.',
      'Local mode now has Whisper-backed transcription, better tap-to-record behavior, and cleaner browser TTS.',
      'The remaining work is the right kind of work: reliability, confirmation behavior, and release cleanup.',
    ],
    proofPoints: [
      'README documents the browser/mobile shell, secure token flow, task endpoints, and local-first deployment shape.',
      'Local-mode pass landed shared tools, server-orchestrated local turns, browser TTS cleanup, and tap-to-record controls.',
      'Architecture docs show the system maturing from one-off voice behavior toward explicit task and topic routing.',
    ],
    detailSections: [
      {
        title: 'Two runtime modes, one product',
        body:
          'I cared a lot about not turning this into separate apps glued together with shared branding. Live mode is faster and more polished. Local mode is cheaper, more private, and slower. They both needed to feel like the same tool.',
        bullets: [
          'Live mode uses ElevenLabs for the speech loop.',
          'Local mode uses Ollama plus Whisper, with the server still handling prompts, tools, and turn orchestration.',
          'Both paths feed the same task, topic, and transcript model.',
        ],
      },
      {
        title: 'Why the handoff matters',
        body:
          'The main product decision was to stop pretending voice can finish every request in one breath. If something really needs more time, Voice Bridge should say so and hand it off cleanly.',
        bullets: [
          'Tracked tasks make longer work visible instead of burying it behind a vague "working on it."',
          'Status callbacks let the voice session and dashboard reflect what actually happened.',
          'That split makes the system more useful for real work than a pure demo voice shell.',
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
    detailSummary:
      'A small local dashboard for one annoying OpenClaw problem: skills live in several places, and finding out what is installed or actually ready should not require digging through folders.',
    homeBlurb:
      'A small developer product with a sharp point of view: solve the annoying workflow cleanly, then stop.',
    heroStatement:
      'A real product answer to a small but stubborn developer problem.',
    heroFacts: ['Multi-root skill discovery', 'Readiness filters', 'Markdown and raw source views'],
    challenge:
      'OpenClaw skills can live in several places at once, which makes simple questions like what is available or ready to use more annoying than they should be.',
    role:
      'I put together the product idea, local API layer, and interface that turns a pile of skill folders into something you can scan in seconds.',
    approach: [
      'Pulled bundled, workspace, and custom roots into one searchable library.',
      'Used local OpenClaw readiness data so the dashboard answers "can I use this?" instead of just "does this folder exist?"',
      'Kept the app intentionally local and small instead of drifting toward a fake hosted admin tool.',
    ],
    outcomes: [
      'Makes skill discovery fast enough to use casually instead of only when you are already in the weeds.',
      'Gives file-tree and markdown views in the same place as readiness and source-root info.',
      'Shipped as a public v0.1 release with the scope kept tight on purpose.',
    ],
    proofPoints: [
      'Public repo, public landing page, and v0.1 release all exist.',
      'The README lays out the user problem crisply and keeps the non-goals explicit.',
      'The product has enough polish to feel intentional without overbuilding the scope.',
    ],
    detailSections: [
      {
        title: 'Why it stayed small',
        body:
          'The nice part of this project is that it solves a specific annoyance and then stops. I did not want to turn it into a registry, editor, or another layer of ceremony around skills.',
        bullets: [
          'The dashboard answers what is installed, what is ready, where it came from, and what files are inside it.',
          'That is enough to make the tool genuinely useful without pretending it should manage everything.',
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
    detailSummary:
      'A separate box for Whisper so voice notes and local agent workflows stop dragging down the main machine.',
    homeBlurb:
      'Less about ML novelty than about keeping a useful workflow fast and boring in the best way.',
    heroStatement:
      'A small STT utility with better operations instincts than most bigger projects.',
    heroFacts: ['Pi-friendly default path', 'Optional NVIDIA fast path', 'Agent-friendly HTTP handoff'],
    challenge:
      'Voice notes are great until Whisper is running on the same machine as everything else. Then the nice workflow becomes the reason the rest of your day slows down.',
    role:
      'I packaged the deploy shape, helper scripts, and client workflow around one practical need: send audio away, get text back, and keep the main machine usable.',
    approach: [
      'Wrapped an upstream Whisper server with scripts for deploy, restart, sync, status, and client-side upload behavior.',
      'Kept the default path CPU-first and Pi-friendly while still documenting an optional NVIDIA build for much faster local transcription.',
      'Tied the repo to real agent and voice-note workflows instead of pretending it was a generic speech platform.',
    ],
    outcomes: [
      'Moves transcription off the main workstation so voice-heavy workflows stay pleasant to use.',
      'Keeps the repo easy to inspect and easy to fork because the operational story is laid out plainly.',
      'Pairs cleanly with Voice Bridge and other local agent tooling without pretending to be a hosted product.',
    ],
    proofPoints: [
      'README documents both the Pi-friendly path and the optional GPU path with unusual clarity.',
      'The helper scripts show good day-two operations thinking, not just initial setup thinking.',
      'The repo is honest about its scope: thin wrapper, local/private use, not public Internet hardening.',
    ],
    detailSections: [
      {
        title: 'What it bought me',
        body:
          'Once transcription moved off the main machine, voice notes became something I could use all day instead of something I avoided when the workstation was already busy.',
        bullets: [
          'Safe default bind is localhost, not wide-open network exposure.',
          'The optional GPU path exists for the moments when low latency actually matters, but it stays an explicit opt-in.',
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
    detailSummary:
      'I built this so I could keep playing Cuarenta with friends after we all moved around. The hard part was not just the rules. It was making a four-player card table readable in a browser when captures, reconnects, and mid-hand state get messy fast.',
    homeBlurb:
      'The range piece: front-end craft, rules modeling, and interaction taste in a game that is easy to make confusing.',
    heroStatement:
      'Careful interaction design in a small four-player card game.',
    heroFacts: ['Realtime multiplayer', 'Drag-first move previews', 'Same-browser rejoin flow'],
    challenge:
      'Cuarenta gets messy fast. The UI has to help players read the board, understand captures, and recover from disconnects without turning the whole thing into a rules lecture.',
    role:
      'I owned the React rewrite, the board-centered layout, the Firebase-backed multiplayer flow, the rejoin path, and most of the interaction decisions that make the game readable.',
    approach: [
      'Rebuilt the app around quick lobby creation, shareable rejoin links, and same-browser resume that works when someone refreshes or drops.',
      'Moved move previews onto the board so players can see match versus addition before committing.',
      'Kept the rules and scoring reference inside the app because sending people to a separate tab mid-hand is miserable.',
    ],
    outcomes: [
      'The current prototype is much easier to read and recover inside than the older version.',
      'Recent passes tightened drag-hover behavior, preview badges, and board-card accessibility.',
      'I still would not call it ready for a truly open public audience because the backend is not server-authoritative yet.',
    ],
    proofPoints: [
      'README covers the gameplay surface, reconnect flow, and the remaining public-release blockers with unusual honesty.',
      'The repo already documents anonymous-auth assumptions and the limits of the current trust model.',
      'It is a lighter project than the infrastructure work, but it still carries real state, realtime behavior, and UX complexity.',
    ],
    detailSections: [
      {
        title: 'Why I built it',
        body:
          'This started as a way to keep playing with friends moving around the world. That gave the project a simple bar: make the game easy to start, easy to resume, and easy to read even if you have not touched the rules in a while.',
        bullets: [
          'Host creates a room quickly, shares a short code or link, and players can reconnect in the same browser without much ceremony.',
          'Move previews happen right on the board so captures are visible before someone commits the card.',
        ],
      },
      {
        title: 'What still blocks public release',
        body:
          'The interface is ahead of the trust model. Firebase anonymous auth is a good fit for casual private games, but a malicious client can still try to submit bad state.',
        bullets: [
          'The repo now defaults to emulator-first local setup and a safer config posture.',
          'There is still no server-side move validation, rate limiting, or abuse review path.',
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
    detailSummary:
      'AHTO is my public cut of a broader integration-testing approach. The core idea is simple: drive runs from a matrix, check the hardware and runtime state first, then emit evidence that tells you what failed and why.',
    homeBlurb:
      'The value here is judgment: what to package, what to document, and what to keep out of the public repo.',
    heroStatement:
      'A public testing surface trimmed down to the parts that actually travel well.',
    heroFacts: ['Matrix-driven runs', 'Hardware sync gate', 'Defect and run-summary artifacts'],
    challenge:
      'The hard part was figuring out what could travel into a public repo without dragging along a bunch of private lab assumptions.',
    role:
      'I defined the public boundary, wrote the docs and contracts, and built the example and review flow that makes the testing model inspectable offline.',
    approach: [
      'Centered the repo on the matrix, the artifact contracts, and one end-to-end example instead of the private glue that originally surrounded it.',
      'Kept hardware sync as a first-class gate because stale device state can make an otherwise good test run meaningless.',
      'Built an offline review runner so the public repo demonstrates real orchestration, not just diagrams.',
    ],
    outcomes: [
      'Reviewers can follow the model without credentials, hardware access, or browser-profile secrets.',
      'The repo now shows how rows are classified and how run evidence is emitted, not just how the files are named.',
      'It stays honest about being a portable public slice rather than the whole private system.',
    ],
    proofPoints: [
      'Architecture docs explain the three-layer model clearly: core, adapters, and examples.',
      'The public v0.1 surface is intentionally narrow and reviewable offline.',
      'The repo keeps private environment details out while preserving the workflow itself.',
    ],
    detailSections: [
      {
        title: 'What the repo actually proves',
        body:
          'The public version is intentionally narrow. I wanted someone to be able to read it and understand the testing approach without me hand-waving away the missing pieces.',
        bullets: [
          'Core contracts define row shape, modes, outcomes, and artifact structure.',
          'The review runner validates a profile and matrix, runs the hardware gate, and emits sample artifacts from fixture results.',
          'The example pack shows working matrices versus promoted checkpoints.',
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
      alt: 'Updated AHTO diagram showing matrix input, hardware sync, adapters, and emitted run evidence.',
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
    detailSummary:
      'Three years on Penn Jet\'s electronics and controls team meant real sensors, test fixtures, manufacturing support, and eventually a working small jet engine.',
    homeBlurb: 'Aerospace weight that still feels real.',
    challenge:
      'The work mixed controls thinking with manufacturing reality: sensors, RPM feedback, thrust measurement, and parts that had to survive actual test hardware.',
    role:
      'I worked on the electronics and controls side, including Hall-effect and load-cell sensing, hardware for an electronic ducted fan test rig, and manufacturing support around the engine build.',
    approach: [
      'Built the sensing and fixture work around an electronic ducted fan before risking the real engine.',
      'Worked on RC model plane communications for the design-build-fly competition.',
      'Stayed involved in manufacturing and assembly instead of treating the electronics as a separate world.',
    ],
    outcomes: [
      'The engine ran, and the sensing work had to be solid enough to help convince the university the testing was safe.',
      'The project forced the controls work to answer to real hardware instead of a neat bench-top setup.',
      'The stator machining sequence in the gallery is a good example of how much iteration was happening on the physical side too.',
    ],
    detailSections: [
      {
        title: 'Why the fixtures mattered',
        body:
          'Before touching the real engine, I built fixtures and hardware around an electronic ducted fan so we could see whether the Hall-effect and load-cell setup behaved the way we thought it did. That was the only sane way to learn.',
        bullets: [
          'Those bench tests let us debug the sensing path before the higher-risk engine runs.',
          'The project also included real manufacturing iteration, not just electronics work in isolation.',
        ],
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
    detailSummary:
      'Senior design project for a two-degree-of-freedom solar array drive assembly sized for a 3U CubeSat. My biggest chunk of the work was the body and yaw mechanism, especially the two-plate internal gear design and the machining needed to make it real.',
    homeBlurb: 'One of the strongest archive items because the evidence packet is unusually solid.',
    challenge:
      'The project packed controls, mechanism design, manufacturing, and integration into one tight package. The hard part was getting the moving parts and wiring to coexist instead of solving each subsystem in isolation.',
    role:
      'I designed and manufactured the body of the system, built the two-plate internal gear mechanism for yaw rotation, generated the CNC toolpaths, and helped with final integration. When the top wiring started tangling after a full revolution, I also pushed the slip-ring fix and integrated it into the assembly.',
    approach: [
      'Spent the early phase on requirements, decision matrices, and design iteration before committing to hardware.',
      'Used a two-plate internal gear layout to keep the yaw mechanism compact enough for the 3U CubeSat envelope.',
      'Generated Mastercam toolpaths, ran the parts on a 3-axis mill, and handled the slip-ring integration when the wiring problem showed up late.',
    ],
    outcomes: [
      'The project made me work across CAD, machining, assembly, and controls instead of hiding inside one lane.',
      'The slip-ring fix solved the wire-entanglement problem without giving up rotational range in software.',
      'The final evidence pack is strong because the project was real from requirements all the way to hardware.',
    ],
    detailSections: [
      {
        title: 'Where the real integration problem showed up',
        body:
          'The most memorable issue did not appear in CAD. After we got the top and bottom plates built and started integrating electronics, the upper wiring tangled after one full revolution. Fixing that cleanly mattered more than pretending the original design had already thought of everything.',
        bullets: [
          'I suggested adding slip rings instead of capping the motion range in software.',
          'Found the parts, made the fixtures, and integrated the slip ring into the existing build.',
          'That late-stage fix is a big part of why the project still feels honest to me.',
        ],
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
    detailSummary:
      'Graduate robotics project that ended with a 7-DOF arm detecting blocks and stacking them on the real robot, not just in simulation.',
    homeBlurb: 'Compact robotics proof: kinematics, planning, and hardware validation in one project.',
    challenge:
      'The interesting part was the jump from ROS and Gazebo to hardware. Planning that looks fine in sim gets much more honest once a real arm has to hit the same moves.',
    role:
      'I implemented the kinematics stack and planners, tested them in simulation, then carried them onto the lab arm and added the final block-detection and stacking pipeline.',
    approach: [
      'Wrote forward, inverse, and velocity kinematics plus RRT and potential-field planning in Python with ROS.',
      'Used simulation heavily first, then compared what broke or shifted once the hardware entered the picture.',
      'Added static block detection and stacking logic so the final deliverable was an actual task, not just a planner demo.',
    ],
    outcomes: [
      'Got the stack from kinematics through planning to a real block-stacking run.',
      'The sim-to-hardware gap ended up being part of the project, not an afterthought.',
      'It is still one of the cleaner examples of how I like to develop robotics code: test early in simulation, then get honest with hardware.',
    ],
    detailSections: [
      {
        title: 'Simulation first, hardware second',
        body:
          'I leaned on simulation early because it let me move faster on kinematics and planning. But the project only really became interesting once the same code had to survive contact with the real arm.',
        bullets: [
          'The final stack included block detection and a real pick-and-place task, not just free-space motion.',
          'Comparing simulation behavior with the hardware run was part of the learning, not a separate cleanup step.',
        ],
      },
    ],
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
    detailSummary:
      'Graduate mechatronics project built around a small ESP32 car that had to follow walls and find an IR beacon during a real demo.',
    homeBlurb: 'Supporting mechatronics evidence with a real circuit and a real demo.',
    challenge:
      'The control logic was only half the work. The beacon had to be detectable from across the room, and the sensing chain had to be good enough that the car did not fall apart in the live run.',
    role:
      'I wrote the ESP32 firmware in C++, designed and soldered the filtered double op-amp circuit for the IR detector, and tuned the wall-following and beacon-finding behavior.',
    approach: [
      'Used ultrasound sensors for wall following and tuned thresholded control around the actual chassis.',
      'Built the analog front end myself so the IR beacon could be picked up from several meters away.',
      'Kept an eye on timing and GPIO behavior because the system had to survive a course demo, not just bench testing.',
    ],
    outcomes: [
      'Ended up with a car that could wall-follow, acquire the beacon, and show the full sensing chain working together.',
      'The hand-soldered analog front end is still my favorite part because it made the demo much more than an off-the-shelf sensor exercise.',
      'It also connects cleanly to the later embedded and control work in the portfolio.',
    ],
    detailSections: [
      {
        title: 'What had to be built from scratch',
        body:
          'Using an ESP32 was the easy sentence on the resume. The more interesting part was building the IR detection circuit myself so the beacon was actually visible from the distance the demo required.',
        bullets: [
          'That meant reading the component data sheets, building the analog front end, and then tuning the full behavior around the real car.',
        ],
      },
    ],
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
    detailSummary:
      'I wanted to see how close I could get to NES Mario inside MATLAB. That meant building the game loop, sprites, collisions, sound, and a side-scrolling level in an environment that absolutely does not hand you a platformer for free.',
    homeBlurb: 'Honest evidence that interactive systems and game feel showed up early.',
    challenge:
      'Build something recognizably Mario-like inside MATLAB without a game engine, while keeping motion, collisions, and sound responsive enough to feel playable.',
    role:
      'I built the game loop, sprite handling, collision logic, level layout, timing, and sound behavior.',
    approach: [
      'Split Mario, blocks, and coins into separate classes instead of stuffing everything into one long script.',
      'Preloaded images and audio so the game stayed responsive enough to feel like a game instead of a plotting exercise.',
      'Used simple physics, collision checks, and a long scrolling level to get as close as I could to the feel of the original.',
    ],
    outcomes: [
      'Got a recognizable Mario clone running in MATLAB, which still makes me laugh a little.',
      'The project taught me a lot about interactive state and performance in an environment that fights you on both.',
      'It is an early project, but it is one of the clearest signs that I liked building interactive systems long before the rest of the portfolio caught up.',
    ],
    detailSections: [
      {
        title: 'Trying to make MATLAB feel like Mario',
        body:
          'The fun of this project was the mismatch between the tool and the goal. MATLAB is great for many things. A side-scrolling platformer is not one of them. That was exactly why it was worth doing.',
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
    challenge:
      'The useful part of this project was learning what machining mistakes look like in real parts, not just in a CAD model.',
    role:
      'Designed, machined, and assembled the engine for the course build.',
    approach: [
      'Worked through tolerances, part fit, and assembly issues on the shop floor.'
    ],
    outcomes: [
      'Ended with a working engine and better instincts around fit, assembly, and rework.'
    ],
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
    challenge:
      'Different subassemblies had to fit and move together without colliding once the full build came together.',
    role:
      'Worked on the bevel-gear drive and helped fabricate the sub-team hardware.',
    approach: [
      'Focused on the drive-train geometry and the practical fit-up between moving parts and the rest of the team build.'
    ],
    outcomes: [
      'A short project page, but it still captures real mechanism-design and fabrication work.'
    ],
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
    challenge:
      'This was a simple prototype, but it still had to be built and tested honestly enough that the results meant something.',
    role:
      'Helped build the turbine and run the tests.',
    approach: [
      'Worked on the prototype hardware, then used the recorded test runs to compare how the design behaved in practice.'
    ],
    outcomes: [
      'Produced a working prototype and recorded tests that make the project easy to verify.'
    ],
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
    challenge:
      'The first structure buckled under load, so the real project became the redesign.',
    role:
      'Helped work through the redesign and rebuild after the first version failed.',
    approach: [
      'Used the failure of the first tower to rethink the structure, then rebuilt and tested the revised version.'
    ],
    outcomes: [
      'The better lesson here was not the first design. It was seeing the failure, changing the structure, and getting the second pass to hold up better.'
    ],
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
