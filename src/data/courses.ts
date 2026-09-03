export type CourseCategory = "technical" | "non-technical";

export interface Course {
  id: string;
  name: string;
  description: string;
  category: CourseCategory;
  tools: string[];
  skills: string[];
  whatYouWillLearn: string[];
  projectExposure: string;
  careerOpportunities: string[];
  suitableFor: string;
}

export const technicalCourses: Course[] = [
  {
    id: "app-development",
    name: "App Development",
    description:
      "Build native and cross-platform mobile applications using React Native, Flutter, or Swift — from UI prototyping to App Store deployment.",
    category: "technical",
    tools: ["React Native", "Flutter", "Swift", "Dart", "Firebase", "REST APIs"],
    skills: ["Mobile UX/UI Design", "Cross-Platform Dev", "State Management", "Native API Integration", "App Store Publishing"],
    whatYouWillLearn: [
      "Core fundamentals of cross-platform mobile architecture with Flutter and React Native.",
      "Building responsive layouts and touch-friendly interface components.",
      "Connecting applications to cloud databases and user authentication services.",
      "Optimizing app rendering performance and managing local device storage."
    ],
    projectExposure: "Develop a feature-complete iOS & Android app with real-time sync, push notifications, and payment gateway integration.",
    careerOpportunities: ["Mobile App Developer", "React Native Engineer", "Flutter Developer", "Frontend Engineer"],
    suitableFor: "Computer Science students, web developers transitioning to mobile, and aspiring software engineers."
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    description:
      "Transform raw datasets into actionable insights using Python, SQL, and visualization tools like Tableau and Power BI.",
    category: "technical",
    tools: ["Python", "SQL", "Tableau", "Power BI", "Pandas", "Excel Advanced"],
    skills: ["Data Wrangling", "Exploratory Data Analysis", "Dashboard Creation", "Statistical Analysis", "Business Intelligence"],
    whatYouWillLearn: [
      "Extracting and querying large complex relational databases using SQL.",
      "Cleaning, manipulating, and transforming raw datasets with Pandas and NumPy.",
      "Designing interactive executive dashboards in Power BI and Tableau.",
      "Formulating hypothesis tests and interpreting statistical confidence intervals."
    ],
    projectExposure: "Build an end-to-end automated business analytics pipeline and interactive executive dashboard for e-commerce performance.",
    careerOpportunities: ["Data Analyst", "Business Intelligence Analyst", "Data Operations Specialist", "Reporting Analyst"],
    suitableFor: "Students interested in data-driven decision making, analytics enthusiasts, and business students."
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    description:
      "Implement supervised and unsupervised learning algorithms, build predictive models, and deploy them in production pipelines.",
    category: "technical",
    tools: ["Python", "Scikit-Learn", "TensorFlow", "PyTorch", "Jupyter", "MLflow"],
    skills: ["Predictive Modeling", "Feature Engineering", "Model Evaluation", "Algorithmic Tuning", "MLOps Basics"],
    whatYouWillLearn: [
      "Supervised techniques: Linear/Logistic Regression, Decision Trees, Ensemble methods.",
      "Unsupervised techniques: K-Means Clustering, PCA, Anomaly Detection.",
      "Evaluating models using Precision, Recall, ROC-AUC, and Cross-Validation.",
      "Deploying ML models as scalable REST APIs using Flask/FastAPI."
    ],
    projectExposure: "Train and deploy a production-grade predictive model for customer churn prediction with web API access.",
    careerOpportunities: ["Machine Learning Engineer", "Junior AI Specialist", "Data Science Engineer", "Algorithms Engineer"],
    suitableFor: "Students with basic programming knowledge wanting to specialize in predictive AI models."
  },
  {
    id: "hev",
    name: "HEV (Hybrid & Electric Vehicles)",
    description:
      "Explore hybrid and electric vehicle systems — battery management, power electronics, regenerative braking, and EV drivetrain architecture.",
    category: "technical",
    tools: ["MATLAB", "Simulink", "ANSYS", "CANalyzer", "Battery Management Systems (BMS)"],
    skills: ["EV Drivetrain Modeling", "Battery Thermal Management", "Power Electronics Design", "Regenerative Systems", "CAN Protocol Analysis"],
    whatYouWillLearn: [
      "Architectural principles of Electric Vehicles (BEV, HEV, PHEV).",
      "Battery Chemistries, State of Charge (SoC) estimation, and BMS safety algorithms.",
      "Motor control strategies for Permanent Magnet Synchronous Motors (PMSM).",
      "Regenerative braking energy management and power inverter modeling."
    ],
    projectExposure: "Simulate an EV drivetrain model in MATLAB/Simulink and design a battery thermal management protocol.",
    careerOpportunities: ["EV Systems Engineer", "BMS Engineer", "Automotive Embedded Engineer", "Power Electronics Analyst"],
    suitableFor: "Electrical, Electronics, Mechanical, and Mechatronics engineering students."
  },
  {
    id: "ai-and-ml",
    name: "AI and ML",
    description:
      "Deep-dive into neural networks, NLP, computer vision, and generative AI — with hands-on projects using TensorFlow and PyTorch.",
    category: "technical",
    tools: ["TensorFlow", "PyTorch", "OpenCV", "Hugging Face", "LangChain", "Python"],
    skills: ["Deep Neural Networks", "Computer Vision", "Natural Language Processing", "Generative AI", "Transfer Learning"],
    whatYouWillLearn: [
      "Building Convolutional Neural Networks (CNNs) for image classification and detection.",
      "Recurrent Neural Networks (RNNs), LSTMs, and Transformer architectures.",
      "Fine-tuning Large Language Models (LLMs) and building RAG pipelines with LangChain.",
      "Computer vision pipelines for real-time video processing using OpenCV."
    ],
    projectExposure: "Build a multimodal AI application combining real-time computer vision with a domain-trained LLM assistant.",
    careerOpportunities: ["AI Engineer", "Deep Learning Research Analyst", "NLP Engineer", "Computer Vision Specialist"],
    suitableFor: "Tech enthusiasts wanting to build cutting-edge artificial intelligence and LLM applications."
  },
  {
    id: "ai-ml-comprehensive",
    name: "Artificial Intelligence & Machine Learning",
    description:
      "A comprehensive track covering AI fundamentals, deep learning architectures, reinforcement learning, and real-world AI system design.",
    category: "technical",
    tools: ["Python", "TensorFlow", "PyTorch", "Docker", "Kubeflow", "AWS Sagemaker"],
    skills: ["AI Architecture", "Reinforcement Learning", "Scalable Deep Learning", "AI Ethics", "Production AI Systems"],
    whatYouWillLearn: [
      "Full spectrum AI engineering from tabular ML to Deep Learning and Reinforcement Learning.",
      "Designing scalable AI microservices using Docker and cloud platforms.",
      "Model optimization, quantization, and edge deployment for low latency.",
      "AI safety, explainability (SHAP/LIME), and bias auditing."
    ],
    projectExposure: "Architect an end-to-end scalable enterprise AI platform with cloud model monitoring.",
    careerOpportunities: ["Senior AI Specialist", "AI Solutions Architect", "ML Technical Lead", "Applied Scientist"],
    suitableFor: "Advanced engineering undergraduates and developers seeking master-level AI capabilities."
  },
  {
    id: "business-analyst",
    name: "Business Analyst",
    description:
      "Bridge technical and business teams — master requirements gathering, process modeling, stakeholder management, and Agile BA practices.",
    category: "technical",
    tools: ["Jira", "Confluence", "Lucidchart", "SQL", "Excel", "BPMN 2.0"],
    skills: ["Requirements Engineering", "Use Case Modeling", "Agile & Scrum", "User Story Writing", "Gap Analysis"],
    whatYouWillLearn: [
      "Translating business needs into technical specifications (BRD, FRD, User Stories).",
      "Process mapping using BPMN 2.0 and UML diagrams.",
      "Facilitating Agile ceremonies, sprint planning, and backlog refinement.",
      "Data-backed business decision making using SQL and Excel modeling."
    ],
    projectExposure: "Conduct full business analysis for a digital transformation product launch including BRD documentation and user journey maps.",
    careerOpportunities: ["Business Analyst", "Agile Product Analyst", "Process Consultant", "Systems Analyst"],
    suitableFor: "Students aiming for hybrid technical-management careers and tech consulting roles."
  },
  {
    id: "data-science",
    name: "Data Science",
    description:
      "End-to-end data science workflow: exploratory analysis, statistical modeling, feature engineering, and storytelling with data.",
    category: "technical",
    tools: ["Python", "R", "SQL", "Git", "Scikit-Learn", "Seaborn"],
    skills: ["Data Pipeline Engineering", "Feature Selection", "Hypothesis Testing", "Data Storytelling", "Statistical Inference"],
    whatYouWillLearn: [
      "Rigorous statistical methods: ANOVA, regression modeling, probability distributions.",
      "Advanced feature engineering and dimensionality reduction.",
      "Building end-to-end automated data processing pipelines.",
      "Communicating quantitative findings to executive stakeholders through storytelling."
    ],
    projectExposure: "Perform end-to-end exploratory analysis and predictive modeling on a 1M+ row industry dataset.",
    careerOpportunities: ["Data Scientist", "Associate Data Scientist", "Quantitative Analyst", "Research Analyst"],
    suitableFor: "Quantitative thinkers, math/stats/CS undergraduates, and analytical problem solvers."
  },
  {
    id: "full-stack-web-development",
    name: "Full Stack Web Development",
    description:
      "Master both frontend (React, Next.js) and backend (Node.js, databases) to build and deploy complete web applications from scratch.",
    category: "technical",
    tools: ["React", "Next.js", "Node.js", "Express", "TypeScript", "PostgreSQL", "MongoDB", "Tailwind CSS"],
    skills: ["Frontend Architecture", "REST & GraphQL APIs", "Database Design", "Authentication & Security", "CI/CD & Cloud Deployment"],
    whatYouWillLearn: [
      "Modern TypeScript development across client and server.",
      "Building high-performance React user interfaces with Next.js App Router.",
      "Architecting RESTful APIs and microservices using Node.js and Express.",
      "Relational (PostgreSQL) and Non-Relational (MongoDB) database schema design."
    ],
    projectExposure: "Build and deploy a full-featured SaaS web application complete with auth, payment gateway, and dynamic dashboard.",
    careerOpportunities: ["Full Stack Developer", "Frontend Engineer", "Backend Engineer", "Web Application Developer"],
    suitableFor: "Aspiring software engineers who want complete end-to-end web product creation capability."
  },
  {
    id: "iot",
    name: "IoT (Internet of Things)",
    description:
      "Connect the physical and digital worlds — program microcontrollers, build sensor networks, and architect cloud-connected IoT solutions.",
    category: "technical",
    tools: ["Arduino", "Raspberry Pi", "ESP32", "MQTT", "Node-RED", "AWS IoT Core", "C/C++"],
    skills: ["Embedded C/C++", "Sensor Interfacing", "MQTT & HTTP Protocols", "Edge Computing", "Cloud IoT Integration"],
    whatYouWillLearn: [
      "Interfacing microcontrollers with environmental sensors and actuators.",
      "Lightweight communication protocols: MQTT, CoAP, and WebSockets.",
      "Configuring AWS IoT Core / Azure IoT Hub for remote telemetry and device shadow management.",
      "Building edge computing nodes on Raspberry Pi."
    ],
    projectExposure: "Design a smart home automation & environmental monitoring system linked to a cloud dashboard.",
    careerOpportunities: ["IoT Engineer", "Embedded Systems Developer", "Smart Systems Architect", "Hardware-Software Integrator"],
    suitableFor: "ECE, EEE, CS, and Mechatronics students passionate about connected hardware and smart devices."
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    description:
      "Design intuitive digital experiences — from user research and wireframing in Figma to interaction design and usability testing.",
    category: "technical",
    tools: ["Figma", "Adobe XD", "Miro", "Protopie", "UsabilityHub"],
    skills: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing", "Micro-Interactions"],
    whatYouWillLearn: [
      "Conducting user interviews, persona creation, and empathy mapping.",
      "Information architecture, user journey flows, and low-fidelity wireframing.",
      "High-fidelity visual design, typography grids, and color theory in Figma.",
      "Building scalable Figma Design Systems and interactive micro-animations."
    ],
    projectExposure: "Design a high-fidelity mobile application redesign including full user testing reports and interactive prototype.",
    careerOpportunities: ["UI/UX Designer", "Product Designer", "User Researcher", "Interaction Designer"],
    suitableFor: "Creative thinkers, visual enthusiasts, and tech students who want to focus on product experience."
  },
  {
    id: "vlsi",
    name: "VLSI (Very Large Scale Integration)",
    description:
      "Design and verify integrated circuits at the transistor level using Verilog/VHDL, synthesis tools, and industry-standard EDA workflows.",
    category: "technical",
    tools: ["Verilog HDL", "VHDL", "Cadence Virtuoso", "Synopsys Design Compiler", "Xilinx Vivado"],
    skills: ["RTL Coding", "Digital Circuit Design", "FPGA Prototyping", "Functional Verification", "Static Timing Analysis"],
    whatYouWillLearn: [
      "Combinational and sequential logic circuit design using Verilog HDL.",
      "FPGA implementation workflow: Synthesis, Place & Route, and timing closure.",
      "CMOS digital IC fundamentals, layout rules, and parasitic extraction.",
      "Design for Testability (DFT) and verification testbench writing."
    ],
    projectExposure: "Write Verilog RTL for a 32-bit RISC processor core, verify via testbench, and perform FPGA synthesis.",
    careerOpportunities: ["VLSI Design Engineer", "RTL Verification Engineer", "FPGA Engineer", "ASIC Design Analyst"],
    suitableFor: "Electronics & Communication Engineering (ECE) and Electrical Engineering undergraduates."
  },
  {
    id: "embedded-systems",
    name: "Embedded Systems",
    description:
      "Program resource-constrained hardware — real-time operating systems, peripheral interfacing, firmware development, and system-on-chip design.",
    category: "technical",
    tools: ["Embedded C", "STM32", "FreeRTOS", "Keil uVision", "Logic Analyzers", "I2C/SPI/UART"],
    skills: ["Firmware Engineering", "RTOS Task Scheduling", "Peripheral Drivers (I2C, SPI, UART)", "Hardware Debugging", "Low Power Optimization"],
    whatYouWillLearn: [
      "Writing bare-metal drivers in Embedded C for ARM Cortex-M microcontrollers.",
      "Hardware communication protocols: UART, SPI, I2C, and CAN bus.",
      "Real-Time Operating Systems (FreeRTOS): Tasks, Semaphores, Mutexes, Queues.",
      "Power management and interrupt handling routines."
    ],
    projectExposure: "Develop a FreeRTOS-based multi-threaded firmware package for an industrial telemetry controller.",
    careerOpportunities: ["Embedded Firmware Engineer", "RTOS Developer", "Hardware Interface Engineer", "Automotive Software Developer"],
    suitableFor: "Electronics, Computer Engineering, and Mechatronics students who love low-level hardware programming."
  },
  {
    id: "devops",
    name: "DevOps",
    description:
      "Automate the software lifecycle with CI/CD pipelines, Docker, Kubernetes, infrastructure-as-code, and monitoring at scale.",
    category: "technical",
    tools: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Ansible", "Prometheus"],
    skills: ["CI/CD Automation", "Containerization", "Orchestration", "Infrastructure as Code", "Site Reliability Engineering"],
    whatYouWillLearn: [
      "Containerizing applications with multi-stage Dockerfiles.",
      "Building automated CI/CD build & deployment pipelines in GitHub Actions and Jenkins.",
      "Orchestrating containerized workloads using Kubernetes clusters.",
      "Provisioning cloud infrastructure declaratively using Terraform."
    ],
    projectExposure: "Build a complete GitOps CI/CD pipeline deploying a microservice architecture to a Kubernetes cluster.",
    careerOpportunities: ["DevOps Engineer", "Site Reliability Engineer (SRE)", "Cloud Automation Specialist", "Build & Release Engineer"],
    suitableFor: "CS/IT students and developers interested in cloud automation, infrastructure, and reliable deployment."
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    description:
      "Architect and deploy on AWS, Azure, or GCP — covering compute, storage, networking, serverless, and cloud-native design patterns.",
    category: "technical",
    tools: ["AWS (EC2, S3, Lambda, RDS)", "Microsoft Azure", "CloudFormation", "IAM", "VPC Networking"],
    skills: ["Cloud Architecture", "Serverless Computing", "VPC & Security Group Design", "Cost Optimization", "High Availability"],
    whatYouWillLearn: [
      "Core cloud computing models (IaaS, PaaS, SaaS) and multi-cloud strategies.",
      "Architecting secure Virtual Private Clouds (VPC), subnets, and routing tables.",
      "Deploying event-driven serverless functions with AWS Lambda and API Gateway.",
      "Configuring Auto-Scaling Groups and Application Load Balancers."
    ],
    projectExposure: "Design and deploy a fault-tolerant, auto-scaling cloud infrastructure on AWS for high-traffic web applications.",
    careerOpportunities: ["Cloud Engineer", "AWS Solutions Architect", "Cloud Operations Engineer", "Infrastructure Specialist"],
    suitableFor: "Engineering undergraduates wanting to specialize in enterprise cloud architecture."
  },
  {
    id: "cyber-security",
    name: "Cyber Security",
    description:
      "Defend systems against real threats — penetration testing, vulnerability assessment, network security, and incident response protocols.",
    category: "technical",
    tools: ["Kali Linux", "Wireshark", "Metasploit", "Nmap", "Burp Suite", "Snort"],
    skills: ["Ethical Hacking", "Vulnerability Assessment", "Network Traffic Analysis", "Web Security (OWASP Top 10)", "Incident Response"],
    whatYouWillLearn: [
      "Conducting reconnaissance, port scanning, and vulnerability discovery.",
      "Web application penetration testing and exploiting OWASP Top 10 vulnerabilities.",
      "Analyzing malicious network traffic packets using Wireshark.",
      "Configuring intrusion detection systems (IDS) and security hardening."
    ],
    projectExposure: "Perform a comprehensive penetration test on a mock enterprise web network and author a professional audit report.",
    careerOpportunities: ["Cyber Security Analyst", "Ethical Hacker / Pen Tester", "SOC Analyst", "Security Engineer"],
    suitableFor: "Computer Science, IT, and Networking students passionate about security defense and ethical hacking."
  },
  {
    id: "medical-coding",
    name: "Medical Coding",
    description:
      "Translate clinical diagnoses and procedures into standardized codes (ICD-10, CPT, HCPCS) for healthcare billing and compliance.",
    category: "technical",
    tools: ["ICD-10-CM Manuals", "CPT Coding Software", "HCPCS Level II", "EHR Systems", "EncoderPro"],
    skills: ["Medical Terminology", "ICD-10 Diagnostic Coding", "CPT Procedural Coding", "Healthcare Compliance", "Audit Preparation"],
    whatYouWillLearn: [
      "Human anatomy, physiology, and medical terminology for coders.",
      "Rules and guidelines for assigning ICD-10-CM diagnosis codes.",
      "CPT code assignment for outpatient procedures, evaluation, and management.",
      "HIPAA compliance, fraud prevention, and medical billing workflows."
    ],
    projectExposure: "Review and code 50+ real-world anonymized patient charts across various surgical and clinical specialties.",
    careerOpportunities: ["Medical Coder", "Certified Professional Coder (CPC)", "Health Information Analyst", "Billing Specialist"],
    suitableFor: "Life Sciences, Pharmacy, Biotechnology, and Allied Health Sciences students seeking healthcare IT careers."
  }
];

export const nonTechnicalCourses: Course[] = [
  {
    id: "autocad",
    name: "AutoCAD",
    description:
      "Create precise 2D and 3D technical drawings for engineering, architecture, and manufacturing using industry-standard CAD software.",
    category: "non-technical",
    tools: ["AutoCAD 2D/3D", "Autodesk Design Suite", "DWG FastView"],
    skills: ["2D Drafting & Layouts", "3D Isometric Modeling", "Geometric Dimensioning", "BOM Creation", "Plotting & Printing"],
    whatYouWillLearn: [
      "Mastering precision drawing commands, layers, blocks, and dynamic attributes.",
      "Creating architectural floor plans, elevations, and structural detail drawings.",
      "3D solid modeling, surface creation, and photorealistic rendering basics.",
      "Generating bill of materials (BOM) and mechanical assembly layouts."
    ],
    projectExposure: "Draft complete multi-sheet 2D/3D architectural & mechanical working drawings according to ISO standards.",
    careerOpportunities: ["CAD Designer", "Draftsman", "Mechanical CAD Specialist", "Architectural Assistant"],
    suitableFor: "Civil, Mechanical, Architectural, and Interior Design students."
  },
  {
    id: "construction-planning",
    name: "Construction Planning",
    description:
      "Plan and manage construction projects end-to-end — scheduling, resource allocation, cost estimation, and site safety compliance.",
    category: "non-technical",
    tools: ["Primavera P6", "MS Project", "AutoCAD", "Excel Estimation Sheets"],
    skills: ["Project Scheduling (CPM)", "Cost Estimation", "Resource Levelling", "Site Safety Management", "Contract Administration"],
    whatYouWillLearn: [
      "Developing Work Breakdown Structures (WBS) and Critical Path Method (CPM) schedules.",
      "Estimating quantities (BOQ), labor costs, and material requirements.",
      "Managing construction risk, site safety protocols (OSHA), and environmental compliance.",
      "Progress tracking using Earned Value Management (EVM)."
    ],
    projectExposure: "Develop a complete Primavera P6 schedule and cost baseline for a multi-story commercial building project.",
    careerOpportunities: ["Construction Planning Engineer", "Project Scheduler", "Cost Estimator", "Site Operations Manager"],
    suitableFor: "Civil Engineering and Construction Management students."
  },
  {
    id: "finance",
    name: "Finance",
    description:
      "Understand corporate finance, financial modeling, valuation techniques, and investment analysis for data-driven business decisions.",
    category: "non-technical",
    tools: ["Advanced Excel", "Financial Models", "Power BI", "Bloomberg Terminal Basics"],
    skills: ["Financial Statement Analysis", "DCF Valuation", "Capital Budgeting", "Corporate Risk Management", "Financial Ratio Analysis"],
    whatYouWillLearn: [
      "Analyzing Income Statements, Balance Sheets, and Cash Flow Statements.",
      "Building 3-statement financial forecasting models in Excel.",
      "Valuation methodologies: Discounted Cash Flow (DCF), Comps, and Precedent Transactions.",
      "Evaluating capital budgeting decisions (NPV, IRR, Payback Period)."
    ],
    projectExposure: "Construct a 3-statement financial forecast and DCF valuation model for a publicly listed technology company.",
    careerOpportunities: ["Financial Analyst", "Corporate Finance Associate", "Investment Research Analyst", "Credit Analyst"],
    suitableFor: "BBA, Commerce, MBA, and Finance enthusiasts seeking analyst roles."
  },
  {
    id: "biotechnology",
    name: "Biotechnology",
    description:
      "Explore bioprocessing, genetic modification, pharmaceutical development, and the commercial applications of biological systems.",
    category: "non-technical",
    tools: ["NCBI Blast", "SnapGene", "PyMOL", "Bioreactor Simulation Tools"],
    skills: ["Bioprocess Engineering", "Fermentation Technology", "Downstream Processing", "Quality Assurance (QA/QC)", "GLP & GMP Standards"],
    whatYouWillLearn: [
      "Industrial fermentation scale-up and microbial cultivation strategies.",
      "Upstream and downstream bioprocess purification techniques.",
      "Regulatory affairs, Good Manufacturing Practices (GMP), and FDA guidelines.",
      "Bioinformatics tools for protein visualization and gene sequence analysis."
    ],
    projectExposure: "Design a bio-reactor fermentation scale-up protocol for therapeutic protein production.",
    careerOpportunities: ["Biotech Research Associate", "QA/QC Executive", "Bioprocess Engineer", "Regulatory Affairs Analyst"],
    suitableFor: "Biotechnology, Biochemistry, and Life Sciences undergraduates."
  },
  {
    id: "genetic-engineering",
    name: "Genetic Engineering",
    description:
      "Study gene editing techniques (CRISPR-Cas9), recombinant DNA technology, cloning strategies, and bioethics in modern genomics.",
    category: "non-technical",
    tools: ["CRISPR Design Tools (Benchling)", "Primer3", "SnapGene", "Gel Analyzer"],
    skills: ["CRISPR gRNA Design", "Recombinant DNA Techniques", "PCR & Gel Electrophoresis", "Cloning Vector Selection", "Bioethics & Safety"],
    whatYouWillLearn: [
      "Recombinant DNA technology: restriction enzymes, ligases, and plasmid vectors.",
      "Designing CRISPR-Cas9 single guide RNAs (sgRNAs) for target gene knockouts.",
      "Gene expression analysis techniques (RT-qPCR, Western Blotting).",
      "Biosafety levels, containment, and ethical considerations in genetic modification."
    ],
    projectExposure: "Design a targeted CRISPR-Cas9 knockout strategy for a specific disease gene using Benchling tools.",
    careerOpportunities: ["Geneticist / Research Analyst", "Molecular Biology Technician", "Genomics Specialist", "Bio-R&D Associate"],
    suitableFor: "Genomics, Molecular Biology, Genetics, and Bio-Engineering students."
  },
  {
    id: "human-resources",
    name: "Human Resources",
    description:
      "Master talent acquisition, performance management, employee engagement, HR analytics, and labor law fundamentals.",
    category: "non-technical",
    tools: ["Workday", "BambooHR", "LinkedIn Recruiter", "HR Analytics in Excel"],
    skills: ["Talent Acquisition", "HR Analytics", "Performance Appraisal Systems", "Employee Engagement", "Labor Law Compliance"],
    whatYouWillLearn: [
      "End-to-end recruitment lifecycle: sourcing, screening, interviewing, and offer negotiation.",
      "Designing competitive Compensation & Benefits (Comp & Ben) packages.",
      "Utilizing HR metrics (Attrition Rate, Time-to-Hire, Cost-per-Hire) to optimize strategy.",
      "Indian Labor Laws, POSH compliance, and industrial relations."
    ],
    projectExposure: "Formulate a comprehensive Talent Acquisition & Employee Retention Strategy for a growing tech startup.",
    careerOpportunities: ["HR Executive / Generalist", "Talent Acquisition Specialist", "HR Analyst", "People Operations Associate"],
    suitableFor: "BBA, MBA, Psychology, and Management students pursuing HR careers."
  },
  {
    id: "stock-marketing",
    name: "Stock Marketing",
    description:
      "Analyze equity markets, read candlestick charts, develop trading strategies, and understand portfolio diversification principles.",
    category: "non-technical",
    tools: ["TradingView", "Zerodha Streak", "Excel Option Chain", "Moneycontrol"],
    skills: ["Technical Analysis", "Fundamental Analysis", "Risk Management & Position Sizing", "Options Strategies", "Portfolio Management"],
    whatYouWillLearn: [
      "Reading candlestick patterns, support/resistance levels, and technical indicators (RSI, MACD).",
      "Fundamental evaluation: P/E ratios, EPS, debt metrics, and annual report analysis.",
      "Risk management principles, stop-loss strategy, and risk-reward ratios.",
      "Derivative trading basics: Call/Put options, hedging, and spread strategies."
    ],
    projectExposure: "Construct a diversified mock stock portfolio, execute trade journal tracking, and present a risk analysis report.",
    careerOpportunities: ["Equity Research Associate", "Stock Trader / Analyst", "Portfolio Assistant", "Wealth Advisory Associate"],
    suitableFor: "Students interested in financial markets, stock trading, and personal wealth management."
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description:
      "Run high-ROI campaigns across SEO, SEM, social media, content marketing, and email — with real analytics and A/B testing.",
    category: "non-technical",
    tools: ["Google Ads", "Meta Ads Manager", "SEMrush", "Google Analytics 4", "Mailchimp", "Canva"],
    skills: ["Search Engine Optimization (SEO)", "Pay-Per-Click (PPC) Advertising", "Social Media Marketing", "Content Strategy", "Performance Analytics"],
    whatYouWillLearn: [
      "On-page, Off-page, and Technical SEO audit strategies.",
      "Building and optimizing Google Search & Meta ad campaigns for maximum ROI.",
      "Content strategy creation, copycrafting, and social media scheduling.",
      "Tracking conversion funnels and user acquisition in Google Analytics 4."
    ],
    projectExposure: "Plan and launch an integrated multi-channel digital marketing campaign with a live performance budget allocation.",
    careerOpportunities: ["Digital Marketing Executive", "SEO Specialist", "Performance Marketer", "Social Media Manager"],
    suitableFor: "Creative communicators, business students, and marketing aspirants wanting real performance marketing skills."
  },
  {
    id: "psychology-workshop",
    name: "Psychology Workshop",
    description:
      "Applied psychology for professional settings — cognitive biases, behavioral design, workplace dynamics, and communication psychology.",
    category: "non-technical",
    tools: ["Psychometric Assessment Instruments", "Behavioral Mapping Worksheets", "Case Study Frameworks"],
    skills: ["Behavioral Analysis", "Conflict Resolution", "Cognitive Bias Identification", "Empathy-Driven Communication", "Workplace Dynamics"],
    whatYouWillLearn: [
      "Understanding core cognitive biases that influence consumer and workplace decisions.",
      "Applied social psychology: influence strategies, persuasion, and negotiation dynamics.",
      "Emotional Intelligence (EQ) enhancement and stress resilience techniques.",
      "Behavioral design principles in UX and organizational behavior."
    ],
    projectExposure: "Conduct an organizational behavior case study and propose a behavioral intervention framework for team productivity.",
    careerOpportunities: ["Corporate Trainer Assistant", "Behavioral Analyst Associate", "Counseling Assistant", "User Behavior Researcher"],
    suitableFor: "Psychology students, HR enthusiasts, and professionals seeking workplace communication excellence."
  }
];

export const allCourses: Course[] = [...technicalCourses, ...nonTechnicalCourses];
