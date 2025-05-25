export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    percentage?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    {
      id: "vit",
      degree: "BTech in Computer Science and Engineering",
      institution: "VIT Vellore",
      location: "Vellore, Tamil Nadu, India",
      startDate: "July 2019",
      endDate: "May 2023",
      gpa: "9.41/10.00"
    },
    {
      id: "dps",
      degree: "12th Physics, Chemistry, Maths",
      institution: "DPS Kalyanpur, Kanpur",
      location: "Kanpur, Uttar Pradesh, India",
      startDate: "April 2017",
      endDate: "May 2018",
      percentage: "90%"
    }
  ];