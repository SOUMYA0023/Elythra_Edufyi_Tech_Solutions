export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  tagline: string;
  description: string;
  features: PricingFeature[];
  highlighted: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "self-paced",
    name: "Self-Paced",
    price: 7000,
    priceFormatted: "₹7,000",
    tagline: "Learn at your own pace",
    description:
      "Ideal for self-motivated learners who prefer flexibility. Access recorded content and self-directed materials with select live sessions.",
    features: [
      { text: "Self-directed recorded content", included: true },
      { text: "Select live sessions", included: true },
      { text: "Certificate of Participation", included: true },
      { text: "Certificate of Course Completion", included: true },
      { text: "Certificate of Internship Completion", included: true },
      { text: "Letter of Recommendation", included: false },
      { text: "Placement assistance & referrals", included: false },
    ],
    highlighted: false,
  },
  {
    id: "mentor-led",
    name: "Mentor-Led",
    price: 12000,
    priceFormatted: "₹12,000",
    tagline: "Guided by industry mentors",
    description:
      "Everything in Self-Paced, plus dedicated mentor guidance and a Letter of Recommendation to strengthen your professional profile.",
    features: [
      { text: "Everything in Self-Paced", included: true },
      { text: "Dedicated mentor sessions", included: true },
      { text: "Certificate of Participation", included: true },
      { text: "Certificate of Course Completion", included: true },
      { text: "Certificate of Internship Completion", included: true },
      { text: "Letter of Recommendation (LOR)", included: true },
      { text: "Placement assistance & referrals", included: false },
    ],
    highlighted: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: 17000,
    priceFormatted: "₹17,000",
    tagline: "Your launchpad to industry",
    description:
      "The complete package — mentorship, all certifications, LOR, and placement assistance with referrals to Elythra's partnered companies.",
    features: [
      { text: "Everything in Self-Paced & Mentor-Led", included: true },
      { text: "Intensive mentor sessions", included: true },
      { text: "Certificate of Participation", included: true },
      { text: "Certificate of Course Completion", included: true },
      { text: "Certificate of Internship Completion", included: true },
      { text: "Letter of Recommendation (LOR)", included: true },
      {
        text: "Placement assistance — referrals to partnered companies",
        included: true,
      },
    ],
    highlighted: true,
    badge: "Complete Package",
  },
];
