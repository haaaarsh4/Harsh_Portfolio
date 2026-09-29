export interface ExperienceModal {
  title: string;
  subtitle: string;
  image: string;
  body: string;
  links: { label: string; url: string }[];
  preloadImages?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  image: string;
  modal: ExperienceModal;
}

export interface ResearchItem {
  role: string;
  company: string;
  date: string;
  image: string;
  modal: ExperienceModal;
}

export interface ProjectItem {
  slug: string;
  title: string;
  award: string;
  category: string;
  summary: string;
  description: string;
  stack: string;
  tags: string[];
  image: string;
  link: string;
  linkLabel: string;
  featured: boolean;
  modal: ExperienceModal;
}

export const siteConfig = {
  name: "Harsh Upadhyay",
  navLogoText: "Harsh Upadhyay",
  location: "Hamilton, Ontario",
  university: "McMaster University",
  email: "upadhyayharsh@mcmaster.ca",
  github: "https://github.com/haaaarsh4",
  linkedin: "https://www.linkedin.com/in/harsh-upadhyay--/",
  resumePdf: "/Harsh_Upadhyay_Resume.pdf",
  about: {
    paragraphs: [
    "I have always been drawn to questions. Not because I have always known the answers, but because I love the feeling of discovering something I did not understand before. When I came to McMaster to study Computer Science, I thought I was simply choosing a field I enjoyed. Somewhere along the way, however, programming became much more than that. It became a way to turn ideas into something real, and a way to keep following my curiosity wherever it led me.",
    "<br /> That curiosity has taken me through research at McMaster and OCAD University, where I have explored artificial intelligence, machine learning, and language, as well as through my work with the Government of Ontario, where I saw how deeply technology can affect the people who rely on it. Each experience has given me a different way of looking at the world, but they have all left me with the same feeling: there is always something more to learn, something new to build, and another question worth asking.",
    "<br /> I think that is what I value most. I love learning, I love building, and I love the moments when an idea that once existed only in my head becomes something real. I am still discovering where that curiosity will take me, but I feel incredibly fortunate that I get to keep following it, one question and one idea at a time."    ],
    quote: { label: "April 2026", text: "Keep shipping. Keep learning." },
    polaroidSrc: "/CN Tower1.jpeg",
    polaroidCaption: "Toronto, Ontario · 2024",
  },
};

export const experience: ExperienceItem[] = [
  {
    role: "IT Systems Assistant Co-op",
    company: "Government of Ontario - MPBSDP",
    date: "May 2026 — August 2026",
    image: "/222Jarvis.jpeg",
    modal: {
      title: "Government of Ontario",
      subtitle: "IT Systems Assistant Co-op · MPBSDP · May 2026 – August 2026",
      image: "/222Jarvis.jpeg",
      body: "Contributed to the introduction of Oracle Analytics Cloud Data Visualization across the Ontario Public Service by supporting the development of optimized subject areas, implementing indexing to enable advanced analytics features, and creating interactive workbooks. Prepared technical documentation and enablement materials, and provided support to over 200 authors through workshops to help authors successfully adopt the new platform.<br /><br />Supported the development and validation of the Oracle Analytics Cloud Detailed Schedules of Payments (DSP) report, ensuring the accuracy and reliability of complex financial reporting across multiple fiscal years.<br /><br /> Contributed to the development of the Procurement and Contract Tracking Tool (PCTT), helping deliver reporting solutions that provided ministries with greater visibility into procurement activities, vendor records, and contract information.",
      links: [],
    },
  },
  {
    role: "Business Analyst Co-op",
    company: "Government of Ontario - MPBSDP",
    date: "May 2025 — December 2025",
    image: "/5700Yonge.jpeg",
    modal: {
      title: "Government of Ontario",
      subtitle: "Business Analyst Co-op · MPBSDP · May 2025 – December 2025",
      image: "/5700Yonge.jpeg",
      body: "Enhanced Match and Merge workflows, increasing automated throughput from 30% to 70% by leading Agile grooming and refinement sessions, translating business requirements into technical tasks, and delivering implementation-ready Jira user stories.<br /><br />Performed end-to-end system and integration validation using REST APIs and command-line tools such as curl and httpie, simulating real-world workflows to identify defects, validate edge cases, and ensure business rules were correctly implemented.<br /><br />Conducted data validation and migration feasibility analysis using Python and SQL, comparing legacy postal code records against external datasets and GeoJSON boundaries to identify reliable, low-effort opportunities for data integration.",
      links: [],
    },
  },
];

export const research: ResearchItem[] = [
  {
    role: "Research Assistant",
    company: "Abundant Intelligences",
    date: "May 2026 — December 2026",
    image: "VALab.webp",
    modal: {
      title: "Abundant Intelligences",
      subtitle: "Research Assistant · May 2026 – December 2026",
      image: "VALab.webp",
      body: "Conducting research in NLP and machine learning, with a focus on tokenization for Indigenous and polysynthetic languages. Investigated how morphological structure can inform tokenization strategies and the limitations of traditional approaches such as BPE, which are primarily optimized for languages like English.<br /><br />Contributed to the Archer Vocal Collaboration project, an AI-driven robotic system that listens to and accompanies a singer in real time. Worked across speech and language components including real-time pitch and rhythm analysis, accompaniment selection, low-resource Cree-to-English translation, sentiment analysis, and neural voice synthesis.<br /><br />Explored machine learning approaches for building language technologies in low-resource settings, combining NLP, audio processing, and generative AI to create culturally responsive interactive systems.",
      links: [
        {
          label: "Lab Page",
          url: "https://abundant-intelligences.net/tkaronto-pod/",
        },
      ],
    },
  },
  {
    role: "Research Assistant",
    company: "D⁴ Sustainable Futures Lab",
    date: "October 2025 — Present",
    image: "DSB.jpg",
    modal: {
      title: "To be added soon",
      subtitle: "McMaster University · Oct 2025 – Present",
      image: "DSB.jpg",
      body: ":)",
      links: [
        {
          label: "Lab Page",
          url: "https://ekmekcioglu.website/lab/",
        }
      ],
    },
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "archer-robot-vocal-collaboration",
    title: "Archer VCS",
    award: "AI · Real-Time Audio",
    category: "Machine Learning",
    summary: "A real-time vocal collaboration system that listens to a singer and generates responsive harmonies.",
    description: "A real-time AI and audio system that listens to a singer and generates musical responses through a live pitch, rhythm, harmony, and vocal synthesis pipeline. Audio is captured from a microphone and processed through pitch detection using YIN or RMVPE, rhythm and phrase analysis, and a harmony engine that selects responses such as unison, thirds, fifths, octaves, drones, and call-and-response patterns. A DSP-based vocable synthesizer then renders the response using sinusoidal, wavetable, or formant synthesis, with an optional RVC neural voice conversion stage for neural singing voice rendering. The project also includes a FastAPI research web application with Cree morphological analysis, a custom Cree-to-English translation model, RoBERTa sentiment analysis with a VADER fallback, offline transcription using faster-whisper, live streaming captions using Vosk, pitch analysis, and a notes-grounded chat assistant. The neural voice conversion system is isolated in a separate FastAPI sidecar so the heavier PyTorch and RVC stack does not block the real-time audio pipeline.",
    stack: "Python · FastAPI · PyTorch · RVC · RMVPE · YIN · faster-whisper · Vosk",
    tags: [
      "Python",
      "FastAPI",
      "Real-Time Audio",
      "Pitch & Rhythm Analysis",
      "DSP Audio Synthesis",
      "PyTorch",
      "RVC Voice Conversion",
      "faster-whisper",
      "Vosk",
      "Cree NLP"
    ],
    image: "/ArcherBot.jpg",
    link: "https://github.com/haaaarsh4/Archer-Robot-Vocal-Collaboration-System",
    linkLabel: "View Code",
    featured: true,
    modal: {
      title: "Archer Vocal Collaboration System",
      subtitle: "AI · Real-Time Audio",
      image: "/AVCS.png",
      body: "Archer is a real-time vocal collaboration system designed to listen to a singer and respond as a musical partner rather than simply process audio after the fact. The live pipeline captures microphone input, tracks pitch with YIN or RMVPE, analyzes rhythm and phrasing, and uses a configurable harmony engine to decide how the system should respond. Responses can take forms such as unison, thirds, fifths, octaves, drones, and call-and-response patterns.<br /><br />The selected response is rendered through a DSP-based vocable synthesizer using techniques such as sinusoidal, wavetable, and formant synthesis. An optional RVC voice-conversion sidecar adds neural singing voice generation while keeping the heavier PyTorch workload separate from the real-time audio loop.<br /><br />Alongside the musical pipeline, the project includes a FastAPI research application with Cree morphological analysis, Cree-to-English translation, sentiment analysis, faster-whisper transcription, Vosk live captions, pitch analysis, and a notes-grounded assistant. The architecture is designed so individual model-dependent components can fail without taking down the rest of the interactive system.",
      links: [
        {
          label: "Documentation",
          url: "https://archer-robot-vocal-collaboration-system.onrender.com/"
        },
        {
          label: "View Code",
          url: "https://github.com/haaaarsh4/Archer-Robot-Vocal-Collaboration-System"
        }
      ],
    },
  },
  {
    slug: "palimpsest",
    title: "Palimpsest",
    award: "Full-Stack · Web Archive",
    category: "Web Development",
    summary: "A web application for tracing how websites change across archived snapshots.",
    description: "A full-stack web application that lets users explore how websites have changed over time using snapshots from the Internet Archive's Wayback Machine. The application retrieves a URL's snapshot history through the Wayback CDX API, collapses consecutive snapshots with identical content, and presents the remaining changes through an interactive timeline. Instead of performing a raw text diff, the backend parses archived pages into DOM trees and compares structured content blocks such as headings, paragraphs, links, images, and list items to identify additions, removals, and edits. Archived pages are rendered inside sandboxed iframes with scripts removed to prevent archived JavaScript and styling from affecting the application. Palimpsest also stores notes and cached snapshots in SQLite and includes an optional Claude-powered Insight panel that uses web search to research the real-world context surrounding a change.",
    stack: "Node.js · Express · JavaScript · SQLite · Wayback Machine · Anthropic API",
    tags: [
      "Node.js",
      "Express",
      "JavaScript",
      "SQLite",
      "Wayback Machine CDX API",
      "DOM Parsing",
      "Diff Algorithms",
      "Claude API",
      "Web Archiving"
    ],
    image: "/archive.jpg",
    link: "https://palimpsest-fj3g.onrender.com/",
    linkLabel: "Live Demo",
    featured: true,
    modal: {
      title: "Palimpsest",
      subtitle: "Full-Stack · Web Archive",
      image: "/Palimpsest.png",
      body: "Palimpsest is a web application for exploring how websites change over time. It uses the Internet Archive's Wayback Machine to retrieve a site's snapshot history, removes consecutive snapshots that contain no meaningful change, and presents the remaining history through an interactive timeline.<br /><br />The interesting part is how the changes are detected. Rather than comparing archived pages as raw text, the backend parses each page into a DOM tree and compares structured elements such as headings, paragraphs, links, images, and list items. This makes it possible to distinguish meaningful additions, removals, and edits from superficial differences in formatting or page structure.<br /><br />Archived pages are rendered in sandboxed iframes with scripts removed, while SQLite stores notes and cached snapshots. An optional Claude-powered Insight panel can also research the surrounding context of a detected change, connecting the structural difference in an archived page with information from the wider web.",
      links: [
        {
          label: "Live Demo",
          url: "https://palimpsest-fj3g.onrender.com/"
        },
        {
          label: "View Code",
          url: "https://github.com/haaaarsh4/Palimpsest"
        }
      ],
    },
  },
  {
    slug: "recur",
    title: "Recur",
    award: "AI · Program Synthesis",
    category: "Machine Learning",
    summary: "An AI workspace that turns repeated questions into verified programs that run locally without another model call.",
    description: "Recur is an AI workspace built around a simple idea: repeated interactions with a language model can become reusable programs rather than being solved from scratch every time. The system profiles incoming requests, identifies recurring task families, and stores the model's responses as evidence rather than treating them as ground truth. After enough repetitions, Recur uses a best-first search over a small typed dataflow language to synthesize a program that reproduces the demonstrated computation. Each candidate is executed against the original demonstrations and then verified through consistency checks, leave-one-out recompilation, generated in-domain inputs, decline behaviour, and a lightweight neural acceptance head. The resulting program is stored in a registry with its demonstrations, verification results, and execution metrics. When a future request matches a compiled program, Recur offers the program to the user and, once accepted, answers locally through its deterministic virtual machine without making another model call. The system deliberately separates computation from language generation, so model wording can provide evidence about how an answer should be expressed without being trusted as evidence of what is mathematically or logically true. When no verified computation can explain the evidence, the system declines or falls back to a verified lookup rather than silently guessing.",
    stack: "React · Vite · Node.js · Express · JavaScript · Ollama · Vercel",
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Program Synthesis",
      "Typed Dataflow IR",
      "Verification & Testing",
      "Neural Acceptance Head",
      "Ollama",
      "Vercel"
    ],
    image: "/recur.jpg",
    link: "https://neural-recurr.vercel.app/",
    linkLabel: "Live Demo",
    featured: true,
    modal: {
      title: "Recur",
      subtitle: "AI · Program Synthesis",
      image: "/recur.png",
      body: "Recur explores what happens when repeated interactions with an AI system can be turned into reusable computation. Instead of sending the same type of request to a language model indefinitely, Recur collects demonstrations and looks for recurring task patterns that can be expressed as small programs.<br /><br />Its compiler searches a typed dataflow language composed of readers, transforms, and emitters. Candidate programs are executed against the original demonstrations, allowing the system to test whether a proposed computation actually explains the observed examples. Programs are then subjected to multiple verification stages, including consistency checks, leave-one-out recompilation, generated in-domain inputs, explicit decline behaviour, and a lightweight neural acceptance head.<br /><br />Once a program has been accepted, it is stored in a registry together with its demonstrations, verification results, and runtime information. Future matching requests can then be executed locally through Recur's deterministic virtual machine without another model call. The system keeps language generation separate from computation, using model output as evidence for synthesis while requiring computed values to come from the verified program itself.",
      links: [
        {
          label: "Live Demo",
          url: "https://neural-recurr.vercel.app/"
        },
        {
          label: "View Code",
          url: "https://github.com/haaaarsh4/Recur"
        }
      ],
    },
  },
  {
    slug: "arena",
    title: "Arena",
    award: "Systems Programming",
    category: "Systems Programming",
    summary: "A real-time Go game server hosting live AI competitions between language models.",
    description: "Arena is a real-time Go game server that hosts head-to-head AI competitions between multiple language models, streamed live through WebSocket rooms. It runs concurrent multi-game engines for both turn-based and simultaneous matches, with each game isolated in its own goroutine loop to keep matches independent and race-free. A custom LLM parser strips reasoning-model 'think' blocks from model outputs, backed by an automated 3x fallback retry loop to handle malformed or incomplete responses. The platform is fronted by a Next.js 15 dashboard that visualizes live match states in real time alongside a dynamic, automatically updating ELO leaderboard.",
    stack: "Go · WebSockets · Next.js",
    tags: ["Go", "WebSockets", "Concurrency", "LLM Integration", "Next.js"],
    image: "/arena1.png",
    link: "https://github.com/upadhyay1302/arena",
    linkLabel: "View Code",
    featured: true,
    modal: {
      title: "Arena",
      subtitle: "Systems Programming",
      image: "/arena1.png",
      body: "Arena is a real-time game server built to let language models compete against one another in live matches. Games are streamed through WebSocket rooms, allowing the frontend to reflect moves and game state as they happen rather than waiting for an entire match to finish.<br /><br />The backend runs multiple games concurrently in Go, with each match isolated inside its own goroutine loop. This keeps independent games from interfering with one another while allowing the server to manage many active matches at once. The system supports both turn-based and simultaneous game engines and includes custom handling for model responses that contain reasoning-model 'think' blocks or malformed output.<br /><br />A Next.js dashboard sits on top of the server and visualizes live matches alongside an automatically updating ELO leaderboard. The result is a project that brings together concurrency, WebSocket communication, game-state management, and practical LLM integration in one system.",
      links: [{ label: "View Code", url: "https://github.com/upadhyay1302/arena" }],
    },
  },
  {
    slug: "workout-tracker",
    title: "Workout Tracker",
    award: "Full-Stack · Production",
    category: "Web Development",
    summary: "A production-ready workout platform with authenticated dashboards and a server-side AI coach.",
    description: "A full-stack workout tracking platform built with Next.js App Router, TypeScript, and PostgreSQL. The application uses NextAuth for authentication and separates authenticated user workflows from the public application, with workout information organized into structured database-backed records and dashboards for viewing and managing training activity. The project also includes a server-side AI coach that sends requests through a custom API route to OpenRouter, keeping the model integration on the server rather than exposing provider credentials in the browser. Together, the application combines a modern Next.js frontend, persistent relational data, authenticated sessions, server-side logic, and an external AI service into one production-oriented web application.",
    stack: "Next.js · TypeScript · PostgreSQL · NextAuth · OpenRouter AI",
    tags: ["Next.js (App Router)", "TypeScript", "PostgreSQL", "Server Components", "JWT Authentication", "OAuth (NextAuth)", "OpenRouter AI (Server API)"],
    image: "/gym.jpeg",
    link: "https://myworkout-tracker.vercel.app/",
    linkLabel: "Live Demo",
    featured: true,
    modal: {
      title: "Workout Tracker",
      subtitle: "Full-Stack · Production",
      image: "/Workout Tracker.png",
      body: "Workout Tracker is a full-stack training platform built around authenticated user accounts, persistent workout data, and a dashboard for managing training activity. The application uses Next.js App Router and TypeScript on the frontend and application layer, with PostgreSQL providing structured persistence for workout records.<br /><br />Authentication is handled through NextAuth, keeping user-specific workflows behind authenticated sessions while separating them from the public application. The project also includes a server-side AI coach exposed through a custom API route, allowing the application to communicate with OpenRouter without exposing provider credentials in the browser.<br /><br />The result is a complete application rather than an isolated frontend. Authentication, relational data, server-side application logic, user-facing dashboards, and an external AI service are all connected through a single Next.js architecture.",
      links: [{ label: "Live Demo", url: "https://myworkout-tracker.vercel.app/" }],
    },
  },
  {
    slug: "http-server-cpp",
    title: "HTTP Server (C++)",
    award: "Systems Programming",
    category: "Systems Programming",
    summary: "A raw-socket HTTP server comparing a thread-pool model against an epoll event loop.",
    description: "A low-level HTTP server project built in C++ from raw POSIX socket primitives rather than a web framework, with two separate concurrency implementations. The first server uses a thread pool: the main thread accepts connections and dispatches work to worker threads so multiple requests can be processed concurrently. The second uses non-blocking sockets with Linux epoll and a single event loop following an event-driven Reactor-style design, allowing the server to monitor many connections without creating a thread for each client. The repository also includes a client, shared request-handling utilities, sample content, and wrk-based benchmarks. Under the repository's recorded benchmark workload, the epoll implementation reached about 34,000 requests per second compared with about 4,600 requests per second for the thread-pool implementation, illustrating the performance trade-offs between thread-based and event-driven I/O.",
    stack: "C++ · Sockets · Epoll · Thread Pool · Benchmarking",
    tags: ["C++", "HTTP Server", "Sockets & Epoll", "Concurrency / Thread Pool", "Benchmarking"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    link: "https://github.com/haaaarsh4/http_server",
    linkLabel: "View Code",
    featured: false,
    modal: {
      title: "HTTP Server (C++)",
      subtitle: "Systems Programming",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
      body: "This project builds an HTTP server from the ground up using POSIX sockets, without relying on a web framework to handle the networking layer. The goal was to explore how different concurrency models behave when the server has to manage many simultaneous connections.<br /><br />One implementation uses a thread pool, where the main thread accepts connections and dispatches requests to worker threads. The second uses non-blocking sockets with Linux epoll and a single event-driven loop, allowing the server to monitor many connections without assigning a dedicated thread to each client.<br /><br />The repository also includes a client, shared request-handling utilities, sample content, and wrk-based benchmarking. Under the recorded benchmark workload, the epoll implementation reached roughly 34,000 requests per second compared with roughly 4,600 requests per second for the thread-pool implementation, making the project a practical comparison of thread-based and event-driven server design.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/http_server" }],
    },
  },
  {
    slug: "linksnap",
    title: "LinkSnap",
    award: "Systems Programming",
    category: "Systems Programming",
    summary: "A high-performance URL shortener with dedupe, caching, and a Next.js frontend.",
    description: "A full-stack URL shortening application built around a Python backend and a separate browser frontend. A user submits a long URL through the frontend, which sends a POST request to the backend; the server validates the input, generates a compact short code, stores the mapping in persistent storage, and returns the shortened link. When the short link is later opened, the backend resolves the code and responds with an HTTP redirect to the original destination. The repository separates the frontend from the backend and also includes a QR scanner utility and automated test code, making the project a practical exploration of HTTP request handling, REST-style API design, persistence, validation, and frontend-backend integration.",
    stack: "Python · aiohttp · SQLite · Next.js · Tailwind CSS",
    tags: ["Python (aiohttp)", "RESTful API", "SQLite", "Caching Layer", "Next.js Frontend", "TypeScript", "Tailwind CSS"],
    image: "/URLShortener.jpg",
    link: "https://github.com/haaaarsh4/LinkSnap",
    linkLabel: "View Code",
    featured: true,
    modal: {
      title: "LinkSnap",
      subtitle: "Systems Programming",
      image: "/LinkSnap.png",
      body: "LinkSnap is a full-stack URL shortener built around a Python backend and a separate browser frontend. A user submits a long URL, the backend validates it, generates a compact identifier, persists the mapping, and returns a shortened link. Opening that link later resolves the identifier and redirects the user to the original destination.<br /><br />The project keeps the frontend and backend separate, with the backend responsible for HTTP request handling, validation, persistence, and URL resolution. SQLite provides the storage layer, while the browser application provides the user-facing workflow for creating shortened links.<br /><br />The repository also includes a QR scanner utility and automated test code, extending the project beyond a basic URL-shortening endpoint into a broader exploration of API design, persistence, frontend-backend communication, and practical HTTP behaviour.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/LinkSnap" }],
    },
  },
  {
    slug: "activetrack",
    title: "ActiveTrack",
    award: "Machine Learning",
    category: "Machine Learning",
    summary: "An ML pipeline that turns raw workout data into personalized training insights.",
    description: "A sensor-data machine learning project that turns accelerometer and gyroscope recordings into exercise classifications and repetition counts. The dataset was collected with a Meta Motion sensor worn during five barbell exercises: bench press, deadlift, overhead press, rowing, and squats, with both medium and heavy sets recorded through a Bluetooth-connected phone. The processing pipeline loads the raw CSV files into separate accelerometer and gyroscope dataframes, merges and resamples the signals, visualizes differences across exercises and participants, and removes anomalous readings using methods including IQR, Chauvenet's Criterion, and Local Outlier Factor, with Chauvenet's Criterion selected for the final outlier treatment. Missing values are interpolated and additional numerical, temporal, frequency, and cluster-based features are engineered before model selection and hyperparameter tuning. The project evaluates models with train/test splits, forward feature selection, and grid search, then applies signal filtering to support automated repetition counting.",
    stack: "Python · Scikit-learn · TensorFlow · Pandas · NumPy",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
    image: "/activetrack.jpg",
    link: "https://github.com/haaaarsh4/ActiveTrack",
    linkLabel: "View Code",
    featured: true,
    modal: {
      title: "ActiveTrack",
      subtitle: "Machine Learning",
      image: "/activetrack.jpg",
      body: "ActiveTrack uses motion sensor data to recognize barbell exercises and estimate repetitions from the movement itself. The dataset was collected with a Meta Motion sensor across bench press, deadlift, overhead press, rowing, and squats, with both medium and heavy sets recorded through a Bluetooth-connected phone.<br /><br />The pipeline begins with raw accelerometer and gyroscope data, which is cleaned, merged, resampled, and visualized before model development. Several approaches to anomalous data detection are explored, including IQR, Chauvenet's Criterion, and Local Outlier Factor, followed by missing-value interpolation and the creation of numerical, temporal, frequency, and cluster-based features.<br /><br />The resulting features are used for model selection and hyperparameter tuning through train/test evaluation, forward feature selection, and grid search. Signal filtering is then applied to support automated repetition counting, connecting the machine learning pipeline back to the original sensor measurements.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/ActiveTrack" }],
    },
  },
  {
    slug: "jira-automation-suite",
    title: "JIRA Automation Suite",
    award: "Automation",
    category: "Automation",
    summary: "A workflow tool that bulk-updates JIRA issues and exports them to Excel.",
    description: "A web-based JIRA workflow automation tool built with Next.js and JavaScript. The application connects to the JIRA REST API to retrieve issue information, apply bulk updates, and streamline repetitive ticket-management tasks through a browser-based interface. It also transforms issue data into an Excel-ready export, making it easier to move structured JIRA information into reporting or spreadsheet workflows. The project was designed as a practical automation proof of concept that brings API integration, frontend interaction, and data export together in a single workflow.",
    stack: "Next.js · JavaScript · JIRA API · REST · Excel",
    tags: ["Next.js", "JavaScript", "JIRA API Integration", "REST API", "Excel"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80",
    link: "https://jira-automation-tool.vercel.app/",
    linkLabel: "Live Demo",
    featured: false,
    modal: {
      title: "JIRA Automation Suite",
      subtitle: "Automation",
      image: "/JIRA Automation Suite.png",
      body: "JIRA Automation Suite was built to remove repetitive work from common JIRA workflows. The browser-based application connects directly to the JIRA REST API, allowing issue information to be retrieved and multiple issues to be updated through a single interface instead of handling each ticket individually.<br /><br />The application also transforms retrieved issue data into an Excel-ready format, connecting JIRA workflows with the spreadsheet-based reporting processes that often follow them. This keeps the entire workflow inside one tool rather than requiring repeated manual exports and updates.<br /><br />The project brings together a Next.js frontend, REST API integration, bulk workflow operations, and structured data export into a focused automation tool designed around a practical developer workflow.",
      links: [{ label: "Live Demo", url: "https://jira-automation-tool.vercel.app/" }],
    },
  },
  {
    slug: "echosphere",
    title: "EchoSphere",
    award: "Automation",
    category: "Automation",
    summary: "A voice-controlled desktop assistant with NLP command parsing and web scraping.",
    description: "A Python-based desktop voice assistant designed around spoken commands and modular task handling. The project combines speech recognition with natural language command parsing so that spoken requests can be interpreted and routed to different actions instead of requiring traditional keyboard input. It also uses BeautifulSoup for web scraping, allowing the assistant to retrieve information from web pages as part of its command workflow. The overall design brings together voice input, command processing, system automation, and web-based information retrieval into an interactive desktop utility.",
    stack: "Python · Speech Recognition · NLP · BeautifulSoup",
    tags: ["Python", "Speech Recognition", "NLP & Command Parsing", "BeautifulSoup (Web Scraping)"],
    image: "/athena1.png",
    link: "https://github.com/haaaarsh4/EchoSphere-",
    linkLabel: "View Code",
    featured: false,
    modal: {
      title: "EchoSphere",
      subtitle: "Automation",
      image: "/athena1.png",
      body: "EchoSphere is a Python desktop assistant built around spoken interaction. Instead of requiring every action to begin with a keyboard command, the application listens for speech, interprets the request through natural language command parsing, and routes it to the appropriate task.<br /><br />The assistant also incorporates BeautifulSoup-based web scraping, allowing commands to trigger information retrieval from web pages. This connects the voice interface with programmatic access to external information rather than limiting the system to predefined local actions.<br /><br />The project brings together speech recognition, language-based command interpretation, desktop automation, and web scraping in a compact application, providing an early exploration of how natural language can serve as an interface for software actions.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/EchoSphere-" }],
    },
  },
  {
    slug: "crypto-price-prediction",
    title: "Crypto Price Prediction",
    award: "Machine Learning",
    category: "Machine Learning",
    summary: "A TensorFlow forecasting model blending market data with news sentiment.",
    description: "A Bitcoin forecasting project that combines historical market data with sentiment analysis of edits made to the Bitcoin Wikipedia page. Historical BTC prices are collected through yfinance, while Wikipedia revision history is retrieved through the MediaWiki client and the revision comments are classified with a pretrained Hugging Face Transformers sentiment model. The data is then prepared for time-series forecasting by scaling closing prices, aggregating sentiment by date, and creating sliding windows in which the previous 60 days are used to predict the following day's price. A three-layer LSTM network with dropout is trained with the Adam optimizer and mean squared error loss, and its predictions are compared against unseen market data through actual-versus-predicted visualizations. The project explores how traditional time-series signals and external sentiment information can be brought together in a neural forecasting pipeline.",
    stack: "Python · TensorFlow · Yahoo Finance · Sentiment Analysis",
    tags: ["Python", "TensorFlow", "Yahoo Finance", "Wikipedia"],
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=900&q=80",
    link: "https://github.com/haaaarsh4/Crypto-Price-Prediction",
    linkLabel: "View Code",
    featured: false,
    modal: {
      title: "Crypto Price Prediction",
      subtitle: "Machine Learning",
      image: "/bitcoin.jpeg",
      body: "This project explores whether market information can be combined with an external signal to build a richer Bitcoin forecasting pipeline. Historical BTC prices are collected through Yahoo Finance, while Bitcoin Wikipedia revision history is retrieved through the MediaWiki API and the revision comments are classified using a pretrained Hugging Face sentiment model.<br /><br />The data is aligned by date and transformed into sliding time-series windows, using the previous 60 days to predict the following day's price. A three-layer LSTM network with dropout is trained using the Adam optimizer and mean squared error loss, with the resulting predictions evaluated against unseen market data.<br /><br />The project brings together data collection, sentiment analysis, time-series preprocessing, recurrent neural networks, and model evaluation in one pipeline, exploring how traditional numerical signals and external textual information can be incorporated into the same forecasting problem.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/Crypto-Price-Prediction" }],
    },
  },
  {
    slug: "hcn-generator",
    title: "HCN Generator",
    award: "Web Dev · QA Tool",
    category: "Web Development",
    summary: "A QA utility generating Luhn-valid synthetic health card numbers for testing.",
    description: "A lightweight web-based QA utility that generates valid Health Card Numbers using the Luhn algorithm, enabling testers to validate healthcare systems with compliant synthetic data instead of real patient information.",
    stack: "JavaScript · HTML5 · CSS3 · Luhn Algorithm",
    tags: ["JavaScript", "HTML5", "CSS3", "Luhn Algorithm"],
    image: "/hcn.jpg",
    link: "https://hcngen.vercel.app/",
    linkLabel: "Live Demo",
    featured: false,
    modal: {
      title: "HCN Generator",
      subtitle: "Web Dev · QA Tool",
      image: "/HCN Generator.jpeg",
      body: "HCN Generator is a small QA-focused web utility designed to make testing healthcare applications easier without relying on real patient identifiers. It generates synthetic Health Card Numbers that satisfy the required Luhn checksum, giving testers realistic-looking values that can pass format and validation checks.<br /><br />The application is intentionally lightweight and runs entirely through standard web technologies. JavaScript handles the generation and validation logic, while HTML5 and CSS3 provide the interface.<br /><br />The project demonstrates how a relatively small algorithmic component can solve a practical testing problem: creating repeatable synthetic inputs that behave like valid identifiers while remaining suitable for development and QA workflows.",
      links: [{ label: "Live Demo", url: "https://hcngen.vercel.app/" }],
    },
  },
  {
    slug: "online-mcq-quiz",
    title: "Online MCQ Quiz",
    award: "Web Development",
    category: "Web Development",
    summary: "A responsive real-time quiz platform with instant scoring and feedback.",
    description: "A browser-based multiple-choice quiz built with vanilla HTML, CSS, and JavaScript. The application presents questions interactively, records each answer as the user progresses, updates the score immediately, and provides feedback throughout the quiz. The interface is designed to keep the interaction simple and responsive, with JavaScript handling the question flow and scoring logic while HTML and CSS provide the structure and presentation. The project is deployed as a static web application through Netlify.",
    stack: "HTML5 · CSS3 · JavaScript · Netlify",
    tags: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    image: "/quiz.jpg",
    link: "https://comfy-quokka-1f1d18.netlify.app/",
    linkLabel: "Live Demo",
    featured: false,
    modal: {
      title: "Online MCQ Quiz",
      subtitle: "Web Development",
      image: "/Online MCQ Quiz.jpg",
      body: "The Online MCQ Quiz is a browser-based quiz application built entirely with vanilla HTML, CSS, and JavaScript. Questions are presented one at a time, with the application tracking the user's selections and updating the score as the quiz progresses.<br /><br />JavaScript manages the question flow, answer handling, scoring, and feedback, while HTML and CSS provide the structure and responsive presentation. There is no external framework behind the core interaction, keeping the application focused on the fundamentals of browser-based state and event handling.<br /><br />The project is deployed as a static application through Netlify and demonstrates how a complete interactive experience can be built with a small, straightforward client-side architecture.",
      links: [{ label: "Live Demo", url: "https://comfy-quokka-1f1d18.netlify.app/" }],
    },
  },
  {
    slug: "decision-dice",
    title: "Decision Dice",
    award: "Web Development",
    category: "Web Development",
    summary: "A playful randomizer that picks from any list you throw at it.",
    description: "A lightweight browser-based decision-making tool built with HTML, CSS, and JavaScript. Users provide a list of possible choices, and the application randomly selects one option to produce an immediate result. JavaScript handles the input and random-selection logic, while the interface adds animated feedback to make the result feel more interactive. The project is intentionally simple and focused on a clear single-purpose user experience, and it is deployed as a static site on Netlify.",
    stack: "HTML5 · CSS3 · JavaScript · Netlify",
    tags: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    image: "/decision.png",
    link: "https://64e90fb613ef6f4406f4b96f--melodic-toffee-c21015.netlify.app/",
    linkLabel: "Live Demo",
    featured: false,
    modal: {
      title: "Decision Dice",
      subtitle: "Web Development",
      image: "/Decision Dice.jpg",
      body: "Decision Dice is a deliberately simple tool built around one idea: give the application a list of choices and let it make the decision for you. Users enter their options, and JavaScript randomly selects one of them to produce an immediate result.<br /><br />The interface adds animated feedback around the selection so that the result feels more like an interaction than a plain random-number generator. The implementation remains lightweight, using only HTML, CSS, and JavaScript with no external framework required.<br /><br />The project is deployed as a static Netlify site and is an example of taking a very small idea and giving it a focused, polished browser experience.",
      links: [{ label: "Live Demo", url: "https://64e90fb613ef6f4406f4b96f--melodic-toffee-c21015.netlify.app/" }],
    },
  },
  {
    slug: "online-rpg-game",
    title: "Online RPG Game",
    award: "Web Development",
    category: "Web Development",
    summary: "A browser text RPG with quests, turn-based combat, and inventory management.",
    description: "A browser-based text RPG called Dragon Repeller, built with vanilla HTML, CSS, and JavaScript. The game organizes the experience around locations, quests, combat, inventory management, and character statistics, allowing the player to progress through a lightweight story while making gameplay decisions. JavaScript manages the underlying game state, including the player's health and inventory, available locations, enemies, rewards, and turn-based combat interactions. The project demonstrates how a complete interactive game can be built directly in the browser without a game engine or external framework.",
    stack: "HTML5 · CSS3 · JavaScript",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "game.jpg",
    link: "https://inspiring-cranachan-27b2ba.netlify.app/",
    linkLabel: "Live Demo",
    featured: false,
    modal: {
      title: "Online RPG Game",
      subtitle: "Web Development",
      image: "/Online RPG Game.png",
      body: "Dragon Repeller is a browser-based text RPG built with vanilla HTML, CSS, and JavaScript. The game gives the player a lightweight quest-driven world with locations to explore, enemies to fight, items to collect, and character statistics to manage.<br /><br />JavaScript maintains the game's state, including the player's health, inventory, available locations, enemies, rewards, and combat interactions. Battles use turn-based logic, while the player's progression is driven by the choices made throughout the game.<br /><br />The project demonstrates how a complete interactive game loop can be implemented directly in the browser without a game engine or external framework, using standard web technologies to manage state, interaction, rendering, and gameplay logic.",
      links: [{ label: "Live Demo", url: "https://inspiring-cranachan-27b2ba.netlify.app/" }],
    },
  },
  {
    slug: "text-editor",
    title: "Text Editor",
    award: "Desktop Applications",
    category: "Desktop Applications",
    summary: "A desktop text editor in Java with syntax highlighting and file management.",
    description: "A Java Swing desktop text editor built around a graphical interface for creating and editing plain-text documents. The application provides standard file operations for opening and saving text files, along with an exit option and a scrollable editing area. Users can also change the font size dynamically, choose a font color, and select a font family through the interface. The project keeps the implementation lightweight by relying on the standard Java Swing library and demonstrates how menus, controls, text components, and file I/O can be combined into a functional desktop application.",
    stack: "Java · IntelliJ IDEA",
    tags: ["Java", "IntelliJ IDEA"],
    image: "/text editor.webp",
    link: "https://github.com/haaaarsh4/Text-Editor",
    linkLabel: "View Code",
    featured: false,
    modal: {
      title: "Text Editor",
      subtitle: "Desktop Applications",
      image: "/Text Editor.jpg",
      body: "This project is a Java Swing desktop text editor built around a traditional graphical editing interface. Users can create and modify text documents through a scrollable editor while accessing standard file operations such as opening and saving files.<br /><br />The application also provides controls for changing font size, font colour, and font family, with the interface organized through standard Swing menus and components. File handling and editor state are managed directly within the Java application.<br /><br />The project uses only the standard Java Swing library, making it a focused exploration of desktop GUI development, event handling, text components, and file I/O without relying on external frameworks.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/Text-Editor" }],
    },
  },
  {
    slug: "snake-game",
    title: "Snake Game",
    award: "Desktop Applications",
    category: "Desktop Applications",
    summary: "A modernized, object-oriented take on the classic Snake game in Java.",
    description: "A classic Snake game implemented as a Java Swing desktop application with a simple object-oriented structure. The application is split across a main game class, a JFrame-based window class, and a JPanel responsible for the core game loop, rendering, and keyboard input. The player controls the snake with the arrow keys, collects apples to increase the score and length, and must avoid both the game borders and the snake's own body. Game behaviour such as colours, timing delay, and font settings can be adjusted through constants in the game panel, while the project remains dependency-free and uses only standard Java libraries.",
    stack: "Java",
    tags: ["Java"],
    image: "/snake.jpeg",
    link: "https://github.com/haaaarsh4/Snake-Game",
    linkLabel: "View Code",
    featured: false,
    modal: {
      title: "Snake Game",
      subtitle: "Desktop Applications",
      image: "/Snake Game.jpg",
      body: "This project recreates the classic Snake game as a Java Swing desktop application, with the game organized into separate classes for the application window and the core game panel. The player controls the snake with the arrow keys, collects apples to grow, and accumulates points as the game progresses.<br /><br />The game panel handles the main loop, rendering, keyboard input, movement, and collision detection. The player must avoid both the boundaries of the game area and the snake's own body, with the game ending when a collision occurs.<br /><br />The implementation uses only standard Java libraries and keeps the game logic organized through a simple object-oriented structure, making it a compact demonstration of GUI programming, event handling, state management, and real-time game logic.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/Snake-Game" }],
    },
  },
  {
    slug: "space-shooter-game",
    title: "Space Shooter Game",
    award: "Desktop Applications",
    category: "Desktop Applications",
    summary: "A multiplayer space shooter with power-ups and competitive scoring.",
    description: "A two-player space shooter built in Python with Pygame, where two players control opposing spaceships on the same game screen. Player 1 uses the arrow keys and Right Ctrl to move and shoot, while Player 2 uses WASD and Left Ctrl. Each player starts with 10 health points, movement is restricted to their side of the central boundary, and each player can have up to three bullets on screen at once. Successful hits reduce the opponent's health by one, and the match ends when a player's health reaches zero, after which the winner is displayed before the game closes. The project focuses on real-time input handling, projectile movement, collision detection, health management, and multiplayer game-state logic using Pygame.",
    stack: "Python · Pygame",
    tags: ["Python", "Pygame"],
    image: "/Space Shooter Game.jpg",
    link: "https://github.com/haaaarsh4/Space-shooter-Multiplayer",
    linkLabel: "View Code",
    featured: false,
    modal: {
      title: "Space Shooter Game",
      subtitle: "Desktop Applications",
      image: "/Space Shooter Game.jpg",
      body: "This two-player space shooter was built in Python with Pygame, putting both players on the same screen and giving each their own controls, movement area, and weapons. Player 1 uses the arrow keys and Right Ctrl, while Player 2 uses WASD and Left Ctrl.<br /><br />The game manages real-time keyboard input, spaceship movement, projectile creation, collision detection, and player health. Each player begins with 10 health points and can have up to three bullets active at once, while a central boundary keeps the two players within their respective sides of the arena.<br /><br />A match ends when one player's health reaches zero, after which the game displays the result before closing. The project provides a compact example of real-time state management, input handling, collision logic, and multiplayer game mechanics using Pygame.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/Space-shooter-Multiplayer" }],
    },
  },
];

export const projectCategories = [
  "All",
  "Systems Programming",
  "Automation",
  "Machine Learning",
  "Web Development",
  "Desktop Applications",
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}