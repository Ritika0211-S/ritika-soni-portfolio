// ============================================================
// EDIT THIS FILE to update your portfolio content.
// Any text inside [square brackets] shows on the site as a dashed
// "placeholder" chip so you can spot what still needs filling in.
// ============================================================

export const profile = {
  name: "Ritika Soni",
  linkedin: "https://www.linkedin.com/in/ritika-soni-5955aa2a9/",
  github: "https://github.com/Ritika0211-S",
  email: "", // TODO: add your email, e.g. "ritika@example.com"
  resume: "", // TODO: put resume.pdf in /public and set this to "/resume.pdf"
  location: "Bilaspur, Chhattisgarh, India",
};

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  institution: "Government Engineering College, Bilaspur, Chhattisgarh",
  years: "2023–2027 (Expected)",
  score: "SPI: 7.24 through Semester VI",
};

export const skillGroups: { title: string; skills: string[]; note?: string }[] = [
  { title: "Programming Languages", skills: ["C", "Python", "JavaScript"] },
  { title: "Web Development", skills: ["HTML", "CSS", "JavaScript", "[React — confirm hands-on use]"] },
  {
    title: "Computer Science Fundamentals",
    skills: ["Data Structures and Algorithms", "OOP fundamentals", "Database Management Systems", "Searching and sorting", "Basic algorithmic problem-solving"],
  },
  { title: "Database", skills: ["SQL", "Relational database concepts", "CRUD operations", "Queries, joins, grouping & aggregates"] },
  { title: "AI/ML and Data Tools", skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn"] },
  {
    title: "AI and Productivity",
    skills: ["Learning & brainstorming with AI tools", "Research assistance", "Summarization", "Prompt writing", "Debugging support"],
    note: "I try to evaluate AI-generated results carefully rather than accepting them blindly.",
  },
  { title: "Developer Tools", skills: ["Git", "GitHub", "Visual Studio Code"] },
  { title: "Google Cloud", skills: ["Learning through Google Cloud student developer activities"] },
];

export type Accent = "sage" | "clay" | "ochre";
export type Project = {
  slug: string;
  number: string;
  name: string;
  status: string;
  current?: boolean;
  accent: Accent;
  summary: string;
  problem: string;
  solution: string;
  features: { title: string; text: string; planned?: boolean }[];
  role: string;
  stack: string[];
  learnings: string;
  future: string[];
  disclaimer?: string;
  github: string; // leave "" until you have the real link
  demo: string;
};

export const projects: Project[] = [
  {
    slug: "herbora-ai",
    number: "01",
    name: "Herbora-AI",
    status: "Currently working on",
    current: true,
    accent: "sage",
    summary:
      "Herbora-AI is an AI-powered platform designed to help users explore medicinal herbs, understand their traditional uses, discover where they can be found, and learn about their potential relevance to different health conditions.",
    problem:
      "Information about medicinal herbs is scattered across books, websites and word of mouth, and it is often hard to tell where a herb grows, how it is traditionally used, or which conditions it is associated with.",
    solution:
      "A single, approachable place to explore herbal knowledge, with an AI-powered interface that makes it easier to ask questions and browse information about herbs and their traditional uses.",
    features: [
      { title: "Medicinal Herb Discovery", text: "Explore herbs and learn about their traditional medicinal uses." },
      { title: "Herb Information", text: "Understand where herbs are commonly found and how they are traditionally used." },
      { title: "Health Condition Exploration", text: "Discover herbs traditionally associated with particular health conditions." },
      { title: "AI-Powered Information", text: "Make herbal knowledge easier to explore through an AI-powered interface." },
      { title: "Plant-related identification", text: "[Confirm whether this is implemented or planned]", planned: true },
    ],
    role: "[Describe your role — e.g. design, frontend, AI integration, data collection]",
    stack: ["[Frontend]", "[Backend]", "[AI model / API]", "[Database]"],
    learnings: "[What was hard while building Herbora-AI, and what you learned from it]",
    future: ["[Planned improvement 1]", "[Planned improvement 2]"],
    disclaimer:
      "Herbora-AI is intended for educational exploration of herbal information and is not a substitute for professional medical advice, diagnosis, or treatment.",
    github: "",
    demo: "",
  },
  {
    slug: "ai-mental-health-companion",
    number: "02",
    name: "AI Mental Health Companion",
    status: "[Status — e.g. Prototype / Completed]",
    accent: "clay",
    summary:
      "An AI-based mental wellness project exploring how mood tracking and conversational support can help users reflect on their emotional well-being.",
    problem:
      "Many students find it hard to notice patterns in their mood or to talk about how they feel, and may not know simple self-care steps they can take.",
    solution:
      "A companion app that lets users record their mood, chat with a supportive AI, and get general self-care suggestions — as a space for reflection, not a replacement for professional help.",
    features: [
      { title: "Face-image mood estimation", text: "An experimental feature that tries to estimate mood from a face image. It cannot reliably determine a person's true emotional state." },
      { title: "Manual mood selection", text: "For users who prefer to record their mood themselves." },
      { title: "Supportive AI chatbot", text: "Conversations meant to be supportive and encouraging. It is not a therapist." },
      { title: "General self-care suggestions", text: "Symptom-based general self-care ideas and guidance on possible next steps at home." },
    ],
    role: "[Describe your role in this project]",
    stack: ["[Confirm technologies]"],
    learnings: "[What you learned — e.g. about emotion-recognition limits, responsible AI, chatbot design]",
    future: ["[Potential improvement 1]", "[Potential improvement 2]"],
    disclaimer:
      "This project is not a diagnostic or medical tool. Face-based mood estimation is experimental, and the chatbot does not replace a qualified mental health professional.",
    github: "",
    demo: "",
  },
  {
    slug: "learnify",
    number: "03",
    name: "Learnify",
    status: "[Status — e.g. Concept / Prototype]",
    accent: "ochre",
    summary: "Learnify is an educational website concept focused on presenting learning resources through a clear and accessible interface.",
    problem: "[Objective — what problem Learnify sets out to address]",
    solution: "[How Learnify approaches it]",
    features: [{ title: "[Feature]", text: "[Add only features that are implemented]" }],
    role: "[Describe your contribution]",
    stack: ["[Confirm technologies]"],
    learnings: "[What you learned]",
    future: ["[Next step]"],
    github: "",
    demo: "",
  },
];

export const activities = [
  {
    title: "Google Cloud Arcade Facilitator",
    period: "2026",
    text: "Participated in a student-focused cloud learning and developer community initiative. Helped encourage participation, learning, and engagement around Google Cloud learning activities.",
    extra: "[Add your exact facilitator responsibilities and achievements]",
    tags: ["Cloud learning", "Community", "Peer support"],
  },
  {
    title: "College Technical Events",
    period: "[Dates]",
    text: "Participated in organizing college-level hackathons and quizzes — coordinating with fellow students, communicating with participants, and helping technical learning events run smoothly.",
    extra: "[Optional: event names you helped with]",
    tags: ["Event coordination", "Teamwork", "Communication"],
  },
  {
    title: "NSS Volunteer",
    period: "[Dates]",
    text: "Active volunteer with the NSS unit of Government Engineering College, Bilaspur. Holder of the NSS B and C certificates, with involvement in community activities that build teamwork and discipline.",
    extra: "[Optional: activities you took part in]",
    tags: ["Community service", "Teamwork", "Discipline"],
  },
];

export type Certificate = {
  category: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image?: string; // path in /public, e.g. "/certs/nss-b.jpg"
  file?: string; // PDF path in /public
  verifyUrl?: string;
};

export const certificates: Certificate[] = [
  { category: "NSS", title: "NSS B Certificate", issuer: "[Issuing organization]", date: "[Completion date]" },
  { category: "NSS", title: "NSS C Certificate", issuer: "[Issuing organization]", date: "[Completion date]" },
  { category: "Language Courses", title: "[Add Certificate Details]", issuer: "[Issuing organization]", date: "[Completion date]" },
  { category: "Google Cloud / Developer Learning", title: "[Add Certificate Details]", issuer: "[Issuing organization]", date: "[Completion date]" },
  { category: "Other Technical Courses", title: "[Add Certificate Details]", issuer: "[Issuing organization]", date: "[Completion date]" },
];

export const isPlaceholder = (s: string) => s.trim().startsWith("[");
