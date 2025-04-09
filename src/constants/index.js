import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am passionate about technology and the digital world, having immersed myself in it for 7 years, studying AI, IoT, robotics, website development, and automation.`;

export const ABOUT_TEXT = `Hello!!! My name is Yanasorn Yeeduang. I’m 28 years old. I graduated from Kasetsart University, Faculty of Engineering in Mechanical Engineering. I am originally from Phrae Province. In my free time, I enjoy watching movies, listening to music, and exercising. `;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Engineer",
    company: "PTT Public Company Limited",
    description: `I oversee maintenance planning for machinery, including PM (Preventive Maintenance) and CM (Corrective Maintenance), as well as calculating spare parts requirements in the inventory.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2021 - 2022",
    role: "Production Engineer (Automation Kaizen)",
    company: "Siam Kubota",
    description: `By implementing Kaizen initiatives to reduce takt time, maintaining and improving Automated Guided Vehicles (AGVs), developing automation systems with PLCs and IoT technology, designing jigs and fixtures to support operator tasks, and setting up as well as providing ongoing support for machine operations in the production line, we aim to streamline workflows and enhance overall productivity.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2020 - 2021",
    role: "Site Engineer",
    company: "RITTA",
    description: `I created shop drawings and designed MEP systems using Revit, performed quantity takeoffs and managed cost control, inspected on-site materials, coordinated with subcontractors and suppliers for BAS setup, gathered information for system usage manuals, and produced name tags with CNC to locate equipment on-site..`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },

];

export const PROJECTS = [
  {
    title: "NextGenVision AI",
    image: project1,
    description:
      "Use AI cameras to help detect potential hazards and unsafe practices in the work area of the Ban Bueng Natural Gas Main Station.",
    technologies: ["C++", "Python", "Nodejs", "Postgres"],
  },
  {
    title: "Power Monitoring System",
    image: project2,
    description:
      "Developed a solution that retrieves data from the machinery’s measuring devices to create a dashboard for monitoring electricity usage and analyzing motor performance.",
    technologies: ["C++", "Python", "Nodejs", "Postgres"],
  },
  {
    title: "Chatbot Co2",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["googlescript", "python"],
  },
  {
    title: "Online Warehouse",
    image: project4,
    description:
      "I developed an application for spare parts listing to streamline the process of requesting image data from the warehouse.",
    technologies: ["Appsheet", "Googlesheet"],
  },
];

export const CONTACT = {
  phoneNo: "093-1403171",
  email: "yanasorn.y@gmail.com",
};
