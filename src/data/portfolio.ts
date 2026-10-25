export interface ExperienceModal {
  title: string;
  subtitle: string;
  image: string;
  body: string;
  links: { label: string; url: string }[];
  preloadImages?: string[];
}

export interface StoryGalleryImage {
  src: string;
  alt: string;
  /** Intrinsic width / height, used to size the photo before it loads. */
  aspect: number;
}

export interface StoryDetail {
  /** Short left-hand statement on the dedicated page. */
  statement: string;
  location: string;
  /** Photographs for the story page. The first becomes the full-width lead. */
  gallery: StoryGalleryImage[];
  /** Scannable list of what the role involved. */
  highlights: string[];
}

export interface ExperienceItem {
  slug: string;
  role: string;
  company: string;
  date: string;
  image: string;
  summary: string;
  story: StoryDetail;
  modal: ExperienceModal;
}

export interface ResearchItem extends ExperienceItem {}

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
      "I've always enjoyed the feeling of figuring something out, whether that means understanding a difficult idea or trying different approaches until a problem starts to make sense. When I came to McMaster to study Computer Science, I knew I liked programming, but I had no idea how many different directions that curiosity would take me.",

      "I've become especially interested in questions without easy answers: how to build language technology for underrepresented languages, understand how websites change over time, or help AI systems reuse what they have learned. These questions have taken me through research at McMaster and OCAD University, personal projects, and work with the Government of Ontario, where I saw how much the people using a system matter alongside the technology itself.",

      "Some of my favourite experiences have come from learning with other people and seeing a new perspective change how I approach a problem. I still have plenty to learn and plenty of questions I can't answer yet, and I like that. I want to keep building, keep exploring, and follow my curiosity wherever it leads next."
    ],
  quote: {
    label: "April 2026",
    text: "Keep shipping. Keep learning."
  },
  polaroidSrc: "/CN Tower1.jpeg",
  polaroidCaption: "Toronto, Ontario · 2024"
},
};

export const experience: ExperienceItem[] = [
  {
    slug: "it-systems-assistant",
    role: "IT Systems Assistant Co-op",
    company: "Government of Ontario - MPBSDP",
    date: "May 2026 - August 2026",
    image: "/222Jarvis.jpeg",
    summary: "I worked with the BI and Analytics team on Oracle Analytics Cloud, financial reporting, and tools that help Ontario Public Service teams find and use information. I also helped more than 200 authors learn the platform through workshops and documentation.",
    story: {
      statement:
        "A summer inside the team that builds Ontario's financial reporting tools.",
      location: "222 Jarvis Street · Toronto, Ontario",
      gallery: [
        {
          src: "/coop2_1.jpeg",
          alt: "A red and white streetcar passing under spring trees on a downtown street.",
          aspect: 1.3333,
        },
        {
          src: "/coop2_2.jpeg",
          alt: "A bowl of Kinton ramen eaten at my desk, with a can of pop beside it.",
          aspect: 0.7113,
        },
        {
          src: "/coop2_3.jpeg",
          alt: "A powdered donut on a paper plate, on the desk.",
          aspect: 0.9144,
        },
        {
          src: "/coop2_4.jpeg",
          alt: "A wooden flower with paper petals standing on the desk.",
          aspect: 0.5463,
        },
        {
          src: "/coop2_5.jpeg",
          alt: "A fruit cake from the team, iced with the word congratulations.",
          aspect: 0.75,
        },
      ],
      highlights: [
        "Improved subject areas and indexing for Oracle Analytics Cloud so advanced analytics features could be used.",
        "Built interactive workbooks that made financial reporting easier to explore across the Ontario Public Service.",
        "Supported more than 200 authors through workshops, documentation, and enablement materials.",
        "Used SQL and Python to validate the Detailed Schedules of Payments report across ministries and fiscal years.",
        "Contributed to the Procurement and Contract Tracking Tool (PCTT).",
      ],
    },
    modal: {
      title: "Government of Ontario",
      subtitle: "IT Systems Assistant Co-op · MPBSDP · May 2026 - August 2026",
      image: "/222Jarvis.jpeg",
      body: "During my second co-op with the Government of Ontario, I worked with the BI and Analytics team in the Enterprise Financial Services Division. I helped improve subject areas and indexing for Oracle Analytics Cloud, and built interactive workbooks that made information easier to explore.\n\nI also prepared documentation and learning materials and supported more than 200 authors through workshops. I liked being able to help people make sense of the tools they were using; it reminded me that technical work is not only about getting a feature working, but also about making it understandable and useful to others.\n\nAlongside this, I used SQL and Python to help validate the Detailed Schedules of Payments report across ministries and fiscal years, and contributed to the Procurement and Contract Tracking Tool. These projects gave me a closer look at how much careful data checking and thoughtful reporting matter in public-sector work.",
      links: [],
    },
  },
  {
    slug: "business-analyst",
    role: "Business Analyst Co-op",
    company: "Government of Ontario - MPBSDP",
    date: "May 2025 - December 2025",
    image: "/5700Yonge.jpeg",
    summary: "I worked with the Social Assistance I&IT Solutions Branch on SAMS workflows, API validation, and data-integration questions, helping improve Match and Merge automated throughput from 30% to 70%.",
    story: {
      statement:
        "Where requirements, APIs, and public services meet.",
      location: "5700 Yonge Street · Toronto, Ontario",
      gallery: [
        {
          src: "/coop1_1.jpeg",
          alt: "The view from the 5700 Yonge floor: blinds, hydro towers, a parking lot and offices beyond.",
          aspect: 1.3333,
        },
        {
          src: "/coop1_2.jpeg",
          alt: "My sneakers up on the footrest, against the patterned carpet of the pod.",
          aspect: 0.75,
        },
        {
          src: "/coop1_3.jpeg",
          alt: "The pod after hours: a blue pillar, dark glass and an empty desk.",
          aspect: 0.75,
        },
        {
          src: "/coop1_4.jpeg",
          alt: "My desk under the SAMS Project Dashboard sign, with a green chair and a filing cabinet.",
          aspect: 0.7531,
        },
        {
          src: "/coop1_5.jpeg",
          alt: "A Tim Hortons coffee bought in the lobby below the office.",
          aspect: 0.75,
        },
      ],
      highlights: [
        "Refined requirements and Jira stories for Match and Merge, helping raise automated throughput from 30% to 70%.",
        "Tested REST APIs with Postman, curl, and httpie, checking expected behaviour and investigating edge cases.",
        "Assessed external postal-code and geographic datasets in Python and SQL for coverage and accuracy.",
        "Worked within the Social Assistance I&IT Solutions Branch on systems that support social assistance services.",
      ],
    },
    modal: {
      title: "Government of Ontario",
      subtitle: "Business Analyst Co-op · MPBSDP · May 2025 - December 2025",
      image: "/5700Yonge.jpeg",
      body: "During my first co-op with the Government of Ontario, I worked with the Social Assistance I&IT Solutions Branch on systems supporting social assistance services, including the Social Assistance Management System (SAMS). One of my main areas of work was Match and Merge, where I helped refine requirements and Jira stories and supported Agile discussions. This contributed to an increase in automated throughput from 30% to 70%.\n\nI also tested REST APIs with Postman, curl, and httpie, checking expected behaviour and investigating edge cases. Separately, I used Python and SQL to assess external postal-code and geographic datasets for possible data integration, comparing their coverage and accuracy rather than assuming that available data was automatically reliable.\n\nI came away with a better appreciation for the work that happens between identifying a problem and delivering a dependable solution: asking the right questions, communicating clearly, and checking the details that other people may ultimately rely on.",
      links: [],
    },
  },
];

export const research: ResearchItem[] = [
  {
    slug: "abundant-intelligences",
    role: "Research Assistant",
    company: "Abundant Intelligences",
    date: "May 2026 - December 2026",
    image: "VALab.webp",
    summary: "I explore language technology for Indigenous and polysynthetic languages, including tokenization, alongside work on a robotic vocal collaborator that brings together real-time audio and language tools.",
    story: {
      statement:
        "Language technology at the meeting point of machine learning and Indigenous knowledge.",
      location: "Toronto, Ontario",
      // No photographs yet: the story page is set up to read well without them.
      gallery: [],
      highlights: [
        "Investigating tokenization for Indigenous and polysynthetic languages, including how Byte Pair Encoding can split words in ways that lose grammatical structure.",
        "Contributing to Archer, a robotic vocal collaborator, across pitch and rhythm analysis, harmony selection, and response timing.",
        "Working with Cree morphological analysis, Cree-to-English translation, transcription, sentiment analysis, and neural voice conversion.",
        "Thinking through who language tools are designed to serve, and whether the technology is useful in the context it is meant to support.",
      ],
    },
    modal: {
      title: "Abundant Intelligences",
      subtitle: "Research Assistant · May 2026 - December 2026",
      image: "VALab.webp",
      body: "At Abundant Intelligences, I've been exploring questions at the intersection of machine learning, language, and Indigenous knowledge systems. One area I've been looking into is tokenization for Indigenous and polysynthetic languages, including how approaches such as Byte Pair Encoding can split words in ways that lose meaningful grammatical structure. It has made me think more carefully about the assumptions built into language tools and who those tools are designed to serve.\n\nI've also contributed to the Archer Vocal Collaboration project, which explores how a robotic musical partner could listen to a singer and respond during a performance. My work has involved parts of the audio and language pipeline, including pitch and rhythm analysis, harmony selection, transcription, Cree-to-English translation, sentiment analysis, and neural voice conversion.\n\nI enjoy that these projects bring technical questions into conversation with language, culture, and creative expression. They have given me opportunities to learn from other researchers while thinking about how the pieces of a system fit together, and whether the technology is useful in the context it is meant to support.",
      links: [
        {
          label: "Lab Page",
          url: "https://abundant-intelligences.net/tkaronto-pod/",
        },
      ],
    },
  },
  {
    slug: "d4-sustainable-futures-lab",
    role: "Research Assistant",
    company: "D⁴ Sustainable Futures Lab",
    date: "October 2025 - Present",
    image: "DSB.jpg",
    summary: "At McMaster’s D⁴ Sustainable Futures Lab, I work on questions about how archived websites and building-energy data can reveal patterns and changes over time.",
    story: {
      statement:
        "Reading how places and public information change over time.",
      location: "McMaster University · Hamilton, Ontario",
      // No photographs yet: the story page is set up to read well without them.
      gallery: [],
      highlights: [
        "Built Palimpsest, a web application that retrieves archived snapshots from the Internet Archive's Wayback Machine and arranges meaningful changes along a timeline.",
        "Parsed archived pages into DOM trees to compare headings, paragraphs, links, images, and lists, separating real content changes from formatting noise.",
        "Added SQLite storage for cached snapshots and research notes, plus sandboxed rendering for archived pages.",
        "Exploring the Data Genome Project 2 for patterns in building-energy data across types, sizes, usage, weather, and time.",
      ],
    },
    modal: {
      title: "D⁴ Sustainable Futures Lab",
      subtitle: "McMaster University · Oct 2025 - Present",
      image: "DSB.jpg",
      body: "At McMaster's D⁴ Sustainable Futures Lab, I've been working on projects that use data to understand how systems change over time. One is Palimpsest, a web application I built around the Internet Archive's Wayback Machine. It retrieves archived snapshots and compares page structure and content, making it easier to investigate what changed on a website and when. I'm especially interested in using this approach to study how information and support for newcomers and immigrant communities have changed over time.\n\nI've also been exploring the Data Genome Project 2, which looks at building-energy data across building types, sizes, usage patterns, weather, and time. One question is how to identify meaningful patterns or possible inefficiencies when a building has limited historical data to learn from.\n\nThese projects approach different kinds of information, but both have encouraged me to look beyond individual records and ask what we can learn from patterns over time, while staying mindful of the limits of the data.",
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
    slug: "physsim",
    title: "PhysSim",
    award: "Physics · Simulation Engine",
    category: "Systems Programming",
    summary: "Three interactive physics workbenches where every number on screen is measured and shown next to the theory it is checked against.",
    description: "PhysSim is a browser physics workbench built without a UI framework: plain ES modules, with three.js doing nothing but rendering. Its three benches cover rigid-body collisions, a kinetic gas in real units, and mechanical vibrations solved exactly with a matrix exponential. Underneath sits a small stable-fluids solver with two interchangeable pressure solvers, and three check suites that import the same modules the browser loads so the physics cannot quietly drift.",
    stack: "JavaScript (ES Modules) · three.js · Vite · WebGL · Numerical Simulation",
    tags: [
      "JavaScript (ES Modules)",
      "three.js",
      "Vite",
      "WebGL",
      "Rigid-Body Physics",
      "Kinetic Theory",
      "Matrix Exponential Integration",
      "Fluid Simulation",
      "Jacobi & Conjugate Gradient",
      "Test Suites"
    ],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80",
    link: "https://physsim-seven.vercel.app/",
    linkLabel: "Live Demo",
    featured: true,
    modal: {
      title: "PhysSim",
      subtitle: "Physics · Simulation Engine",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80",
      body: "I built PhysSim around a rule I wanted to be able to defend: every number on screen should be measured by the simulation and shown next to the closed form it is supposed to agree with. That rule shaped the whole project. Pressure in the gas bench is not printed from n k T; it is counted from the momentum molecules hand to the walls, and if the two disagree, the simulation is wrong. The energy ledgers are shown live for the same reason: they make a mistake much harder to hide.\n\nEach bench takes a different approach. Dynamics uses typed-array rigid bodies with impulse-based collisions and a uniform spatial hash, where every shape is both a signed distance field for the physics and a mesh for the eye, and mass comes from density times volume rather than a guessed constant. Thermo is a rarefied gas in real units, with walls that reflect, insulate, or hold a temperature through a flux-weighted Maxwellian, plus a pinhole that opens a real hole so effusion can be watched. Vibrations assembles the equations of motion into matrices once and advances them with a matrix exponential, so the trajectory on screen is the analytic response sampled, and the timestep changes how finely it is reported rather than how wrong it is.\n\nI also wanted the project to be honest about what it does not model: fixed-step collision resolution, spherical molecules, a gas that is deliberately rarefied so its motion is watchable, and a picosecond slice of real time. Those compromises are printed in the panels instead of being left for someone to discover. Beneath the benches sits a stable-fluids solver with two interchangeable pressure solvers, Jacobi and Conjugate Gradient, and a benchmark that times both on the same problem.\n\nThe architecture follows from wanting to test the real thing. The simulation, geometry, solver, and profiling modules import nothing from the browser, so they run identically in Node and in the browser, and the three check suites exercise those modules rather than a reimplementation. There is no framework: Vite for the build, three.js for rendering, and plain ES modules everywhere else. Building PhysSim pushed me to think much more carefully about numerical accuracy, verification, and the difference between a result that looks plausible and one that actually holds up.",
      links: [
        {
          label: "Live Demo",
          url: "https://physsim-seven.vercel.app/"
        },
        {
          label: "View Code",
          url: "https://github.com/haaaarsh4/PhysSim"
        }
      ],
    },
  },
  {
    slug: "archer-robot-vocal-collaboration",
    title: "Archer VCS",
    award: "AI · Real-Time Audio",
    category: "Machine Learning",
    summary: "A real-time vocal collaboration system built around live listening, harmony, and Cree language tools.",
    description: "Archer began with an idea I find fascinating: what if a robot could do more than play back a recording or follow a fixed musical sequence? What if it could listen to someone singing and respond as a musical partner? I've been working on the software behind that interaction, connecting live pitch detection, rhythm and phrase analysis, harmony selection, and vocal synthesis into a system designed to respond as a performance unfolds. The system can choose between responses such as unison, thirds, fifths, octaves, drones, and call-and-response, then render them using digital signal processing, with an optional neural voice-conversion component. Alongside the audio pipeline, I've contributed to a research application that brings together Cree language processing, translation, transcription, sentiment analysis, and a notes-grounded assistant. Getting these pieces to work together has meant thinking about much more than individual models: timing, latency, and the way each component behaves when another part of the system is slow or unavailable all matter to the experience.",
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
      body: "Working on this project alongside Archer Pechawis, a Cree artist and educator, has made the idea of musical collaboration feel especially meaningful. The goal is to build a system that can listen to Archer singing and respond musically in a way that feels connected to the performance, rather than simply play a predetermined output.\n\nThe core audio pipeline captures a singer's voice, estimates pitch using methods such as YIN and RMVPE, and analyses rhythm and phrasing to help decide how the system should respond. A harmony engine selects musical responses, from unison and intervals to drones and call-and-response, and a digital signal processing pipeline renders them into sound. I've also worked with an optional RVC voice-conversion component, which runs separately so its heavier processing does not have to block the main audio pipeline.\n\nThe project extends beyond music, too. Its research application brings together language and audio tools, including Cree morphological analysis, Cree-to-English translation, transcription, live captions, sentiment analysis, pitch analysis, and a notes-grounded chat assistant. Connecting these components has taught me to think about a system as a whole, not just as a collection of models that work individually.\n\nI've been fortunate to explore these questions through collaborative research with people whose perspectives and knowledge differ from my own. That experience has helped me appreciate how much there is to learn when technical work meets a real creative and cultural context. Archer is still an evolving project, and that is part of what I enjoy about it: there are always new questions about responsiveness, interaction, and what a useful musical partner could become.",
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
    summary: "Explore how websites and public information change across archived snapshots.",
    description: "I built Palimpsest around a question that kept coming back to me: how do we study a website's history when the version we see today tells only part of the story? The application uses the Internet Archive's Wayback Machine to retrieve archived snapshots and arrange meaningful changes along an interactive timeline. Its backend parses archived pages into DOM trees and compares elements such as headings, paragraphs, links, images, and lists, making it possible to distinguish changes in content from superficial differences in formatting. I also added SQLite storage for cached snapshots and research notes, sandboxed archived-page rendering, and an optional Claude-powered Insight panel that uses web search to investigate the context surrounding a change. What interests me most is the possibility of using these traces to understand how websites, public information, and the services people rely on have evolved.",
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
      body: "The idea behind Palimpsest is simple: a website is never just the page we happen to see today. Earlier versions can tell us what an organization communicated in the past, what information disappeared, and how the way something was presented changed over time. I wanted to build a tool that made those changes easier to explore.\n\nPalimpsest retrieves a site's archived history through the Internet Archive's Wayback Machine and arranges meaningful changes along an interactive timeline. Consecutive snapshots with identical content can be collapsed, leaving a more useful record of when something actually changed.\n\nOne of the more interesting challenges was deciding what a meaningful change looks like. A raw text diff can be overwhelmed by formatting and structural differences, so the backend parses pages into DOM trees and compares elements such as headings, paragraphs, links, images, and lists. Archived pages are rendered in sandboxed iframes with scripts removed, and SQLite keeps track of cached snapshots and research notes. An optional Claude-powered Insight panel can also use web search to investigate the wider context around a change.\n\nI'm particularly interested in what this approach could make possible for researching websites that provide services and information to newcomers and immigrant communities. Looking at archived versions of these sites could help us ask more concrete questions about how available information, service descriptions, and language coverage have changed. For me, Palimpsest is both a software project and a way of exploring how we can use the web's past to better understand the present.",
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
    summary: "An experiment in making AI reuse learned solutions instead of starting from scratch.",
    description: "Recur grew out of a question I wanted to explore: if an AI system encounters the same kind of problem repeatedly, does it need to solve that problem from scratch every time? I built a workspace that collects demonstrations of recurring tasks and searches for small programs that can reproduce the observed computations. Its compiler uses a typed dataflow language and best-first search to generate candidate programs, then tests them against the demonstrations and additional verification cases. Accepted programs are stored alongside their evidence and verification results, so future matching requests can be handled locally through a deterministic virtual machine without another model call. A central design principle is that a plausible model response is not automatically a correct answer. Recur attempts to separate language generation from computation, requiring the program itself to justify its results and allowing the system to decline when it cannot establish a reliable solution.",
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
      body: "Recur started with a question I've become increasingly interested in: what happens when an AI system encounters the same kind of problem again and again? Most of the time, we ask a model to solve the problem again, even when earlier interactions may already contain enough information to do something more reusable. I wanted to explore whether those interactions could become small, verifiable programs instead.\n\nRecur collects demonstrations of recurring tasks and uses them as evidence for program synthesis. Its compiler searches a typed dataflow language made up of readers, transforms, and emitters, looking for a program that can reproduce the observed computation. Rather than accepting a candidate because it looks plausible, the system executes it against the original examples and checks whether its behaviour holds up under further verification.\n\nThat verification process includes consistency checks, leave-one-out recompilation, generated in-domain inputs, and explicit decline behaviour. Accepted programs are stored in a registry alongside their demonstrations and verification results. When a future request matches one of those programs, Recur can offer the reusable solution and, once accepted, execute it locally through a deterministic virtual machine without another model call.\n\nThe distinction between generating an answer and establishing that an answer is correct is central to the project. A language model can provide useful evidence about a task, but its wording alone does not establish the mathematical or logical truth of the result. Recur explores an alternative in which reusable computation must stand on its own evidence, with the system able to decline or fall back to a verified lookup when it cannot find a reliable solution.\n\nThis is one of my more exploratory projects, and I enjoy it precisely because it raises questions that go beyond implementing a familiar application. It has pushed me to think about program synthesis, verification, the limits of model-generated answers, and what it might mean for an AI system to become more useful through experience rather than simply repeating the same process.",
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
    summary: "Watch language models compete in Go through live matches and an evolving leaderboard.",
    description: "Arena began as a way to bring together two things I enjoy exploring: game systems and the behaviour of language models. It is a Go game server that runs head-to-head model competitions and streams matches to a live dashboard over WebSockets. The backend is written in Go, with independent game loops running in goroutines so multiple matches can progress concurrently. I also built handling for reasoning-model responses and malformed outputs, including retries when a response cannot be parsed. A Next.js dashboard displays live game states and an automatically updating ELO leaderboard, bringing the individual matches together into a shared view of how the competitors perform.",
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
      body: "I wanted to build something that made the interactions between language models visible rather than hiding them behind a final answer. Arena does this through live Go competitions, where models play against one another and their matches can be followed as they unfold.\n\nThe backend is written in Go and communicates game updates through WebSocket rooms. Each match runs in its own goroutine loop, allowing multiple games to progress independently without one match having to wait for another. The server supports both turn-based and simultaneous game engines, and it includes custom parsing for model responses, including reasoning-model output that contains think blocks or does not follow the expected format. An automated retry mechanism gives the system another chance when a response cannot be processed correctly.\n\nOn the frontend, a Next.js dashboard displays live match states alongside an automatically updating ELO leaderboard. Together, the game server and dashboard create a place where individual moves, concurrent execution, and longer-term competitive results can all be observed.\n\nBuilding Arena has given me a practical way to explore concurrency, game-state management, real-time communication, and the less predictable parts of integrating language models into software. It is also a reminder that a useful system needs to account for what happens when things do not go exactly as expected, not just when every component behaves perfectly.",
      links: [{ label: "View Code", url: "https://github.com/upadhyay1302/arena" }],
    },
  },
  {
    slug: "workout-tracker",
    title: "Workout Tracker",
    award: "Full-Stack · Production",
    category: "Web Development",
    summary: "A full-stack application for tracking workouts and progress.",
    description: "I wanted to build a workout application that brought together the pieces of a real full-stack system, rather than stopping at a frontend that looked complete. Workout Tracker combines user authentication, persistent workout records, a dashboard for managing training activity, and a server-side AI coach. Working with Next.js, TypeScript, PostgreSQL, and NextAuth gave me a way to explore how these pieces fit together, from protecting user-specific workflows to keeping model credentials out of the browser.",
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
      body: "I wanted to build a workout application that brought together the pieces of a real full-stack system, rather than stopping at a frontend that looked complete. Workout Tracker combines user authentication, persistent workout records, a dashboard for managing training activity, and a server-side AI coach. Working with Next.js, TypeScript, PostgreSQL, and NextAuth gave me a way to explore how these pieces fit together, from protecting user-specific workflows to keeping model credentials out of the browser.",
      links: [{ label: "Live Demo", url: "https://myworkout-tracker.vercel.app/" }],
    },
  },
  {
    slug: "http-server-cpp",
    title: "HTTP Server (C++)",
    award: "Systems Programming",
    category: "Systems Programming",
    summary: "A C++ HTTP server exploring the fundamentals behind web requests and responses.",
    description: "This project gave me the opportunity to explore what happens beneath the web frameworks I usually work with. I built an HTTP server using raw POSIX sockets and implemented two approaches to handling concurrent connections: a thread pool and an event-driven loop using Linux epoll. I then benchmarked the implementations to compare their behaviour under load. Seeing the difference between the two approaches helped make the trade-offs between thread-based and event-driven I/O much more concrete.",
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
      body: "This project gave me the opportunity to explore what happens beneath the web frameworks I usually work with. I built an HTTP server using raw POSIX sockets and implemented two approaches to handling concurrent connections: a thread pool and an event-driven loop using Linux epoll. I then benchmarked the implementations to compare their behaviour under load. Seeing the difference between the two approaches helped make the trade-offs between thread-based and event-driven I/O much more concrete.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/http_server" }],
    },
  },
  {
    slug: "linksnap",
    title: "LinkSnap",
    award: "Systems Programming",
    category: "Systems Programming",
    summary: "A simple URL shortener built to make long links easier to share.",
    description: "LinkSnap is my take on a small but useful web service: turning long URLs into short links that are easy to share. I built a Python backend that validates submitted URLs, generates short identifiers, stores their mappings in SQLite, and redirects visitors to the original destination. A separate Next.js frontend handles the user-facing workflow. I enjoyed bringing together the everyday pieces of a web application, from API design and persistence to validation and the communication between frontend and backend.",
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
      body: "LinkSnap is my take on a small but useful web service: turning long URLs into short links that are easy to share. I built a Python backend that validates submitted URLs, generates short identifiers, stores their mappings in SQLite, and redirects visitors to the original destination. A separate Next.js frontend handles the user-facing workflow. I enjoyed bringing together the everyday pieces of a web application, from API design and persistence to validation and the communication between frontend and backend.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/LinkSnap" }],
    },
  },
  {
    slug: "activetrack",
    title: "ActiveTrack",
    award: "Machine Learning",
    category: "Machine Learning",
    summary: "Classify barbell exercises and count repetitions from motion-sensor data.",
    description: "ActiveTrack started with a practical question: can motion sensor data tell us which exercise someone is performing and how many repetitions they have completed? Using accelerometer and gyroscope recordings from five barbell exercises, I worked through the process of turning raw measurements into features a model could use. That meant cleaning and resampling data, investigating outliers, engineering features, comparing models, and tuning their parameters. I also explored signal filtering for repetition counting. The project helped me appreciate how much of machine learning happens before a model is ever trained.",
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
      body: "ActiveTrack started with a practical question: can motion sensor data tell us which exercise someone is performing and how many repetitions they have completed? Using accelerometer and gyroscope recordings from five barbell exercises, I worked through the process of turning raw measurements into features a model could use. That meant cleaning and resampling data, investigating outliers, engineering features, comparing models, and tuning their parameters. I also explored signal filtering for repetition counting. The project helped me appreciate how much of machine learning happens before a model is ever trained.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/ActiveTrack" }],
    },
  },
  {
    slug: "jira-automation-suite",
    title: "JIRA Automation Suite",
    award: "Automation",
    category: "Automation",
    summary: "A small tool for streamlining repetitive Jira ticket workflows.",
    description: "After working with Jira workflows, I wanted to explore how repetitive ticket-management tasks could be handled through a single interface. This project connects a Next.js application to the Jira REST API to retrieve issues, apply bulk updates, and export structured information for use in Excel. It was a practical opportunity to work with API integration and automation while thinking about how small tools can remove unnecessary manual steps from everyday work.",
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
      body: "After working with Jira workflows, I wanted to explore how repetitive ticket-management tasks could be handled through a single interface. This project connects a Next.js application to the Jira REST API to retrieve issues, apply bulk updates, and export structured information for use in Excel. It was a practical opportunity to work with API integration and automation while thinking about how small tools can remove unnecessary manual steps from everyday work.",
      links: [{ label: "Live Demo", url: "https://jira-automation-tool.vercel.app/" }],
    },
  },
  {
    slug: "echosphere",
    title: "EchoSphere",
    award: "Automation",
    category: "Automation",
    summary: "A Python desktop assistant that turns spoken requests into actions.",
    description: "EchoSphere was an early exploration of a different way to interact with a computer: using spoken requests instead of relying entirely on a keyboard. I built a Python desktop assistant that combines speech recognition with natural-language command parsing, allowing requests to be routed to different actions. I also incorporated web scraping with BeautifulSoup to retrieve information from web pages. The project gave me an opportunity to experiment with connecting language, voice input, and software actions in one application.",
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
      body: "EchoSphere was an early exploration of a different way to interact with a computer: using spoken requests instead of relying entirely on a keyboard. I built a Python desktop assistant that combines speech recognition with natural-language command parsing, allowing requests to be routed to different actions. I also incorporated web scraping with BeautifulSoup to retrieve information from web pages. The project gave me an opportunity to experiment with connecting language, voice input, and software actions in one application.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/EchoSphere-" }],
    },
  },
  {
    slug: "crypto-price-prediction",
    title: "Crypto Price Prediction",
    award: "Machine Learning",
    category: "Machine Learning",
    summary: "Explore whether text sentiment can add useful signals to Bitcoin price forecasts.",
    description: "I wanted to explore whether information beyond historical prices could contribute to a cryptocurrency forecasting model. This project combines Bitcoin market data with sentiment analysis of Wikipedia revision comments, bringing numerical time-series data and textual information into the same pipeline. I prepared rolling windows of historical prices, trained an LSTM network, and compared its predictions with unseen market data. The project introduced me to the challenges of combining different data sources and evaluating whether an additional signal is actually useful.",
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
      body: "I wanted to explore whether information beyond historical prices could contribute to a cryptocurrency forecasting model. This project combines Bitcoin market data with sentiment analysis of Wikipedia revision comments, bringing numerical time-series data and textual information into the same pipeline. I prepared rolling windows of historical prices, trained an LSTM network, and compared its predictions with unseen market data. The project introduced me to the challenges of combining different data sources and evaluating whether an additional signal is actually useful.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/Crypto-Price-Prediction" }],
    },
  },
  {
    slug: "hcn-generator",
    title: "HCN Generator",
    award: "Web Dev · QA Tool",
    category: "Web Development",
    summary: "Generate synthetic health card numbers for format testing without real identifiers.",
    description: "HCN Generator grew out of a straightforward testing need: how can developers validate health card number formats without using real patient identifiers? I built a small browser-based utility that generates synthetic numbers satisfying the Luhn checksum. The application uses JavaScript, HTML, and CSS, keeping the implementation simple and focused on its purpose. It is a small project, but one that illustrates how a well-chosen algorithm can solve a practical problem.",
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
      body: "HCN Generator grew out of a straightforward testing need: how can developers validate health card number formats without using real patient identifiers? I built a small browser-based utility that generates synthetic numbers satisfying the Luhn checksum. The application uses JavaScript, HTML, and CSS, keeping the implementation simple and focused on its purpose. It is a small project, but one that illustrates how a well-chosen algorithm can solve a practical problem.",
      links: [{ label: "Live Demo", url: "https://hcngen.vercel.app/" }],
    },
  },
  {
    slug: "online-mcq-quiz",
    title: "Online MCQ Quiz",
    award: "Web Development",
    category: "Web Development",
    summary: "A lightweight browser quiz with scoring and immediate answer feedback.",
    description: "I built this quiz to explore the fundamentals of interactive browser applications without relying on a framework. Using vanilla JavaScript, I implemented question progression, answer selection, scoring, and immediate feedback, with HTML and CSS handling the presentation. It was a useful exercise in understanding how application state and event handling come together to create an experience that responds naturally to a user's actions.",
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
      body: "I built this quiz to explore the fundamentals of interactive browser applications without relying on a framework. Using vanilla JavaScript, I implemented question progression, answer selection, scoring, and immediate feedback, with HTML and CSS handling the presentation. It was a useful exercise in understanding how application state and event handling come together to create an experience that responds naturally to a user's actions.",
      links: [{ label: "Live Demo", url: "https://comfy-quokka-1f1d18.netlify.app/" }],
    },
  },
  {
    slug: "decision-dice",
    title: "Decision Dice",
    award: "Web Development",
    category: "Web Development",
    summary: "Enter your options and let a random choice make the decision.",
    description: "Sometimes the simplest ideas are fun to build. Decision Dice lets someone enter a list of options and leave the choice to a random selection. I added animated feedback to make the result feel like a small interaction rather than a plain utility. Built with HTML, CSS, and JavaScript, it was an exercise in taking a single, simple idea and giving it a clear and engaging interface.",
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
      body: "Sometimes the simplest ideas are fun to build. Decision Dice lets someone enter a list of options and leave the choice to a random selection. I added animated feedback to make the result feel like a small interaction rather than a plain utility. Built with HTML, CSS, and JavaScript, it was an exercise in taking a single, simple idea and giving it a clear and engaging interface.",
      links: [{ label: "Live Demo", url: "https://64e90fb613ef6f4406f4b96f--melodic-toffee-c21015.netlify.app/" }],
    },
  },
  {
    slug: "online-rpg-game",
    title: "Online RPG Game",
    award: "Web Development",
    category: "Web Development",
    summary: "A browser-based RPG with exploration, inventory, and turn-based combat.",
    description: "Dragon Repeller was an opportunity to explore how a game can be built entirely with browser technologies. I used JavaScript to manage the player's health, inventory, locations, enemies, and progression through quests and turn-based combat. What makes the project interesting is how a relatively small set of state changes and rules can come together to create an interactive experience. It helped me practise organizing game logic without relying on a game engine.",
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
      body: "Dragon Repeller was an opportunity to explore how a game can be built entirely with browser technologies. I used JavaScript to manage the player's health, inventory, locations, enemies, and progression through quests and turn-based combat. What makes the project interesting is how a relatively small set of state changes and rules can come together to create an interactive experience. It helped me practise organizing game logic without relying on a game engine.",
      links: [{ label: "Live Demo", url: "https://inspiring-cranachan-27b2ba.netlify.app/" }],
    },
  },
  {
    slug: "text-editor",
    title: "Text Editor",
    award: "Desktop Applications",
    category: "Desktop Applications",
    summary: "A Java desktop text editor with file handling and customizable text.",
    description: "This was one of my explorations into building desktop software with Java. I created a Swing-based text editor with file opening and saving, a scrollable editing area, and controls for changing font size, colour, and family. The project helped me understand how GUI components, event handling, and file I/O fit together in a complete desktop application.",
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
      body: "This was one of my explorations into building desktop software with Java. I created a Swing-based text editor with file opening and saving, a scrollable editing area, and controls for changing font size, colour, and family. The project helped me understand how GUI components, event handling, and file I/O fit together in a complete desktop application.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/Text-Editor" }],
    },
  },
  {
    slug: "snake-game",
    title: "Snake Game",
    award: "Desktop Applications",
    category: "Desktop Applications",
    summary: "A Java Snake game built around movement, collision detection, and scoring.",
    description: "Recreating Snake in Java gave me a way to explore game loops, keyboard input, rendering, and collision detection in a familiar setting. I organized the application into separate classes for the window and the game itself, with the game panel handling movement, scoring, and collisions. It was a compact project, but a useful exercise in turning a set of rules into a continuously running interactive program.",
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
      body: "Recreating Snake in Java gave me a way to explore game loops, keyboard input, rendering, and collision detection in a familiar setting. I organized the application into separate classes for the window and the game itself, with the game panel handling movement, scoring, and collisions. It was a compact project, but a useful exercise in turning a set of rules into a continuously running interactive program.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/Snake-Game" }],
    },
  },
  {
    slug: "space-shooter-game",
    title: "Space Shooter Game",
    award: "Desktop Applications",
    category: "Desktop Applications",
    summary: "A two-player Pygame shooter with projectiles, collisions, and health tracking.",
    description: "I built this two-player space shooter with Pygame as an opportunity to explore real-time interaction and game-state management. Each player has independent controls and a designated area of the screen, with projectiles, collision detection, health, and a win condition bringing the game together. Seeing all those moving parts interact in real time made this a useful exercise in managing input, updating state, and responding to events as they happen.",
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
      body: "I built this two-player space shooter with Pygame as an opportunity to explore real-time interaction and game-state management. Each player has independent controls and a designated area of the screen, with projectiles, collision detection, health, and a win condition bringing the game together. Seeing all those moving parts interact in real time made this a useful exercise in managing input, updating state, and responding to events as they happen.",
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

export function getExperienceBySlug(slug: string) {
  return experience.find((item) => item.slug === slug);
}

export function getResearchBySlug(slug: string) {
  return research.find((item) => item.slug === slug);
}