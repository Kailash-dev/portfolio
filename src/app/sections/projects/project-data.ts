export interface Project {
  title: string;
  type: string;
  shortPoints: string[]; // ✨ New: Summary bullet points
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}
export const PROJECTS: Project[] = [
  {
    title: "NStream Connect (IoT Entertainment System)",
    type: "Product for Travel Industry",
    shortPoints: [
      "Offline media streaming on transport",
      "Local Wi-Fi powered by Raspberry Pi",
      "No internet required, SD card-based delivery"
    ],
    description: `NStream Connect is an edge-computing based media streaming solution designed specifically for public transport systems such as buses and trains. Built on Raspberry Pi, it enables passengers to connect to a local Wi-Fi network and stream pre-loaded multimedia content including movies, TV shows, and music without internet connectivity. The system uses SD card storage for offline access, and leverages Angular for the user interface served locally. Node.js and Express handle content delivery and session management. The system is lightweight, scalable, and capable of functioning in low-resource environments, making it ideal for emerging markets.`,
    techStack: ["Raspberry Pi", "Node.js", "Express", "Angular", "SD Card"]
  },
  {
    title: "NStream Admin Portal",
    type: "Web Admin Panel",
    shortPoints: [
      "Manage NStream devices & media",
      "Supports OTA updates & analytics",
      "Role-based access & real-time sync"
    ],
    description: `This portal serves as the centralized command center for managing thousands of NStream Connect devices deployed across the country. Admins can upload and categorize media files, monitor device connectivity and health, push OTA (Over-the-Air) updates, and view granular usage analytics per region. The system features role-based access control, rich data visualization, and real-time sync with offline devices when connectivity resumes. The portal was built to handle high concurrency and ensure security while providing an intuitive interface for non-technical operators.`,
    techStack: ["Angular", "Node.js", "MongoDB", "Bootstrap"]
  },
  {
    title: "Sosha (Design Tool like Canva)",
    type: "Web Application",
    shortPoints: [
      "Drag-and-drop graphic design tool",
      "Built using Fabric.js for canvas editing",
      "Supports custom fonts, export, & layers"
    ],
    description: `Sosha is a full-featured graphic design tool developed to bring Canva-like capabilities to the browser. It includes an interactive canvas built with Fabric.js, allowing users to add, style, drag, and layer text/images with precision. Features include undo/redo history, image cropping, template selection, layer locking, custom fonts, and export to PNG/JPEG. A key challenge was optimizing performance for canvas operations and syncing state for multi-user collaboration. The backend handles template management, user assets, and cloud export via Amazon S3. The app is also integrated with dynamic pricing for premium templates.`,
    techStack: ["Fabric.js", "Angular", "Node.js", "S3", "Express"]
  },
  {
    title: "Sosha Admin Panel",
    type: "Template & User Management",
    shortPoints: [
      "Template and asset moderation panel",
      "CRUD for templates, fonts, and categories",
      "Real-time dashboard and bulk actions"
    ],
    description: `This admin dashboard is used to manage all the internal assets and content within the Sosha design platform. It supports CRUD operations for templates, fonts, categories, and user-submitted designs. Built with a clean and responsive UI, the admin panel enables moderation workflows, asset versioning, and performance dashboards for monitoring template engagement and export statistics. MongoDB is used for storing metadata while assets are hosted on S3. Advanced filtering and bulk operations were implemented to help manage thousands of templates efficiently.`,
    techStack: ["Angular", "Node.js", "MongoDB", "S3"]
  },
  {
    title: "Corporate Website",
    type: "Business Website",
    shortPoints: [
      "SEO-friendly & accessible design",
      "Built with Angular & SCSS",
      "Deployed using Netlify CI/CD"
    ],
    description: `This is a performance-optimized, SEO-friendly corporate website designed for a product and services company. Built using Angular and SCSS, it offers smooth page transitions, responsive layouts, and accessibility compliance. Each section (services, testimonials, contact, blog) is modular and theme-aware, allowing easy content updates. Deployed on Netlify with CI/CD integration for automatic builds, the website also features Google Lighthouse optimization and dynamic meta tag generation for search engine indexing.`,
    techStack: ["Angular", "SCSS", "Netlify"]
  },
  {
    title: "Vipra App",
    type: "Community Mobile App",
    shortPoints: [
      "Community features: matrimony, jobs, businesses",
      "Built in React Native with Firebase",
      "Modular, scalable & realtime"
    ],
    description: `Vipra App is a cross-platform mobile solution built to digitally empower a large community through services such as Matrimony, Job Listings, and Business Directories. Built with React Native, the app leverages Firebase for real-time data updates and messaging. Each feature has its own module with form validation, image upload, bookmarking, and push notifications. Node.js microservices were used for backend logic including authentication, data management, and analytics. Special care was taken to keep the app lightweight while ensuring high reliability on low-end devices.`,
    techStack: ["React Native", "Firebase", "Node.js", "MongoDB"]
  },
  {
    title: "Amal E-Commerce",
    type: "E-Commerce App",
    shortPoints: [
      "Middle East-focused e-commerce platform",
      "Features include cart, coupon, orders, checkout",
      "Supports multi-vendor and mobile optimization"
    ],
    description: `Amal is a robust e-commerce application tailored for the Middle Eastern market. It includes features such as full-text search, faceted filtering, cart management, coupon logic, order tracking, and secure checkout. The frontend was built with Angular and optimized for mobile experience. The backend handles order workflows, payment gateway integration, product management, and user authentication. The architecture supports multi-vendor setup and admin dashboards for analytics and order reports. MongoDB's flexible schema was used to manage product variations and custom metadata.`,
    techStack: ["Angular", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "QR Code Scanner & Rotation Detection",
    type: "Mobile Application",
    shortPoints: [
      "Detects rotated & misaligned QR codes",
      "Classifies based on missing markers",
      "Built with Canvas & Vision Camera"
    ],
    description: `A next-gen QR code scanner app built with a focus on understanding QR code geometry, orientation, and partial visibility. The app can detect and interpret rotated or misaligned QR codes using finder pattern analysis. It also classifies QR codes based on missing position markers and adjusts decoding logic accordingly. Built using Vision Camera and HTML Canvas, the app offers real-time feedback with visual overlays and categorization logic. This is particularly useful for industrial or hardware environments where QR labels may not be perfectly aligned.`,
    techStack: ["Angular", "Canvas", "Vision Camera"]
  },
  {
    title: "Mobile Face Authentication",
    type: "Biometric Mobile Feature",
    shortPoints: [
      "Enterprise-level face recognition",
      "Real-time camera feed & spoof detection",
      "Fallback PIN & 2FA enabled"
    ],
    description: `An enterprise-grade face recognition module integrated into a mobile app, supporting authentication for secure access. Utilizes Face API for detection and verification, combined with a fallback PIN system for 2FA. Real-time camera feed processing ensures user experience is smooth even on low-memory devices. The solution includes anti-spoofing techniques (like eye blink detection), camera calibration, and optional face re-enrollment. This feature was built for enterprise clients needing frictionless login while maintaining high security standards.`,
    techStack: ["React Native", "Face API", "Android", "Camera"]
  }
];
