import resumeAsset from "@/assets/Gadhiraju_DVS_Subbaraju_Professional_Resume.pdf.asset.json";

export const profile = {
  name: "Gadhiraju D V S Subbaraju",
  title: "Computer Science Engineering Student | Web Developer | AI/GenAI Enthusiast",
  eyebrow: "Computer Science Engineering Student",
  headline: "AI Engineering & Web Development",
  supporting: "Web Developer | AI/GenAI Enthusiast",
  description:
    "Computer Science and Engineering student with a strong interest in web development, Artificial Intelligence, and Generative AI. Experienced in building web projects using HTML, CSS, JavaScript, React, Python, and Git.",
  location: "Palivela, Near Rajahmundry, Andhra Pradesh",
  phone: "9494594677",
  email: "saisubbaraju2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/subbaraju-gadhiraju-590838358",
  github: "https://github.com/saisubbaraju2004-glitch",
  resumeUrl: resumeAsset.url,
};

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Achievements", id: "achievements" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

export const aboutParagraphs = [
  "Computer Science and Engineering student with a strong interest in web development, Artificial Intelligence, and Generative AI. Experienced in building web projects using HTML, CSS, JavaScript, React, Python, and Git.",
  "Currently developing CodeSphere, an all-in-one developer platform where users can learn coding, practice programming, build projects, showcase skills, connect with developers, and grow their software engineering careers.",
  "Gaining practical web development experience through an internship at ShadowFox, with a focus on building practical technology solutions and continuing to grow as an AI and software engineer.",
];

export const focusAreas = [
  "AI Engineering",
  "Generative AI",
  "Web Development",
  "Practical Technology Solutions",
];

export const strengths = [
  "Problem Solving",
  "Quick Learning",
  "Time Management",
  "English Communication",
  "Attention to Detail",
];

export const skillGroups = [
  {
    category: "AI & Emerging Technologies",
    items: ["Generative AI", "AI Engineering"],
  },
  { category: "Programming", items: ["Python", "JavaScript"] },
  { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "React"] },
  { category: "Tools & Development", items: ["Git", "Lovable"] },
  { category: "Computer Science", items: ["Data Structures & Algorithms"] },
];

export const projects = [
  {
    name: "CodeSphere",
    status: "ONGOING",
    subtitle: "All-in-One Developer Platform",
    description:
      "Developing an all-in-one developer platform that enables users to learn, practice coding, build projects, showcase skills, connect with developers, and grow software engineering careers.",
    details: [
      "Building the interface using HTML, CSS, JavaScript, and React.",
      "Using Lovable as an AI-assisted development tool.",
      "Using Git for version control and project development.",
    ],
    stack: ["Lovable", "HTML", "CSS", "JavaScript", "React", "Git"],
    url: "" as string,
  },
];

export const experience = [
  {
    organisation: "ShadowFox Organisation",
    role: "Web Development Intern",
    location: "Remote",
    duration: "August 2026 – August 2026",
    responsibilities: [
      "Developing portfolio and e-commerce websites as part of the internship.",
      "Building web content using HTML and applying Python and Git in the development workflow.",
      "Using Git for version control and project management.",
      "Applying problem-solving and attention to detail during ongoing development.",
    ],
    stack: ["HTML", "Python", "Git"],
  },
];

export const education = {
  institution: "Srinivas Institute of Engineering and Technology",
  degree: "B.Tech in Computer Science and Engineering",
  graduation: "2027",
  cgpa: "7.89",
};

export const certifications = [
  { title: "Building Generative AI Apps to Talk to Your Data", issuer: "GeeksforGeeks", meta: "" },
  { title: "National Level Hands-on Gen AI Training & Hackathon", issuer: "AIGNITE", meta: "" },
  {
    title: "Embedded Systems, IoT & Smart Drone Development Using AI",
    issuer: "International Workshop",
    meta: "",
  },
  { title: "AI-ML Virtual Internship", issuer: "EduSkills / AICTE", meta: "" },
  { title: "Aavishkar 2K25", issuer: "Certificate of Merit", meta: "" },
];

export const achievement = {
  prize: "2nd Prize",
  event: "Project Expo — ESPARX 2K26",
  organizer: "University College of Engineering Kakinada (UCEK), JNTUK",
  date: "March 2026",
};
