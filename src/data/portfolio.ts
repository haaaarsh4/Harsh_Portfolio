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
  /** Short line shown as the pill/tag on cards, e.g. "Full-Stack · Production" */
  award: string;
  /** Broader grouping used by the All Work filter chips */
  category: string;
  /** One-line summary used on compact cards */
  summary: string;
  /** Full write-up shown on the project's own page */
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
  resumePdf: "/resume.pdf",
  about: {
    paragraphs: [
      "My journey has taken me across different places, cultures, and experiences that have shaped who I am today. I was born in Rajasthan, India, and later moved to the United Arab Emirates, where I spent my childhood and completed my schooling. Growing up in different environments taught me the value of curiosity, adaptability, and always being open to learning from the world around me.",
      "<br /> That journey eventually brought me to Canada, where I am currently completing my undergraduate degree in Computer Science at McMaster University. Throughout my time here, I have discovered a deep passion for research, innovation, and exploring how technology can be used to understand and solve meaningful problems. This passion has led me to contribute to academic work in areas such as artificial intelligence at McMaster University and OCAD University, while inspiring my goal of pursuing graduate studies in the future.",
      "<br /> Alongside academia, my work with the Government of Ontario across two public sector roles has given me the opportunity to understand technology from a different perspective and build solutions that create real impact. At the heart of everything I do is a desire to keep learning, keep growing, and create technology that genuinely helps people."
    ],
    quote: { label: "April 2026", text: "Keep shipping. Keep learning." },
    polaroidSrc: "/CN Tower.jpeg",
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
      body: "A full-stack workout tracking application built with Next.js, TypeScript, and PostgreSQL. It uses NextAuth for authenticated user sessions and PostgreSQL for structured workout data, while a custom server-side API route connects the application to OpenRouter for AI-powered workout guidance. The architecture keeps authentication, persistent data, application logic, and the external AI integration connected through the Next.js application.",
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
      body: "A C++ HTTP server built from low-level POSIX sockets with two concurrency models: a thread-pool implementation and a non-blocking epoll event loop. The repository includes benchmark tooling with wrk to compare throughput and latency under high connection counts, making the project a practical study of socket programming, concurrency, event-driven I/O, and server performance.",
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
      body: "A full-stack URL shortening application with a Python backend and separate browser frontend. The backend validates long URLs, generates short codes, persists URL mappings, and resolves short codes through HTTP redirects, while the frontend provides the user-facing workflow for creating and receiving shortened links. The repository also contains a QR scanner utility and test code.",
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
    featured: false,
    modal: {
      title: "ActiveTrack",
      subtitle: "Machine Learning",
      image: "/",
      body: "A sensor-based machine learning pipeline that processes accelerometer and gyroscope data from barbell exercises. It covers data cleaning, visualization, outlier detection, feature engineering, model selection, hyperparameter tuning, exercise classification, and signal filtering for repetition counting.",
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
    featured: true,
    modal: {
      title: "JIRA Automation Suite",
      subtitle: "Automation",
      image: "/JIRA Automation Suite.png",
      body: "A Next.js and JavaScript automation tool that connects to the JIRA REST API to retrieve and bulk-update issues, then prepares issue data for Excel-based reporting. It was designed to reduce repetitive ticket-management work through a single browser-based workflow.",
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
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=900&q=80",
    link: "https://github.com/haaaarsh4/EchoSphere-",
    linkLabel: "View Code",
    featured: false,
    modal: {
      title: "EchoSphere",
      subtitle: "Automation",
      image: "/",
      body: "A Python desktop assistant that combines speech recognition, natural language command parsing, system task automation, and BeautifulSoup-based web scraping to interpret spoken requests and retrieve information programmatically.",
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
      image: "/",
      body: "A Bitcoin forecasting pipeline that combines historical Yahoo Finance price data with sentiment analysis of Bitcoin Wikipedia revision comments. A three-layer LSTM model is trained on sliding windows of historical prices, with sentiment aggregated by date and model output evaluated against unseen price data.",
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
      body: "A QA testing utility for generating valid test health card numbers using the Luhn algorithm, built with vanilla JavaScript, HTML5, and CSS3.",
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
      body: "A vanilla HTML, CSS, and JavaScript quiz application that manages question progression, answer selection, immediate score updates, and feedback directly in the browser.",
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
      body: "A small JavaScript-driven decision tool that accepts a user-provided list and randomly selects one option, with animated result feedback and a simple browser-based interface.",
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
    featured: true,
    modal: {
      title: "Online RPG Game",
      subtitle: "Web Development",
      image: "/Online RPG Game.png",
      body: "A vanilla JavaScript browser RPG that combines location-based exploration, character stats, inventory management, enemy encounters, and turn-based combat into a lightweight quest-driven game.",
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
      body: "A Java Swing desktop text editor with open and save file operations, a scrollable editing area, and controls for changing font size, font colour, and font family. The implementation uses the standard Java Swing library without external dependencies.",
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
      body: "A Java Swing implementation of the classic Snake game, organized into separate classes for the application window and game panel. The game handles keyboard input, snake movement, apple collection, scoring, self-collision, and border collision using standard Java libraries.",
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
      body: "A two-player Python and Pygame space shooter with separate controls for each player, health points, a central movement boundary, projectile limits, collision detection, and a win condition based on reducing the opponent's health to zero.",
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