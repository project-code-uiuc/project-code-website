/**
 * List of projects data. Each project can be accessed with URL: "/projects/[projectId]".
 *
 * Note: Do not give a project an id of "old", as "/projects/old/[semester]"
 * is used for accessing projects from previous semesters.
 */


const PROJECTS: Project[] = [
  // spring 2026
  {
    id: "aquarium-analyzer",
    title: "Aquarium Analyzer",
    emoji: "🐠",
    areas: ["Machine Learning", "Deep Learning", "Computer Vision"],
    projectManagers: [
      { name: "Krrish Ganesh", email: "krrishg2@illinois.edu" }
    ],
    contributors: [],
    started: "spring-2026",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "https://github.com/masterkris/aquarium-analyzer",
    description: "A computer vision-powered web application that uses object detection and image classification models to identify fish species from aquarium images or video clips, then evaluates stocking levels using species compatibility and tank size rules to generate recommendations that help users maintain a healthy aquarium ecosystem.",
  },
  {
    id: "campus-lost-and-found",
    title: "Campus Lost and Found",
    emoji: "🧭",
    areas: ["App Development"],
    projectManagers: [
      { name: "Annika Polavarapu", email: "annikap4@illinois.edu" }
    ],
    contributors: [],
    started: "spring-2026",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "https://github.com/annika-polavarapu/lost-and-found-app",
    description: "An app that lets users post lost items that they find around campus, as well as find and claim their own lost items. ",
  },
  {
    id: "eats-at-uiuc",
    title: "Eats@UIUC",
    emoji: "🍽️",
    areas: ["Web Dev", "Data Viz", "UI/UX Design"],
    projectManagers: [
      { name: "Tanishka Suman", email: "tsuma@illinois.edu" },
      { name: "Jenica Jeevan", email: "jjeev@illinois.edu" }
    ],
    contributors: [],
    started: "spring-2026",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "https://github.com/tanishkasuman/eats-uiuc.git",
    description: "Eats @ UIUC is an interactive web platform that helps students explore the campus dining scene through searchable and filterable restaurant data, including ratings, price ranges, cuisines, and locations. Built as a full-stack application, it combines Python for backend data processing with a dynamic frontend to deliver an intuitive and engaging user experience. The project focuses on improving accessibility, user engagement, and data visualization while providing a real-world application for hands-on development.",
  },
  {
    id: "framelight",
    title: "Framelight",
    emoji: "📷",
    areas: ["Machine Learning", "HCI", "Mobile Development"],
    projectManagers: [
      { name: "Yifan Luo", email: "yifanluo2006@gmail.com" }
    ],
    contributors: [],
    started: "spring-2026",
    alsoActiveIn: [],
    viewProjectLink: "https://framelight.ai/",
    sourceCodeLink: "",
    description: "A mobile camera app that provides photo composition guidance, in real time",
  },
  {
    id: "gamify",
    title: "Gamify!",
    emoji: "🎮",
    areas: ["App Dev"],
    projectManagers: [
      { name: "Felix Lee", email: "felixl3@illinois.edu" }
    ],
    contributors: [],
    started: "spring-2026",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "https://github.com/fishgod8/gamify",
    description: "A gamified application that motivates people towards their passions! ",
  },
  {
    id: "plasma-generation",
    title: "ION-I Plasma Generation Visualization",
    emoji: "⚡",
    areas: ["Graphics", "Simulations", "Data Science", "Web Dev"],
    projectManagers: [
      { name: "Yaoning Qu", email: "yaoning3@illinois.edu" },
      { name: "Aditya Arunachalam", email: "aditya66@illinois.edu" }
    ],
    contributors: [],
    started: "spring-2026",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "https://github.com/quyaoning/plasma-visualization",
    description: "The project is to visualize the physics of plasma and plasma generation. In particular, this project will be a collaboration for with the electric propulsion club, ION-I; the club is building a plasma generator (IonSpark). The project will visualize what is happening in their generator, based off of simulations developed by the club. Specifically, stepwise ionization of Argon gas will be visualized in this project. ",
  },
  {
    id: "regulate",
    title: "Regulate",
    emoji: "❤️",
    areas: ["Web Development"],
    projectManagers: [
      { name: "Esha Himagirish", email: "esha5@illinois.edu" },
      { name: "Tejasvi Prattipati", email: "tp27@illinois.edu" }
    ],
    contributors: [],
    started: "spring-2026",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "https://github.com/eshahima/regulate",
    description: "A web app that helps students recognize, log, and regulate stress using short evidence-based techniques (breathing, grounding, reframing), with simple visualizations over time.",
  },
  {
    id: "market-analyzer",
    title: "Stock Market Signal Analyzer",
    emoji: "📈",
    areas: ["Finance", "Data Analysis", "Prediction Models"],
    projectManagers: [
      { name: "Niv Roychowdhury", email: "nivr2@illinois.edu" },
      { name: "Ruthwik Pabbu", email: "rpabbu2@illinois.edu" }
    ],
    contributors: [],
    started: "spring-2026",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "A Streamlit-based algorithmic trading dashboard that lets you build, test, and analyze quantitative trading strategies through an interactive web interface. The project provides a full-stack environment for strategy development — you configure trading strategies through a visual Strategy Builder, run backtests, and evaluate results via equity curves, drawdown charts, and trade history. A built-in SQL Reports module lets you dig deeper with custom queries (JOINs, aggregations, filtering) against a local SQLite database. The frontend is built with Streamlit and Plotly for rapid, interactive data visualization, while the backend (currently in development) uses Flask, SQLAlchemy, and SQLite to handle strategy persistence and backtesting logic. Data processing runs on Pandas and NumPy. Current functionality includes a performance dashboard, a strategy library for saving and managing multiple configurations, and backtest result visualizations. On the roadmap: a complete backtesting engine, live market data via Yahoo Finance, additional strategy implementations, and user authentication.",
  },
  // fall 2025
  {
    id: "campus-lost-and-found",
    title: "Campus Lost and Found",
    emoji: "🧭",
    areas: ["Mobile App Dev"],
    projectManagers: [
      { name: "Annika Polavarapu", email: "annikap4@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2025",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "An app that allows users to post lost items they find on campus and browse lost item posts. Features include an AI power search which allows user to upload a description or image of their lost item and find possible matches, item claim verification, map view and search filters, and in-app chat to coordinate item pickup. ",
  },
  {
    id: "note-keeper",
    title: "Note Keeper",
    emoji: "📒",
    areas: ["App Dev"],
    projectManagers: [
      { name: "Haochen Ding", email: "hd9@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2025",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "https://github.com/haochend413/AI-Note-Keeper.git",
    description: "Terminal based note manager powered by an LLM agent",
  },
  {
    id: "framelight",
    title: "Framelight",
    emoji: "📷",
    areas: ["Computer Vision", "Machine Learning"],
    projectManagers: [
      { name: "Yifan Luo", email: "yifan65@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2025",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Framelight: Guiding composition, before a photo is taken. Today, camera apps have advanced color adjustment features, yet none provide the ability to adjust a photo’s composition. This is because composition is a feature determined when a picture is physically taken. What if there were a way to adjust the composition before a photo is taken? Framelight will analyze a scene and guide the user towards the best composition available in the current scene. This will be done intuitively, with a series of visual instructions such as arrows and lines, and most importantly, on device in real time. Our vision is to give everyone the ability to create, regardless of their photographic ability.",
  },
  {
    id: "eats-uiuc",
    title: "Eats@UIUC",
    emoji: "🥘",
    areas: ["Web Dev", "Data Vizualization", "UI/UX Design"],
    projectManagers: [
      { name: "Tanishka Suman", email: "tsuma@illinois.edu" },
      { name: "Jenica Jeevan", email: "jjeev@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2025",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "https://github.com/tanishkasuman/eats-uiuc",
    description: "An interactive website that showcases restaurant information around UIUC, including ratings, price ranges, cuisines, and locations. Users can search, filter, and explore detailed views of each restaurant while gaining insights into dining trends, popular cuisines, and top-rated spots. This entry-level project offers hands-on experience with full-stack web development, data visualization, and UI/UX design using tools like Python, HTML/CSS, Figma, and GitHub.",
  },
  {
    id: "illini-bites",
    title: "Illini Bites",
    emoji: "🍔",
    areas: ["App Dev"],
    projectManagers: [
      { name: "Vedaant Magow", email: "vmagow2@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2025",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "IlliniBites is a campus-focused dining helper built for the UIUC community, visitors, and residents. The website/app acts as a one-stop solution for discovering dining options, with easy access to updated menus, pricing, and hours of operation. To make decisions simpler it will also calculate the walking distances from popular campus landmarks such as the Quad, Union, and Green Street. IlliniBites will encourage the community to discover local favorites, save time and enjoy everything the Champaign-Urbana food scene has to offer.",
  },
  {
    id: "agri-sense",
    title: "Agri-Sense",
    emoji: "🌱",
    areas: ["Web Dev", "Hardware"],
    projectManagers: [
      { name: "James Kim", email: "yk41@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2025",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "https://github.com/bigbenno1/agri-sense",
    description: "Data-driven web app for monitoring and optimizing plant health.",
  },
  {
    id: "spot-sync-ai",
    title: "SpotSync AI",
    emoji: "🎟️",
    areas: ["Agentic Dev", "RAG Pipeline"],
    projectManagers: [
      { name: "Yash Naroju", email: "yashroju@gmail.com" }
    ],
    contributors: [],
    started: "fall-2025",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "SpotSync AI is the development of a real-time, AI-powered venue based ticketing agent that integrates conversational voice interfaces with transactional databases. The system builds on a Retrieval-Augmented Generation (RAG) pipeline, Twilio voice integration, and Redis caching to deliver natural, low-latency interactions where users can search for seats, check availability, and book tickets by speaking directly to the agent.\n\nUnlike static retrieval agents, the project enables live database updates, allowing the AI to reserve or release seats in real time while ensuring transactional consistency. A dynamic pricing algorithm adjusts ticket costs based on seat quality and proximity to the concert date, drawing inspiration from revenue models used by platforms like SeatGeek.\n\nIn addition our team focused on ensuring concurrency handling and reliable seat reservations even when multiple users attempt to book simultaneously. The agent’s modular architecture supports scalability, with caching layers to accelerate repeated queries and fallback mechanisms for payment integration or human escalation.",
  },
  {
    id: "visual-debugger",
    title: "Visual Debugger",
    emoji: "️📈",
    areas: ["Fullstack Dev", "Visualization"],
    projectManagers: [
      { name: "Ronit Rout", email: "ronitr2@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2025",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "https://github.com/ronit127/visual-debugger",
    description: "A web-based Python editor and debugger with real-time data structure visualizations",
  },
  // fall 2024
  {
    id: "fitness-app",
    title: "Fitness App",
    emoji: "💪",
    areas: ["App Dev", "ML"],
    projectManagers: [
      { name: "Aakash Kothari", email: "kots.aakash@gmail.com" },
      { name: "Allison Prabakar", email: "aprab6@illinois.edu" },
      { name: "Pari Patel", email: "parip2@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "ehr-system",
    title: "Electronic Health Record System",
    emoji: "🩻",
    areas: ["App Dev"],
    projectManagers: [
      { name: "Kshitij Jalan", email: "kjalan3@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "cv-rankings",
    title: "Computer Vision Model Rankings",
    emoji: "🥈",
    areas: ["Computer Vision", "Web Dev"],
    projectManagers: [
      { name: "Sohum Sharma", email: "sohums3@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "gesture-wand",
    title: "Gesture-Controlled Wand",
    emoji: "🪄",
    areas: ["Hardware", "ML"],
    projectManagers: [
      { name: "Akshat Mehrotra", email: "akshatm4@illinois.edu" },
      { name: "Dash Kamriani Beard", email: "dashpk2@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "chess-engine",
    title: "Chess Engine",
    emoji: "♟️",
    areas: ["ML", "Algorithms"],
    projectManagers: [
      { name: "Joshua Chen", email: "jhchen6@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "company-match",
    title: "CompanyMatch",
    emoji: "💼",
    areas: ["NLP", "Web Dev"],
    projectManagers: [
      { name: "Griffin Burke", email: "gjburke2@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "investor-sentiment-analysis",
    title: "Investor Sentiment Analysis",
    emoji: "📈",
    areas: ["NLP"],
    projectManagers: [
      { name: "Sohum Shah", email: "sohum1094@gmail.com" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "therapy-chatbot",
    title: "Therapy Chatbot",
    emoji: "💬",
    areas: ["NLP"],
    projectManagers: [
      { name: "Isaac Ang", email: "isaacya2@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "fantasy-trading-room",
    title: "Fantasy Trading Room",
    emoji: "🏈",
    areas: ["Web Dev", "App Dev", "NLP", "Data Analytics"],
    projectManagers: [
      { name: "Amaan Bakshi", email: "amaanbakshi777@gmail.com" },
      { name: "Aayan Verma", email: "aayanv2@illinois.edu" },
      { name: "Anmol Shah", email: "anmols3@illinois.edu" },
      { name: "Aruv Dand", email: "aadand2@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "event-matchmaking",
    title: "Event Matchmaking Website",
    emoji: "👥",
    areas: ["Web Dev", "ML"],
    projectManagers: [
      { name: "Anvesha Saraf", email: "anvesha4@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "discord-wiki",
    title: "Discord Search Engine",
    emoji: "🔍",
    areas: ["Web Dev", "NLP"],
    projectManagers: [
      { name: "Nathan Amankwah", email: "nathan37@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "",
    embed: ["https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FJadanPoll%2FDiscord-Wiki%2Fblob%2Fmain%2FBooks_For_Research%2FPR.md&style=default&type=markdown&showLineNumbers=on&showFileMeta=off&showFullPath=on&showCopy=on", '100%', '1435px'],
    highlight: true,
  },
  {
    id: "language-exchange",
    title: "Language Exchange Website",
    emoji: "🗣️",
    areas: ["Web Dev"],
    projectManagers: [
      { name: "Shirley Ma", email: "shirleyma2004@gmail.com" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "uiuc-e-commerce",
    title: "UIUC E-Commerce Website",
    emoji: "🛒",
    areas: ["Web Dev"],
    projectManagers: [
      { name: "Aishwarya Manoj", email: "am133@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "music-recommendation",
    title: "Music Recommendation",
    emoji: "🎧",
    areas: ["Web Dev", "NLP", "Data Analytics"],
    projectManagers: [
      { name: "Sidharth Jain", email: "sj54@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  // pre-2024
  {
    id: "bird-guide",
    title: "Bird Guide",
    emoji: "🐦",
    areas: ["App Dev", "ML"],
    projectManagers: [
      { name: "Ananth Ramaswamy", email: "ananth3@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  {
    id: "mood-tracker",
    title: "Mood Tracker",
    emoji: "😀",
    areas: ["Data Viz", "Web Dev"],
    projectManagers: [{ name: "Gabriel Grais", email: "ggrais2@illinois.edu" }],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  {
    id: "speech-interpretation",
    title: "Enhancing Speech Interpretation",
    emoji: "🗣️",
    areas: ["ML"],
    projectManagers: [
      { name: "Advay Kadam", email: "advayk2@illinois.edu" },
      { name: "Jay Wagh", email: "jayaw2@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  {
    id: "openspace-uiuc",
    title: "OpenSpace UIUC",
    emoji: "🗺️",
    areas: ["Web Dev"],
    projectManagers: [{ name: "Emma Chen", email: "emmahc2@illinois.edu" }],
    contributors: [
      "Kenny Zhou",
      "Sunwoo Baek",
      "Ifra Baig",
      "Raghav Chandrasekar",
      "Andrew Di",
      "Hela Kasibhotla",
      "Rachel Madamba",
      "Kevin Zhou",
    ],
    started: "fall-2023",
    alsoActiveIn: [],
    viewProjectLink: "https://openspace.projectcodeuiuc.org",
    sourceCodeLink: "https://github.com/elddc/openspace",
    description: `This project aggregates and visualizes the occupancy of public spaces on campus.

      Many students have issues finding space on campus in high-demand areas. To help students make more informed decisions, we utilize web scraping and crowdsourcing data to estimate occupancy, and display our estimates in an user-friendly map interface.
      
      Data is currently sourced from Campus Recreation and university libraries.`,
  },

  {
    id: "wikipedia-similarity",
    title: "Wikipedia Similarity Applications",
    emoji: "📊",
    areas: ["Data Science", "Web Dev"],
    projectManagers: [
      { name: "Saket Pochiraju", email: "saketmp2@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  {
    id: "ai-insecurities",
    title: "Insecurities in AI-Generated Code",
    emoji: "🪲",
    areas: ["AI"],
    projectManagers: [
      { name: "Jo Mohan", email: "jomohan2@illinois.edu" },
      { name: "Litao Li", email: "lli205@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  {
    id: "housing-listing-platform",
    title: "Housing Listing Platform",
    emoji: "🏠",
    areas: ["Web Dev"],
    projectManagers: [
      { name: "Karthik Bagavathy", email: "kb42@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
];

/**
 * Represents a project.
 */
export interface Project {
  /**
   * Unique identifier for the project.
   * Corresponds to URL "/projects/[id]".
   */
  id: string;

  /**
   * Title of the project.
   */
  title: string;

  /**
   * Fun emoji associated with the project.
   */
  emoji?: string;

  /**
   * Areas or domains associated with the project.
   * Examples: "ML", "Web Dev", etc.
   */
  areas: string[];

  /**
   * List of project managers who led the project.
   */
  projectManagers: ProjectManager[]; // List of PMs who led the project

  /**
   * List of members who contributed to the project.
   */
  contributors?: string[]; // List of members who contributed

  /**
   * Semester project began. Should follow format "spring-2024", "fall-2023", etc.
   */
  started: string;

  /**
   * Additional semesters project has been running. Should follow format "spring-2024", "fall-2023", etc.
   */
  alsoActiveIn: string[];

  /**
   * Link to view project (good for web dev projects, etc.)
   */
  viewProjectLink?: string;

  /**
   * Link to view the project's source code (probably GitHub).
   */
  sourceCodeLink?: string;

  /**
   * Description of the project.
   */
  description?: string | any;

  /**
   * Embed content.
   */
  embed?: string[] | any;

  highlight? : boolean | any;
}

/**
 * Represents a project manager.
 */
export interface ProjectManager {
  /**
   * Name of the project manager.
   */
  name: string;

  /**
   * Email of the project manager (optional).
   */
  email?: string;
}

/**
 * Get projects that were started during the specified semester or were also
 * active during the specified semester.
 *
 * @param semester the semester to look for projects in (should look like
 * "spring-2024", "fall-2023", etc.)
 * @returns a list of projects
 */
export function getProjectsFromSemester(semester: string) {
  // Filter to make sure project was started or is active in this semester
  return PROJECTS.filter(
    (project) =>
      project.started === semester || project.alsoActiveIn.includes(semester)
  );
}

/**
 * Get a single project by its ID.
 *
 * @param id the ID to find a project by (e.g., "bird-guide", "mood-tracker", etc.)
 * @returns the project corresponding to the specified ID
 */
export function getProjectById(id: string) {
  return PROJECTS.find((project) => project.id === id);
}

/**
 * Print a semester nicely. Convert "spring-2024" to "Spring 2024", etc.
 *
 * @param semester the semester to pretty print ("fall-2023", etc.)
 * @returns a pretty-printed semester ("Fall 2023", etc.)
 */
export function prettyPrintSemester(semester: string) {
  const splitUp = semester.split("-");

  if (splitUp.length !== 2) {
    return semester;
  }

  const [season, year] = splitUp;

  // spring becomes Spring, fall becomes Fall
  const capitalizedSeason = season.charAt(0).toUpperCase() + season.slice(1);

  return capitalizedSeason + " " + year;
}
