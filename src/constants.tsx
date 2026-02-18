import { HiOutlineHome } from "react-icons/hi2";
import { MdWorkHistory } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaStackOverflow } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { RiContactsBook3Line } from "react-icons/ri";
import { GrInfo } from "react-icons/gr";

export const menuItems = [
  { id: "hero", label: "Home", icon:  <HiOutlineHome />},
  { id: "about", label: "About",icon: <GrInfo />},
  { id: "work", label: "Work", icon: <MdWorkHistory /> },
  { id: "projects", label: "Projects", icon: <GrProjects /> },
  { id: "tech", label: "Stack", icon: <FaStackOverflow /> },
  { id: "gallery", label: "Gallery", icon: <GrGallery /> },
  // { id: "companies", label: "Companies", icon: "🏢" },
  { id: "contact", label: "Contact", icon: <RiContactsBook3Line /> },
];

export const workHistory = [
  {
    title: "Blockchain Developer",
    company: "Genesys Tech hub - internship",
    period: "2024 - 2025",
    description:
    "Built smart contracts and Decentralized applications on Ethereum and Base networks.",
  },
  {
    title: "FullStack Developer",
    company: "Jackocoins Ltd - fulltime",
    period: "2023 - 2025",
    description:
      "Contributed to the development of scalable web applications using Vue, Node.js, ether.js and Cloud technologies.",
  },
  {
    title: "Fullstack Developer",
    company: "Anhydraze Limited - internship",
    period: "2022-2023",
    description:
      "Developed and maintained full-stack web applications using javascript and laravel.",
  },
  {
    title: "Frontend Developer",
    company: "Oluaka Institute - internship",
    period: "2021",
    description:
      "Developed and maintained frontend web applications using modern JavaScript frameworks.",
  }
];

export const projects = {
  fullstack: [
    {
      name: "Quivy",
      category: "Web Development",
      tech: "React, Node.js, Socket.io, PostgreSQL",
      description: "Interactive platform for creating and managing campaigns and promotions, built with React and Node.js, featuring real-time updates and user-friendly interface.",
      image: "./quivy.png",
      link: "https://www.quivy.io"
    },
    {
      name: "Jackocoins",
      category: "Web Development",
      tech: "Vue, Node.js, MySQL, Ethers.js",
      description: "A cryptocurrency exchange platform built with Vue and Node.js, featuring real-time price tracking and secure transactions.",
      image: "./jackocoins.png",
      link: "https://www.jackocoins.com"
    },
  ],
  backend: [
    {
      name: "Booking Microservice",
      category: "Microservices",
      tech: "Node.js, PostgreSQL, Redis, RabbitMQ",
      description: "A comprehensive booking management system built with NestJS, featuring real-time notifications, background job processing, and a robust microservices architecture.",
      image: "./booking-microservice.jpg",
      link: "https://github.com/Tochy112/booking-microservice"
    },
    // Add more projects...
  ],
  blockchain: [
    {
      name: "Truth Check",
      category: "Web3",
      tech: "Solidity, React, ether.js, Wagmi",
      description: "A decentralized information verification platform built on Base chain.",
      image: "/truthchecker.png",
      link: "https://truthchecker.vercel.app"
    },
    // Add more projects...
  ],
};

export const galleryImages = [
  {
    src: "/pics-7.jpg",
    alt: "Workshop",
    caption: "Google I/O 2022",
  },
  {
    src: "/pics-8.png",
    alt: "Speaking",
    caption: "Tech Talk 2023",
  },
  {
    src: "/pics-4.jpeg",
    alt: "Tech Conference",
    caption: "Web3 Summit 2024",
  },
  {
    src: "/pics-3.jpeg",
    alt: "Meetup",
    caption: "DevFest 2024",
  },
   // {
  //   src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
  //   alt: "Hackathon",
  //   caption: "ETHGlobal Hackathon",
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800",
  //   alt: "Team Event",
  //   caption: "Team Offsite",
  // },
];

export const companies = [
  { name: "Google", logo: "🔍" },
  { name: "Microsoft", logo: "🪟" },
  { name: "Amazon", logo: "📦" },
  { name: "Meta", logo: "👥" },
  { name: "Apple", logo: "🍎" },
  { name: "Netflix", logo: "🎬" },
];

export const techStack = [
  // Frontend
  { name: "React", icon: "https://files.svgcdn.io/material-icon-theme/react.svg", category: "frontend" },
  { name: "Next.js", icon: "https://files.svgcdn.io/teenyicons/nextjs-outline.svghttps://files.svgcdn.io/skill-icons/nextjs-dark.svg", category: "frontend" },
  { name: "TypeScript", icon: "https://files.svgcdn.io/material-icon-theme/typescript.svg", category: "frontend" },
  { name: "Tailwind", icon: "https://files.svgcdn.io/material-icon-theme/tailwindcss.svg", category: "frontend" },
  { name: "Vue.js", icon: "https://files.svgcdn.io/devicon/vuejs.svg", category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "https://files.svgcdn.io/material-icon-theme/nodejs.svg", category: "backend" },
  { name: "Express", icon: "https://files.svgcdn.io/skill-icons/expressjs-dark.svg", category: "backend" },
  { name: "NestJS", icon: "https://files.svgcdn.io/devicon/nestjs.svg", category: "backend" },

  // Blockchain
  { name: "Solidity", icon: "https://files.svgcdn.io/skill-icons/solidity.svg", category: "blockchain" },
  { name: "Hardhat", icon: "https://files.svgcdn.io/material-icon-theme/hardhat.svg", category: "blockchain" },
  { name: "Ethers.js", icon: "https://files.svgcdn.io/logos/ethers.svg", category: "blockchain" },
  { name: "Web3.js", icon: "https://files.svgcdn.io/logos/web3js.svg", category: "blockchain" },
  { name: "Solana", icon: "https://files.svgcdn.io/token-branded/solana.svg", category: "blockchain" },
  
  // Databases
  { name: "PostgreSQL", icon: "https://files.svgcdn.io/logos/postgresql.svg", category: "database" },
  { name: "MongoDB", icon: "https://files.svgcdn.io/devicon/mongodb.svg", category: "database" },
  { name: "Redis", icon: "https://files.svgcdn.io/skill-icons/redis-light.svg", category: "database" },
  { name: "MySQL", icon: "https://files.svgcdn.io/devicon/mysql.svg", category: "database" },

  // Tools
  { name: "Docker", icon: "https://files.svgcdn.io/devicon/docker.svg", category: "tools" },
  { name: "Kubernetes", icon: "https://files.svgcdn.io/logos/kubernetes.svg", category: "tools" },
  { name: "AWS", icon: "https://files.svgcdn.io/logos/aws.svg", category: "tools" },
  { name: "Azure", icon: "https://files.svgcdn.io/devicon/azure.svg", category: "tools" },
  { name: "Git", icon: "https://files.svgcdn.io/devicon/git.svg", category: "tools" },
];
