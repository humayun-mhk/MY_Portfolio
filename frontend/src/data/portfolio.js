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
    image: "/career_Pilot.png",
    description:
      "A full-stack career assistant that analyzes resumes, verifies evidence, tailors applications, and tracks progress through a LangGraph multi-agent workflow.",
    tags: ["React", "FastAPI", "LangGraph", "ChromaDB", "PostgreSQL", "RAG", "Agentic AI"],
    github: "https://github.com/humayun-mhk/CareerPilot-AI",
    demo: "https://careerpilot-ai-frontend-h9kh.onrender.com/"
  },
  {
    title: "Healthcare Appointment & Triage",
    category: "Healthcare AI / Full-stack",
    filters: ["RAG", "Full-stack"],
    image: "/Doctor_appointment.png",
    description:
      "A healthcare platform for appointment booking, SMTP notifications, safe AI triage, policy RAG, doctor dashboards, and human-reviewed decisions.",
    tags: ["React", "FastAPI", "PostgreSQL", "pgvector", "RAG", "AI Triage", "Appointment Booking", "SMTP Email"],
    github: "https://github.com/humayun-mhk/medical-appointment-triage-ai",
    demo: "https://medical-appointment-triage-ai.vercel.app/"
  },
  {
    title: "Network Security ML Pipeline",
    category: "MLOps / Security ML",
    filters: ["MLOps", "Full-stack", "Machine Learning"],
    image: "/End_ML_security.png",
    description:
      "An end-to-end phishing URL detection pipeline with feature engineering, MongoDB ingestion, FastAPI inference, MLflow tracking, Docker, CI/CD, and AWS deployment.",
    tags: ["Python", "Scikit-learn", "FastAPI", "MongoDB", "Docker", "AWS ECS/ECR", "MLflow"],
    github: "https://github.com/humayun-mhk/End_to_end_Network_Security_ML_Project"
  },
  {
    title: "Multimodal Vision RAG",
    category: "RAG / Computer vision",
    filters: ["RAG", "Computer Vision", "Full-stack"],
    image: "/Multi_model_Vision.png",
    description:
      "A multimodal retrieval system that uses GPT-4o Vision and FAISS to answer questions grounded in uploaded PDFs, images, and text documents.",
    tags: ["GPT-4o Vision", "FAISS", "FastAPI", "React", "RAG", "Semantic Search"],
    github: "https://github.com/humayun-mhk/multimodal-vision-rag",
    demo: "https://multimodal-vision-rag-dfqh.vercel.app/"
  },
  {
    title: "WhatsApp Booking Agent",
    category: "AI Automation / Appointment Booking",
    filters: ["AI Automation", "Agentic AI"],
    image: "/Whatsapp booking.png",
    description:
      "A conversational WhatsApp agent that handles text and voice, qualifies leads, checks Google Calendar, books appointments, and sends confirmations.",
    tags: ["n8n", "WhatsApp", "Gemini", "OpenAI", "Google Calendar", "Google Sheets", "Gmail"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/WhatsApp%20AI%20Appointment%20Booking%20Agent"
  },
  {
    title: "Email AI Agent Team",
    category: "AI Automation / Email Agents",
    filters: ["AI Automation", "Agentic AI"],
    image: "/Email Automation.png",
    description:
      "A team of AI agents that classifies Gmail messages, routes them by intent, checks calendar availability, and prepares structured replies for review.",
    tags: ["n8n", "Gmail", "OpenAI", "Google Calendar", "LangChain", "AI Agents"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/Email%20Automation"
  },
  {
    title: "Dental AI Receptionist",
    category: "AI Automation / Voice Agent",
    filters: ["AI Automation", "Agentic AI"],
    image: "/AI Reciptionist.png",
    description:
      "A real-time voice receptionist that checks appointment availability, books dental visits, suggests alternative slots, and logs calls through n8n and Vapi.",
    tags: ["n8n", "Vapi", "OpenAI", "Python", "Airtable", "Webhooks", "Voice AI"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/AI%20Receptionist%20Agent%20for%20Dental%20Clinics"
  },
  {
    title: "Restaurant AI Automation",
    category: "AI Automation / Voice AI",
    filters: ["AI Automation", "Agentic AI", "RAG"],
    image: "/AI_powered_Resturant_n8n.png",
    description:
      "An n8n restaurant assistant that combines OpenAI, Pinecone, and ElevenLabs for menu search, voice support, bookings, order confirmations, and human escalation.",
    tags: ["n8n", "OpenAI", "Pinecone", "ElevenLabs", "Google Drive API", "Voice AI", "AI Automation"],
    github: "https://lnkd.in/dZ7HEp9q"
  },
  {
    title: "Lead Generation Automation",
    category: "AI Automation / Lead Generation",
    filters: ["AI Automation", "Full-stack"],
    image: "/Lead generation.png",
    description:
      "An n8n pipeline that collects targeted Apollo leads through Apify, removes duplicate contacts, and stores clean outreach records in Airtable.",
    tags: ["n8n", "Apify", "Apollo.io", "Airtable", "Lead Generation", "Automation"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/Lead%20Generation"
  },
  {
    title: "Invoice Processing Automation",
    category: "AI Automation / Document Processing",
    filters: ["AI Automation", "Agentic AI"],
    image: "/AI_Invoice.png",
    description:
      "An invoice workflow that extracts PDF data from Gmail, validates structured fields with OpenAI, stores records in Notion, and emails monthly expense summaries.",
    tags: ["n8n", "OpenAI", "Gmail API", "Google Drive", "PDF Extraction", "Notion", "Structured Output"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/Invoce"
  },
  {
    title: "AI Agent Orchestrator",
    category: "AI Automation / Multi-agent",
    filters: ["AI Automation", "Agentic AI"],
    image: "/AI_Orchestrater_Agent.png",
    description:
      "A multi-agent n8n system that routes Telegram text and voice requests to specialized agents for email, calendars, contacts, content, and web research.",
    tags: ["n8n", "AI Agents", "Telegram", "OpenAI", "Gemini", "Supabase", "Airtable"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/AI%20Agent%20Orchestrator"
  },
  {
    title: "Physical Therapy Assistant",
    category: "AI Automation / Clinic Workflow",
    filters: ["AI Automation", "Agentic AI"],
    image: "/AI_Nutrition.png",
    description:
      "An AI clinic workflow that summarizes call transcripts, extracts patient and appointment details, and sends structured confirmation emails to staff.",
    tags: ["n8n", "OpenAI", "AI Agents", "Gmail API", "Webhooks", "Window Buffer Memory"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/Nutritionist%2BAI%2BAgenT"
  },
  {
    title: "Social Media Content Automation",
    category: "AI Automation / Content Creation",
    filters: ["AI Automation", "Agentic AI"],
    image: "/AI_Social_Media.png",
    description:
      "An n8n workflow that researches campaign topics and uses dedicated AI agents to create LinkedIn, Facebook, and blog content stored in Google Sheets.",
    tags: ["n8n", "OpenAI", "Tavily API", "Google Sheets", "AI Agents", "HTTP Requests"],
    github: "https://github.com/humayun-mhk/n8n-automation/tree/main/Content%20creation%20facebook%20%2B%20LinkedIn"
  },
  {
    title: "Campus Marketplace",
    category: "Mobile Development",
    filters: ["Mobile", "Full-stack"],
    image: "/Campus_market_place.png",
    description:
      "A Flutter and Firebase marketplace where students can publish listings, upload images, search items, manage profiles, and contact sellers in real time.",
    tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Image Picker"],
    github: "https://github.com/humayun-mhk/campus-marketplace"
  },
  {
    title: "TrafficIQ",
    category: "Computer vision",
    filters: ["Computer Vision", "Full-stack"],
    image: "/Gemini_Generated_Image_occs0ioccs0ioccs.png",
    description:
      "A real-time vehicle detection, tracking, and counting platform using YOLOv8, OpenCV, FastAPI, WebSocket streams, and lane-level analytics.",
    tags: ["YOLOv8", "OpenCV", "FastAPI", "WebSockets", "Python"],
    github: "https://github.com/humayun-mhk/TrafficIQ-End-to-End-Traffic-Detection-System"
  },
  {
    title: "Medical RAG Chatbot",
    category: "RAG / AWS",
    filters: ["RAG", "MLOps"],
    image: "/Gemini_Generated_Image_4ap58h4ap58h4ap5 (1).png",
    description:
      "A medical question-answering assistant grounded in Pinecone vector search, built with LangChain and OpenAI and containerized for AWS deployment.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Docker", "AWS EC2/ECR"],
    github: "https://github.com/humayun-mhk/Medical-Chatbot-RAG-LLM"
  },
  {
    title: "FraudShield",
    category: "ML pipeline",
    filters: ["MLOps", "Full-stack", "Machine Learning"],
    image: "/Gemini_Generated_Image_cqk43kcqk43kcqk4.png",
    description:
      "A real-time credit card fraud detection pipeline with class balancing, drift monitoring, FastAPI inference, and an interactive analytics dashboard.",
    tags: ["Random Forest", "SMOTE", "FastAPI", "Streamlit", "Plotly"],
    github: "https://github.com/humayun-mhk/-FraudShield-Real-Time-Credit-Card-Fraud-Detection"
  },
  {
    title: "Real-Time Face Recognition",
    category: "Computer vision",
    filters: ["Computer Vision", "Full-stack"],
    image: "/Gemini_Generated_Image_tj6spytj6spytj6s.png",
    description:
      "An identity system combining YOLOv8, FaceNet, and MTCNN with live WebSocket updates and REST APIs for identity management.",
    tags: ["YOLOv8", "FaceNet", "MTCNN", "Flask", "WebSockets"],
    github: "https://github.com/humayun-mhk/-Real-Time-Face-Recognition-System"
  },
  {
    title: "Eye Disease Classification",
    category: "Computer Vision / Deep Learning",
    filters: ["Computer Vision", "Machine Learning"],
    image: "/Eye_disease.png",
    description:
      "An EfficientNetB3 transfer-learning model that classifies retinal images as normal, diabetic retinopathy, cataract, or glaucoma.",
    tags: ["EfficientNetB3", "TensorFlow", "Keras", "OpenCV", "Transfer Learning", "Medical AI"],
    github: "https://github.com/humayun-mhk/Eye-Disease-Classification-using-EfficientNetB3#%EF%B8%8F-eye-disease-classification-using-efficientnetb3"
  },
  {
    title: "AI Digital Twin",
    category: "Generative AI",
    filters: ["Agentic AI", "Full-stack", "MLOps"],
    image: "/AI_Digital_Twin.png",
    description:
      "A memory-enhanced digital twin built on AWS Bedrock with FastAPI services, Terraform infrastructure, Next.js, and CloudFront delivery.",
    tags: ["AWS Bedrock", "FastAPI", "Terraform", "Next.js", "CloudFront"],
    github: "https://github.com/humayun-mhk/my-ai-twin-orchestrator"
  },
  {
    title: "NLP Deep Learning Projects",
    category: "NLP / Deep learning",
    filters: ["RAG"],
    image: "/Gemini_Generated_Image_wo01cpwo01cpwo01.png",
    description:
      "A collection of LSTM-based NLP systems for text suggestions and fake-news classification with TensorFlow and evaluation interfaces.",
    tags: ["TensorFlow", "LSTM", "NumPy", "Streamlit"],
    github: "https://github.com/humayun-mhk/Deep-Learning-Projects"
  },
  {
    title: "AWS SageMaker ML Pipeline",
    category: "MLOps / AWS",
    filters: ["MLOps", "Machine Learning"],
    image: "/Gemini_Generated_Image_i5axpki5axpki5ax.png",
    description:
      "A production-style cloud ML workflow covering data preparation, model training, evaluation, and deployment to a SageMaker inference endpoint.",
    tags: ["AWS SageMaker", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/humayun-mhk/aws-sagemaker-end-to-end-ml"
  },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "JavaScript", "SQL", "Dart", "C / C++"] },
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "PHP", "Databases"] },
  { title: "App Development", items: ["Dart", "Flutter", "Firebase", "Cloud Firestore", "Realtime Database"] },
  { title: "Machine Learning", items: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "NLP", "Deep Learning"] },
  { title: "Computer Vision", items: ["OpenCV", "YOLO", "Image Preprocessing", "Image Classification", "Object Detection", "Segmentation", "Transfer Learning", "Vision Models"] },
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
