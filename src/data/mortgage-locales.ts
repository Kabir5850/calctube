/**
 * Country-localized mortgage data for programmatic SEO pages.
 * Each entry produces a unique page at /finance/mortgage-calculator/[slug]/
 *
 * Data sources:
 *  - typicalRate: rough median 30-yr (or country-equivalent) rate as of mid-2026
 *  - typicalPrice: median home price in major metro
 *  - currencySymbol/format from Intl
 *  - Local terminology and tax/regulatory FAQ items vary per country
 */

export interface LocaleData {
  slug: string;             // URL slug (e.g., 'uk')
  country: string;          // Display name
  flag: string;             // Emoji
  language: string;         // hreflang
  currency: string;         // ISO 4217
  currencySymbol: string;   // Display symbol
  locale: string;           // Intl locale
  termLocalName: string;    // What it's called locally ("mortgage", "home loan", etc.)
  typicalAmount: number;    // Sensible default loan amount in local currency
  typicalRate: number;      // Common mortgage rate (%)
  typicalTerm: number;      // Common term in years
  amountRange: [number, number];
  rateRange: [number, number];
  marketContext: string;    // 1-paragraph market overview
  rateContext: string;      // Why this rate is typical
  taxAndRegulation: string; // Country-specific tax/regulatory note
  faqs: Array<{ q: string; a: string }>; // 3 locale-specific FAQs
  workedExample: {
    description: string;
    amount: number;
    rate: number;
    term: number;
  };
  metaKeywords: string[];
}

export const mortgageLocales: LocaleData[] = [
  // ============ INDIA ============
  {
    slug: 'india',
    country: 'India',
    flag: '🇮🇳',
    language: 'en-IN',
    currency: 'INR',
    currencySymbol: '₹',
    locale: 'en-IN',
    termLocalName: 'home loan EMI',
    typicalAmount: 5000000, // ₹50 lakh
    typicalRate: 8.5,
    typicalTerm: 20,
    amountRange: [500000, 100000000],
    rateRange: [7, 14],
    marketContext:
      'Indian home loans (legally called housing finance) are floating-rate by default, repriced quarterly against the RBI repo rate or each bank\'s MCLR/EBLR. The market is dominated by SBI, HDFC Bank, ICICI Bank, Axis Bank, and LIC Housing Finance. EMIs run for 20-30 years and average ticket sizes have crossed ₹50 lakh in metro markets.',
    rateContext:
      '8.5% is the typical post-2024 floating rate for salaried borrowers with a 750+ CIBIL score on a home loan up to ₹75 lakh. Self-employed and high-LTV loans see 9–11%.',
    taxAndRegulation:
      'Section 80C allows up to ₹1.5 lakh deduction on principal repayment. Section 24(b) allows up to ₹2 lakh deduction on interest paid for a self-occupied property. Pre-EMI interest is amortized over 5 years post-possession. Stamp duty and registration are separate (5-7% of property value, state-dependent).',
    faqs: [
      {
        q: 'Floating vs fixed home loan in India — which is better?',
        a: 'Indian banks predominantly offer floating-rate loans tied to the repo rate or MCLR. Fixed-rate options exist but typically only for the first 1-5 years before resetting to floating. With RBI rates trending downward in 2026, floating remains the default choice for most borrowers.',
      },
      {
        q: 'What is the difference between EMI calculator and home loan calculator?',
        a: 'Both compute the same thing — your equated monthly installment. "EMI calculator" is the term used in India and South Asia; "mortgage calculator" or "home loan calculator" is more common elsewhere. The math is identical.',
      },
      {
        q: 'How much home loan can I get on a ₹1 lakh salary?',
        a: 'Most Indian banks lend 60-80% of property value AND cap your EMI at 50-60% of net monthly income. On a ₹1 lakh/month salary, your EMI capacity is around ₹50,000-₹60,000 → roughly ₹50-60 lakh loan at current rates over 20 years.',
      },
    ],
    workedExample: {
      description: 'A ₹50 lakh home loan at 8.5% p.a. over 20 years',
      amount: 5000000,
      rate: 8.5,
      term: 20,
    },
    metaKeywords: [
      'home loan calculator india',
      'mortgage calculator india',
      'housing loan emi calculator',
      'home loan emi india',
      'rbi repo rate home loan',
    ],
  },

  // ============ UK ============
  {
    slug: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    language: 'en-GB',
    currency: 'GBP',
    currencySymbol: '£',
    locale: 'en-GB',
    termLocalName: 'mortgage',
    typicalAmount: 250000,
    typicalRate: 4.5,
    typicalTerm: 25,
    amountRange: [50000, 2000000],
    rateRange: [3, 10],
    marketContext:
      'UK mortgages predominantly use a fixed-rate-for-N-years structure (typically 2, 5, or 10 years) before reverting to a Standard Variable Rate (SVR). The average UK term is 25-35 years. Lenders include Nationwide, Halifax, Barclays, HSBC, Santander, and Natwest. Following 2023-24 rate volatility, fixes have settled around 4-5% for prime borrowers.',
    rateContext:
      '4.5% is the typical 5-year fixed rate for a 75% LTV mortgage on a prime borrower. First-time buyer schemes and 90%+ LTV will see 5-6%.',
    taxAndRegulation:
      'No mortgage interest tax relief for personal residences (abolished 2000). Stamp Duty Land Tax (SDLT) applies on purchases above £250,000 (first-time buyer exemption up to £425,000). Buy-to-let mortgages have separate rules and reduced interest deductibility (Section 24).',
    faqs: [
      {
        q: 'What is a 2-year fix vs 5-year fix in UK mortgages?',
        a: 'A "fix" is the initial period your interest rate is locked. 2-year fixes carry lower headline rates but require remortgaging sooner (with fees and rate-risk). 5-year fixes give longer rate certainty. After the fix ends, you revert to the lender\'s SVR (typically 7-9%) unless you remortgage.',
      },
      {
        q: 'What is LTV in UK mortgages?',
        a: 'Loan-to-Value — the percentage of the property price you\'re borrowing. 60-75% LTV gets the best rates. 90-95% LTV (first-time buyer territory) sees a 1-2% rate premium and may require lender\'s mortgage insurance.',
      },
      {
        q: 'Help to Buy vs shared ownership — which lowers my mortgage?',
        a: 'Help to Buy ISA/Lifetime ISA gives a 25% bonus toward the deposit (up to £3,000-£1,000/year), reducing the loan you need. Shared ownership splits ownership with a housing association — you only mortgage the share you buy. Both lower your headline mortgage, with different long-term implications.',
      },
    ],
    workedExample: {
      description: 'A £250,000 mortgage at 4.5% over a 25-year term',
      amount: 250000,
      rate: 4.5,
      term: 25,
    },
    metaKeywords: ['mortgage calculator uk', 'uk mortgage repayment', 'fixed rate mortgage uk', 'help to buy mortgage'],
  },

  // ============ CANADA ============
  {
    slug: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    language: 'en-CA',
    currency: 'CAD',
    currencySymbol: 'C$',
    locale: 'en-CA',
    termLocalName: 'mortgage',
    typicalAmount: 500000,
    typicalRate: 5.0,
    typicalTerm: 25,
    amountRange: [100000, 3000000],
    rateRange: [3.5, 9],
    marketContext:
      'Canadian mortgages are amortized over 25-30 years but with shorter fixed-rate terms (typically 1, 3, or 5 years) — meaning you renew the mortgage rate every few years. Top lenders include RBC, TD, Scotiabank, BMO, and CIBC. Following Bank of Canada rate cuts in late 2024-2025, 5-year fixed rates have settled around 4.5-5.5%.',
    rateContext:
      '5.0% is the typical 5-year fixed insured-mortgage rate. Variable rates (tied to prime, currently ~6%) and uninsured-mortgage rates are typically higher.',
    taxAndRegulation:
      'No mortgage interest deduction for primary residences. Canada Mortgage and Housing Corporation (CMHC) insurance is mandatory below 20% down payment (premium added to mortgage). First-Time Home Buyer Incentive provides 5-10% shared equity. Land Transfer Tax applies provincially.',
    faqs: [
      {
        q: 'What is the difference between amortization and term in Canadian mortgages?',
        a: 'Amortization is the total time to pay off the mortgage (typically 25-30 years). Term is the period your current rate is locked (typically 5 years). You\'ll renew at the end of each term, potentially at a different rate, until amortization completes.',
      },
      {
        q: 'How much down payment is needed in Canada?',
        a: 'Minimum 5% for homes up to $500K, 10% on the portion $500K-$1.5M, and 20% above $1.5M. Below 20% triggers mandatory CMHC mortgage insurance (premium of 2.8-4% added to the loan).',
      },
      {
        q: 'Stress test: what is it?',
        a: 'Canadian banks must qualify you at the higher of (a) your contracted rate + 2%, or (b) 5.25%. This ensures you can still afford payments if rates rise. As of mid-2026 this remains the qualifying benchmark.',
      },
    ],
    workedExample: {
      description: 'A C$500,000 mortgage at 5% over a 25-year amortization',
      amount: 500000,
      rate: 5.0,
      term: 25,
    },
    metaKeywords: ['mortgage calculator canada', 'canadian mortgage', 'cmhc insurance', 'stress test mortgage'],
  },

  // ============ AUSTRALIA ============
  {
    slug: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    language: 'en-AU',
    currency: 'AUD',
    currencySymbol: 'A$',
    locale: 'en-AU',
    termLocalName: 'home loan',
    typicalAmount: 600000,
    typicalRate: 6.0,
    typicalTerm: 30,
    amountRange: [100000, 5000000],
    rateRange: [4, 10],
    marketContext:
      'Australian home loans are predominantly variable-rate (tied to RBA cash rate), with fixed-rate options for 1-5 years. The Big Four — CBA, Westpac, ANZ, and NAB — dominate. Following RBA rate cuts in 2024-25, owner-occupier rates have settled around 5.8-6.2% for variable and 5.5-6.0% for 3-year fixed.',
    rateContext:
      '6.0% is the typical variable rate for an owner-occupier loan at 80% LTV. Investor loans, interest-only, and high-LTV loans carry premiums.',
    taxAndRegulation:
      'No mortgage interest deduction for owner-occupiers, but full deductibility for investment properties (negative gearing). Lenders Mortgage Insurance (LMI) applies below 20% deposit. First Home Owner Grant varies by state. Stamp duty applies on purchase (state-based, often 4-6%).',
    faqs: [
      {
        q: 'Offset account vs redraw facility — which is better?',
        a: 'An offset account is a separate transaction account where any balance offsets your loan principal for interest calc — but stays accessible. A redraw lets you pull back extra repayments you\'ve already made. Offset is more flexible and tax-efficient for investment properties; redraw is simpler and often free.',
      },
      {
        q: 'How much can I borrow in Australia?',
        a: 'APRA serviceability rules require lenders to qualify you at your rate + 3% buffer. As a rule of thumb, expect borrowing capacity of 5-6× your annual gross income for a couple, less for singles. Genuine savings (5%+) and clean credit history are required.',
      },
      {
        q: 'What is LMI and when does it apply?',
        a: 'Lenders Mortgage Insurance protects the bank if you default. It applies when your LVR exceeds 80%. The premium (typically 1-4% of loan, often capitalized into the mortgage) is paid by you but protects the lender. First Home Buyer Guarantee waives LMI for eligible buyers up to 95% LVR.',
      },
    ],
    workedExample: {
      description: 'A A$600,000 home loan at 6.0% variable over a 30-year term',
      amount: 600000,
      rate: 6.0,
      term: 30,
    },
    metaKeywords: ['home loan calculator australia', 'mortgage repayment australia', 'lmi calculator', 'first home buyer'],
  },

  // ============ USA ============
  {
    slug: 'usa',
    country: 'United States',
    flag: '🇺🇸',
    language: 'en-US',
    currency: 'USD',
    currencySymbol: '$',
    locale: 'en-US',
    termLocalName: 'mortgage',
    typicalAmount: 400000,
    typicalRate: 6.5,
    typicalTerm: 30,
    amountRange: [50000, 5000000],
    rateRange: [4, 11],
    marketContext:
      'US mortgages are uniquely structured around the 30-year fixed-rate loan — a structure that exists primarily in the US due to Fannie Mae and Freddie Mac securitization. Major lenders include Rocket Mortgage, Wells Fargo, Chase, and Bank of America. Following Fed rate cuts in 2024-2025, 30-year fixed rates have settled in the 6-7% range.',
    rateContext:
      '6.5% is the typical 30-year fixed conforming-loan rate for a 740+ FICO borrower at 80% LTV. Jumbo loans (>$766K) and lower-FICO borrowers see premiums.',
    taxAndRegulation:
      'Mortgage interest deduction available on the first $750,000 of debt (Tax Cuts and Jobs Act). State and local property taxes (SALT) capped at $10,000 federal deduction. PMI required below 20% down (removable at 78% LTV). FHA, VA, and USDA loans have separate rules.',
    faqs: [
      {
        q: '15-year vs 30-year mortgage — which is better?',
        a: 'A 15-year has a 50-75 basis point lower rate and pays about 3× less total interest, but the monthly payment is roughly 50% higher. For a $400K loan at 6.5% (30yr) vs 5.75% (15yr): $2,528/mo total $510K interest vs $3,322/mo total $198K interest.',
      },
      {
        q: 'Conventional vs FHA vs VA — what is the difference?',
        a: 'Conventional: 5-20% down, requires PMI below 20%. FHA: 3.5% down, MIP for the life of the loan, available to lower-FICO buyers. VA: 0% down for eligible veterans, no PMI. Each has different rates and qualification rules.',
      },
      {
        q: 'When should I refinance?',
        a: 'The rule of thumb: refinance when current rates are at least 0.75-1.0% below your locked rate AND you plan to stay in the home long enough to recoup closing costs (typically 2-3 years). Use a refinance break-even calculator to verify.',
      },
    ],
    workedExample: {
      description: 'A $400,000 mortgage at 6.5% on a 30-year fixed',
      amount: 400000,
      rate: 6.5,
      term: 30,
    },
    metaKeywords: ['mortgage calculator usa', 'us mortgage', '30 year fixed mortgage', 'fha mortgage calculator'],
  },

  // ============ GERMANY ============
  {
    slug: 'germany',
    country: 'Germany',
    flag: '🇩🇪',
    language: 'en-DE',
    currency: 'EUR',
    currencySymbol: '€',
    locale: 'de-DE',
    termLocalName: 'mortgage (Annuitätendarlehen)',
    typicalAmount: 350000,
    typicalRate: 3.8,
    typicalTerm: 20,
    amountRange: [50000, 2000000],
    rateRange: [3, 8],
    marketContext:
      'German mortgages (Annuitätendarlehen) are typically fixed for 10-30 years — much longer than UK/Canadian "fix periods." After the Sollzinsbindung (interest-rate lock) ends, you refinance with the same or new bank. Major lenders include Sparkasse, Deutsche Bank, ING, and Commerzbank. Following ECB rate cuts in 2024-2025, 10-year fixed rates are around 3.5-4.0%.',
    rateContext:
      '3.8% is typical for a 10-year fixed mortgage at 80% LTV (Beleihungsauslauf). 60% LTV gets the best rates; 90%+ LTV sees significant premiums.',
    taxAndRegulation:
      'No mortgage interest deduction for owner-occupied homes. Interest is fully deductible for rental properties (Werbungskosten). Grunderwerbsteuer (real estate transfer tax) is 3.5-6.5% depending on Bundesland. Notary and registration costs add ~1.5%.',
    faqs: [
      {
        q: 'What is a Sondertilgung and should I use it?',
        a: 'Sondertilgung is the right to make extra principal payments (typically 5-10% of the original loan amount per year) without penalty. It significantly reduces total interest and shortens the loan. Always negotiate this clause into the contract — most German mortgages allow it by default.',
      },
      {
        q: '10-year vs 20-year Zinsbindung — which is better?',
        a: 'Shorter Zinsbindung (10 years) gets a lower rate but exposes you to rate risk at renewal. Longer (20+ years) locks predictability. With ECB rates declining in 2024-2026, 10-year fixes have looked attractive again, but 15-year offers a balance.',
      },
      {
        q: 'How does Eigenkapital affect my German mortgage?',
        a: 'German lenders typically require 20-30% Eigenkapital (own capital) — your down payment AND ancillary costs (Nebenkosten of ~10-12% covering transfer tax, notary, agent). 100% financing exists but commands a 1%+ rate premium.',
      },
    ],
    workedExample: {
      description: 'A €350,000 mortgage at 3.8% with 10-year Zinsbindung over 20 years',
      amount: 350000,
      rate: 3.8,
      term: 20,
    },
    metaKeywords: ['mortgage calculator germany', 'hypothekenrechner', 'annuitätendarlehen', 'zinsbindung calculator'],
  },

  // ============ SINGAPORE ============
  {
    slug: 'singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    language: 'en-SG',
    currency: 'SGD',
    currencySymbol: 'S$',
    locale: 'en-SG',
    termLocalName: 'home loan',
    typicalAmount: 1200000,
    typicalRate: 3.5,
    typicalTerm: 25,
    amountRange: [100000, 10000000],
    rateRange: [2.5, 6],
    marketContext:
      'Singapore home loans split into HDB (subsidized public housing) and private property. Private mortgage rates are typically pegged to SORA (Singapore Overnight Rate Average) or fixed for 1-5 years. Major lenders include DBS, OCBC, UOB, and Standard Chartered. Post-2024 SORA decline brought rates to 3.0-3.8% for 2-year fixed.',
    rateContext:
      '3.5% is typical for a 2-year fixed private property loan at 75% LTV. HDB-eligible loans (with HFE certificate) get rates ~0.5% lower; SORA-floating may be slightly lower with rate risk.',
    taxAndRegulation:
      'No mortgage interest deduction for primary residences. Total Debt Servicing Ratio (TDSR) caps debt at 55% of monthly income. Loan-to-Value (LTV) capped at 75% on first private property, lower on second/third. Additional Buyer\'s Stamp Duty (ABSD) applies to foreigners and 2nd+ properties.',
    faqs: [
      {
        q: 'HDB loan vs bank loan in Singapore — which is better?',
        a: 'HDB loans (for HDB flats only) have a fixed concessionary rate (2.6% as of 2026) and require 25% downpayment via CPF/cash. Bank loans (private + HDB) can be cheaper short-term but variable. Use HDB if you value rate stability; bank if rates are clearly trending lower.',
      },
      {
        q: 'What is TDSR and how does it affect my loan?',
        a: 'Total Debt Servicing Ratio caps your total monthly debt obligations (mortgage + credit cards + car loan + etc.) at 55% of gross monthly income. Banks stress-test at 4% (per MAS rules) when calculating affordability — meaning your real borrowing capacity is lower than headline rate suggests.',
      },
      {
        q: 'Can I use CPF to pay my Singapore mortgage?',
        a: 'Yes — Ordinary Account (OA) funds can pay the downpayment and monthly installments, subject to withdrawal limits. CPF use accrues 2.5% interest forfeit (you pay it back into CPF with interest if you sell). Most Singaporeans optimize a CPF + cash split.',
      },
    ],
    workedExample: {
      description: 'A S$1,200,000 private home loan at 3.5% over a 25-year term',
      amount: 1200000,
      rate: 3.5,
      term: 25,
    },
    metaKeywords: ['home loan calculator singapore', 'sora mortgage', 'hdb loan calculator', 'tdsr calculator'],
  },

  // ============ UAE ============
  {
    slug: 'uae',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    language: 'en-AE',
    currency: 'AED',
    currencySymbol: 'د.إ',
    locale: 'en-AE',
    termLocalName: 'mortgage',
    typicalAmount: 2000000,
    typicalRate: 4.5,
    typicalTerm: 25,
    amountRange: [200000, 20000000],
    rateRange: [3.5, 8],
    marketContext:
      'UAE mortgages are split into UAE national and expat segments, with different LTV caps and rate access. Major lenders include Emirates NBD, Mashreq, ADCB, FAB, and HSBC. Most rates are tied to EIBOR (Emirates Interbank Offered Rate) with 1-5 year fixed options. Post-2024 rate cuts brought 3-year fixed rates to 4-5% for prime borrowers.',
    rateContext:
      '4.5% is typical for a 3-year fixed mortgage at 75% LTV for a UAE resident expat with stable salary income. UAE nationals and Golden Visa holders may access slightly better rates.',
    taxAndRegulation:
      'No income tax, no mortgage interest deduction (none needed). Dubai Land Department fee is 4% of property value. Loan-to-Value capped at 80% for UAE nationals (first property under AED 5M), 75% for expats. Mortgage registration fee is 0.25% of loan amount.',
    faqs: [
      {
        q: 'Can expats get a UAE mortgage?',
        a: 'Yes. Most major UAE banks lend to salaried expats earning at least AED 15,000-25,000/month with 2+ years of UAE employment. LTV is capped at 75-80% for residents. Non-residents can get mortgages but face lower LTV (50-60%) and higher rates.',
      },
      {
        q: 'EIBOR vs fixed-rate UAE mortgages — which is better?',
        a: 'EIBOR-floating tracks the interbank rate (currently 3-month EIBOR around 4.3%) + a bank margin of ~1.5%. Fixed (2-5 years) gives certainty but typically costs 50-100 bps more than the floating rate at signing. With rates declining, EIBOR-floating has been the better deal in 2025-2026.',
      },
      {
        q: 'Is rental income enough to qualify for a UAE mortgage?',
        a: 'Most UAE banks discount rental income at 60-70% when assessing serviceability. You\'ll typically need salary income on top of rental for the primary qualification. Investor mortgages exist but with higher LTV caps and rate premiums.',
      },
    ],
    workedExample: {
      description: 'A AED 2,000,000 mortgage at 4.5% over a 25-year term for a UAE resident',
      amount: 2000000,
      rate: 4.5,
      term: 25,
    },
    metaKeywords: ['mortgage calculator uae', 'dubai mortgage calculator', 'eibor mortgage', 'uae home loan'],
  },
];

// Helpers
export function getLocaleBySlug(slug: string): LocaleData | undefined {
  return mortgageLocales.find((l) => l.slug === slug);
}

export function formatLocaleCurrency(value: number, locale: LocaleData): string {
  return new Intl.NumberFormat(locale.locale, {
    style: 'currency',
    currency: locale.currency,
    maximumFractionDigits: 0,
  }).format(value);
}
