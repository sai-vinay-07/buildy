import blog_pic_1 from './blog_pic_1.png';
import blog_pic_2 from './blog_pic_2.png';
import blog_pic_3 from './blog_pic_3.png';
import blog_pic_4 from './blog_pic_4.png';
import blog_pic_5 from './blog_pic_5.png';
import blog_pic_6 from './blog_pic_6.png';
import blog_pic_7 from './blog_pic_7.png';
import blog_pic_8 from './blog_pic_8.png';
import blog_pic_9 from './blog_pic_9.png';
import blog_pic_10 from './blog_pic_10.png';
import facebook_icon from './facebook_icon.svg'
import googleplus_icon from './googleplus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import buildy_logo from './buildy-high-resolution-logo-transparent.png'
import logo from './logo.svg'
import arrow from './arrow.svg'
import logo_light from './logo_light.svg'
import blog_icon from './blog_icon.png'
import add_icon from './add_icon.svg'
import list_icon from './list_icon.svg'
import email_icon from './email_icon.png'
import upload_area from './upload_area.svg'
import user_icon from './user_icon.svg'
import bin_icon from './bin_icon.svg'
import comment_icon from './comment_icon.svg'
import tick_icon from './tick_icon.svg'
import star_icon from './star_icon.svg'
import cross_icon from './cross_icon.svg'
import home_icon from './home_icon.svg'
import gradientBackground from './gradientBackground.png'
import dashboard_icon_1 from './dashboard_icon_1.svg'
import dashboard_icon_2 from './dashboard_icon_2.svg'
import dashboard_icon_3 from './dashboard_icon_3.svg'
import dashboard_icon_4 from './dashboard_icon_4.svg'


export const assets = {
    facebook_icon,
    googleplus_icon,
    twitter_icon,
    logo,
    arrow,
    logo_light,
    blog_icon,
    add_icon,
    email_icon,
    upload_area,
    user_icon,
    bin_icon,
    comment_icon,
    tick_icon,
    star_icon,
    home_icon,
    gradientBackground,
    buildy_logo,
    list_icon,
    cross_icon,
    dashboard_icon_1,
    dashboard_icon_2,
    dashboard_icon_3,
    dashboard_icon_4,
};

// Update categories to match all used in project_data
export const projectsCategories = [
    'All',
    'Frontend',
    'Backend',
    'Full Stack',
    'Data Science',
    'Machine Learning',
    'MERN Stack',
    'Cloud',
    'Blockchain'
];

export const project_data = [
  {
    "_id": "004",
    "title": "Portfolio Website",
    "description": "A modern responsive personal portfolio website to showcase skills, projects, and achievements with professional design.",
    "features": [
      "Responsive personal portfolio design with modern UI",
      "Dedicated sections for About, Skills, Projects, and Contact",
      "Dark mode and light mode toggle support",
      "Smooth scroll navigation with active link highlighting",
      "Animations for section transitions (Framer Motion/GSAP)",
      "Contact form integrated with EmailJS",
      "Deployed on Netlify/Vercel for free hosting",
      "SEO-friendly with meta tags and Open Graph support"
    ],
    "keyConsiderations": [
      "Focus on clean, professional design",
      "Ensure mobile-first responsiveness",
      "Add accessibility features for better usability",
      "Optimize for SEO and fast performance",
      "Provide easy deployment setup"
    ],
    "category": "Frontend",
    "image": blog_pic_1,
    "wireframe": "path-to-portfolio-wireframe.png",
    "repoLink": "https://github.com/example/portfolio-website",
    "videoLink": "https://youtube.com/example-portfolio",
    "difficulty": "Beginner",
    "isPublished": true,
    "subTitle": "Showcase your skills with a personal portfolio"
  },
  {
    "_id": "005",
    "title": "Blog API",
    "description": "A backend REST API that manages blog posts, users, and authentication for scalable applications.",
    "features": [
      "REST API with CRUD operations for blog posts",
      "User registration & JWT authentication",
      "MongoDB storage for users, posts, and comments",
      "Error handling with proper HTTP status codes",
      "Postman collection for easy testing",
      "Role-based access control (admin & user)",
      "Pagination and search support for blog posts",
      "Unit tests with Jest for routes and controllers"
    ],
    "keyConsiderations": [
      "Design RESTful endpoints with best practices",
      "Use JWT for secure authentication",
      "Database schema design for scalability",
      "Write proper API documentation",
      "Add automated testing for reliability"
    ],
    "category": "Backend",
    "image": blog_pic_2,
    "wireframe": "path-to-blogapi-wireframe.png",
    "repoLink": "https://github.com/example/blog-api",
    "videoLink": "https://youtube.com/example-blogapi",
    "difficulty": "Beginner",
    "isPublished": true,
    "subTitle": "Backend API for blog management"
  },
  {
    "_id": "006",
    "title": "Weather App",
    "description": "A frontend weather application that fetches live weather updates using APIs and displays user-friendly forecasts.",
    "features": [
      "Fetch live weather using OpenWeatherMap API",
      "Search weather by city name or current location",
      "Display temperature, humidity, wind speed, and conditions",
      "Weather-specific icons & background images",
      "7-day forecast with charts",
      "Error handling for invalid city names",
      "Responsive UI for mobile & desktop",
      "Deployed on Vercel/Netlify"
    ],
    "keyConsiderations": [
      "API rate limit handling",
      "Responsive design for all devices",
      "Error fallback for wrong input",
      "Simple, intuitive UX",
      "Add caching for repeated searches"
    ],
    "category": "Frontend",
    "image": blog_pic_3,
    "wireframe": "path-to-weather-wireframe.png",
    "repoLink": "https://github.com/example/weather-app",
    "videoLink": "https://youtube.com/example-weather",
    "difficulty": "Beginner",
    "isPublished": true,
    "subTitle": "Check real-time weather of any city"
  },
  {
    "_id": "007",
    "title": "Chat Application",
    "description": "A full-stack real-time chat app enabling instant messaging with authentication and group chat support.",
    "features": [
      "Real-time messaging with Socket.io",
      "User authentication with JWT",
      "Store chat history in MongoDB",
      "Online/offline user presence status",
      "Private & group chat support",
      "File/image sharing in chat",
      "Typing indicators and read receipts",
      "Responsive UI built with React"
    ],
    "keyConsiderations": [
      "Efficient socket management",
      "Scalable MongoDB schema",
      "Security: end-to-end encryption (future enhancement)",
      "UI responsive for mobile",
      "Deployment with WebSocket support"
    ],
    "category": "MERN Stack",
    "image": blog_pic_4,
    "wireframe": "path-to-chatapp-wireframe.png",
    "repoLink": "https://github.com/example/chat-app",
    "videoLink": "https://youtube.com/example-chatapp",
    "difficulty": "Intermediate",
    "isPublished": true,
    "subTitle": "Real-time chat app using MERN & Socket.io"
  },
  {
    "_id": "008",
    "title": "Expense Tracker",
    "description": "A MERN-based web app that helps users track income and expenses with visual reports and charts.",
    "features": [
      "Add, categorize, and delete expenses",
      "Track income vs expenses monthly",
      "Data stored securely in MongoDB",
      "Interactive charts with Chart.js/Recharts",
      "User authentication with JWT",
      "Filter by categories (food, travel, bills)",
      "Export reports to CSV/PDF",
      "Mobile responsive design"
    ],
    "keyConsiderations": [
      "Ensure accurate calculations",
      "Responsive charts and tables",
      "Authentication & secure storage",
      "Export options for flexibility",
      "Usability for non-tech users"
    ],
    "category": "MERN Stack",
    "image": blog_pic_5,
    "wireframe": "path-to-expensetracker-wireframe.png",
    "repoLink": "https://github.com/example/expense-tracker",
    "videoLink": "https://youtube.com/example-expensetracker",
    "difficulty": "Intermediate",
    "isPublished": true,
    "subTitle": "Track your expenses with a MERN app"
  },
  {
    "_id": "009",
    "title": "Image Classifier",
    "description": "A machine learning application that classifies images into categories using CNN models.",
    "features": [
      "Train CNN model with TensorFlow/Keras",
      "Classify images into multiple categories",
      "Upload custom images for predictions",
      "Streamlit web interface for testing",
      "Accuracy & confusion matrix visualization",
      "Model saved & reloaded with H5",
      "Dataset augmentation for better accuracy",
      "Supports GPU training for faster results"
    ],
    "keyConsiderations": [
      "Proper dataset preprocessing",
      "Avoid overfitting with augmentation",
      "GPU acceleration for training",
      "Provide intuitive UI for uploads",
      "Model evaluation with accuracy metrics"
    ],
    "category": "Machine Learning",
    "image": blog_pic_6,
    "wireframe": "path-to-imageclassifier-wireframe.png",
    "repoLink": "https://github.com/example/image-classifier",
    "videoLink": "https://youtube.com/example-imageclassifier",
    "difficulty": "Intermediate",
    "isPublished": true,
    "subTitle": "AI-powered image classification system"
  },
  {
    "_id": "010",
    "title": "Stock Price Predictor",
    "description": "A data science project that predicts stock prices using LSTM neural networks and financial data APIs.",
    "features": [
      "LSTM model for stock price prediction",
      "Data fetched from Yahoo Finance API",
      "Matplotlib/Plotly charts for visualization",
      "Predict future stock trends with graphs",
      "Web UI with Flask/Streamlit",
      "Compare multiple stock predictions",
      "Training & testing dataset splitting",
      "Save and load trained models"
    ],
    "keyConsiderations": [
      "Ensure dataset is clean & complete",
      "Train/validate/test properly",
      "Handle time-series data preprocessing",
      "Model interpretability for users",
      "Deploy with scalable backend"
    ],
    "category": "Data Science",
    "image": blog_pic_7,
    "wireframe": "path-to-stockpredictor-wireframe.png",
    "repoLink": "https://github.com/example/stock-predictor",
    "videoLink": "https://youtube.com/example-stockpredictor",
    "difficulty": "Advanced",
    "isPublished": true,
    "subTitle": "Predict stock prices using ML & LSTM"
  },
  {
    "_id": "011",
    "title": "Cloud File Storage",
    "description": "A cloud-based storage system allowing users to upload, manage, and share files securely.",
    "features": [
      "Upload files to AWS S3 bucket",
      "User authentication with JWT",
      "Download & delete stored files",
      "Secure access control with policies",
      "Preview files (PDF/images) in browser",
      "File versioning & history tracking",
      "Dashboard UI for file management",
      "Serverless backend with AWS Lambda"
    ],
    "keyConsiderations": [
      "Ensure security with access control",
      "Efficient S3 storage usage",
      "Responsive UI for file management",
      "Implement role-based permissions",
      "Scalable deployment with AWS"
    ],
    "category": "Cloud",
    "image": blog_pic_7,
    "wireframe": "path-to-cloudstorage-wireframe.png",
    "repoLink": "https://github.com/example/cloud-storage",
    "videoLink": "https://youtube.com/example-cloudstorage",
    "difficulty": "Advanced",
    "isPublished": true,
    "subTitle": "Personal cloud storage solution"
  },
  {
    "_id": "012",
    "title": "NFT Marketplace",
    "description": "A decentralized platform for minting, selling, and buying NFTs using blockchain technology.",
    "features": [
      "Mint & sell NFTs using smart contracts",
      "Connect wallet via MetaMask",
      "Smart contracts written in Solidity",
      "Browse NFT marketplace in React app",
      "Buy/sell NFTs with Ether",
      "Upload digital assets to IPFS",
      "Transaction history with Etherscan",
      "Deployed on Ethereum testnet"
    ],
    "keyConsiderations": [
      "Ensure MetaMask/Web3 integration",
      "Gas fee handling",
      "Smart contract security auditing",
      "User-friendly NFT browsing",
      "Scalable blockchain interactions"
    ],
    "category": "Blockchain",
    "image": blog_pic_8,
    "wireframe": "path-to-nft-wireframe.png",
    "repoLink": "https://github.com/example/nft-marketplace",
    "videoLink": "https://youtube.com/example-nft",
    "difficulty": "Advanced",
    "isPublished": true,
    "subTitle": "Buy and sell NFTs on the blockchain"
  },
  {
    "_id": "013",
    "title": "AI Chatbot",
    "description": "An NLP-based chatbot that provides automated conversational support for FAQs and general queries.",
    "features": [
      "NLP with spaCy/Transformers",
      "Answer FAQs with context understanding",
      "Text preprocessing pipeline",
      "Context-based replies with memory",
      "Deploy with Flask/Streamlit web UI",
      "Fallback responses for unknown queries",
      "Integration with Telegram/Discord",
      "Supports multiple languages"
    ],
    "keyConsiderations": [
      "Accurate NLP model selection",
      "Handle multi-language inputs",
      "Ensure low latency in responses",
      "Fallback strategy for unseen queries",
      "UI simplicity for non-technical users"
    ],
    "category": "Machine Learning",
    "image": blog_pic_9,
    "wireframe": "path-to-chatbot-wireframe.png",
    "repoLink": "https://github.com/example/ai-chatbot",
    "videoLink": "https://youtube.com/example-chatbot",
    "difficulty": "Intermediate",
    "isPublished": true,
    "subTitle": "AI-powered chatbot using NLP"
  }
]


// Remove or comment out blog_data-dependent exports if not used
// export const comments_data = [ ... ];
// export const dashboard_data = { ... };

// If you need comments_data and dashboard_data, define blog_data or remove these exports

export const footer_data = [
    {
        title: "Quick Links",
        links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
    },
    {
        title: "Need Help?",
        links: ["Delivery Information", "Return & Refund Policy", "Payment Methods", "Track your Order", "Contact Us"]
    },
    {
        title: "Follow Us",
        links: ["Instagram", "Twitter", "Facebook", "YouTube"]
    }
  ];