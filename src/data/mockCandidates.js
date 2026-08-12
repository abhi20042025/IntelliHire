export const initialCandidates = [
  {
    id: "cand-1",
    name: "Abhishek Singh",
    role: "Senior AI Engineer",
    status: "Screened",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    atsScore: 92,
    atsBreakdown: { overall: 92, keyword: 95, formatting: 88, grammar: 90, experience: 94, projects: 96 },
    professionalSummary: [
      "Strong Backend & AI Developer",
      "6 years NLP & PyTorch Specialist",
      "React Frontend Expert",
      "AWS Cloud Certified Solutions Architect",
      "Team Leadership & Agile Mentor"
    ],
    weaknesses: [
      "No Docker container optimization",
      "No Kubernetes cluster orchestration",
      "No CI/CD pipeline automation"
    ],
    extractedSkills: ["Python", "AWS", "Docker", "Machine Learning", "PyTorch"],
    missingSkills: ["Kubernetes", "Kafka", "RAG Systems"],
    experience: 6, // years
    experienceBreakdown: "6 years as AI researcher and team lead. Designed low-latency LLM inference pipelines.",
    resumeMatchText: "Abhishek Singh is a senior-level AI Engineer with strong proficiency in Python, AWS cloud architectures, and containerized deployment with Docker. He has minor exposure to orchestration toolsets but lacks deep production Kubernetes experience. Strong background in model evaluation and PyTorch frameworks.",
    roadmap: [
      { skill: "Kubernetes", recommendation: "Learn Kubernetes on Udemy (Certified Kubernetes Administrator)", url: "https://www.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/" },
      { skill: "Kafka", recommendation: "Confluent Apache Kafka Developer Course", url: "https://www.confluent.io/training/" },
      { skill: "RAG Systems", recommendation: "LangChain & LlamaIndex Production Patterns Guide", url: "https://www.deeplearning.ai/" }
    ],
    skillsDistribution: {
      Java: 15,
      Python: 45,
      AWS: 20,
      Docker: 20
    },
    versionHistory: [
      { version: "v3_final.pdf", date: "2026-07-10", score: 92, diff: "Added recent LLM deployment metrics and Docker configs" },
      { version: "v2_experience.pdf", date: "2026-05-15", score: 85, diff: "Expanded on AWS cloud architectural patterns" },
      { version: "v1_draft.pdf", date: "2026-03-01", score: 72, diff: "Initial draft with general software engineer template" }
    ]
  },
  {
    id: "cand-2",
    name: "Dother Brahy",
    role: "Senior AI Engineer",
    status: "Shortlisted",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    atsScore: 86,
    atsBreakdown: { overall: 86, keyword: 88, formatting: 92, grammar: 85, experience: 82, projects: 90 },
    professionalSummary: [
      "Experienced Java and Python developer",
      "Deep understanding of SQL database schemas",
      "5 years backend software engineering",
      "Active machine learning modeling practices"
    ],
    weaknesses: [
      "No AWS certifications",
      "No Docker orchestration experience",
      "No real-time streaming (Kafka)"
    ],
    extractedSkills: ["Python", "Java", "Docker", "SQL", "Scikit-Learn"],
    missingSkills: ["Kubernetes", "Kafka", "AWS"],
    experience: 5,
    experienceBreakdown: "5 years in software engineering with 2 years specializing in AI model deployment and tabular data analytics.",
    resumeMatchText: "Dother Brahy shows solid skills in core Python, database systems, and Java backend development. While highly capable in software architecture, they lack public cloud certifications (AWS) and need more training in container orchestration.",
    roadmap: [
      { skill: "AWS", recommendation: "AWS Certified Solutions Architect Course", url: "https://aws.amazon.com/training/" },
      { skill: "Kubernetes", recommendation: "Kubernetes for Developers (LFD259)", url: "https://training.linuxfoundation.org/" }
    ],
    skillsDistribution: {
      Java: 30,
      Python: 40,
      AWS: 10,
      Docker: 20
    },
    versionHistory: [
      { version: "Dother_CV_2026.pdf", date: "2026-06-18", score: 86, diff: "Added Docker containerization details" },
      { version: "Dother_CV_old.pdf", date: "2025-12-05", score: 78, diff: "Original software developer resume" }
    ]
  },
  {
    id: "cand-3",
    name: "Abhishek Banoatar",
    role: "AI Engineer",
    status: "Shortlisted",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    atsScore: 75,
    atsBreakdown: { overall: 75, keyword: 70, formatting: 80, grammar: 82, experience: 75, projects: 73 },
    professionalSummary: [
      "3 years cloud API service engineering",
      "FastAPI microservice implementation",
      "AWS S3 & EC2 cloud provisioning"
    ],
    weaknesses: [
      "No container configurations (Docker)",
      "No Kubernetes scheduling setups",
      "No event log tracking (Kafka)"
    ],
    extractedSkills: ["AWS", "Java", "TensorFlow", "FastAPI"],
    missingSkills: ["Docker", "Kubernetes", "Kafka"],
    experience: 3,
    experienceBreakdown: "3 years experience. Primarily working on cloud infrastructure and API integrations for AI models.",
    resumeMatchText: "Abhishek Banoatar has standard cloud skills and solid API development patterns using FastAPI and AWS. The resume lacks modern containerization tooling (Docker) and event streaming tools (Kafka) which are crucial for this role.",
    roadmap: [
      { skill: "Docker", recommendation: "Docker Mastery: The Complete Toolchain Course", url: "https://www.docker.com/" },
      { skill: "Kubernetes", recommendation: "Introduction to Kubernetes (LFS158x)", url: "https://www.edx.org/" }
    ],
    skillsDistribution: {
      Java: 35,
      Python: 20,
      AWS: 35,
      Docker: 10
    },
    versionHistory: [
      { version: "Resume_Banoatar_v2.pdf", date: "2026-07-02", score: 75, diff: "Added FastAPI details and AWS services list" },
      { version: "Resume_Banoatar_v1.pdf", date: "2026-01-12", score: 65, diff: "Generic resume without API specialization" }
    ]
  }
];

export const initialUploadHistory = [
  { id: "up-1", name: "John_Resume.pdf", status: "Completed", date: "Today", ats: 91 },
  { id: "up-2", name: "Alice_Resume.pdf", status: "Completed", date: "Yesterday", ats: 87 },
  { id: "up-3", name: "Mike_CV_Draft.pdf", status: "Processing...", date: "Just now", ats: null }
];

export const jobPostings = [
  {
    id: "job-1",
    title: "Senior AI Engineer",
    description: "Looking for an expert Senior AI Engineer to join our team. You will lead the design and deployment of large-scale AI and LLM models. Required skills include advanced Python development, Docker, AWS architecture, Kafka, and Kubernetes cluster optimization.",
    implications: [
      "Deploy and manage models in containerized Kubernetes clusters.",
      "Integrate Kafka streaming data pipelines into inference systems.",
      "Lead AI engineering best practices and mentor junior developers.",
      "Scale AWS-based GPU clusters for optimal model inference speeds."
    ]
  },
  {
    id: "job-2",
    title: "Fullstack Machine Learning Developer",
    description: "Seeking a developer skilled in Python, React, and AWS to build fullstack interfaces and APIs around deep learning systems. Experience in containerization and SQL required.",
    implications: [
      "Design user-friendly dashboard interfaces using React.",
      "Implement Python/FastAPI microservices for models.",
      "Configure AWS cloud infrastructure (ECS/S3/RDS).",
      "Monitor models and user interaction data in production."
    ]
  }
];

export const mockInterviewQuestions = {
  Technical: [
    {
      id: "q-t1",
      question: "Explain the difference between data parallelism and model parallelism when training large neural networks. When would you choose one over the other?",
      keyPoints: ["Model weights exceed GPU memory limit", "Batch size scaling limits", "Inter-GPU communication bottlenecks", "Pipeline parallelism benefits"]
    },
    {
      id: "q-t2",
      question: "How do you mitigate the vanishing gradient problem in extremely deep neural networks?",
      keyPoints: ["Residual connections", "Batch normalization", "ReLU/GELU activation functions", "Proper weight initialization (e.g. He/Xavier)"]
    },
    {
      id: "q-t3",
      question: "What is your approach to optimizing latency for a real-time LLM inference API?",
      keyPoints: ["KV caching", "Quantization (FP8, INT4)", "FlashAttention", "Streaming outputs", "Speculative decoding"]
    }
  ],
  HR: [
    {
      id: "q-h1",
      question: "Why do you want to work at IntelliHire as a Senior AI Engineer, and what unique value do you bring?",
      keyPoints: ["Passion for AI-assisted workflows", "Experience bridging research and production", "Teamwork and collaboration skills"]
    },
    {
      id: "q-h2",
      question: "Describe a time you had a technical disagreement with a team lead or colleague. How did you resolve it?",
      keyPoints: ["Professional communication", "Data-driven decision making", "Compromise and alignment", "Shared goals focus"]
    }
  ],
  Coding: [
    {
      id: "q-c1",
      question: "Implement a sliding window maximum function in Python. Given an array of integers and a window size k, return the max values for each window position. What is the optimal time complexity?",
      keyPoints: ["Double-ended queue (deque)", "O(N) time complexity", "Monotonic queue pattern"]
    },
    {
      id: "q-c2",
      question: "How would you write a simple rate-limiter middleware in Python for a FastAPI application using Redis? Outline the algorithm.",
      keyPoints: ["Token bucket or sliding window log", "Redis TTL and INCR", "Handling race conditions with Lua scripts"]
    }
  ],
  Behavioral: [
    {
      id: "q-b1",
      question: "Tell me about a project that failed. What was the project, why did it fail, and what did you learn from it?",
      keyPoints: ["Clear scope/ownership issues", "Learning from mistakes", "Adjusting engineering processes", "Resilience"]
    },
    {
      id: "q-b2",
      question: "Describe a situation where you had to deploy a critical hotfix to a production service under immense pressure. How did you handle the situation?",
      keyPoints: ["Systematic debugging under pressure", "Rollback protocols", "Post-mortem analysis", "Cross-team communication"]
    }
  ]
};

export const mentorInitialMessages = [
  {
    id: "m-1",
    sender: "mentor",
    text: "Hello! I am your AI Career Mentor. I've reviewed your latest recommendations.",
    timestamp: "10:30 AM"
  },
  {
    id: "m-2",
    sender: "mentor",
    text: "For the Senior AI Engineer role, we noticed you have excellent PyTorch and Docker skills, but you could boost your profile by learning Kubernetes. Check out your personalized learning roadmap on the candidate dashboard!",
    timestamp: "10:31 AM"
  }
];
