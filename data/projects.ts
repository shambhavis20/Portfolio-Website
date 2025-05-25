export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "shutterbug",
    title: "Shutterbug",
    description: "An AI trained web application built in React with Node.js that helps mimic poses to the uploaded reference image",
    longDescription: "A full-stack web application built using React for the frontend and Node.js for the backend, designed to assist users in mimicking poses from a reference image. The application leverages AI-driven computer vision models to analyze and compare the user’s pose with the uploaded image in real-time or through snapshots. This tool provides visual feedback and accuracy scoring, making it ideal for dancers, fitness enthusiasts, and content creators aiming to refine their form or recreate specific poses.",
    technologies: ["React","Node.js", "Computer Vision","Posenet","Flutter","Tensorflow"],
    achievements: [
      "Developed a full-stack AI web application using React and Node.js that enables users to replicate poses by comparing their body alignment to a reference image",
      "Incorporated computer vision techniques to analyze body joints and angles, providing real-time visual and audio feedback to guide users toward more accurate pose replication.",
      "Designed for diverse use cases such as yoga, dance training, and modeling, making the application adaptable to multiple fitness and creative domains.",
    ],
    image: "/images/projects/shutterbug/shutterbug.png",
    github: "https://github.com/shambhavis20/Shutterbug",
    featured: true
  },
  {
    id: "reunitebot",
    title: "ReuniteBot",
    description: "A twitter bot that uses Tweepy library in python to tag important authorities in nearby locations whenever a tweet is made regarding a lost or missing child",
    longDescription: "A Python-based Twitter bot developed using the Tweepy library, designed to enhance public safety and responsiveness during child missing cases. The bot actively monitors tweets for keywords related to lost or missing children and automatically tags relevant authorities, organizations, and law enforcement agencies based on the tweet’s geolocation. By streamlining the alert process and increasing visibility, the system aims to support faster community response and improve the chances of locating missing children through social media outreach.",
    technologies: ["Flask","Twitter API","Natural Language Processing","Machine Learning"],
    achievements: [
      "Implemented Natural Language Processing (NLP) techniques to classify tweets into categories such as “missing child” or “child found,” enhancing the accuracy of automated alerts.",
      "Integrated Tweepy with geolocation APIs to dynamically tag local authorities and child welfare organizations based on the tweet’s origin",
      "Automated real-time social media monitoring and response, reducing manual effort in spreading alerts and improving the visibility of time-sensitive information",
    ],
    image: "/images/projects/reunitebot/reunitebot.png",
    github: "https://github.com/shambhavis20/ReuniteBot",
    featured: true
  },
  {
    id: "agrigrow",
    title: "AgriGrow",
    description: "An integrated web platform for farmers featuring ML-based crop recommendation and deep learning-powered leaf disease detection.",
    longDescription: "A comprehensive web application designed to empower farmers with intelligent agricultural insights. The platform utilizes a machine learning model to recommend the most suitable crops based on environmental factors such as soil type, temperature, and humidity. Additionally, it incorporates a deep learning-based computer vision system that analyzes uploaded images of plant leaves to accurately detect and classify diseases. By combining crop planning and disease management into a single tool, the application aims to improve decision-making, reduce crop failure, and enhance overall farm productivity.",
    technologies: ["ReactJS", "Machine Learning", "Computer Vision", "Deep Learning"],
    achievements: [
      "Built an end-to-end web platform that integrates machine learning and deep learning to assist farmers in crop selection and plant disease diagnosis.",
      "Implemented a crop recommendation system that suggests optimal crops based on environmental parameters using supervised learning techniques.",
      "Developed a leaf disease detection module using computer vision and CNNs to classify plant diseases from uploaded leaf images with high accuracy."
    ],
    image: "/images/projects/agrigrow/agrigrow.png",
    github: "https://github.com/shambhavis20/AgriGrow",
    featured: true
  },  
];