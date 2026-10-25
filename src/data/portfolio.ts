// ============================================================
// EDIT THIS FILE to update your portfolio content.
// Anything marked `verified: false` or containing "[ ]" is a placeholder
// that should be confirmed before publishing.
// ============================================================

export const profile = {
  name: "Ritika Soni",
  tagline: "Building ideas into meaningful technology.",
  intro:
    "I'm a Computer Science Engineering student passionate about software development, artificial intelligence, and building solutions that solve real-world problems.",
  roles: ["Computer Science Engineer", "AI/ML Enthusiast", "Software Developer in Progress", "Community Contributor"],
  linkedin: "https://www.linkedin.com/in/ritika-soni-5955aa2a9",
  github: "", // TODO: add e.g. "https://github.com/your-username"
  email: "", // TODO: add your professional email
  location: "Bilaspur, Chhattisgarh, India",
};

export type Skill = { name: string; verified: boolean };
export const skillGroups: { title: string; skills: Skill[] }[] = [
  { title: "Programming Languages", skills: [{ name: "[Add language]", verified: false }] },
  { title: "Frontend Development", skills: [{ name: "HTML / CSS", verified: false }, { name: "[Add framework]", verified: false }] },
  { title: "AI and Machine Learning", skills: [{ name: "[Add library / topic]", verified: false }] },
  { title: "Databases and Backend", skills: [{ name: "[Add database]", verified: false }] },
  { title: "Developer Tools", skills: [{ name: "Git / GitHub", verified: false }] },
  { title: "Cloud and Emerging Technologies", skills: [{ name: "Google Cloud (learning)", verified: false }] },
];

export type ProjectStatus = "Completed" | "Ongoing" | "Planned" | "To verify";
export type Project = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  contribution: string;
  status: ProjectStatus;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "learnify",
    name: "Learnify",
    summary: "An educational website presenting learning resources through a friendly frontend.",
    problem: "Learning resources are scattered and often hard for students to navigate.",
    solution: "A clean, user-friendly interface that organises learning resources in one place.",
    features: ["Organised resource sections", "Simple, readable layout", "[Add verified feature]"],
    stack: ["[Confirm stack]"],
    contribution: "[Describe your specific role]",
    status: "To verify",
  },
  {
    slug: "scholarmatch",
    name: "ScholarMatch",
    summary: "Scholarship discovery based on age, income, GPA, field of study and eligibility.",
    problem: "Students miss scholarships because eligibility criteria are complex and spread across sources.",
    solution: "Match users to scholarships by comparing their profile to eligibility criteria.",
    features: ["Profile-based eligibility filtering", "Criteria: age, income, GPA, field of study", "[Add verified feature]"],
    stack: ["[Confirm stack]"],
    contribution: "[Describe your specific role]",
    status: "To verify",
  },
  {
    slug: "ai-career-guidance",
    name: "AI Career Guidance Platform",
    summary: "Explore career paths, find skill gaps and build personalised learning roadmaps.",
    problem: "Students often lack personalised guidance on which skills to build for a career path.",
    solution: "An AI-assisted concept that suggests paths, highlights gaps and recommends resources.",
    features: ["Career path exploration", "Skill-gap identification", "Personalised roadmaps"],
    stack: ["[Confirm stack]"],
    contribution: "[Describe your specific role]",
    status: "To verify",
  },
  {
    slug: "ai-mental-health-companion",
    name: "AI Mental Health Companion",
    summary: "Supportive mental wellness interactions and awareness.",
    problem: "Many students hesitate to seek support or lack awareness of mental wellness resources.",
    solution: "A supportive companion concept focused on gentle interactions and awareness.",
    features: ["Supportive conversations", "Wellness awareness content", "[Add verified feature]"],
    stack: ["[Confirm stack]"],
    contribution: "[Describe your specific role]",
    status: "To verify",
  },
  {
    slug: "smart-agriculture",
    name: "Smart Agriculture",
    summary: "IoT-oriented agricultural monitoring and smart farming.",
    problem: "Farmers often lack real-time insight into field conditions.",
    solution: "An IoT concept for monitoring agricultural conditions to support smarter decisions.",
    features: ["Field condition monitoring", "[Add sensors used]", "[Add verified feature]"],
    stack: ["[Confirm stack]"],
    contribution: "[Describe your specific role]",
    status: "To verify",
  },
  {
    slug: "face-recognition-attendance",
    name: "Face Recognition Attendance",
    summary: "Computer vision to automate attendance management.",
    problem: "Manual attendance is slow and error-prone.",
    solution: "Recognise faces from a camera feed to mark attendance automatically.",
    features: ["Face detection and recognition", "Automated attendance records", "[Add verified feature]"],
    stack: ["[Confirm stack]"],
    contribution: "[Describe your specific role]",
    status: "To verify",
  },
];

export const experiences: { title: string; org: string; period: string; points: string[]; verified: boolean }[] = [
  { title: "Google Cloud Arcade Facilitator", org: "Google Cloud", period: "2026", points: ["[Describe how you guided learners]"], verified: false },
  { title: "Community Member", org: "Google Developer Group (campus)", period: "[Dates]", points: ["[Events you participated in or helped organise]"], verified: false },
  { title: "Event & Hackathon Organisation", org: "[Club / Organisation]", period: "[Dates]", points: ["[Your role in organising technical events]"], verified: false },
  { title: "NSS Volunteer", org: "Government Engineering College, Bilaspur", period: "[Dates]", points: ["[Volunteering activities]"], verified: false },
];

export const achievements: { title: string; category: string; link?: string; verified: boolean }[] = [
  { title: "[Certification name]", category: "Certification", verified: false },
  { title: "[Google Cloud skill badge / milestone]", category: "Google Cloud", verified: false },
  { title: "[Hackathon name & outcome]", category: "Hackathon", verified: false },
  { title: "[Technical event organised]", category: "Community", verified: false },
];

export const education = {
  institution: "Government Engineering College, Bilaspur, Chhattisgarh",
  degree: "Bachelor of Technology in Computer Science Engineering",
  years: "[Start year] – [Graduation year]",
  details: "[Add CGPA or academic highlights after verifying]",
  coursework: ["[Data Structures]", "[Operating Systems]", "[DBMS]"],
};

export const exploring = [
  { title: "Artificial Intelligence & Machine Learning", note: "Learning core concepts through small experiments." },
  { title: "Full-stack Development", note: "Building end-to-end apps from interface to data." },
  { title: "Cloud Technologies", note: "Hands-on labs and Google Cloud learning paths." },
  { title: "Data Structures & Algorithms", note: "Regular problem-solving practice." },
  { title: "Software Engineering", note: "Writing cleaner, maintainable code." },
];
