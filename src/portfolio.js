/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Uzair",
  title: "Hi all, I'm Uzair",
  subTitle: emoji(
    "A passionate Backend Software Developer 🚀 with expertise in serverless computing, AWS, Node.js, and event driven system."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1myxe4__0M9l4ZESsINxvqywkHqEmiE4e/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/uzair004",
  linkedin: "https://www.linkedin.com/in/uzair004/",
  gmail: "uzairkhattak004@gmail.com",
  devto: "https://dev.to/uzair004",
  stackoverflow: "https://stackoverflow.com/users/14085862/muhammad-uzair",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly scalable services & products"),
    emoji("⚡ Deploying & maintaining applications to cloud services"),
    emoji(
      "⚡ Integration of third party services & automation of existing processes"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "no-sql database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "web-automation",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Distributed database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Serverless",
      fontAwesomeClassname: "fas fa-server"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Peshawar University",
      logo: require("./assets/images/uop-logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2017 - 2021",
      desc: "CGPA 3.7"
      // descBullets: [
      //   "Learned & practiced computer science & software engineering fundamentals",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Backend Engineer",
      company: "DigiStaff Inc",
      companylogo: require("./assets/images/digistaff_logo.png"),
      date: "Dec 2024 – Present",
      desc: "As a Senior Backend Engineer at DigiStaff, I am responsible for designing and implementing scalable backend systems, ensuring high availability and performance.",
      descBullets: [
        "Manage a modern staffing platform designed to simplify and optimize the hiring process. It features AI-powered resource matching, automated resume processing, strict hardware-based access control, along with scheduling, time tracking, applicant and client management, payroll, analytics, and more.",
        "Implement AI-driven solutions to automate processes and improve decision-making capabilities i.e AI based resume processing and resource finding",
        "Develop and enforce strict hardware-based access control measures, ensuring robust data security and compliance",
        "Lead initiatives to streamline internal processes, resulting in improved team productivity and reduced operational bottlenecks. digistaff.ca Mentor and train junior developers, fostering skill development and promoting best practices within the team"
      ]
    },
    {
      role: "Backend Engineer",
      company: "Productbox",
      companylogo: require("./assets/images/productbox_logo.jpeg"),
      date: "Oct 2021 – Present",
      desc: "As a Software Engineer at Productbox, I created, maintained & contributed to multiple products.",
      descBullets: [
        "Pakistan's first digital identity service for passwordless authentication and digital signature",
        "Created supply chain products for cloud kitchens",
        "Job Posting & Application processing protal",
        "Web automation & OCR tools"
      ]
    },
    {
      role: "Junior Backend Engineer",
      company: "Productbox",
      companylogo: require("./assets/images/productbox_logo.jpeg"),
      date: "June 2021 – Oct 2022",
      desc: "Contributed to fintech application with various features.",
      descBullets: [
        "Maintained & fixed bugs in exiting system",
        "Introduced new features for end users",
        "Improved code quality by writting tests"
      ]
    },
    {
      role: "Freelance Backend Developer",
      // company: "Quora",
      companylogo: require("./assets/images/lovie_logo.jpg"),
      date: "Mar 2021 – June 2021",
      desc: "Built an e-commerce marketplace for handmade products.",
      descBullets: [
        "Built a scalable e-commerce marketplace for handmade products",
        "Worked with Node.js, Mongoose and MongoDB"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Startups Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/digistaff_logo.png"),
      projectName: "DigiStaff",
      projectDesc: "Digistaff is a modern staffing platform designed to simplify and optimize the hiring process. It features AI-powered resource matching, automated resume processing, strict hardware-based access control, along with scheduling, time tracking, applicant and client management, payroll, analytics, and more.",
      footerLink: [
        {
          name: 'Visit Website',
          url: "https://digistaff.ca"
        }
      ]
    },
    {
      image: require("./assets/images/meraid_logo.png"),
      projectName: "meraID",
      projectDesc:
        "Pakistan's first digital identity & passwordless authentication & digital signature paltform.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://meraid.pk/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lettus_logo.jpg"),
      projectName: "Lettus Kitchens",
      projectDesc:
        "Supply chain & inventory management app for cloud kitchens.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://order.lettuskitchens.com/"
        }
      ]
    },
    {
      image: require("./assets/images/monstor_pool_logo.webp"),
      projectName: "Monstor Pool",
      projectDesc:
        "The Monster Pool app is an interest-free peer-to-peer lending platform that allows users to collect and lend money to people they trust.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.monsterspool.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dev.to/uzair004/bike-shedding-triviality-in-software-development-3g0l",
      title: "Bike shedding Triviality in software development",
      description:
        "How does software development gets effected by bike shedding effect? How do teams give disproportionate weight to trivial issues of a larger or more complex project. "
    },
    {
      url: "https://dev.to/uzair004/solve-problem-of-api-responds-with-401-error-4i8",
      title: "Solve problem of API responds with 401 error",
      description:
        "How to solve common issue of integrating third party APIs that responds with 401 error? In this example we'd use the weather api to debug & fix the bug."

      // description:
      // "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "uzairkhattak004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
