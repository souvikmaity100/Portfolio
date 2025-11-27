// Here we define the navigation links used in the Navbar component
export const navLinks = [
  {
    name: "About Me",
    link: "#aboutme",
  },
  {
    name: "Experieace",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Education",
    link: "#education",
  },
];

// Here we define an array of words which we use in the Hero section
export const words = [
  { text: "Code", img_path: "/images/code.svg", text_col: "text-orange-400" },
  { text: "Ideas", img_path: "/images/ideas.svg", text_col: "text-cyan-400" },
  {
    text: "Concepts",
    img_path: "/images/concepts.svg",
    text_col: "text-violet-400",
  },
  {
    text: "Designs",
    img_path: "/images/designs.svg",
    text_col: "text-emerald-400",
  },
  { text: "Code", img_path: "/images/code.svg", text_col: "text-amber-400" },
  {
    text: "Ideas",
    img_path: "/images/ideas.svg",
    text_col: "text-fuchsia-400",
  },
  {
    text: "Concepts",
    img_path: "/images/concepts.svg",
    text_col: "text-lime-400",
  },
  {
    text: "Designs",
    img_path: "/images/designs.svg",
    text_col: "text-rose-400",
  },
];

// About Me Section
export const floatingImages = [
  {
    imgPath: "/images/logos/logo-14.png",
    style: { rotate: "75deg", top: "30%", left: "20%" },
  },
  {
    imgPath: "/images/logos/logo-1.png",
    style: { rotate: "-30deg", top: "60%", left: "45%" },
  },
  {
    imgPath: "/images/logos/logo-4.png",
    style: { rotate: "90deg", bottom: "30%", left: "70%" },
  },
  {
    imgPath: "/images/logos/logo-6.png",
    style: { rotate: "20deg", top: "10%", left: "38%" },
  },
  {
    imgPath: "/images/logos/logo-11.png",
    style: { rotate: "30deg", top: "70%", left: "70%" },
  },
  {
    imgPath: "/images/logos/logo-15.png",
    style: { rotate: "-45deg", top: "70%", left: "25%" },
  },
  {
    imgPath: "/images/logos/logo-7.png",
    style: { rotate: "-45deg", top: "5%", left: "10%" },
  },
];

// Experience Section
export const experiences = [
  {
    title: "Software Faculty",
    job: "Aptech Learning",
    date: "June 2023 - Oct 2025",
    contents: [
      "Delivered comprehensive training in modern web development, covering HTML5, CSS3, JavaScript, and responsive UI design.",
      "Taught advanced backend concepts including Core PHP, MySQL, REST APIs, and server-side project architecture.",
      "Guided students through real-world projects, focusing on clean code practices, version control (Git/GitHub), and deployment workflows.",
      "Mentored learners in frontend frameworks and libraries such as React.js, ensuring hands-on understanding of component-based development.",
      "Developed and maintained academic project modules, ensuring up-to-date content aligned with industry standards and trends.",
    ],
  },
];

// Skill Section
export const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 65, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "JQuery", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 65, category: "backend" },
  { name: "PHP", level: 75, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 60, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

// Here we define a list of logo icons used in the LogoSlider component
export const logoIconsList = [
  {
    imgPath: "/images/logos/logo-1.png",
  },
  {
    imgPath: "/images/logos/logo-2.png",
  },
  {
    imgPath: "/images/logos/logo-3.png",
  },
  {
    imgPath: "/images/logos/logo-4.png",
  },
  {
    imgPath: "/images/logos/logo-5.png",
  },
  {
    imgPath: "/images/logos/logo-6.png",
  },
  {
    imgPath: "/images/logos/logo-7.png",
  },
  {
    imgPath: "/images/logos/logo-8.png",
  },
  {
    imgPath: "/images/logos/logo-9.png",
  },
  {
    imgPath: "/images/logos/logo-10.png",
  },
  {
    imgPath: "/images/logos/logo-11.png",
  },
  {
    imgPath: "/images/logos/logo-12.png",
  },
  {
    imgPath: "/images/logos/logo-13.png",
  },
  {
    imgPath: "/images/logos/logo-14.png",
  },
  {
    imgPath: "/images/logos/logo-15.png",
  },
  {
    imgPath: "/images/logos/logo-16.png",
  },
];

// Here we define a list of abilities used in the Abilities section
export const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
];

// Projects Section
export const projects = [
  {
    id: 1,
    title: "Tour & Travle",
    date: "2023",
    description:
      "A beautiful Tour and Travel website is built with a structured codebase and minimal CSS, ensuring easy maintenance and seamless future updates.",
    image: "/images/projects/tour-travel.png",
    tags: ["HTML", "CSS", "JavaScript", "AOS"],
    githubUrl: "https://github.com/souvikmaity100/Tour-Travel",
    demoUrl: "https://tour.souvikmaity.space/",
  },
  {
    id: 2,
    title: "Sportify UI",
    date: "2024",
    description:
      "A modern web-based music player application inspired by Spotify's design, built with HTML, CSS, and JavaScript.",
    image: "/images/projects/sportifi-ui.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/souvikmaity100/Sportify-UI",
    demoUrl: "https://music.souvikmaity.space/",
  },
  {
    id: 3,
    title: "MySocial - Social Media Clone",
    date: "2025",
    description:
      "A full-stack social media application with features like user authentication, posting, commenting, and real-time updates using Node.js, React, Express, and MongoDB. (Frontend Work in Progress)",
    image: "/images/projects/social-media.png",
    tags: ["Node JS", "React JS", "Express JS", "MongoDB", "JWT"],
    githubUrl: "https://github.com/samkonnagar/Social-Media",
  },
  {
    id: 4,
    title: "Jai Maa Tara Trading Company",
    date: "2024",
    description:
      "Designed and developed a fully functional website for a nozzles manufacturing company, showcasing its products, services, and expertise while enhancing its online presence and customer engagement",
    image: "/images/projects/jmt.png",
    tags: ["PHP", "JavaScript", "CSS", "MySQL"],
    demoUrl: "https://jmt.souvikmaity.space/",
  },
  {
    id: 5,
    title: "E-Shop - Ecommerce Website",
    date: "2023",
    description:
      "Developed an online shopping site using core PHP and MySQL, enabling users to buy multiple products, wishlist items, and providing sellers with separate dashboards for product management.",
    image: "/images/projects/e_shop.png",
    tags: ["PHP", "JavaScript", "CSS", "MySQL", "Swiper JS"],
    githubUrl: "https://github.com/souvikmaity100/e_shop",
    demoUrl: "https://shop.souvikmaity.space/",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    date: "2025",
    description:
      "A full-stack web application for tracking fitness activities, workouts, and progress. Built with modern web technologies and a focus on user experience.",
    image: "/images/projects/fitness-tracker.png",
    tags: [
      "Node JS",
      "React JS",
      "Express JS",
      "MongoDB",
      "JWT",
      "Chart JS",
      "Axios",
    ],
    githubUrl: "https://github.com/souvikmaity100/Fitness-Tracker",
  },
  {
    id: 7,
    title: "Flood Simulation Model",
    date: "2024",
    description:
      "The Flood Simulation Model is an advanced tool that integrates map API and 3D models to predict and visualize flood scenarios. Designed for the West Bengal Police, it enhances disaster preparedness by providing real-time simulations, aiding decision-making, and improving emergency response efficiency.",
    image: "/images/projects/flood.png",
    tags: ["Node JS", "EJS", "Express JS", "Three JS", "Map API", "JavaScript"],
  },
  {
    id: 8,
    title: "LMS (API) - Learning Management System",
    date: "2025",
    description:
      "A robust backend API for a Learning Management System (LMS) that facilitates course management, user authentication, and progress tracking. Built with Node.js, Express, and MongoDB, it provides secure and efficient endpoints for frontend integration.(Frontend Work in Progress)",
    image: "/images/projects/llm.png",
    tags: ["Node JS", "Express JS", "MongoDB", "JWT"],
    githubUrl: "https://github.com/samkonnagar/LMS/tree/main/backend",
  },
];

// Here we define a list of educations
export const educations = [
  {
    title: "Bachelor of Science in Mathematics (Honors)",
    school: "University of Calcutta",
    logoPath: "/images/e-logo-1.png",
    date: "2019 - 2022",
    performance:
      "Graduated with First Class Honors, achieving a CGPA of 7.96/10.",
  },
  {
    title: "Higher Secondary Education (Science Stream)",
    school: "Subharara High School (H.S.)",
    logoPath: "/images/e-logo-2.png",
    date: "2017 - 2019",
    performance: "Completed with 78% marks.",
  },
  {
    title: "Secondary Education",
    school: "Subharara High School (H.S.)",
    logoPath: "/images/e-logo-3.png",
    date: "2017",
    performance: "Completed with 81.7% marks.",
  },
];

// Here we define social media images and links used in the Footer component
export const socialImgs = [
  {
    name: "twitter",
    imgPath: "/images/x.png",
    link: "https://x.com/souvikmaity100",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/souvikmaity100",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/souvikmaity100/",
  },
];
