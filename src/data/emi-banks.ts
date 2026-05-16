/**
 * Bank-specific EMI data for Indian programmatic SEO pages.
 * Each entry produces a unique page at /finance/emi-calculator/[bank-slug]/
 */

export interface BankData {
  slug: string;
  bankName: string;
  fullName: string;
  emoji: string;
  hqLocation: string;
  homeLoanRate: { min: number; max: number; typical: number };
  personalLoanRate: { min: number; max: number; typical: number };
  carLoanRate: { min: number; max: number; typical: number };
  processingFee: string;
  prepaymentPolicy: string;
  marketContext: string;
  uniqueAngle: string;          // What's unique about this bank's loans
  productHighlights: string[];   // 3-5 bullet points
  faqs: Array<{ q: string; a: string }>;
  metaKeywords: string[];
}

export const emiBanks: BankData[] = [
  // ============ HDFC ============
  {
    slug: 'hdfc',
    bankName: 'HDFC Bank',
    fullName: 'HDFC Bank Limited',
    emoji: '🏦',
    hqLocation: 'Mumbai, Maharashtra',
    homeLoanRate: { min: 8.45, max: 9.5, typical: 8.65 },
    personalLoanRate: { min: 10.5, max: 24, typical: 11.0 },
    carLoanRate: { min: 8.85, max: 13.5, typical: 9.2 },
    processingFee: '0.50% of loan amount (max ₹11,800 for home loans, ₹4,999 for personal loans)',
    prepaymentPolicy: 'Zero foreclosure charges on floating-rate home loans for individuals. 2-4% charges on fixed-rate or business loans.',
    marketContext: 'HDFC Bank (merged with HDFC Ltd in 2023) is India\'s largest private-sector lender and historically dominated the home loan market. Post-merger, the home loan book grew to over ₹7 lakh crore. Known for fast disbursal (5-7 days for pre-approved customers) and strong digital application flow.',
    uniqueAngle: 'Best-in-class digital experience and pre-approved offers for HDFC Bank salary-account holders. Often 5-10 basis points cheaper than smaller banks for repeat customers.',
    productHighlights: [
      'Home loans up to ₹10 crore with 30-year tenure',
      'Personal loans up to ₹40 lakh with same-day approval',
      'Pre-approved offers for HDFC salary account holders',
      'Step-up EMI option for early-career professionals',
      'Top-up loan facility on existing home loans',
    ],
    faqs: [
      {
        q: 'What is the minimum CIBIL score for HDFC Bank home loan?',
        a: 'HDFC Bank typically requires a CIBIL score of 720 or above for the best home loan rates. Scores between 680-720 may still qualify but at 25-50 bps higher rates. Below 680, approval becomes difficult unless co-applicant has strong credit.',
      },
      {
        q: 'How fast does HDFC Bank disburse a home loan?',
        a: 'For pre-approved HDFC Bank customers with salary account, disbursal can happen in 3-5 working days post property verification. For new customers, the full timeline (application → sanction → disbursal) typically takes 7-15 working days.',
      },
      {
        q: 'Does HDFC Bank charge prepayment penalty?',
        a: 'No. HDFC Bank waives foreclosure charges on all floating-rate home loans taken by individuals (per RBI guidelines). For fixed-rate or business-purpose loans, 2-4% prepayment charges apply.',
      },
    ],
    metaKeywords: ['hdfc emi calculator', 'hdfc home loan emi', 'hdfc bank emi', 'hdfc personal loan emi'],
  },

  // ============ SBI ============
  {
    slug: 'sbi',
    bankName: 'SBI',
    fullName: 'State Bank of India',
    emoji: '🏛️',
    hqLocation: 'Mumbai, Maharashtra',
    homeLoanRate: { min: 8.25, max: 9.4, typical: 8.5 },
    personalLoanRate: { min: 11.0, max: 14.5, typical: 11.45 },
    carLoanRate: { min: 8.75, max: 9.65, typical: 8.95 },
    processingFee: '0.35% of loan amount (min ₹2,000, max ₹10,000 for home loans)',
    prepaymentPolicy: 'Zero foreclosure on floating-rate home loans. Up to 3% on fixed-rate or NRI loans.',
    marketContext: 'SBI is India\'s largest bank and home loan lender by book size (~₹8 lakh crore home loan book). As a public-sector bank, SBI offers some of the lowest rates in the market — typically 10-25 bps cheaper than private banks. The trade-off: slower processing (10-21 days) and more documentation.',
    uniqueAngle: 'Lowest rates in the market for prime borrowers, especially via the SBI MaxGain home loan (overdraft-linked structure where parked surplus reduces interest). MaxGain is uniquely beneficial for self-employed/businesspeople with variable cash flow.',
    productHighlights: [
      'SBI Regular Home Loan: 8.25-9.4% with up to ₹10 crore loan size',
      'SBI MaxGain: overdraft-linked home loan — save interest by parking surplus',
      'SBI Privilege: subsidized rates for government employees (-25 bps)',
      'SBI Shaurya: subsidized rates for defense personnel',
      'YONO app for end-to-end digital application',
    ],
    faqs: [
      {
        q: 'What is SBI MaxGain home loan and is it worth it?',
        a: 'SBI MaxGain is an overdraft-linked home loan: you have a current account linked to the loan, and any surplus you park in it reduces the interest-charging principal daily. Excellent for businesspeople with variable cash flow. The catch: you must maintain the account actively, and there\'s an additional ~25 bps rate premium vs Regular Home Loan.',
      },
      {
        q: 'Is SBI cheaper than HDFC for home loans?',
        a: 'Typically yes — SBI is 10-25 basis points cheaper at any given LTV. The trade-offs: SBI processing is slower (10-15 days vs 5-7 for HDFC), documentation is more rigorous, and SBI doesn\'t pre-approve as aggressively. Match the bank to your urgency.',
      },
      {
        q: 'Does SBI offer EMI moratorium?',
        a: 'SBI offers an "EMI holiday" of up to 3-6 months in cases of job loss or medical emergency (subject to approval, accrued interest is capitalized). For new home buyers, SBI also offers a pre-EMI period during under-construction phase.',
      },
    ],
    metaKeywords: ['sbi emi calculator', 'sbi home loan emi', 'sbi bank emi', 'state bank of india home loan'],
  },

  // ============ ICICI ============
  {
    slug: 'icici',
    bankName: 'ICICI Bank',
    fullName: 'ICICI Bank Limited',
    emoji: '🏢',
    hqLocation: 'Mumbai, Maharashtra',
    homeLoanRate: { min: 8.6, max: 9.65, typical: 8.75 },
    personalLoanRate: { min: 10.85, max: 16.65, typical: 11.5 },
    carLoanRate: { min: 8.95, max: 13.0, typical: 9.45 },
    processingFee: '0.50-1.0% of loan amount (variable based on profile)',
    prepaymentPolicy: 'Zero foreclosure on floating-rate retail home loans (per RBI mandate). 2-4% on fixed/business loans.',
    marketContext: 'ICICI Bank is India\'s second-largest private bank with a strong digital-first positioning. Home loan book around ₹4 lakh crore. ICICI is known for aggressive pre-approved offers and innovative products like the "Saral Rural Housing Loan" for tier-2/3 markets.',
    uniqueAngle: 'Strongest pre-approval engine in India — ICICI iMobile users with salary credits often see one-tap home loan offers up to ₹50 lakh with disbursal in 24-72 hours.',
    productHighlights: [
      'Home loans up to ₹15 crore with 30-year tenure',
      'iMobile-based one-tap pre-approved offers',
      'Step-up EMI for early-career and step-down for retirees',
      'Insta home loan for high-CIBIL pre-approved customers',
      'Balance transfer with top-up facility',
    ],
    faqs: [
      {
        q: 'How does ICICI Bank InstaHome Loan work?',
        a: 'InstaHome is ICICI\'s pre-approved offer for high-CIBIL existing customers — typically delivers a sanction in 24-72 hours with minimal paperwork. Eligibility is based on existing relationship: salary credits, fixed deposits, mutual funds, or credit card spend.',
      },
      {
        q: 'ICICI vs HDFC home loan — which is better?',
        a: 'They\'re very close: ICICI averages ~10 bps higher rate but offers stronger pre-approval. HDFC has better service consistency post-disbursal. If you\'re an existing ICICI customer with iMobile, ICICI wins on speed. For first-timers, HDFC is often easier to navigate.',
      },
      {
        q: 'Can I switch from ICICI floating to fixed rate?',
        a: 'Yes. ICICI allows mid-loan conversion from floating to fixed (and vice versa) for a one-time fee of 0.5-1% of outstanding principal. Fixed rate is typically 50-100 bps higher than floating at any given time.',
      },
    ],
    metaKeywords: ['icici emi calculator', 'icici home loan emi', 'icici bank emi calculator', 'icici personal loan emi'],
  },

  // ============ AXIS ============
  {
    slug: 'axis',
    bankName: 'Axis Bank',
    fullName: 'Axis Bank Limited',
    emoji: '🏪',
    hqLocation: 'Mumbai, Maharashtra',
    homeLoanRate: { min: 8.75, max: 9.4, typical: 8.85 },
    personalLoanRate: { min: 11.25, max: 20, typical: 12.0 },
    carLoanRate: { min: 9.25, max: 14, typical: 9.55 },
    processingFee: '1.0% of loan amount or ₹10,000 (whichever lower) on home loans',
    prepaymentPolicy: 'Zero on floating retail home loans. 4% on fixed/business loans.',
    marketContext: 'Axis Bank is India\'s third-largest private lender with ~₹2.5 lakh crore home loan book. Known for competitive rates on premium-segment loans (Burgundy banking customers) and strong tier-2 city presence.',
    uniqueAngle: 'Best rates for Burgundy Private/Privée banking customers (HNI segment with ₹20L+ relationship value). Also strong on under-construction project financing with builder tie-ups.',
    productHighlights: [
      'Home loan up to ₹5 crore with 30-year tenure',
      'Asha Home Loan: lower-income segment loans starting ₹1 lakh',
      'Burgundy Private rates for HNI customers',
      'Power Home Loan: rate reduces 10 bps for every 6 months on-time EMIs',
      'Quick Pay home loan with shorter approval cycle',
    ],
    faqs: [
      {
        q: 'What is the Axis Bank Asha Home Loan?',
        a: 'Asha Home Loan targets affordable-housing buyers — loan size from ₹1 lakh to ₹35 lakh for income groups earning ₹8,000-30,000/month. PMAY subsidy is automatically processed. Disbursal can happen even on under-construction properties.',
      },
      {
        q: 'Does Axis Bank reward on-time EMI payments?',
        a: 'Yes — via the "Power" home loan: every 6 months of on-time EMIs reduce your rate by 10 bps (up to 60 bps lifetime). Effectively a behavioral discount that compounds over the loan life.',
      },
      {
        q: 'How long does Axis Bank take to approve a home loan?',
        a: 'For salaried customers with clean documentation: 5-10 working days from application to sanction. Self-employed: 10-15 days. Burgundy customers get priority processing in 3-5 days.',
      },
    ],
    metaKeywords: ['axis bank emi calculator', 'axis home loan emi', 'axis personal loan emi', 'axis car loan emi'],
  },

  // ============ KOTAK ============
  {
    slug: 'kotak',
    bankName: 'Kotak Mahindra Bank',
    fullName: 'Kotak Mahindra Bank Limited',
    emoji: '🏦',
    hqLocation: 'Mumbai, Maharashtra',
    homeLoanRate: { min: 8.7, max: 9.4, typical: 8.85 },
    personalLoanRate: { min: 10.99, max: 18, typical: 11.5 },
    carLoanRate: { min: 9.5, max: 14, typical: 9.8 },
    processingFee: '0.5% of loan amount (min ₹3,000, max ₹10,000)',
    prepaymentPolicy: 'Zero on floating retail home loans. 2.5% on fixed-rate loans.',
    marketContext: 'Kotak Mahindra Bank, founded as a financial services group by Uday Kotak, has grown into one of India\'s leading private-sector banks. Strong on premium-segment and SME lending. Home loan book around ₹1 lakh crore.',
    uniqueAngle: 'Best digital home loan experience after HDFC — Kotak Mobile App and 811 digital banking deliver fast pre-approval. Strong on self-employed segment with non-standard income.',
    productHighlights: [
      'Home loan up to ₹5 crore, 30-year tenure',
      '811 digital onboarding with home loan integration',
      'Special rates for women borrowers (-5 bps)',
      'Step-up EMI for younger borrowers',
      'Quick balance transfer with rate-match guarantee',
    ],
    faqs: [
      {
        q: 'Does Kotak offer women-borrower discount?',
        a: 'Yes — Kotak (like SBI, HDFC, and ICICI) offers a 5 basis points discount on home loans for women as the primary or co-applicant borrower. The discount compounds significantly over a 20-year loan.',
      },
      {
        q: 'Is Kotak good for self-employed home loans?',
        a: 'Kotak is one of the better banks for self-employed/business income segment — they accept 2-year ITR + 6-month bank statements (vs 3-year ITR at many other banks). Rate premium for self-employed is typically 25-50 bps over salaried.',
      },
      {
        q: 'Can I get a Kotak home loan against rental income?',
        a: 'Yes. Kotak discounts rental income at 65-75% when assessing serviceability (vs 50-60% at many banks). For investors with multiple rental properties, this materially increases borrowing capacity.',
      },
    ],
    metaKeywords: ['kotak emi calculator', 'kotak home loan emi', 'kotak mahindra emi', 'kotak personal loan'],
  },

  // ============ BoB ============
  {
    slug: 'bob',
    bankName: 'Bank of Baroda',
    fullName: 'Bank of Baroda',
    emoji: '🏛️',
    hqLocation: 'Vadodara, Gujarat',
    homeLoanRate: { min: 8.4, max: 10.4, typical: 8.65 },
    personalLoanRate: { min: 10.9, max: 17.05, typical: 11.5 },
    carLoanRate: { min: 8.9, max: 12.7, typical: 9.4 },
    processingFee: '0.50% of loan amount (max ₹10,000 for home loans)',
    prepaymentPolicy: 'Zero on floating retail home loans. Variable on fixed-rate.',
    marketContext: 'Bank of Baroda is one of India\'s largest public-sector banks post the 2019 merger with Dena Bank and Vijaya Bank. Strong presence in semi-urban and rural India. Home loan book around ₹1.2 lakh crore.',
    uniqueAngle: 'Best rates after SBI in the public-sector segment. Especially strong for affordable-housing PMAY beneficiaries with subsidy direct-credit to loan account.',
    productHighlights: [
      'Baroda Home Loan: 8.4-10.4% with up to ₹10 crore size',
      'Baroda Pre-Approved Home Loan for existing customers',
      'PMAY direct credit subsidy processing',
      'BoB Repo-linked home loan (transparent floating)',
      'Special rates for defense personnel and senior citizens',
    ],
    faqs: [
      {
        q: 'Is Bank of Baroda cheaper than SBI for home loans?',
        a: 'Marginally — BoB is typically 10-25 bps higher than SBI at any given LTV. BoB\'s advantage: faster processing in tier-2/3 cities where SBI branches can be slow. For metro customers, SBI usually wins on rate.',
      },
      {
        q: 'How does BoB process PMAY subsidy?',
        a: 'BoB directly receives the PMAY-CLSS subsidy from the National Housing Bank and credits it to your home loan principal (typically ₹2.30-2.67 lakh subsidy for EWS/LIG segments). No paperwork hassle on your end — you just submit eligibility documents at application time.',
      },
      {
        q: 'What is BoB Repo-linked home loan?',
        a: 'Per RBI mandate (since Oct 2019), retail floating-rate loans must be linked to an external benchmark — BoB uses the RBI repo rate. Your home loan rate = repo rate + spread (typically 2-3%). When RBI changes repo, your rate adjusts within 3 months.',
      },
    ],
    metaKeywords: ['bank of baroda emi calculator', 'bob home loan emi', 'baroda emi calculator', 'bob personal loan'],
  },
];

export function getBankBySlug(slug: string): BankData | undefined {
  return emiBanks.find((b) => b.slug === slug);
}
