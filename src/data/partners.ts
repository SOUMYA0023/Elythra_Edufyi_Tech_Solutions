export interface Partner {
  id: string;
  name: string;
  category: "Technology" | "Consulting" | "Enterprise" | "Design & Engineering";
  tagline?: string;
  logo?: string;
}

export const industryPartners: Partner[] = [
  { id: "ibm", name: "IBM", category: "Technology", tagline: "Cloud & AI Innovation" },
  { id: "accenture", name: "Accenture", category: "Consulting", tagline: "Global Technology & Strategy" },
  { id: "capgemini", name: "Capgemini", category: "Consulting", tagline: "Digital Transformation" },
  { id: "hexaware", name: "Hexaware", category: "Technology", tagline: "IT Services & Solutions" },
  { id: "apple", name: "Apple", category: "Technology", tagline: "Consumer Tech & Software" },
  { id: "autodesk", name: "Autodesk", category: "Design & Engineering", tagline: "Design & Engineering Software" },
  { id: "autocad", name: "AutoCAD", category: "Design & Engineering", tagline: "CAD & Drafting Standards" },
  { id: "flipkart", name: "Flipkart", category: "Enterprise", tagline: "E-Commerce & Supply Chain" },
  { id: "deloitte", name: "Deloitte", category: "Consulting", tagline: "Audit, Advisory & Tech Consulting" },
  { id: "hcl", name: "HCL Infosystems", category: "Technology", tagline: "Infrastructure & IT Services" },
  { id: "kpmg", name: "KPMG", category: "Consulting", tagline: "Financial & Strategic Advisory" },
  { id: "tcs", name: "TCS", category: "Technology", tagline: "Global IT & Business Solutions" },
  { id: "wipro", name: "Wipro", category: "Technology", tagline: "Cloud & Cyber Security" },
  { id: "infosys", name: "Infosys", category: "Technology", tagline: "Next-Gen Digital Services" },
  { id: "tech-mahindra", name: "Tech Mahindra", category: "Technology", tagline: "Telecom & Enterprise IT" },
  { id: "cognizant", name: "Cognizant", category: "Consulting", tagline: "Digital Business Engineering" },
  { id: "oracle", name: "Oracle", category: "Technology", tagline: "Database & Cloud Infrastructure" },
  { id: "cisco", name: "Cisco", category: "Technology", tagline: "Networking & Security" },
  { id: "amazon", name: "Amazon", category: "Enterprise", tagline: "Cloud Computing & Logistics" },
  { id: "microsoft", name: "Microsoft", category: "Technology", tagline: "Software & Cloud Ecosystem" },
];
