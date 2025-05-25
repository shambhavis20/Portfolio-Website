// data/experience.ts
export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
    type?: 'work' | 'internship';
  }
  
  export const experiences: Experience[] = [
    // Regular job positions
    {
      id: "software-engineer",
      title: "Software Engineer",
      company: "Microsoft",
      location: "Hyderabad, India",
      startDate: "June 2023",
      endDate: "Present",
      description: "Improved the boot performance of Excel Web",
      achievements: [
        "Implemented caching of visual components in Excel Web using local and host cache",
        "Reduced page load time from 12sec to 10sec"],
      type: 'work'
    },
    {
      id: "jp-morgan-intern",
      title: "Software Engineer Intern",
      company: "JP Morgan & Chase",
      location: "Hyderabad, India",
      startDate: "June 2022",
      endDate: "July 2022",
      description: "Restructured an integral user application to React framework",
      achievements: [
        "Updated legacy code to make it more efficient and manageable by 35% reduction of lines of code",
      ],
      type: 'internship'
    },
    
    {
      id: "startup-intern",
      title: "Web Developer Intern",
      company: "Stealth Startup",
      location: "Remote, India",
      startDate: "May 2021",
      endDate: "Dec 2021",
      description: "Front-end development with back-end system integration using React in Redux framework",
      achievements: [
        "Introduced client-side caching for reducing the query time from 15-30 seconds to 3-5 seconds",
        "Undertook unit-testing of react components using jest and react-testing-library and increased testing coverage of application from 16% to 34%"
      ],
      type: 'internship'
    }
  ];