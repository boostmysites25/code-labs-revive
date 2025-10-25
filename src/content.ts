// Web development portfolio images (using public folder paths)
const fiveGHomes = "/assets/portfolio/web-development/5ghomes.webp";
const coldCreekcap = "/assets/portfolio/web-development/cold-creekcap.webp";
const thinkReality = "/assets/portfolio/web-development/think-reality.webp";
const akashMegaMart = "/assets/portfolio/web-development/akash-mega-mart.webp";
const midwam = "/assets/portfolio/web-development/midwam.webp";

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: fiveGHomes,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
    challenge: "5G Homes needed a modern, high-performance website to showcase their cutting-edge internet services and attract customers in the competitive telecommunications market. The client required a platform that could handle high traffic, provide excellent user experience, and effectively communicate their technological advantages.",
    solution: "We developed a responsive, lightning-fast website using modern web technologies including React, Next.js, and optimized performance techniques. The solution included a custom CMS for easy content management, SEO optimization, and mobile-first design to ensure optimal user experience across all devices.",
    results: {
      metrics: [
        { label: "Page Load Speed", value: "1.2s", improvement: "60% faster than industry average" },
        { label: "User Engagement", value: "45%", improvement: "increase in time on site" },
        { label: "Conversion Rate", value: "23%", improvement: "increase in lead generation" }
      ],
      testimonial: {
        quote: "Retro Code Labs transformed our online presence completely. The new website not only looks amazing but performs exceptionally well, helping us convert 40% more visitors into customers.",
        author: "Sarah Johnson",
        position: "Marketing Director",
        company: "5G Homes"
      }
    },
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    duration: "6 weeks",
    team: "4 developers",
    services: ["Web Development", "UI/UX Design", "SEO Optimization", "Performance Optimization"]
  },
  {
    id: 2,
    img: coldCreekcap,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
    challenge: "Cold Creekcap, a financial services company, needed a professional, trustworthy website to establish credibility in the competitive investment market. The site needed to handle sensitive financial information securely while providing an intuitive user experience for potential investors.",
    solution: "We created a sophisticated, secure website with advanced security features, custom dashboard for client portfolio management, and integrated payment processing. The solution included SSL encryption, secure data handling, and responsive design optimized for financial services.",
    results: {
      metrics: [
        { label: "Security Score", value: "A+", improvement: "highest security rating" },
        { label: "Client Portal Usage", value: "78%", improvement: "increase in active users" },
        { label: "Lead Generation", value: "35%", improvement: "increase in qualified leads" }
      ],
      testimonial: {
        quote: "The level of security and professionalism in our new website has significantly increased client trust. We've seen a substantial improvement in client engagement and new account openings.",
        author: "Michael Chen",
        position: "CEO",
        company: "Cold Creekcap"
      }
    },
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
    duration: "8 weeks",
    team: "5 developers",
    services: ["Web Development", "Security Implementation", "Payment Integration", "Database Design"]
  },
  {
    id: 3,
    img: thinkReality,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
    challenge: "Think Reality, a real estate company in the UAE, required a multilingual website to serve both Arabic and English-speaking clients. The platform needed to showcase property listings, handle inquiries, and provide virtual tour capabilities in a culturally appropriate design.",
    solution: "We developed a bilingual website with RTL support for Arabic, integrated property management system, virtual tour functionality, and culturally sensitive design elements. The solution included advanced search filters, map integration, and mobile optimization for the Middle Eastern market.",
    results: {
      metrics: [
        { label: "Multilingual Support", value: "100%", improvement: "seamless Arabic/English experience" },
        { label: "Property Views", value: "65%", improvement: "increase in property engagement" },
        { label: "Inquiry Rate", value: "42%", improvement: "increase in qualified inquiries" }
      ],
      testimonial: {
        quote: "The bilingual website has opened up new markets for us. The virtual tour feature and cultural design elements have made us stand out in the competitive UAE real estate market.",
        author: "Ahmed Al-Rashid",
        position: "Managing Director",
        company: "Think Reality"
      }
    },
    technologies: ["React", "i18next", "Google Maps API", "Three.js", "Node.js"],
    duration: "10 weeks",
    team: "6 developers",
    services: ["Web Development", "Multilingual Support", "Virtual Tours", "Cultural Design"]
  },
  {
    id: 4,
    img: akashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
    challenge: "Akash Mega Mart needed a comprehensive e-commerce platform to compete with major online retailers. The challenge included handling high product volumes, secure payment processing, inventory management, and providing an excellent shopping experience for customers.",
    solution: "We built a full-featured e-commerce platform with advanced product catalog, secure payment gateway integration, inventory management system, order tracking, and customer account management. The solution included mobile optimization and performance optimization for high traffic.",
    results: {
      metrics: [
        { label: "Sales Growth", value: "85%", improvement: "increase in online sales" },
        { label: "Page Load Speed", value: "0.8s", improvement: "50% faster than competitors" },
        { label: "Customer Satisfaction", value: "4.8/5", improvement: "average rating" }
      ],
      testimonial: {
        quote: "The e-commerce platform has revolutionized our business. We've seen incredible growth in online sales and customer satisfaction. The system handles our high volume seamlessly.",
        author: "Rajesh Kumar",
        position: "Founder",
        company: "Akash Mega Mart"
      }
    },
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3"],
    duration: "12 weeks",
    team: "7 developers",
    services: ["E-commerce Development", "Payment Integration", "Inventory Management", "Performance Optimization"]
  },
  {
    id: 5,
    img: midwam,
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com",
    challenge: "Midwam, an immersive experience design company, needed a cutting-edge website that would showcase their innovative work and attract high-end clients. The site needed to demonstrate their technical capabilities while providing an engaging, interactive experience.",
    solution: "We created an immersive, interactive website featuring 3D elements, smooth animations, and cutting-edge design. The solution included portfolio showcases, interactive demos, and advanced visual effects that demonstrate the company's capabilities in immersive design.",
    results: {
      metrics: [
        { label: "User Engagement", value: "3.5x", improvement: "increase in session duration" },
        { label: "Portfolio Views", value: "120%", improvement: "increase in project views" },
        { label: "Client Inquiries", value: "55%", improvement: "increase in qualified leads" }
      ],
      testimonial: {
        quote: "The website perfectly represents our brand and capabilities. The immersive experience has attracted premium clients and significantly increased our project inquiries.",
        author: "Emma Thompson",
        position: "Creative Director",
        company: "Midwam"
      }
    },
    technologies: ["React", "Three.js", "Framer Motion", "WebGL", "GSAP"],
    duration: "14 weeks",
    team: "8 developers",
    services: ["Interactive Web Development", "3D Integration", "Animation Design", "Performance Optimization"]
  },
];

// App development portfolio images (using public folder paths)
const akashMegaMartApp =
  "/assets/portfolio/app-development/akash_mega_mart-app.webp";
const feelitApp = "/assets/portfolio/app-development/feelit_app.webp";
const klikomics = "/assets/portfolio/app-development/klikomics.webp";
const autosnapApp = "/assets/portfolio/app-development/autosnap-app.webp";
const rentop = "/assets/portfolio/app-development/rentop.webp";

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: akashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
    challenge: "Akash Mega Mart needed a mobile application to complement their e-commerce platform and provide customers with a seamless shopping experience on mobile devices. The app needed to handle high product volumes, secure payments, push notifications, and offline functionality for better user engagement.",
    solution: "We developed a cross-platform mobile application using React Native with advanced features including offline shopping cart, push notifications, biometric authentication, and integrated payment processing. The solution included real-time inventory updates, order tracking, and personalized recommendations using AI.",
    results: {
      metrics: [
        { label: "App Downloads", value: "50K+", improvement: "within first 3 months" },
        { label: "User Retention", value: "78%", improvement: "monthly active users" },
        { label: "Mobile Sales", value: "65%", improvement: "increase in mobile transactions" }
      ],
      testimonial: {
        quote: "The mobile app has transformed our customer experience. The offline functionality and push notifications have significantly increased customer engagement and repeat purchases.",
        author: "Priya Sharma",
        position: "Mobile Marketing Manager",
        company: "Akash Mega Mart"
      }
    },
    technologies: ["React Native", "Redux", "Firebase", "Stripe", "OneSignal"],
    duration: "10 weeks",
    team: "5 developers",
    services: ["Mobile App Development", "Payment Integration", "Push Notifications", "Offline Functionality"]
  },
  {
    id: 2,
    img: feelitApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
    challenge: "FeelIt needed a social media application focused on emotional expression and mental wellness. The challenge was to create a safe, supportive platform for users to share their feelings while maintaining privacy and providing mental health resources.",
    solution: "We built a comprehensive social wellness app with mood tracking, anonymous sharing features, mental health resources, and community support. The solution included AI-powered mood analysis, crisis intervention features, and integration with mental health professionals.",
    results: {
      metrics: [
        { label: "User Engagement", value: "4.2/5", improvement: "average app rating" },
        { label: "Daily Active Users", value: "85%", improvement: "user retention rate" },
        { label: "Mental Health Support", value: "92%", improvement: "user satisfaction with resources" }
      ],
      testimonial: {
        quote: "FeelIt has created a safe space for emotional expression. The mental health resources and community support features have made a real difference in our users' lives.",
        author: "Dr. Sarah Williams",
        position: "Clinical Psychologist",
        company: "FeelIt"
      }
    },
    technologies: ["React Native", "Firebase", "TensorFlow", "Node.js", "MongoDB"],
    duration: "12 weeks",
    team: "6 developers",
    services: ["Mobile App Development", "AI Integration", "Mental Health Features", "Community Building"]
  },
  {
    id: 3,
    img: klikomics,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
    challenge: "Klikomics needed a financial analytics mobile application to help users track investments, analyze market trends, and make informed financial decisions. The app required real-time data integration, secure financial data handling, and intuitive visualization of complex financial information.",
    solution: "We developed a sophisticated financial analytics app with real-time market data integration, portfolio tracking, advanced charting capabilities, and AI-powered investment recommendations. The solution included secure authentication, encrypted data storage, and comprehensive financial reporting.",
    results: {
      metrics: [
        { label: "Data Accuracy", value: "99.8%", improvement: "real-time market data precision" },
        { label: "User Portfolio Growth", value: "23%", improvement: "average portfolio performance" },
        { label: "App Store Rating", value: "4.7/5", improvement: "user satisfaction score" }
      ],
      testimonial: {
        quote: "Klikomics has revolutionized how our users approach investment decisions. The AI recommendations and real-time analytics have helped users make more informed financial choices.",
        author: "David Chen",
        position: "Product Manager",
        company: "Klikomics"
      }
    },
    technologies: ["React Native", "Python", "TensorFlow", "PostgreSQL", "AWS"],
    duration: "14 weeks",
    team: "7 developers",
    services: ["Financial App Development", "AI Integration", "Real-time Data", "Security Implementation"]
  },
  {
    id: 4,
    img: autosnapApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
    challenge: "AutoSnap needed an AI-powered photography application that could automatically enhance photos, apply filters, and provide professional-quality results. The challenge was to create an app that could process images in real-time while maintaining high quality and user-friendly interface.",
    solution: "We developed an advanced photo editing app with AI-powered auto-enhancement, real-time filters, background removal, and professional editing tools. The solution included machine learning models for automatic photo optimization and cloud processing for complex operations.",
    results: {
      metrics: [
        { label: "Photo Processing Speed", value: "2.3s", improvement: "average enhancement time" },
        { label: "User Satisfaction", value: "4.6/5", improvement: "app store rating" },
        { label: "Photo Quality", value: "94%", improvement: "user preference for AI-enhanced photos" }
      ],
      testimonial: {
        quote: "AutoSnap's AI technology has made professional-quality photo editing accessible to everyone. The automatic enhancements save hours of manual editing work.",
        author: "Maria Rodriguez",
        position: "Creative Director",
        company: "AutoSnap"
      }
    },
    technologies: ["React Native", "TensorFlow", "OpenCV", "AWS S3", "Cloudinary"],
    duration: "16 weeks",
    team: "8 developers",
    services: ["AI Photo Processing", "Mobile App Development", "Machine Learning", "Cloud Integration"]
  },
  {
    id: 5,
    img: rentop,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
    challenge: "Rentop needed a comprehensive vehicle rental platform that could handle bike and car rentals with real-time tracking, payment processing, and user management. The challenge was to create a seamless experience for both vehicle owners and renters while ensuring safety and security.",
    solution: "We built a full-featured rental platform with GPS tracking, secure payment processing, user verification, insurance integration, and real-time communication between renters and owners. The solution included advanced features like damage assessment, maintenance scheduling, and automated billing.",
    results: {
      metrics: [
        { label: "Booking Success Rate", value: "96%", improvement: "successful rental completions" },
        { label: "User Safety Score", value: "4.9/5", improvement: "safety and security rating" },
        { label: "Revenue Growth", value: "180%", improvement: "increase in platform revenue" }
      ],
      testimonial: {
        quote: "Rentop has created a trusted marketplace for vehicle rentals. The safety features and seamless user experience have made it the go-to platform for both owners and renters.",
        author: "James Wilson",
        position: "Operations Manager",
        company: "Rentop"
      }
    },
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "Google Maps API"],
    duration: "18 weeks",
    team: "9 developers",
    services: ["Rental Platform Development", "GPS Integration", "Payment Processing", "Safety Features"]
  },
];

// Blockchain portfolio images (using public folder paths)
const cryptopadie = "/assets/portfolio/blockchain/cryptopadie.webp";
const nanoflow = "/assets/portfolio/blockchain/nanoflow.webp";
const padipal = "/assets/portfolio/blockchain/padipal.webp";

// portfolio images (blockchain)
export const blockchainPortfolio = [
  {
    id: 1,
    img: cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com",
    challenge: "Cryptopadie needed a comprehensive cryptocurrency education and trading platform that could provide real-time market data, educational content, and secure trading capabilities. The challenge was to create a user-friendly interface for both beginners and advanced traders while ensuring security and regulatory compliance.",
    solution: "We developed a full-stack blockchain platform with real-time cryptocurrency tracking, educational modules, secure wallet integration, and advanced trading features. The solution included smart contract integration, DeFi protocols, and comprehensive security measures for handling digital assets.",
    results: {
      metrics: [
        { label: "User Growth", value: "300%", improvement: "increase in active users" },
        { label: "Trading Volume", value: "$2.5M", improvement: "monthly trading volume" },
        { label: "Security Score", value: "A+", improvement: "platform security rating" }
      ],
      testimonial: {
        quote: "Cryptopadie has become the go-to platform for cryptocurrency education and trading. The security features and educational content have helped thousands of users navigate the crypto market safely.",
        author: "Alex Thompson",
        position: "CEO",
        company: "Cryptopadie"
      }
    },
    technologies: ["Solidity", "Web3.js", "React", "Node.js", "Ethereum"],
    duration: "20 weeks",
    team: "10 developers",
    services: ["Blockchain Development", "Smart Contracts", "DeFi Integration", "Security Implementation"]
  },
  {
    id: 2,
    img: nanoflow,
    title: "Nanoflow",
    challenge: "Nanoflow needed a blockchain-based supply chain management system that could provide end-to-end traceability for products. The challenge was to create an immutable record of product journey while ensuring scalability and user-friendly interface for supply chain participants.",
    solution: "We built a comprehensive blockchain supply chain platform with smart contracts for automated processes, IoT integration for real-time tracking, and mobile applications for all stakeholders. The solution included QR code scanning, automated compliance checking, and transparent reporting.",
    results: {
      metrics: [
        { label: "Traceability Accuracy", value: "99.9%", improvement: "product journey tracking" },
        { label: "Process Efficiency", value: "45%", improvement: "reduction in manual processes" },
        { label: "Compliance Rate", value: "98%", improvement: "regulatory compliance achievement" }
      ],
      testimonial: {
        quote: "Nanoflow has revolutionized our supply chain transparency. The blockchain technology has given our customers complete confidence in our product authenticity and quality.",
        author: "Dr. Lisa Park",
        position: "Supply Chain Director",
        company: "Nanoflow"
      }
    },
    technologies: ["Hyperledger Fabric", "React", "Node.js", "IoT", "MongoDB"],
    duration: "24 weeks",
    team: "12 developers",
    services: ["Supply Chain Blockchain", "IoT Integration", "Smart Contracts", "Mobile Development"]
  },
  {
    id: 3,
    img: padipal,
    title: "Padipal",
    challenge: "Padipal needed a decentralized payment platform that could facilitate cross-border transactions with minimal fees and maximum security. The challenge was to create a user-friendly interface for both individuals and businesses while ensuring regulatory compliance across multiple jurisdictions.",
    solution: "We developed a decentralized payment ecosystem with multi-currency support, automated compliance checking, and integration with traditional banking systems. The solution included mobile wallets, merchant tools, and advanced security features for handling large transaction volumes.",
    results: {
      metrics: [
        { label: "Transaction Speed", value: "3.2s", improvement: "average transaction time" },
        { label: "Fee Reduction", value: "85%", improvement: "compared to traditional methods" },
        { label: "User Adoption", value: "150K+", improvement: "active users in 6 months" }
      ],
      testimonial: {
        quote: "Padipal has made cross-border payments seamless and affordable. The platform has helped our business expand internationally with confidence in secure, fast transactions.",
        author: "Roberto Silva",
        position: "International Business Manager",
        company: "Padipal"
      }
    },
    technologies: ["Ethereum", "Solidity", "React Native", "Web3.js", "IPFS"],
    duration: "22 weeks",
    team: "11 developers",
    services: ["DeFi Development", "Payment Processing", "Cross-border Solutions", "Security Implementation"]
  },
];

// Game development portfolio images (using public folder paths)
const bowlingGame = "/assets/portfolio/game development/3d bowling game.webp";
const carStuntRacing =
  "/assets/portfolio/game development/car stunt extreme racing.webp";

// portfolio images (game development)
export const gamePortfolio = [
  {
    id: 1,
    img: bowlingGame,
    title: "3D Bowling Game",
    challenge: "The client needed a realistic 3D bowling game that could provide an immersive experience with physics-based gameplay, realistic ball physics, and engaging multiplayer features. The challenge was to create smooth 60fps gameplay while maintaining high-quality 3D graphics and realistic bowling mechanics.",
    solution: "We developed a high-performance 3D bowling game using Unity3D with advanced physics simulation, realistic ball dynamics, and multiplayer networking. The solution included custom bowling lane designs, realistic pin physics, tournament modes, and social features for competitive gameplay.",
    results: {
      metrics: [
        { label: "Game Performance", value: "60 FPS", improvement: "consistent frame rate across devices" },
        { label: "User Rating", value: "4.8/5", improvement: "app store rating" },
        { label: "Player Retention", value: "75%", improvement: "monthly active players" }
      ],
      testimonial: {
        quote: "The 3D bowling game delivers an incredibly realistic bowling experience. The physics engine and multiplayer features have created a highly engaging gaming community.",
        author: "Mike Johnson",
        position: "Game Director",
        company: "Sports Gaming Studio"
      }
    },
    technologies: ["Unity3D", "C#", "Photon Networking", "Blender", "Substance Painter"],
    duration: "16 weeks",
    team: "8 developers",
    services: ["3D Game Development", "Physics Simulation", "Multiplayer Networking", "Game Design"]
  },
  {
    id: 2,
    img: carStuntRacing,
    title: "Car Stunt Extreme Racing",
    challenge: "The client needed an adrenaline-pumping racing game with extreme stunts, realistic car physics, and challenging obstacle courses. The challenge was to create an engaging racing experience with spectacular stunts while maintaining smooth gameplay and impressive visual effects.",
    solution: "We developed an action-packed racing game with advanced car physics, dynamic obstacle courses, and spectacular stunt mechanics. The solution included multiple game modes, leaderboards, car customization, and social sharing features for competitive gameplay.",
    results: {
      metrics: [
        { label: "Download Count", value: "500K+", improvement: "total downloads" },
        { label: "Average Session", value: "25 min", improvement: "player engagement time" },
        { label: "Stunt Completion", value: "85%", improvement: "successful stunt attempts" }
      ],
      testimonial: {
        quote: "Car Stunt Extreme Racing has become our most successful game. The combination of realistic physics and extreme stunts has created an addictive gaming experience that keeps players coming back.",
        author: "Sarah Chen",
        position: "Product Manager",
        company: "Extreme Games Studio"
      }
    },
    technologies: ["Unity3D", "C#", "PlayFab", "Maya", "Substance Designer"],
    duration: "20 weeks",
    team: "10 developers",
    services: ["Racing Game Development", "Physics Simulation", "Visual Effects", "Game Analytics"]
  },
];
