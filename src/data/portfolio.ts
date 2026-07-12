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
  title: string;
  stack: string;
  award: string;
  image: string;
  link: string;
  linkLabel: string;
  modal: ExperienceModal;
}

export const siteConfig = {
  name: "Harsh Upadhyay",
  navLogoText: "Harsh Upadhyay",
  location: "Hamilton, Ontario",
  university: "McMaster University",
  email: "upadhyayharsh@mcmaster.ca",
  github: "https://github.com/haaaarsh4",
  linkedin: "https://linkedin.com/in/harsh-upadhyay-",
  resumePdf: "/resume.pdf",
  about: {
    paragraphs: [
      "My journey has taken me across different places, cultures, and experiences that have shaped who I am today. I was born in Rajasthan, India, and later moved to the United Arab Emirates, where I spent my childhood and completed my schooling. Growing up in different environments taught me the value of curiosity, adaptability, and always being open to learning from the world around me.",
      "<br /> That journey eventually brought me to Canada, where I am currently completing my undergraduate degree in Computer Science at McMaster University. Throughout my time here, I have discovered a deep passion for research, innovation, and exploring how technology can be used to understand and solve meaningful problems. This passion has led me to contribute to academic work in areas such as artificial intelligence at McMaster University and OCAD University, while inspiring my goal of pursuing graduate studies in the future.",
      "<br /> Alongside academia, my work with the Government of Ontario across two public sector roles has given me the opportunity to understand technology from a different perspective and build solutions that create real impact. At the heart of everything I do is a desire to keep learning, keep growing, and create technology that genuinely helps people."
    ],
    quote: { label: "April 2026", text: "Keep shipping. Keep learning." },
    polaroidSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    polaroidCaption: "Brampton, Ontario · 2024",
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
      body: "Supported digital transformation initiatives within the Ministry of Public and Business Service Delivery. Conducted stakeholder interviews, mapped existing business processes, and delivered comprehensive requirements documentation across cross-functional teams. Collaborated closely with developers and policy leads to translate operational needs into actionable technical specifications.",
      links: [],
    },
  },
];

export const research: ResearchItem[] = [
  {
    role: "Research Assistant",
    company: "Abundant Intelligences",
    date: "May 2026 — December 2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    modal: {
      title: "Research Assistant",
      subtitle: "McMaster University · Dept. of Computing & Software · May 2025 – Present",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
      body: "Conducting applied research under Prof. [Name] on the interpretability of large language models. Responsibilities include designing ablation experiments, processing large-scale corpora, and contributing to a manuscript currently under review at ACL 2026. Maintained a shared codebase in Python (PyTorch, HuggingFace) and produced weekly progress reports for the lab.",
      links: [
        {
          label: "Lab Page",
          url: "https://mcmaster.ca",
        },
      ],
    },
  },
  {
    role: "Research Assistant",
    company: "D⁴ Sustainable Futures Lab",
    date: "October 2025 — Present",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    modal: {
      title: "Independent Study — NLP & Transformers",
      subtitle: "Self-directed · McMaster University · Jan 2025 – Apr 2025",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
      body: "Completed a structured independent study exploring attention mechanisms, BERT fine-tuning, and retrieval-augmented generation (RAG). Built a small-scale question-answering system over a custom knowledge base as a capstone project. Presented findings in a 20-minute talk to the undergraduate computing seminar series.",
      links: [
        {
          label: "Slides (PDF)",
          url: "#",
        },
        {
          label: "GitHub",
          url: "https://github.com/haaaarsh4",
        },
      ],
    },
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Workout Tracker",
    stack: "Next.js · TypeScript · PostgreSQL · NextAuth · OpenRouter AI",
    award: "Full-Stack · Production",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    link: "https://myworkout-tracker.vercel.app/",
    linkLabel: "Live Demo",
    modal: {
      title: "Workout Tracker",
      subtitle: "Full-Stack · Production",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      body: "A full-stack workout tracking app built with Next.js, TypeScript, and PostgreSQL, featuring NextAuth authentication and an OpenRouter AI integration for personalized workout suggestions.",
      links: [{ label: "Live Demo", url: "https://myworkout-tracker.vercel.app/" }],
    },
  },
  {
    title: "HTTP Server (C++)",
    stack: "C++ · Sockets · Epoll · Thread Pool · Benchmarking",
    award: "Systems Programming",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    link: "https://github.com/haaaarsh4/http_server",
    linkLabel: "View Code",
    modal: {
      title: "HTTP Server (C++)",
      subtitle: "Systems Programming",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
      body: "A custom HTTP server written in C++ using raw sockets, epoll for event-driven I/O, and a thread pool for concurrency, with benchmarking tools to evaluate throughput and latency.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/http_server" }],
    },
  },
  {
    title: "LinkSnap",
    stack: "Python · aiohttp · SQLite · Next.js · Tailwind CSS",
    award: "Systems Programming",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    link: "https://github.com/haaaarsh4/LinkSnap",
    linkLabel: "View Code",
    modal: {
      title: "LinkSnap",
      subtitle: "Systems Programming",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
      body: "A link management tool with a Python/aiohttp backend and SQLite storage, paired with a Next.js and Tailwind CSS frontend.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/LinkSnap" }],
    },
  },
  {
    title: "ActiveTrack",
    stack: "Python · Scikit-learn · TensorFlow · Pandas · NumPy",
    award: "Machine Learning",
    image: "https://images.unsplash.com/photo-1504383633899-f7b5f8d01f4f?w=600&q=80",
    link: "https://github.com/haaaarsh4/ActiveTrack",
    linkLabel: "View Code",
    modal: {
      title: "ActiveTrack",
      subtitle: "Machine Learning",
      image: "https://images.unsplash.com/photo-1504383633899-f7b5f8d01f4f?w=600&q=80",
      body: "A machine learning project using Scikit-learn, TensorFlow, Pandas, and NumPy to analyze and predict activity patterns from sensor data.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/ActiveTrack" }],
    },
  },
  {
    title: "JIRA Automation Suite",
    stack: "Next.js · JavaScript · JIRA API · REST · Excel",
    award: "Automation",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    link: "https://jira-automation-tool.vercel.app/",
    linkLabel: "Live Demo",
    modal: {
      title: "JIRA Automation Suite",
      subtitle: "Automation",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
      body: "An automation suite that interfaces with the JIRA REST API to streamline ticket management workflows and generate Excel reports, built with Next.js and JavaScript.",
      links: [{ label: "Live Demo", url: "https://jira-automation-tool.vercel.app/" }],
    },
  },
  {
    title: "EchoSphere",
    stack: "Python · Speech Recognition · NLP · BeautifulSoup",
    award: "Automation",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&q=80",
    link: "https://github.com/haaaarsh4/EchoSphere-",
    linkLabel: "View Code",
    modal: {
      title: "EchoSphere",
      subtitle: "Automation",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&q=80",
      body: "A Python tool combining speech recognition, NLP, and BeautifulSoup-based web scraping for automated information retrieval.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/EchoSphere-" }],
    },
  },
  {
    title: "Crypto Price Prediction",
    stack: "Python · TensorFlow · Yahoo Finance · Sentiment Analysis",
    award: "Machine Learning",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&q=80",
    link: "https://github.com/haaaarsh4/Crypto-Price-Prediction",
    linkLabel: "View Code",
    modal: {
      title: "Crypto Price Prediction",
      subtitle: "Machine Learning",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&q=80",
      body: "A cryptocurrency price prediction model built with TensorFlow, using historical data from Yahoo Finance alongside sentiment analysis of market news.",
      links: [{ label: "View Code", url: "https://github.com/haaaarsh4/Crypto-Price-Prediction" }],
    },
  },
  {
    title: "HCN Generator",
    stack: "JavaScript · HTML5 · CSS3 · Luhn Algorithm",
    award: "Web Dev · QA Tool",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    link: "https://hcngen.vercel.app/",
    linkLabel: "Live Demo",
    modal: {
      title: "HCN Generator",
      subtitle: "Web Dev · QA Tool",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
      body: "A QA testing utility for generating valid test health card numbers using the Luhn algorithm, built with vanilla JavaScript, HTML5, and CSS3.",
      links: [{ label: "Live Demo", url: "https://hcngen.vercel.app/" }],
    },
  },
];