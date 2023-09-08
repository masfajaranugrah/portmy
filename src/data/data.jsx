import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { FaReact, FaHtml5, FaNodeJs, FaAws } from "react-icons/fa";
import { SiTailwindcss,SiMongodb ,SiMysql, SiCloudflarepages, SiGithub} from "react-icons/si";
import { Project1, Project2, Project3 } from "../assets";


export const Myskills = [
  {
    icons: <IoLogoJavascript className="text-yellow-500" />,
  },
  {
    icons: <IoLogoCss3 className="text-blue-500"/>,
  },
  {
    icons: <FaReact className="text-green-300"/>,
  },
  {
    icons: <FaHtml5 className="text-orange-300"/>,
  },
  {
    icons: <FaNodeJs className="text-green-400"/>,
  },
  {
    icons: <SiTailwindcss className="text-blue-500"/>,
  },
  {
    icons: <SiMongodb className="text-green-400"/>,
  },
  {
    icons: <SiMysql className="text-blue-400"/>,
  },
  {
    icons: <FaAws />,
  },
];


export const Work = [
  {
    img: Project1,
    title: 'Web Store online',
    desc: 'react, css tailwind, html, css',
    pages: <SiCloudflarepages/>,
    linkpages: '#',
    github: <SiGithub/>,
    linkgithub: '#',
  }, {
    img: Project2,
    title: 'Web Store online',
    desc: 'react, css tailwind, html, css',
    pages:<SiCloudflarepages/>,
    linkpages: '#',
    github: <SiGithub/>,
    linkgithub: '#',
  },
  {
    img: Project3,
    title: 'Web Store online',
    desc: 'react, css tailwind, html, css',
    pages:<SiCloudflarepages/>,
    linkpages: '#',
    github: <SiGithub/>,
    linkgithub: '#',

  },
  {
    img: Project3,
    title: 'Web Store online',
    desc: 'react, css tailwind, html, css',
    pages:<SiCloudflarepages/>,
    linkpages: '#',
    github: <SiGithub/>,
    linkgithub: '#',

  },

]