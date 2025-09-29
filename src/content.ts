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
    link: "https://www.midwam.com/en/about",
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
  },
  {
    id: 2,
    img: feelitApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: klikomics,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: autosnapApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: rentop,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
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
  },
  {
    id: 2,
    img: nanoflow,
    title: "Nanoflow",
  },
  {
    id: 3,
    img: padipal,
    title: "Padipal",
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
  },
  {
    id: 2,
    img: carStuntRacing,
    title: "Car Stunt Extreme Racing",
  },
];
