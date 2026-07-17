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
    title: "AI Social Media Content Creation Automation",
    category: "AI Automation / Content Creation",
    filters: ["AI Automation", "Agentic AI"],
    impact: "n8n workflow that researches campaign topics and generates LinkedIn, Facebook, and blog content.",
    image: "/AI_Social_Media.png",
    description:
      "An AI-powered content automation workflow using n8n, OpenAI, Tavily, and Google Sheets. It researches campaign topics, extracts relevant web content, uses separate AI agents for LinkedIn, Facebook, and blog posts, then writes generated content back to Google Sheets for review and publishing.",
    tags: ["n8n", "OpenAI", "Tavily API", "Google Sheets", "AI Agents", "HTTP Requests"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/Content%20creation%20facebook%20%2B%20LinkedIn"
  },
  {
    title: "AI Invoice Processing & Monthly Summarizer Automation",
    category: "AI Automation / Document Processing",
    filters: ["AI Automation", "Agentic AI"],
    impact: "n8n workflow that extracts invoice PDFs, stores records in Notion, and generates monthly summaries.",
    image: "/AI_Invoice.png",
    description:
      "An AI-powered invoice automation workflow using n8n, Gmail, Google Drive, OpenAI, and Notion. It detects invoice emails with PDF attachments, extracts invoice text, verifies invoices, parses structured fields and line items, saves records to Notion, calculates monthly totals, categorizes expenses, and sends summary emails.",
    tags: ["n8n", "OpenAI", "Gmail API", "Google Drive", "PDF Extraction", "Notion", "Structured Output"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/Invoce"
  },
  {
    title: "AI Therapy Assistant â€” Physical Therapy Clinic Automation",
    category: "AI Automation / Clinic Workflow",
    filters: ["AI Automation", "Agentic AI"],
    impact: "n8n workflow that summarizes therapy call transcripts and sends structured appointment emails.",
    image: "/AI_Nutrition.png",
    description:
      "An AI-powered therapy clinic automation workflow using n8n, OpenAI Chat Models, AI Agents, webhooks, memory, and Gmail. It summarizes call transcripts, extracts client details, symptoms, appointment times, and notes, then generates structured HTML confirmation emails for clinic staff.",
    tags: ["n8n", "OpenAI", "AI Agents", "Gmail API", "Webhooks", "Window Buffer Memory"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/Nutritionist%2BAI%2BAgenT"
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
    title: "Eye Disease Classification using EfficientNetB3",
    category: "Computer Vision / Deep Learning",
    filters: ["Computer Vision", "Machine Learning"],
    impact: "Retinal image classifier for Normal, Diabetic Retinopathy, Cataract, and Glaucoma using EfficientNetB3 transfer learning.",
    image: "/Eye_disease.png",
    description:
      "A deep learning project for automated retinal image classification across four disease categories. It uses EfficientNetB3 pretrained on ImageNet, data augmentation, TensorFlow/Keras, and a 4,217-image dataset split into train, validation, and test sets.",
    tags: ["EfficientNetB3", "TensorFlow", "Keras", "OpenCV", "Transfer Learning", "Medical AI"],
    github: "https://github.com/humayun-mhk/Eye-Disease-Classification-using-EfficientNetB3#%EF%B8%8F-eye-disease-classification-using-efficientnetb3"
  },
  {
    title: "AI Digital Twin System",
    category: "Generative AI",
    filters: ["Agentic AI", "Full-stack", "MLOps"],
    impact: "Memory-enhanced LLM system with AWS Bedrock, infrastructure automation, and web delivery.",
    image: "/AI_Digital_Twin.png",
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
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "JavaScript", "SQL", "Dart", "C / C++"] },
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "PHP", "Databases"] },
  { title: "App Development", items: ["Dart", "Flutter", "Firebase", "Cloud Firestore", "Realtime Database"] },
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
      "Built production-style Machine Learning, NLP, Generative AI, and RAG applications using Python, FastAPI, Scikit-learn, PyTorch, TensorFlow, Hugging Face, and MLOps tools.",
      "Developed FraudShield v2 using 284,807 transaction records and improved fraud recall to over 82%, F1-score to over 0.87, and ROC-AUC to approximately 0.993.",
      "Built SmartSupport AI using 59,579 multilingual support tickets across five languages, 62 queue categories, and five priority levels.",
      "Implemented MLflow experiment tracking, DVC pipelines, Docker, GitHub Actions CI/CD, FastAPI inference services, and React dashboards."
    ]
  },
  {
    role: "Generative AI Intern",
    company: "Arch Technologies - Remote",
    date: "Oct 2025 - Dec 2025",
    bullets: [
      "Built an Enterprise Knowledge Copilot using FastAPI, React, LangChain, LangGraph, hybrid RAG, BM25, reranking, and citation-based answer validation.",
      "Improved retrieval Recall@5 from 73.55% to 91.39% and MRR from 64.65% to 79.94% across a 248-question benchmark.",
      "Developed a LangGraph validation agent that verified factual claims against retrieved evidence.",
      "Achieved 95.31% citation precision while revising or refusing unsupported answers."
    ]
  },
  {
    role: "Freelance AI Automation Developer",
    company: "Freelance - Remote",
    date: "Sep 2025 - Dec 2025",
    bullets: [
      "Delivered AI automation, data extraction, content intelligence, email automation, and agentic chatbot solutions for a remote client.",
      "Built an n8n workflow that extracted product names, specifications, prices, and images from a 29-page DreBon Air Tools catalogue and stored each item in Airtable.",
      "Developed an AI-powered LinkedIn competitor intelligence system using n8n, Apify, OpenAI, PostgreSQL, Supabase, and JavaScript.",
      "Created AI agents for competitor discovery, post classification, content-style analysis, brand-aligned content generation, and customer workflow routing."
    ]
  },
  {
    role: "NLP Intern",
    company: "Elevvo Pathways - Remote",
    date: "Sep 2025 - Oct 2025",
    bullets: [
      "Built NLP applications for text classification, sentiment analysis, semantic search, topic modeling, and language understanding.",
      "Implemented text preprocessing, tokenization, feature extraction, model training, and inference workflows.",
      "Worked with BERT and Hugging Face Transformers for transformer-based NLP tasks.",
      "Evaluated models using precision, recall, F1-score, confusion matrices, and prediction-error analysis."
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

