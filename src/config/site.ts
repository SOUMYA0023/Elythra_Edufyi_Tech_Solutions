export interface BranchAddress {
  id: string;
  name: string;
  line1: string;
  line2: string;
  line3: string;
  area: string;
  cityStateZip: string;
  formatted: string;
}

export const siteConfig = {
  name: "Elythra Edufyi Tech Solutions",
  shortName: "Elythra Edufyi",
  tagline: "Learn Skills. Build Projects. Get Placed.",
  description:
    "Premium technical and non-technical skill courses with real internship experience and placement assistance. Built for students who want real skills and real career outcomes.",
  url: "https://elythraedufyi.com",
  
  // WhatsApp Configuration
  whatsapp: {
    number: "916362209993",
    displayNumber: "+91 6362209993",
    defaultMessage: "Hi, I would like to know more about Elythra Edufyi Tech Solutions courses and internship programs.",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
    },
    getCustomLink(message: string) {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(message)}`;
    }
  },

  // Contact Info & Working Hours
  contact: {
    email: "info@edufyitechsolutions.com",
    phone: "+91 6362209993",
    workingHours: "11:00 AM – 9:00 PM IST"
  },

  // Three Official Branch Locations
  branches: [
    {
      id: "branch-1",
      name: "Branch 1 (HSR Layout, Bangalore)",
      line1: "Third Floor, Seven Hills,",
      line2: "#424, Tenth Cross Street,",
      line3: "27th Main Road, Sector 1,",
      area: "HSR Layout,",
      cityStateZip: "Bangalore, Karnataka 560102",
      formatted: "Third Floor, Seven Hills, #424, Tenth Cross Street, 27th Main Road, Sector 1, HSR Layout, Bangalore, Karnataka 560102"
    },
    {
      id: "branch-2",
      name: "Branch 2 (HSR Layout, Bangalore)",
      line1: "Fourth Floor,",
      line2: "Near Baskin Robbins,",
      line3: "Tenth Cross Street, 27th Main Road, Sector 1,",
      area: "HSR Layout,",
      cityStateZip: "Bangalore, Karnataka 560102",
      formatted: "Fourth Floor, Near Baskin Robbins, Tenth Cross Street, 27th Main Road, Sector 1, HSR Layout, Bangalore, Karnataka 560102"
    },
    {
      id: "branch-3",
      name: "Branch 3 (Ernakulam, Kerala)",
      line1: "Liju Mahal, ARA 10,",
      line2: "Building No. 41/2053 A, First Floor,",
      line3: "Village Office Road,",
      area: "Ernakulam,",
      cityStateZip: "Kerala 682028",
      formatted: "Liju Mahal, ARA 10, Building No. 41/2053 A, First Floor, Village Office Road, Ernakulam, Kerala 682028"
    }
  ] as BranchAddress[],

  // Application Google Form
  googleFormUrl: "https://forms.gle/RuHQHcq5ZwtvDUgR8",

  // Social Links Configuration
  social: {
    instagram: {
      name: "EDUFYI TECH SOLUTIONS",
      url: "https://www.instagram.com/edufyi_tech_solutions",
      handle: "@edufyi_tech_solutions"
    },
    linkedin: {
      name: "EDUFYI TECH SOLUTIONS",
      url: "https://www.linkedin.com/company/edufyi-tech-solutions",
      handle: "Elythra Edufyi Tech Solutions"
    },
    facebook: {
      name: "EDUFYI TECH SOLUTIONS",
      url: "https://www.facebook.com/edufyitechsolutions",
      handle: "Edufyi Tech Solutions"
    },
    twitter: {
      name: "EDUFYI TECH SOLUTIONS",
      url: "https://x.com/edufyi_tech",
      handle: "@edufyi_tech"
    }
  }
};
