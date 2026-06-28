export const profile = {
  name: "Muhammad Humayun",
  role: "AI Engineer building production-minded RAG, agentic AI, and computer vision systems.",
  location: "Pakistan",
  availability: "Available for AI engineering roles",
  intro:
    "I design full-stack AI products that connect real user workflows with LLMs, retrieval systems, computer vision, backend APIs, and deployment-ready engineering.",
  resume: "/Resume.pdf",
  portrait: "/WhatsApp Image 2025-04-09 at 2.54.06 PM.jpeg",
  email: "humayunkhann47@gmail.com",
  phone: "+92 314 081 8147",
  github: "https://github.com/humayun-mhk",
  linkedin: "https://linkedin.com/in/humayun-mhk-927407251"
};

export const roleFocus = ["RAG Systems", "AI Agents", "FastAPI Backends", "Computer Vision", "MLOps"];

export const stats = [
  { value: "14+", label: "production-style projects" },
  { value: "6", label: "RAG and LLM systems" },
  { value: "5", label: "deployed full-stack apps" },
  { value: "2027", label: "BSCS graduation" }
];

export const projectFilters = [
  "All",
  "Agentic AI",
  "RAG",
  "Computer Vision",
  "Full-stack",
  "AI Automation",
  "Machine Learning",
  "MLOps",
  "Mobile"
];

export const projects = [
  {
    title: "CareerPilot AI",
    category: "Agentic AI / Full-stack product",
    filters: ["Agentic AI", "RAG", "Full-stack"],
    impact: "Multi-agent career workflow with evidence verification, tracing, approvals, and exports.",
    image: "/career_Pilot.png",
    description:
      "A full-stack AI career assistant that analyzes resumes, compares job fit, verifies evidence, generates tailored assets, and tracks applications.",
    tags: ["React", "FastAPI", "LangGraph", "ChromaDB", "PostgreSQL", "RAG", "Agentic AI"],
    github: "https://github.com/humayun-mhk/CareerPilot-AI",
    demo: "https://careerpilot-ai-frontend-h9kh.onrender.com/"
  },
  {
    title: "AI Healthcare Appointment & Safe Triage Platform",
    category: "Healthcare AI / Full-stack",
    filters: ["RAG", "Full-stack"],
    impact: "Appointment booking, SMTP notifications, safe triage, policy RAG, dashboards, and audit logs.",
    image: "/Doctor_appointment.png",
    description:
      "A production-style healthcare appointment system that books appointments, sends SMTP email notifications, and supports safe AI triage, specialty routing, RAG-based policy knowledge, doctor dashboards, admin analytics, human review, and audit logs.",
    tags: ["React", "FastAPI", "PostgreSQL", "pgvector", "RAG", "AI Triage", "Appointment Booking", "SMTP Email"],
    github: "https://github.com/humayun-mhk/medical-appointment-triage-ai",
    demo: "https://medical-appointment-triage-ai.vercel.app/"
  },
  {
    title: "End-to-End Network Security ML Project",
    category: "MLOps / Security ML",
    filters: ["MLOps", "Full-stack", "Machine Learning"],
    impact: "Production ML pipeline for phishing URL detection with FastAPI, MongoDB, Docker, CI/CD, and AWS deployment.",
    image: "/End_ML_security.png",
    description:
      "An end-to-end network security ML system that classifies URLs as legitimate or phishing using 31 engineered features. It includes MongoDB ingestion, validation, transformation, model training, evaluation, FastAPI inference, Docker, GitHub Actions, MLflow, AWS ECR/ECS, and production logging.",
    tags: ["Python", "Scikit-learn", "FastAPI", "MongoDB", "Docker", "AWS ECS/ECR", "MLflow"],
    github: "https://github.com/humayun-mhk/End_to_end_Network_Security_ML_Project"
  },
  {
    title: "Multimodal Vision RAG",
    category: "RAG / Computer vision",
    filters: ["RAG", "Computer Vision", "Full-stack"],
    impact: "Queries PDFs, images, and text documents through semantic retrieval and multimodal reasoning.",
    image: "/Multi_model_Vision.png",
    description:
      "A multimodal retrieval platform that combines GPT-4o Vision, FAISS semantic search, FastAPI, and a React chat interface to query PDFs, images, and text documents.",
    tags: ["GPT-4o Vision", "FAISS", "FastAPI", "React", "RAG", "Semantic Search"],
    github: "https://github.com/humayun-mhk/multimodal-vision-rag",
    demo: "https://multimodal-vision-rag-dfqh.vercel.app/"
  },
  {
    title: "AI-Powered Restaurant Automation Workflow",
    category: "AI Automation / Voice AI",
    filters: ["AI Automation", "Agentic AI", "RAG"],
    impact: "n8n workflow for restaurant support with voice responses, vector search, bookings, and data automation.",
    image: "/AI_powered_Resturant_n8n.png",
    description:
      "An AI support and data automation workflow for restaurants built in n8n. It searches Google Drive data files, embeds menu or customer data in Pinecone, uses OpenAI for intelligent search and responses, integrates ElevenLabs voice synthesis, answers customer queries, manages bookings, confirms orders, and escalates to human support when needed.",
    tags: ["n8n", "OpenAI", "Pinecone", "ElevenLabs", "Google Drive API", "Voice AI", "AI Automation"],
    github: "https://lnkd.in/dZ7HEp9q"
  },
  {
    title: "AI Agent Orchestrator",
    category: "AI Automation / Multi-agent",
    filters: ["AI Automation", "Agentic AI"],
    impact: "n8n multi-agent automation system that routes Telegram text and voice requests to specialized agents.",
    image: "/AI_Orchestrater_Agent.png",
    description:
      "An n8n-based AI agent orchestration system for Telegram text and voice inputs. It delegates tasks to agents for email, calendar scheduling, contact updates, content creation, web search, and productivity workflows using Gmail, Google Calendar, Supabase, Airtable, Tavily, OpenAI, Gemini, and Telegram.",
    tags: ["n8n", "AI Agents", "Telegram", "OpenAI", "Gemini", "Supabase", "Airtable"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/AI%20Agent%20Orchestrator"
  },
  {
    title: "Campus Marketplace - Flutter Buy & Sell App",
    category: "Mobile Development",
    filters: ["Mobile", "Full-stack"],
    impact: "Realtime campus marketplace with auth, listings, image upload, search, and seller communication.",
    image: "/Campus_market_place.png",
    description:
      "A full-featured campus marketplace app built with Flutter and Firebase, enabling students to buy and sell items with real-time listings, image uploads, authentication, and direct seller communication.",
    tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Image Picker"],
    github: "https://github.com/humayun-mhk/campus-marketplace"
  },
  {
    title: "TrafficIQ Traffic Detection System",
    category: "Computer vision",
    filters: ["Computer Vision", "Full-stack"],
    impact: "Realtime detection, tracking, counting, WebSocket streams, and lane-level analytics.",
    image: "/Gemini_Generated_Image_occs0ioccs0ioccs.png",
    description:
      "Real-time vehicle detection, tracking, and counting with YOLOv8, WebSocket video streams, FastAPI services, and a multi-lane analytics dashboard.",
    tags: ["YOLOv8", "OpenCV", "FastAPI", "WebSockets", "Python"],
    github: "https://github.com/humayun-mhk/TrafficIQ-End-to-End-Traffic-Detection-System"
  },
  {
    title: "Medical RAG Chatbot",
    category: "RAG / AWS",
    filters: ["RAG", "MLOps"],
    impact: "Medical QA with vector search, Docker, and AWS deployment preparation.",
    image: "/Gemini_Generated_Image_4ap58h4ap58h4ap5 (1).png",
    description:
      "Medical QA chatbot using LangChain, OpenAI, and Pinecone vector search. Containerized with Docker and prepared for AWS ECR/EC2 deployment.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Docker", "AWS EC2/ECR"],
    github: "https://github.com/humayun-mhk/Medical-Chatbot-RAG-LLM"
  },
  {
    title: "FraudShield Fraud Detection",
    category: "ML pipeline",
    filters: ["MLOps", "Full-stack", "Machine Learning"],
    impact: "Fraud model pipeline with class balancing, drift monitoring, API service, and analytics dashboard.",
    image: "/Gemini_Generated_Image_cqk43kcqk43kcqk4.png",
    description:
      "Real-time credit card fraud detection pipeline with SMOTE class balancing, model drift monitoring, FastAPI services, and a Streamlit dashboard.",
    tags: ["Random Forest", "SMOTE", "FastAPI", "Streamlit", "Plotly"],
    github: "https://github.com/humayun-mhk/-FraudShield-Real-Time-Credit-Card-Fraud-Detection"
  },
  {
    title: "Real-Time Face Recognition",
    category: "Computer vision",
    filters: ["Computer Vision", "Full-stack"],
    impact: "Realtime identity workflow with detection, embeddings, WebSockets, and REST identity APIs.",
    image: "/Gemini_Generated_Image_tj6spytj6spytj6s.png",
    description:
      "End-to-end face detection and recognition using YOLOv8, FaceNet, and MTCNN, with Flask-SocketIO and REST APIs for identity management.",
    tags: ["YOLOv8", "FaceNet", "MTCNN", "Flask", "WebSockets"],
    github: "https://github.com/humayun-mhk/-Real-Time-Face-Recognition-System"
  },
  {
    title: "AI Digital Twin System",
    category: "Generative AI",
    filters: ["Agentic AI", "Full-stack", "MLOps"],
    impact: "Memory-enhanced LLM system with AWS Bedrock, infrastructure automation, and web delivery.",
    image: "/Gemini_Generated_Image_1dr3kl1dr3kl1dr3.png",
    description:
      "Memory-enhanced LLM system on AWS Bedrock that replicates personality patterns, with FastAPI services, Terraform infrastructure, Next.js, and CloudFront.",
    tags: ["AWS Bedrock", "FastAPI", "Terraform", "Next.js", "CloudFront"],
    github: "https://github.com/humayun-mhk/my-ai-twin-orchestrator"
  },
  {
    title: "NLP Deep Learning Projects",
    category: "NLP / Deep learning",
    filters: ["RAG"],
    impact: "Deep learning NLP experiments for classification, suggestions, and evaluation workflows.",
    image: "/Gemini_Generated_Image_wo01cpwo01cpwo01.png",
    description:
      "Text suggestion and fake news detection projects using LSTM-based models, TensorFlow, NumPy, and Streamlit interfaces for evaluation.",
    tags: ["TensorFlow", "LSTM", "NumPy", "Streamlit"],
    github: "https://github.com/humayun-mhk/Deep-Learning-Projects"
  },
  {
    title: "AWS SageMaker End-to-End ML",
    category: "MLOps / AWS",
    filters: ["MLOps", "Machine Learning"],
    impact: "Cloud ML workflow from data processing to deployed SageMaker inference endpoint.",
    image: "/Gemini_Generated_Image_i5axpki5axpki5ax.png",
    description:
      "Full ML workflow from data processing to deployed inference endpoint on SageMaker, designed around a production-style cloud MLOps workflow.",
    tags: ["AWS SageMaker", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/humayun-mhk/aws-sagemaker-end-to-end-ml"
  },
  {
    title: "AI Automation Workflows",
    category: "Automation",
    filters: ["Agentic AI", "Full-stack", "AI Automation"],
    impact: "LLM automation pipelines with workflow orchestration, voice AI, and API integrations.",
    image: "/Gemini_Generated_Image_ufrh56ufrh56ufrh.png",
    description:
      "Advanced automation with LLM integrations, voice AI, multi-agent orchestration, and enterprise content generation pipelines using n8n.",
    tags: ["n8n", "LLM Integration", "Voice AI", "Multi-agent"],
    github: "https://github.com/humayun-mhk/n8n-automation"
  },
  {
    title: "Generative AI Projects Collection",
    category: "LLM collection",
    filters: ["RAG", "Agentic AI"],
    impact: "Collection of LLM applications spanning SQL chat, Gemini Vision, summarization, and Q&A.",
    image: "/Gemini_Generated_Image_29jern29jern29je.png",
    description:
      "A collection of real-world LLM apps including SQL chatbots, Gemini Vision, calorie estimation, YouTube summarization, and RAG Q&A.",
    tags: ["LangChain", "OpenAI", "Gemini", "Hugging Face", "Streamlit"],
    github: "https://github.com/humayun-mhk/Generative-AI-Projects"
  }
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "JavaScript", "SQL", "Dart", "C / C++"] },
  { title: "Machine Learning", items: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "NLP", "Deep Learning"] },
  { title: "Generative AI", items: ["LangChain", "LangGraph", "CrewAI", "RAG", "Agentic RAG", "Prompt Engineering", "LoRA"] },
  { title: "Backend & APIs", items: ["FastAPI", "Flask", "REST APIs", "React", "Tailwind CSS", "Web Scraping"] },
  { title: "Data & Vector Stores", items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Pinecone", "ChromaDB", "FAISS"] },
  { title: "Cloud & MLOps", items: ["AWS", "Azure", "Docker", "CI/CD", "GitHub Actions", "LLMOps", "Model Deployment"] },
  { title: "Automation", items: ["n8n", "AI Workflow Automation", "API Integrations", "Event-Driven Automation"] },
  { title: "Developer Tools", items: ["Git", "GitHub", "Linux", "VS Code", "Jupyter", "Google Colab", "Kaggle"] }
];

export const experience = [
  {
    role: "AI/ML Intern",
    company: "InternPe - Remote",
    date: "Jan 2026 - Apr 2026",
    bullets: [
      "Built machine learning, deep learning, NLP, and generative AI projects using Python and modern AI frameworks.",
      "Developed RAG pipelines using LLMs, embeddings, and vector databases for document question answering.",
      "Created AI-powered workflows using OpenAI APIs, prompt engineering, and backend integrations."
    ]
  },
  {
    role: "Generative AI Intern",
    company: "Arch Technologies - Remote",
    date: "Dec 2025 - Mar 2026",
    bullets: [
      "Built generative AI applications including chatbots, RAG systems, multimodal AI workflows, and NLP tools.",
      "Integrated LLMs with vector databases, REST APIs, and backend services for practical automation use cases.",
      "Designed retrieval-based context generation and prompt workflows for business automation."
    ]
  },
  {
    role: "NLP Intern",
    company: "Elevvo - Remote",
    date: "Sep 2025 - Nov 2025",
    bullets: [
      "Built NLP solutions for text classification, semantic search, topic modeling, and language understanding tasks.",
      "Used transformers, pre-trained language models, and fine-tuning techniques for NLP applications.",
      "Implemented preprocessing, feature extraction, model training, and evaluation pipelines for text data."
    ]
  }
];

export const education = {
  school: "University of Engineering & Technology Mardan",
  degree: "Bachelor of Science in Computer Science",
  date: "2023 - 2027",
  location: "Mardan, Pakistan",
  note:
    "Studying computer science while building production-style AI engineering projects across RAG, agents, computer vision, automation, backend systems, and cloud deployment."
};
