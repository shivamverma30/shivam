// ============================================================
//  data.js — All personal data lives here.
// ============================================================

/* ── PERSONAL INFO ── */
export const personal = {
  name: "Shivam Verma",
  shortName: "SV",
  tagline: "MCA Student | Full-Stack & AI Developer",
  intro: "MCA student at MANIT Bhopal with a 9.05 CGPA, building reliable full-stack applications and applied deep learning products. I focus on secure architecture, clean APIs, and production-ready delivery.",
  location: "Bhopal, Madhya Pradesh, India",
  email: "shivam3006.nitb@gmail.com",
  phone: "+91 9696734218",
  resumeLink: "https://drive.google.com/file/d/1QlKbGHudWTOx9esq_sH5aa4VX3Xbxvj8/view?usp=drive_link",
  availableForWork: true,
};

/* ── SOCIAL / CODING PROFILES ── */
export const profiles = {
  github:     "https://github.com/shivamverma30",
  linkedin:   "https://www.linkedin.com/in/shivam9514/",
  leetcode:   "https://leetcode.com/u/sv_5271/",
  hackerrank: "https://www.hackerrank.com/vermashivam30201",
  gfg:        "https://www.geeksforgeeks.org/profile/sv5271",
  codechef:   "",
  twitter:    "",
};

/* ── ABOUT ── */
export const about = {
  bio: [
    "I am an MCA student at MANIT Bhopal with a 9.05 CGPA, focused on building full-stack products and applied deep learning systems.",
    "My work centers on secure authentication, payment workflows, scalable CRUD systems, and cloud deployment across Streamlit, Vercel, and Render.",
  ],
  highlights: [
    { label: "University", value: "MANIT Bhopal"            },
    { label: "CGPA",       value: "9.05 / 10"               },
    { label: "Focus",      value: "Full-Stack + Applied AI" },
    { label: "Status",     value: "Open to Internships"     },
  ],
};

/* ── SKILLS ── */
export const skills = {
  languages: [
    { name: "JavaScript", level: 85, icon: "SiJavascript" },
    { name: "Java",       level: 82, icon: "SiJava"       },
    { name: "Python",     level: 84, icon: "SiPython"     },
    { name: "SQL",        level: 72, icon: "SiMysql"      },
  ],
  frameworks: [
    { name: "React.js",    level: 85, icon: "SiReact"       },
    { name: "Node.js",     level: 82, icon: "SiNodedotjs"   },
    { name: "Express.js",  level: 80, icon: "SiExpress"     },
    { name: "Tailwind CSS",level: 85, icon: "SiTailwindcss" },
    { name: "PyTorch",     level: 82, icon: "SiPytorch"     },
    { name: "Streamlit",   level: 80, icon: "SiStreamlit"   },
    { name: "Mongoose",    level: 78, icon: "SiMongodb"     },
    { name: "Bootstrap",   level: 76, icon: "SiBootstrap"   },
  ],
  tools: [
    { name: "Git",        level: 85, icon: "SiGit"              },
    { name: "GitHub",     level: 88, icon: "SiGithub"           },
    { name: "VS Code",    level: 90, icon: "SiVisualstudiocode" },
    { name: "Postman",    level: 78, icon: "SiPostman"          },
    { name: "Vercel",     level: 80, icon: "SiVercel"           },
    { name: "Razorpay",   level: 78, icon: "SiRazorpay"        },
    { name: "Cloudinary", level: 70, icon: "SiCloudinary"       },
    { name: "MySQL",      level: 72, icon: "SiMysql"            },
    { name: "Render",     level: 75, icon: "SiRender"           },
  ],
  concepts: [
    { name: "REST APIs",         level: 86, icon: "FaServer"         },
    { name: "Authentication",    level: 84, icon: "FaLock"           },
    { name: "CRUD Applications", level: 90, icon: "FaCode"           },
    { name: "MVC Architecture",  level: 82, icon: "FaProjectDiagram" },
    { name: "Responsive Design", level: 88, icon: "SiHtml5"          },
    { name: "Payment Integration", level: 78, icon: "SiRazorpay"     },
    { name: "Deep Learning",     level: 82, icon: "FaProjectDiagram" },
  ],
};

/* ── PROJECTS ── */
export const projects = [
  {
    id: 1,
    title: "Testify Platform — Online Test Platform (In Progress)",
    description:
      "Currently building a modular assessment platform with dedicated frontend, backend, and AI service layers. Actively implementing core test workflows and API endpoints to support scalable feature development.",
    tech: ["TypeScript", "JavaScript", "Python", "Frontend", "Backend", "AI Service"],
    github: "https://github.com/shivamverma30/testify-platform",
    live: "",
    featured: true,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    id: 2,
    title: "HemoScan AI — Blood Group Prediction via Fingerprint Analysis",
    description:
      "Engineered a non-invasive AI system to predict 8 blood groups from fingerprint images using deep learning. Benchmarked multiple architectures, reached 93.83% test accuracy with Swin Transformer, and shipped a Streamlit app with automated report generation and email delivery.",
    tech: ["Python", "PyTorch", "Streamlit", "CNN", "Swin Transformer", "SMTP", "PDF Reports"],
    github: "https://github.com/shivamverma30/AI-Based-Blood-Group-Prediction-Using-Fingerprint-Pattern-Analysis",
    live: "https://hemoscan.streamlit.app/",
    featured: true,
    gradient: "from-indigo-500 to-sky-500",
  },
  {
    id: 3,
    title: "GreenCart — Full-Stack E-Commerce Grocery Platform",
    description:
      "Architected a scalable MERN-stack grocery platform with JWT authentication, role-based access, inventory management, cloud asset handling, and Razorpay payments. Migrated the frontend to React 19 and Vite to improve initial load time and responsiveness by 40%.",
    tech: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Razorpay", "Cloudinary", "JWT"],
    github: "https://github.com/shivamverma30/GREENCART",
    live: "https://greencart-three-iota.vercel.app/",
    featured: true,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Stayhub — Full-Stack Property Listing Platform",
    description:
      "Developed a scalable Airbnb-style property discovery platform using MVC architecture. Implemented Passport.js authentication, Mapbox geocoding, Joi validation, and Cloudinary-powered image uploads with secure owner-only listing management.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Mapbox", "Bootstrap 5", "Passport.js", "Joi"],
    github: "https://github.com/shivamverma30/Stayhub",
    live: "https://sstayhub.onrender.com/",
    featured: true,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 5,
    title: "All Video Downloader — Frontend + Express Backend",
    description:
      "Lightweight React + Vite frontend with an Express backend using yt-dlp for media downloads. Simple paste-and-download UI; backend handles extraction and rate-limiting.",
    tech: ["React", "Vite", "Express", "yt-dlp", "Axios", "Node.js"],
    github: "https://github.com/shivamverma30/savekaro-app",
    live: "https://savekaro-sv.vercel.app/",
    featured: true,
    gradient: "from-stone-500 to-slate-600",
  },
];

/* ── EDUCATION ── */
export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "MANIT Bhopal",
    fullName: "Maulana Azad National Institute of Technology, Bhopal",
    period: "Aug 2024 — Present",
    grade: "CGPA: 9.05 / 10",
    description:
      "Focused on full-stack development, applied deep learning, and software engineering fundamentals. NIMCET AIR-418, 400+ LeetCode problems solved, and a 5★ Java rating on HackerRank.",
    icon: "🎓",
    color: "from-accent to-blue-400",
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    institution: "Dr. RMLAU",
    fullName: "Dr. Ram Manohar Lohia Avadh University",
    period: "July 2019 — July 2022",
    grade: "Score: 66.55%",
    description:
      "Built a foundation in mathematics, statistics, and analytical problem solving.",
    icon: "🏛️",
    color: "from-purple-400 to-pink-400",
  },
];

/* ── CODING STATS ── */
export const codingStats = [
  { platform: "LeetCode",   stat: "400+ Problems", color: "#FFA116" },
  { platform: "HackerRank", stat: "5-star Java",   color: "#00EA64" },
  { platform: "NIMCET",     stat: "AIR-418",       color: "#00D4AA" },
];
