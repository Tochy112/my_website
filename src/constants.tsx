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
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
  },
  {
    title: "Blockchain Developer",
    company: "Crypto Solutions",
    period: "2020 - 2022",
    description:
      "Built smart contracts and DeFi applications on Ethereum and Polygon networks.",
  },
  {
    title: "Backend Engineer",
    company: "StartupHub",
    period: "2018 - 2020",
    description:
      "Designed and implemented RESTful APIs and microservices architecture.",
  }
];

export const projects = {
  fullstack: [
    {
      name: "E-Commerce Platform",
      category: "Web Development",
      tech: "React, Node.js, MongoDB",
      description: "Full-featured online store with payment integration and real-time inventory management",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800"
    },
    {
      name: "E-Commerce Platform",
      category: "Web Development",
      tech: "React, Node.js, MongoDB",
      description: "Full-featured online store with payment integration and real-time inventory management",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800"
    },
  ],
  backend: [
    {
      name: "API Gateway",
      category: "Microservices",
      tech: "Node.js, GraphQL",
      description: "Unified API layer for microservices with rate limiting and authentication",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
    },
    // Add more projects...
  ],
  blockchain: [
    {
      name: "NFT Marketplace",
      category: "Web3",
      tech: "Solidity, React, Web3.js",
      description: "Decentralized marketplace for digital art with smart contract integration",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800"
    },
    // Add more projects...
  ],
};

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    alt: "Tech Conference",
    caption: "Web3 Summit 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
    alt: "Hackathon",
    caption: "ETHGlobal Hackathon",
  },
  {
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800",
    alt: "Team Event",
    caption: "Team Offsite",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
    alt: "Speaking",
    caption: "Tech Talk",
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
    alt: "Workshop",
    caption: "Blockchain Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
    alt: "Meetup",
    caption: "Developer Meetup",
  },
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
  { name: "React", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg", category: "frontend" },
  { name: "Next.js", icon: "https://files.svgcdn.io/teenyicons/nextjs-outline.svghttps://files.svgcdn.io/skill-icons/nextjs-dark.svg", category: "frontend" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg", category: "frontend" },
  { name: "Tailwind", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg", category: "frontend" },
  { name: "Vue.js", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg", category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg", category: "backend" },
  { name: "Express", icon: "https://files.svgcdn.io/skill-icons/expressjs-dark.svg", category: "backend" },
  { name: "NestJS", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg", category: "backend" },

  // Blockchain
  { name: "Solidity", icon: "https://files.svgcdn.io/skill-icons/solidity.svg", category: "blockchain" },
  { name: "Hardhat", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/hardhat-colored.svg", category: "blockchain" },
  { name: "Ethers.js", icon: "https://files.svgcdn.io/logos/ethers.svg", category: "blockchain" },
  { name: "Web3.js", icon: "https://files.svgcdn.io/logos/web3js.svg", category: "blockchain" },
  { name: "Solana", icon: "https://files.svgcdn.io/token-branded/solana.svg", category: "blockchain" },
  
  // Databases
  { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg", category: "database" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg", category: "database" },
  { name: "Redis", icon: "https://files.svgcdn.io/skill-icons/redis-light.svg", category: "database" },
  { name: "MySQL", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg", category: "database" },

  // Tools
  { name: "Docker", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg", category: "tools" },
  { name: "Kubernetes", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kubernetes-colored.svg", category: "tools" },
  { name: "AWS", icon: "https://files.svgcdn.io/logos/aws.svg", category: "tools" },
  { name: "Azure", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/azure-colored.svg", category: "tools" },
  { name: "Git", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg", category: "tools" },
];
