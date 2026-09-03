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

  // Contact Info
  contact: {
    email: "info@elythraedufyi.com",
    phone: "+91 6362209993",
    address: "Tech Hub, India",
    workingHours: "Mon - Sat: 9:00 AM - 6:00 PM IST"
  },

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
      url: "https://www.facebook.com/edufyitechsolutions", // Placeholder slot, update when active
      handle: "Edufyi Tech Solutions"
    },
    twitter: {
      name: "EDUFYI TECH SOLUTIONS",
      url: "https://x.com/edufyi_tech",
      handle: "@edufyi_tech"
    }
  }
};
