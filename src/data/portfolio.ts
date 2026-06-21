// Single source of truth for all portfolio content.
// Edit values here to update the site — sections map over this data.

export const profile = {
  name: "Mahir Patel",
  role: "AI/ML Engineer",
  tagline: "LLM Interpretability & Steering · Deep Learning · Applied ML",
  location: "Riverside, California",
  summary:
    "AI/ML engineer and graduate researcher building language-model systems end to end — from mechanistic interpretability and steering research to production LLM backends. MS in Computer Science at UC Riverside (GPA 4.0), focused on understanding and controlling how large models reason.",
  about:
    "I'm an AI/ML engineer finishing my MS in Computer Science at UC Riverside (GPA 4.0), where I research the mechanistic interpretability of large language models in Dr. Yue Dong's lab — decomposing hidden-state representations, building steering interventions, and studying hallucination. Alongside research, I ship production ML systems as co-founder and lead backend engineer of EfficiencyMate, and I like going deep enough to write deep-learning training from scratch when it makes models faster and clearer.",
  resumeUrl: "/Mahir-Patel-Resume.pdf",
  image: "/profile.jpg",
};

export const socials = {
  email: "mahirpatel427@gmail.com",
  github: "https://github.com/MahirPatel3130",
  githubHandle: "MahirPatel3130",
  linkedin: "https://www.linkedin.com/in/mahir-patel-b91b8424a/",
  linkedinHandle: "mahir-patel",
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Co-Founder & Lead Backend Engineer",
    company: "EfficiencyMate",
    location: "Remote",
    period: "Dec 2025 — Present",
    tags: ["FastAPI", "Google Gemini", "AWS", "LLM"],
    points: [
      "Architected a production LLM backend with Python (FastAPI) and Google Gemini, serving 50+ users with a reported 25% time savings and validated product–market fit.",
      "Engineered AWS infrastructure (RDS, S3, VPC, App Runner) with database optimization and containerized deployment, cutting costs 40% through an ECS → App Runner migration.",
      "Designed the full-stack architecture for horizontal scaling — query indexing, DB optimization, and containerized deployment strategies supporting a growing user base.",
    ],
  },
  {
    role: "Graduate Researcher — Dr. Yue Dong's Lab",
    company: "UC Riverside",
    location: "Riverside, CA",
    period: "Jun 2025 — Present",
    tags: ["PyTorch", "TransformerLens", "Interpretability", "NLP"],
    points: [
      "Investigating mechanistic interpretability in LLMs with PyTorch and TransformerLens, building custom frameworks to decompose hidden-state representations across model families.",
      "Built evaluation tools to quantify reasoning circuits and model-behavior attribution, with systematic benchmarking across diverse transformer architectures.",
      "Collaborating on hallucination-detection mechanisms and steering interventions to improve factuality in language models.",
    ],
  },
  {
    role: "Software Engineer — Robotics Lab",
    company: "UC Riverside",
    location: "Riverside, CA",
    period: "Sep 2023 — Jun 2025",
    tags: ["Computer Vision", "Raspberry Pi", "Embedded ML"],
    points: [
      "Implemented a Raspberry Pi face-recognition system, improving accuracy 15% through hardware–software co-optimization.",
      "Accelerated delivery of 3 robotics solutions by 20% through cross-functional collaboration with the research team.",
      "Reduced system downtime 30% by diagnosing and resolving 10+ critical hardware–software integration issues.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  points: string[];
  stack: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "LiREF — Steering for Llama-3.1-8B",
    blurb:
      "A layer-wise steering framework that computes semantic direction vectors to gain fine-grained causal control over a model's reasoning.",
    points: [
      "Designed a layer-wise LiREF steering framework computing semantic vectors across all 32 layers.",
      "Engineered a last-token steering mechanism via forward hooks, adding <1% runtime overhead.",
      "Achieved fine-grained causal control with ~0.05 β-scaled hidden-state shifts.",
      "Validated representational alignment on HotpotQA, showing +2.3% accuracy gains.",
    ],
    stack: ["Python", "PyTorch", "Transformers", "LLM Steering"],
    href: "https://github.com/MahirPatel3130/steering_liref",
    featured: true,
  },
  {
    title: "High-Performance GPT-2 in C++",
    blurb:
      "A from-scratch GPT-2 training engine in C++, hand-optimized for fast deep-learning training on CPU.",
    points: [
      "Built GPT-2 end to end in C++ for high-performance training.",
      "Hand-tuned the matmul backward kernel, achieving a 1.22× overall training speedup.",
      "Optimized gradient computation with OpenMP, loop tiling, and SIMD.",
      "Reduced L1d cache-miss rate to 10.2% via cache-aware tiling and builtin prefetch.",
    ],
    stack: ["C++", "OpenMP", "SIMD", "Deep Learning"],
    featured: true,
  },
  {
    title: "Mechanistic Interpretability",
    blurb:
      "Hands-on toolkit for understanding transformer internals from scratch — probing circuits, activations, and attention.",
    points: [
      "Implemented interpretability techniques to inspect attention patterns and residual-stream features.",
      "Built reproducible notebooks for analyzing how transformers represent and route information.",
    ],
    stack: ["Python", "PyTorch", "TransformerLens"],
    href: "https://github.com/MahirPatel3130/mechanistic_interpretability",
  },
  {
    title: "Network Intrusion Detection (Deep Learning)",
    blurb:
      "Deep-learning pipeline that classifies malicious network traffic, from feature engineering to model evaluation.",
    points: [
      "Trained deep models to detect network-intrusion attacks on traffic-flow features.",
      "Built an end-to-end pipeline covering preprocessing, training, and evaluation metrics.",
    ],
    stack: ["Python", "Deep Learning", "Pandas", "scikit-learn"],
    href: "https://github.com/MahirPatel3130/Network_Intrusion_Deep_Learning",
  },
];

export type Research = {
  title: string;
  venue: string;
  authors: string;
  abstract: string;
  highlights: string[];
  href: string;
};

export const research: Research[] = [
  {
    title:
      "Enhancing Adversarial Robustness of Mobility-Scooter Riding Stability Analysis through Body-Informed Design",
    venue: "BSN 2026 (Body Sensor Networks)",
    authors:
      "J. Liu, M. Patel, C. Zhao, H. S. Shahgir, Y. Dong, T. Chen",
    abstract:
      "HCGCN is a body-informed graph network that fuses a frozen Hard-Constraint Graph Autoencoder over anatomical part-graphs with an adversarially trained GCN backbone via a lightweight fusion head, making skeletal-pose rider-stability classification robust to adversarial perturbations.",
    highlights: [
      "0.74 mean adversarial ROC-AUC against four white-box attacks",
      "0.71 under a leave-one-attack-out protocol",
      "0.96 clean ROC-AUC maintained",
    ],
    href: "/research/BSN2026-HCGCN.pdf",
  },
  {
    title:
      "Machine Learning Analysis of Extracellular Vesicles for Detection of Triple-Negative Breast Cancer",
    venue: "City of Hope · UC Riverside (Poster, 2026)",
    authors:
      "N. Jiang, D. Tanase, M. Patel, V. Seewaldt, Y. Dong, T. Jovanovic-Talisman",
    abstract:
      "An EV-based liquid-biopsy framework combining single-EV imaging (SEVEN) with interpretable, ensemble machine learning to detect rare TNBC-associated extracellular-vesicle populations — identifying Complement 3-enriched EVs as a promising marker with balanced cancer/healthy detection.",
    highlights: [
      "Single-EV imaging + interpretable ensemble ML",
      "Complement 3-enriched EVs identified as the top marker",
      "Leave-One-Patient-Out validation (AUC 0.70)",
    ],
    href: "/research/TNBC-EV-Poster.pdf",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "ML & Deep Learning",
    items: [
      "PyTorch",
      "Transformers",
      "Hugging Face",
      "TransformerLens",
      "CUDA",
      "LangGraph",
      "LangChain",
      "NumPy",
      "Pandas",
    ],
  },
  {
    label: "Languages",
    items: ["Python", "C++", "C", "Rust", "TypeScript", "SQL", "Bash"],
  },
  {
    label: "Backend & Infra",
    items: ["FastAPI", "AWS (RDS, S3, App Runner, VPC)", "Docker", "PostgreSQL"],
  },
  {
    label: "Web",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
];

export const education = [
  {
    school: "University of California, Riverside",
    degree: "M.S. in Computer Science",
    detail: "GPA 4.0",
    period: "Sep 2025 — Jun 2026",
  },
  {
    school: "University of California, Riverside",
    degree: "B.S. in Computer Science",
    detail: "GPA 3.9",
    period: "Sep 2022 — Apr 2025",
  },
];
