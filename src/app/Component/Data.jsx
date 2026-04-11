const HomeData = {
  name: "Jahangir Alam",
  About:
    "A React Native Developer with over 2 years of experience building scalable, production-ready mobile applications for both Android and iOS. I specialize in advanced features such as payment integrations (Google Pay & Apple Pay), push notifications, and secure authentication systems (Google/Apple Sign-In). I focus on writing clean, scalable code and delivering high-performance applications.",
  position: "React Native Developer (Android & iOS)",
  resume: "/resume.pdf",
  github: "https://github.com/ErJahangir",
  linkedIn: "https://www.linkedin.com/in/jahangircse786",
  email: "jahangiralamnke786@gmail.com",
};
const homeSkills = [
  "React Native (Android & iOS)",
  "Payments Integration (IAP, Google & Apple Pay)",
  "Push Notifications (FCM, Expo)",
  "Authentication (Google & Apple Sign-in)",
  "Next.js & React.js",
  "Redux Toolkit & State Management",
];
const Skills = [
  {
    id: 1,
    About: "Proficient in C programming for algorithmic problem solving.",
    referance: "",
    image: "/skillsimg/C.png",
    Skills: "C Programming",
  },
  {
    id: 2,
    About: "Strong foundation in C++ for performance-oriented development.",
    referance: "",
    image: "/skillsimg/CPP.png",
    Skills: "CPP Programming",
  },
  {
    id: 3,
    About: "Expert in building semantic and accessible web structures.",
    referance: "",
    image: "/skillsimg/HTML.png",
    Skills: "HTML5",
  },
  {
    id: 4,
    About: "Advanced styling with modern CSS3 features and animations.",
    referance: "",
    image: "/skillsimg/CSS.png",
    Skills: "CSS3",
  },
  {
    id: 5,
    About:
      "Deep understanding of ES6+, asynchronous programming, and DOM manipulation.",
    referance: "",
    image: "/skillsimg/JS.png",
    Skills: "JavaScript",
  },
  {
    id: 6,
    About: "Rapid UI development with Bootstrap grid and components.",
    referance: "",
    image: "/skillsimg/Bootstrap.png",
    Skills: "Bootstrap",
  },
  {
    id: 7,
    About: "Utility-first CSS for highly customizable and responsive designs.",
    referance: "",
    image: "/skillsimg/Tailwind.png",
    Skills: "Tailwind css",
  },
  {
    id: 8,
    About:
      "Building dynamic and interactive UIs with React hooks and components.",
    referance: "",
    image: "/skillsimg/Reactjs.png",
    Skills: "React Js",
  },
  {
    id: 9,
    About: "SSR and SSG with Next.js for optimized performance and SEO.",
    referance: "",
    image: "/skillsimg/Nextjs.png",
    Skills: "Next js",
  },
  {
    id: 10,
    About: "Developing cross-platform mobile apps for Android and iOS.",
    referance: "",
    image: "/skillsimg/Reactnative.png",
    Skills: "React Native",
  },
  {
    id: 11,
    About: "Predictable state management for complex applications.",
    referance: "",
    image: "/skillsimg/Redux.png",
    Skills: "Redux",
  },
  {
    id: 12,
    About: "Version control and collaborative development workflows.",
    referance: "",
    image: "/skillsimg/Github.png",
    Skills: "Git & GitHub",
  },
  {
    id: 13,
    About:
      "Cloud services for authentication, real-time databases, and cloud messaging.",
    referance: "",
    image: "/skillsimg/Firebase.png",
    Skills: "Firebase",
  },
  {
    id: 14,
    About: "Consuming RESTful and GraphQL APIs efficiently.",
    referance: "",
    image: "/skillsimg/API.png",
    Skills: "API Integration",
  },
];
const ExperienceData = [
  {
    id: 1,
    position: "React Native Developer",
    company: "HangingPanda Private Limited · Noida (Full-time)",
    duration: "May 2024 - Present",
    about: [
      "Sole frontend developer of Stamba, a production-level mobile app live on Play Store & App Store.",
      "Developed scalable and high-performance mobile UI using React Native for Android and iOS.",
      "Implemented QR/NFC-based loyalty system replacing traditional cards.",
      "Built core features including wallet, reward redemption, and user engagement tracking.",
      "Integrated REST APIs and ensured smooth real-time data updates across the application.",
      "Improved app performance through optimized UI rendering and efficient state management.",
      "Contributed to a women’s health application with AI chatbot, reminders, and community features.",
      "Collaborated with clients and backend team to translate requirements into scalable frontend solutions.",
      "Delivered multiple client projects via Upwork across fintech and verification domains.",
      "Implemented advanced features including In-App Purchases (IAP), OCR (Google Cloud Vision), face verification (AWS Rekognition), and biometric authentication.",
      "Worked directly with clients for requirement discussions and guided feature implementation within the team.",
    ],
  },
  {
    id: 2,
    position: "React Native Intern",
    company: "HangingPanda Private Limited · Noida (Internship)",
    duration: "Dec 2024 - Mar 2025",
    about: [
      "Gained foundational industry experience working in-office with a senior development team.",
      "Participated in professional brainstorming sessions and daily standups to solve UI/UX challenges.",
      "Adhered to company-wide coding standards and Git-based collaborative workflows.",
      "Assisted in refining high-traffic application features and performing thorough mobile debugging in a professional environment.",
    ],
  },
  {
    id: 3,
    position: "React Developer Intern",
    company: "Eulogik · Bhopal (Internship)",
    duration: "Oct 2024 - Nov 2024",
    about: [
      "Worked on-site to build interactive and highly responsive frontend components using React.js.",
      "Collaborated closely with designers to implement pixel-perfect layouts following professional Figma designs.",
      "Participated in technical meetings to discuss state management strategies using Redux Toolkit.",
    ],
  },
  {
    id: 4,
    position: "React Native Intern",
    company: "ART - Abstinent Research & Technologies · Bhopal (Internship)",
    duration: "Mar 2024 - Jul 2024",
    about: [
      "Developed mobile application features from scratch within a fast-paced office environment.",
      "Assisted in requirement analysis and translation of business logic into functional code modules.",
      "Focused on modular component architecture and cross-platform styling consistency in a team setting.",
    ],
  },
];

const ProjectData = [
  {
    id: 1,
    Name: "Stamba",
    skills: [
      "React Native",
      "JavaScript",
      "Redux Toolkit",
      "API Integration",
      "Payment Systems",
    ],
    img: "/Project/stamba.png",
    description:
      "A production-level mobile app live on Play Store & App Store. Features a scalable React Native UI, QR/NFC-based loyalty systems, digital wallet, and real-time reward redemption. Engineered for high performance and seamless user engagement.",
    live: "https://play.google.com/store/apps/details?id=com.stamba.app&hl=en_IN", // Placeholder if unknown, though I'll look for it
  },
  {
    id: 2,
    Name: "Weather Web App",
    skills: [
      "Tailwind Css",
      "Next JS",
      "JavaScript",
      "Redux Toolkits",
      "Weather API",
    ],
    img: "/Project/image.png",
    description:
      "A high-performance weather platform providing real-time data worldwide. Built with Next.js for server-side rendering and optimized SEO. Features include location-based forecasting, detailed metrics (humidity, wind speed), and a sleek, responsive UI.",
    button: "https://github.com/ErJahangir/weather",
    live: "https://weather-using-redux.vercel.app/",
  },
  {
    id: 3,
    Name: "Todo List Redux",
    skills: [
      "Tailwind Css",
      "Next JS",
      "JavaScript",
      "Redux Toolkits",
      "AsyncStorage",
    ],
    img: "/Project/todo.png",
    description:
      "A full-featured task management application with persistent storage and advanced state management. Supports complex CRUD operations, task filtering, and a seamless desktop-to-mobile user experience.",
    button: "https://github.com/ErJahangir/PG-LIfe-Application-",
    live: "https://todo-redux-toolkits.vercel.app/",
  },
  {
    id: 4,
    Name: "Grochouse Mobile App",
    skills: [
      "React Native",
      "React Navigation",
      "Redux-Toolkits",
      "Firebase",
      "API Integration",
    ],
    img: "/Project/grochouse.png",
    description:
      "An intuitive grocery shopping mobile application. Features seamless navigation, high-performance list rendering, custom interactive modals, and real-time updates through robust API integration and Firebase services.",
  },
  {
    id: 5,
    Name: "Viracore",
    skills: ["Tailwind Css", "Next JS", "JavaScript", "Responsive Design"],
    img: "/Project/viracore.png",
    description:
      "A global network platform for individuals and societies. Facilitates communication and networking across worldwide groups. Optimized for performance and accessibility using Next.js architecture.",
    live: "https://viracore.launchmysite.in/",
  },
];

const EducationData = [
  {
    id: 1,
    logo: "/Sistec.png",
    college: "Sagar Institute of Science Technology & Engineering (SISTEc-E)",
    name: "B.Tech",
    course: "Computer Science and Engineering",
    marks: "8.13 CGPA",
    duration: "2023 - 2026",
  },
  {
    id: 2,
    logo: "/RLSY.png",
    college: "RLSY College Bettiah, Bihar",
    name: "Independent Senior Secondary (12th)",
    course: "Science",
    marks: "74.4%",
    duration: "2019 - 2020",
  },
  {
    id: 3,
    logo: "/MJK.png",
    college: "MJK College, Chamua, Bettiah, Bihar",
    name: "High School (10th)",
    course: "General",
    marks: "71.4%",
    duration: "2017 - 2018",
  },
];
export {
  HomeData,
  Skills,
  ExperienceData,
  ProjectData,
  EducationData,
  homeSkills,
};
