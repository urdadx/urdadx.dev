export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Padyna - An AI-powered customer support platform for businesses",
    techs: ["Tanstack start", "TypeScript"],
    link: "https://padyna.com",
  },
  {
    title: "Librelinks / An opensource link in bio tool 🚀",
    link: "https://librelinks.vercel.app",
    techs: ["NextJS", "MongoDB", "Prisma"],
  },
  {
    title: "Spacely / A meditation tool for studying ⚡️",
    link: "https://spacely.vercel.app/",
    techs: ["ReactJS (NextJS)"],
  },

  {
    title: "Breeze / A screenshots editor for the web 🔥",
    techs: ["ReactJS (Vite)"],
    link: "https://breeze-editor.vercel.app/",
  },
  
];

export default projects;
