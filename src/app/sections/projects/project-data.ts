export interface Project {
  title: string;
  type: string;
  shortPoints: string[];
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Offline Media Streaming System",
    type: "IoT & Entertainment",
    shortPoints: [
      "Offline streaming for transport systems",
      "Local Wi-Fi powered by Raspberry Pi",
      "SD card-based media delivery"
    ],
    description: `An edge-computing media streaming solution for buses, trains, and other public transport. 
    Passengers connect to a local Wi-Fi network to access pre-loaded multimedia content without internet access. 
    Built with Raspberry Pi for low-cost deployment, Angular for the local UI, and Node.js for content delivery.`,
    techStack: ["Raspberry Pi", "Node.js", "Express", "Angular", "SD Card"]
  },
  {
    title: "Device & Media Management Portal",
    type: "Web Admin Panel",
    shortPoints: [
      "Manage devices & media content",
      "OTA updates & analytics dashboard",
      "Role-based access control"
    ],
    description: `Centralized web portal to manage IoT streaming devices and their content. 
    Allows media uploads, device monitoring, over-the-air updates, and real-time usage analytics. 
    Includes role-based access control and a responsive, user-friendly interface.`,
    techStack: ["Angular", "Node.js", "MongoDB", "Bootstrap"]
  },
  {
    title: "Web-based Design Tool",
    type: "Web Application",
    shortPoints: [
      "Drag-and-drop design canvas",
      "Custom fonts, layers & templates",
      "Export to PNG/JPEG"
    ],
    description: `A Canva-like browser-based design platform using Fabric.js for an interactive canvas. 
    Supports image/text editing, custom fonts, layers, templates, and export features. 
    Integrated with S3 for asset storage and optimized for smooth editing performance.`,
    techStack: ["Fabric.js", "Angular", "Node.js", "S3", "Express"]
  },
  {
    title: "Design Tool Admin Dashboard",
    type: "Template & Asset Management",
    shortPoints: [
      "Manage templates & categories",
      "CRUD operations for assets",
      "Analytics & bulk actions"
    ],
    description: `Admin panel for managing templates, fonts, and design assets for the web design tool. 
    Features advanced filtering, moderation workflows, and analytics tracking. 
    Supports large-scale template management with responsive UI.`,
    techStack: ["Angular", "Node.js", "MongoDB", "S3"]
  },
  {
    title: "Portfolio Website",
    type: "Personal Project",
    shortPoints: [
      "SEO-friendly & responsive",
      "Built with Angular & SCSS",
      "CI/CD deployment"
    ],
    description: `Fully responsive personal portfolio built with Angular and SCSS, optimized for SEO and accessibility. 
    Showcases projects, skills, and contact details with a clean, modern UI and smooth animations.`,
    techStack: ["Angular", "SCSS", "Netlify"]
  },
  {
    title: "Community Mobile App",
    type: "Mobile Application",
    shortPoints: [
      "Community features: matrimony, jobs, businesses",
      "Real-time sync with Firebase",
      "Cross-platform React Native app"
    ],
    description: `A multi-feature mobile app serving a large community with services like Matrimony, Job Listings, and Business Directories. 
    Built with React Native and Firebase for real-time updates, with modular architecture and push notifications.`,
    techStack: ["React Native", "Firebase", "Node.js", "MongoDB"]
  },
  {
    title: "E-Commerce Platform",
    type: "Web Application",
    shortPoints: [
      "Cart, checkout, and coupon features",
      "Multi-vendor support",
      "Mobile-first design"
    ],
    description: `An e-commerce application supporting multiple vendors, order management, product search, and secure checkout. 
    Built with Angular for the frontend and Node.js/Express for the backend, with MongoDB for product and order data.`,
    techStack: ["Angular", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Advanced QR Code Scanner",
    type: "Mobile Feature",
    shortPoints: [
      "Detects rotated & damaged codes",
      "Classifies missing markers",
      "Real-time overlay feedback"
    ],
    description: `A QR code scanner that can detect and read rotated, misaligned, or partially damaged QR codes. 
    Uses pattern recognition and real-time overlays for better scanning in industrial settings.`,
    techStack: ["Angular", "Canvas", "Vision Camera"]
  },
  {
    title: "Mobile Face Authentication",
    type: "Biometric Security",
    shortPoints: [
      "Face recognition with anti-spoofing",
      "Fallback PIN & 2FA",
      "Optimized for low-end devices"
    ],
    description: `Face authentication module with spoof detection and 2FA backup, designed for secure mobile app login. 
    Includes real-time detection and optional face re-enrollment features.`,
    techStack: ["React Native", "Face API", "Android", "Camera"]
  },
  {
    title: "What’s Cheaper Near Me – WhatsApp Bot MVP",
    type: "Chatbot Prototype",
    shortPoints: [
      "AI-assisted WhatsApp bot",
      "Find cheaper local alternatives",
      "Built in under 6 hours"
    ],
    description: `An experimental WhatsApp bot MVP built in under 6 hours to help users find cheaper local alternatives for products. 
    Created as an initial project to learn CI/CD and rapid prototyping. Focus was on speed and functionality over perfect code structure.`,
    techStack: ["Node.js", "Express", "WhatsApp Cloud API", "OpenAI API", "Docker", "GitHub Actions"]
  }
];
