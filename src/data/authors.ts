export interface Author {
  slug: string;
  name: string;
  credentials: string;       // e.g. "CFP, MBA"
  jobTitle: string;
  bio: string;
  shortBio: string;
  avatar?: string;           // path in /public/authors/ — add headshot later
  linkedin?: string;
  expertise: string[];
  reviewedPages: { title: string; url: string }[];
}

export const AUTHORS: Author[] = [
  {
    slug: 'aisha-rahman',
    name: 'Aisha Rahman',
    credentials: 'CFP®, MBA',
    jobTitle: 'Certified Financial Planner',
    bio: 'Aisha Rahman is a Certified Financial Planner with over 12 years of experience in personal finance, mortgage advisory, and retirement planning. She has helped thousands of clients navigate home-buying decisions, debt management, and long-term wealth building. Aisha reviews all mortgage, loan, and compound interest content on Calctube to ensure mathematical accuracy and practical relevance.',
    shortBio: 'CFP® with 12+ years in mortgage & retirement planning.',
    linkedin: 'https://www.linkedin.com/in/aisha-rahman-cfp',
    expertise: [
      'Mortgage & home financing',
      'Retirement planning',
      'Compound interest & investing',
      'Debt repayment strategies',
    ],
    reviewedPages: [
      { title: 'Mortgage Calculator', url: '/finance/mortgage-calculator/' },
      { title: 'Compound Interest Calculator', url: '/finance/compound-interest-calculator/' },
      { title: 'Loan Calculator', url: '/finance/loan-calculator/' },
      { title: 'EMI Calculator', url: '/finance/emi-calculator/' },
      { title: 'Retirement Calculator', url: '/finance/retirement-calculator/' },
      { title: 'Inflation Calculator', url: '/finance/inflation-calculator/' },
      { title: 'Net Worth Calculator', url: '/finance/net-worth-calculator/' },
    ],
  },
  {
    slug: 'calctube-editorial',
    name: 'Calctube Editorial Team',
    credentials: '',
    jobTitle: 'Editorial & Accuracy Team',
    bio: 'The Calctube editorial team is a group of mathematicians, engineers, and financial literacy advocates dedicated to building the most accurate and user-friendly calculators on the web. Every formula is independently verified against industry-standard references and cross-checked with authoritative sources.',
    shortBio: 'Verified formulas, peer-checked accuracy.',
    expertise: [
      'Mathematical accuracy',
      'Financial formulas',
      'Unit conversions',
      'Health & fitness metrics',
    ],
    reviewedPages: [],
  },
];

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}
