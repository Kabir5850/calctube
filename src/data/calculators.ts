/**
 * Master list of all calculators on Calctube.
 * Single source of truth — used by homepage, search, sitemap, and category pages.
 *
 * When you add a new calculator:
 *  1. Add an entry here
 *  2. Create the .astro page at the matching `slug`
 *  3. The homepage, search, and category pages will auto-update
 */

export type CalcCategory = 'finance' | 'health' | 'math' | 'conversion' | 'date-time' | 'construction' | 'auto';

export interface Calculator {
  slug: string;
  href: string;
  name: string;
  description: string;
  category: CalcCategory;
  keywords: string[];
  icon: string;        // emoji or short label
  popular?: boolean;   // shown in "Popular" section
  trending?: boolean;  // shown in "Trending" section
  status: 'live' | 'coming-soon';
}

export const categoryMeta: Record<CalcCategory, { label: string; href: string; color: string; icon: string; description: string }> = {
  finance: {
    label: 'Finance',
    href: '/finance/',
    color: 'emerald',
    icon: '💰',
    description: 'Mortgage, loan, tax, salary, EMI, SIP, and investment calculators.',
  },
  health: {
    label: 'Health',
    href: '/health/',
    color: 'rose',
    icon: '❤️',
    description: 'BMI, calorie, body fat, pregnancy, and fitness tools.',
  },
  math: {
    label: 'Math',
    href: '/math/',
    color: 'violet',
    icon: '🧮',
    description: 'Percentage, fraction, scientific, statistics, and probability.',
  },
  conversion: {
    label: 'Conversions',
    href: '/conversions/',
    color: 'amber',
    icon: '🔄',
    description: 'Units, currency, temperature, time zone, length, and weight.',
  },
  'date-time': {
    label: 'Date & Time',
    href: '/date-time/',
    color: 'sky',
    icon: '📅',
    description: 'Age, date difference, business days, countdown, and time card.',
  },
  construction: {
    label: 'Construction',
    href: '/construction/',
    color: 'orange',
    icon: '🔨',
    description: 'Concrete, paint, tile, roofing, wallpaper, and material estimators.',
  },
  auto: {
    label: 'Auto',
    href: '/auto/',
    color: 'slate',
    icon: '🚗',
    description: 'Car loan, lease vs buy, fuel cost, and mileage.',
  },
};

export const calculators: Calculator[] = [
  // FINANCE
  {
    slug: 'mortgage-calculator',
    href: '/finance/mortgage-calculator/',
    name: 'Mortgage Calculator',
    description: 'Monthly payment, total interest, and full amortization schedule.',
    category: 'finance',
    keywords: ['mortgage', 'home loan', 'monthly payment', 'amortization'],
    icon: '🏠',
    popular: true,
    trending: true,
    status: 'live',
  },
  {
    slug: 'loan-calculator',
    href: '/finance/loan-calculator/',
    name: 'Loan Calculator',
    description: 'Personal, auto, or any-purpose loan payment estimator.',
    category: 'finance',
    keywords: ['loan', 'personal loan', 'payment'],
    icon: '💵',
    popular: true,
    status: 'live',
  },
  {
    slug: 'emi-calculator',
    href: '/finance/emi-calculator/',
    name: 'EMI Calculator',
    description: 'Indian-style equated monthly installment for any loan.',
    category: 'finance',
    keywords: ['emi', 'home loan emi', 'india'],
    icon: '🇮🇳',
    popular: true,
    status: 'live',
  },
  {
    slug: 'sip-calculator',
    href: '/finance/sip-calculator/',
    name: 'SIP Calculator',
    description: 'Mutual fund SIP returns calculator with goal planning.',
    category: 'finance',
    keywords: ['sip', 'mutual fund', 'investment'],
    icon: '📈',
    popular: true,
    trending: true,
    status: 'live',
  },
  {
    slug: 'compound-interest-calculator',
    href: '/finance/compound-interest-calculator/',
    name: 'Compound Interest',
    description: 'See how your savings grow over time with compounding.',
    category: 'finance',
    keywords: ['compound interest', 'savings', 'investment growth'],
    icon: '💹',
    popular: true,
    status: 'live',
  },
  {
    slug: 'salary-calculator',
    href: '/finance/salary-calculator/',
    name: 'Salary Calculator',
    description: 'Gross-to-net salary, taxes, and take-home pay.',
    category: 'finance',
    keywords: ['salary', 'paycheck', 'take home pay'],
    icon: '💼',
    status: 'coming-soon',
  },
  {
    slug: 'tax-calculator-usa',
    href: '/finance/tax-calculator-usa/',
    name: 'US Tax Calculator',
    description: 'Federal + state income tax estimator for 2026.',
    category: 'finance',
    keywords: ['tax', 'income tax', 'usa', 'irs'],
    icon: '🇺🇸',
    status: 'coming-soon',
  },
  {
    slug: 'income-tax-india',
    href: '/finance/income-tax-india/',
    name: 'Income Tax India',
    description: 'Old vs New regime with state Professional Tax & HRA — all 16 states.',
    category: 'finance',
    keywords: ['income tax calculator india', 'old vs new tax regime', 'professional tax', 'hra exemption'],
    icon: '🪙',
    popular: true,
    trending: true,
    status: 'live',
  },
  {
    slug: 'tip-calculator',
    href: '/math/tip-calculator/',
    name: 'Tip Calculator',
    description: 'Split bills and calculate tips for any party size.',
    category: 'math',
    keywords: ['tip', 'bill split', 'restaurant'],
    icon: '🍽️',
    status: 'live',
  },

  // HEALTH
  {
    slug: 'bmi-calculator',
    href: '/health/bmi-calculator/',
    name: 'BMI Calculator',
    description: 'Body Mass Index with metric and imperial units.',
    category: 'health',
    keywords: ['bmi', 'body mass index', 'weight'],
    icon: '⚖️',
    popular: true,
    status: 'live',
  },
  {
    slug: 'fd-calculator',
    href: '/finance/fd-calculator/',
    name: 'FD Calculator',
    description: 'Fixed deposit maturity and interest by bank in India.',
    category: 'finance',
    keywords: ['fd', 'fixed deposit', 'india', 'maturity'],
    icon: '🏦',
    status: 'live',
  },
  {
    slug: 'ppf-calculator',
    href: '/finance/ppf-calculator/',
    name: 'PPF Calculator',
    description: 'Public Provident Fund maturity over 15 years.',
    category: 'finance',
    keywords: ['ppf', 'public provident fund', 'india'],
    icon: '🇮🇳',
    status: 'live',
  },
  {
    slug: 'rd-calculator',
    href: '/finance/rd-calculator/',
    name: 'RD Calculator',
    description: 'Recurring deposit maturity calculator for Indian banks.',
    category: 'finance',
    keywords: ['rd', 'recurring deposit', 'india'],
    icon: '📦',
    status: 'live',
  },
  {
    slug: 'hra-calculator',
    href: '/finance/hra-calculator/',
    name: 'HRA Calculator',
    description: 'House Rent Allowance exemption for Indian income tax.',
    category: 'finance',
    keywords: ['hra', 'house rent allowance', 'india tax'],
    icon: '🏘️',
    status: 'live',
  },
  {
    slug: 'gst-calculator',
    href: '/finance/gst-calculator/',
    name: 'GST Calculator',
    description: 'India GST inclusive/exclusive amount and rate finder.',
    category: 'finance',
    keywords: ['gst', 'india gst', 'tax'],
    icon: '🧾',
    status: 'live',
  },
  {
    slug: 'tdee-calculator',
    href: '/health/tdee-calculator/',
    name: 'TDEE Calculator',
    description: 'Daily calorie burn based on activity level.',
    category: 'health',
    keywords: ['tdee', 'bmr', 'calorie burn'],
    icon: '🔥',
    popular: true,
    status: 'live',
  },
  {
    slug: 'bmr-calculator',
    href: '/health/bmr-calculator/',
    name: 'BMR Calculator',
    description: 'Basal Metabolic Rate using the Mifflin-St Jeor equation.',
    category: 'health',
    keywords: ['bmr', 'basal metabolic rate', 'metabolism'],
    icon: '🫀',
    status: 'live',
  },
  {
    slug: 'body-fat-calculator',
    href: '/health/body-fat-calculator/',
    name: 'Body Fat %',
    description: 'Estimate body fat percentage from measurements.',
    category: 'health',
    keywords: ['body fat', 'fitness'],
    icon: '💪',
    status: 'coming-soon',
  },
  {
    slug: 'pregnancy-calculator',
    href: '/health/pregnancy-calculator/',
    name: 'Pregnancy Due Date',
    description: 'Estimate your due date and pregnancy milestones.',
    category: 'health',
    keywords: ['pregnancy', 'due date', 'baby'],
    icon: '🤰',
    status: 'coming-soon',
  },
  {
    slug: 'calorie-calculator',
    href: '/health/calorie-calculator/',
    name: 'Calorie Calculator',
    description: 'Daily calories for weight loss, maintenance, or gain.',
    category: 'health',
    keywords: ['calorie need', 'weight loss', 'macros'],
    icon: '🍎',
    trending: true,
    popular: true,
    status: 'live',
  },

  // MATH
  {
    slug: 'discount-calculator',
    href: '/math/discount-calculator/',
    name: 'Discount Calculator',
    description: 'Sale price from % off, discount %, or reverse to original price.',
    category: 'math',
    keywords: ['discount', 'sale price', 'percent off'],
    icon: '🏷️',
    status: 'live',
  },
  {
    slug: 'percentage-calculator',
    href: '/math/percentage-calculator/',
    name: 'Percentage Calculator',
    description: 'What is X% of Y, percentage change, increase/decrease.',
    category: 'math',
    keywords: ['percentage', 'percent', 'percent change'],
    icon: '％',
    popular: true,
    status: 'live',
  },
  {
    slug: 'fraction-calculator',
    href: '/math/fraction-calculator/',
    name: 'Fraction Calculator',
    description: 'Add, subtract, multiply, divide fractions and simplify.',
    category: 'math',
    keywords: ['fraction', 'fractions', 'simplify'],
    icon: '½',
    status: 'coming-soon',
  },
  {
    slug: 'scientific-calculator',
    href: '/math/scientific-calculator/',
    name: 'Scientific Calculator',
    description: 'Full scientific calculator with trig, log, exp, and more.',
    category: 'math',
    keywords: ['scientific calculator', 'trigonometry'],
    icon: '🔬',
    status: 'coming-soon',
  },

  // CONVERSIONS
  {
    slug: 'unit-converter',
    href: '/conversions/unit-converter/',
    name: 'Unit Converter',
    description: 'Length, weight, volume, temperature, and area conversions.',
    category: 'conversion',
    keywords: ['unit converter', 'length', 'weight'],
    icon: '📏',
    status: 'coming-soon',
  },
  {
    slug: 'currency-converter-hub',
    href: '/conversions/currency/',
    name: 'Currency Converter',
    description: '240+ currency pairs with year-ago and 5-year rates.',
    category: 'conversion',
    keywords: ['currency', 'exchange rate', 'forex'],
    icon: '💱',
    popular: true,
    status: 'live',
  },
  {
    slug: 'temperature-converter',
    href: '/conversions/temperature-converter/',
    name: 'Temperature Converter',
    description: 'Celsius, Fahrenheit, Kelvin conversion.',
    category: 'conversion',
    keywords: ['celsius', 'fahrenheit', 'temperature'],
    icon: '🌡️',
    status: 'coming-soon',
  },

  // DATE & TIME
  {
    slug: 'age-calculator',
    href: '/date-time/age-calculator/',
    name: 'Age Calculator',
    description: 'Exact age in years, months, days, hours, and minutes.',
    category: 'date-time',
    keywords: ['age', 'birthday', 'date'],
    icon: '🎂',
    popular: true,
    status: 'live',
  },
  {
    slug: 'date-difference-calculator',
    href: '/date-time/date-difference-calculator/',
    name: 'Date Difference',
    description: 'Number of days between any two dates.',
    category: 'date-time',
    keywords: ['date difference', 'days between'],
    icon: '📆',
    status: 'live',
  },
  {
    slug: 'countdown-timer',
    href: '/date-time/countdown-timer/',
    name: 'Countdown Timer',
    description: 'Time until any future date or event.',
    category: 'date-time',
    keywords: ['countdown', 'timer'],
    icon: '⏳',
    status: 'coming-soon',
  },

  // CONSTRUCTION
  {
    slug: 'concrete-calculator',
    href: '/construction/concrete-calculator/',
    name: 'Concrete Calculator',
    description: 'Volume in cubic yards or meters for slabs and footings.',
    category: 'construction',
    keywords: ['concrete', 'cubic yards'],
    icon: '🧱',
    status: 'coming-soon',
  },
  {
    slug: 'paint-calculator',
    href: '/construction/paint-calculator/',
    name: 'Paint Calculator',
    description: 'Gallons of paint needed for any room.',
    category: 'construction',
    keywords: ['paint', 'gallons', 'room'],
    icon: '🎨',
    status: 'coming-soon',
  },
];

// Helper functions
export const popularCalculators = calculators.filter((c) => c.popular);
export const trendingCalculators = calculators.filter((c) => c.trending);
export const liveCalculators = calculators.filter((c) => c.status === 'live');
export const calculatorsByCategory = (category: CalcCategory) =>
  calculators.filter((c) => c.category === category);
export const totalCalculatorCount = calculators.length;
