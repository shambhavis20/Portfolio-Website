export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/shambhavis20",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shambhavis20/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:shambhavis20@gmail.com",
      icon: "mail"
    },
    {
      id: "leetcode",
      name: "Leetcode",
      url: "https://leetcode.com/u/shambhavis20/",
      icon: "leetcode"
    },
    {
      id: "codechef",
      name: "CodeChef",
      url: "https://www.codechef.com/users/shambhavis20",
      icon: "codechef"
    },
    {
      id: "codeforces",
      name: "Codeforces",
      url: "https://codeforces.com/profile/shambhavis20",
      icon: "codeforces"
    }
  ];