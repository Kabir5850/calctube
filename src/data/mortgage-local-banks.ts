/**
 * Local lenders for country mortgage pages that have no `localBanks` block in
 * mortgage-locales.ts. Merged in by /finance/mortgage-calculator/[country].astro.
 *
 * Why this exists: Search Console (Nov 2026) showed the country pages rank on
 * page one almost only for lender-named searches ("bml home loan calculator",
 * "belize bank mortgage calculator", "bank of cyprus mortgage calculator"), and
 * every one of those came from a page that names its local lenders. This file
 * extends that to the next set of countries that have earned impressions.
 *
 * Editorial rules for entries here:
 *  - Name only lenders that are established home-loan providers in that market.
 *  - Describe how the lender and the market work (rate type, benchmark, state
 *    schemes, regulatory caps). These stay true for years.
 *  - Do NOT quote a current interest rate unless it is set by a published,
 *    long-standing formula (for example Singapore's HDB loan). Rates move; the
 *    calculator above each list takes whatever rate the reader is quoted.
 *  - `short` is the name used in the page <title>; keep it to what people type.
 */

export interface ExtraLocalBank {
  name: string;
  /** Short form for the page title, e.g. "DBS". Defaults to `name`. */
  short?: string;
  note: string;
  rateRange?: string;
  ltv?: string;
}

export const extraLocalBanks: Record<string, ExtraLocalBank[]> = {
  germany: [
    { name: 'Sparkassen', short: 'Sparkasse', note: 'The municipal savings banks are together the largest source of home loans in Germany. Each Sparkasse lends in its own region, normally as an annuity loan with the interest rate fixed for 10 to 15 years (the Sollzinsbindung) rather than for the whole term.' },
    { name: 'Volksbanken Raiffeisenbanken', short: 'Volksbank', note: 'The cooperative banks are the second big local network. Their loans are often combined with a Bausparvertrag from Bausparkasse Schwäbisch Hall, the group building society, to lock in the rate for the follow-on financing.' },
    { name: 'ING Deutschland', short: 'ING', note: 'The largest direct bank in German home finance. Applications run online or through brokers, and pricing is usually sharpest for standard cases where the buyer brings around 20% equity plus the purchase costs.' },
    { name: 'Interhyp and other brokers', short: 'Interhyp', note: 'Germany\'s biggest mortgage broker compares offers from several hundred lenders, including regional banks and insurers. A large share of German mortgages are now arranged through broker platforms rather than at a branch.' },
    { name: 'KfW', note: 'The state development bank. It offers subsidised loans for energy-efficient new builds and for families buying their first home, taken out through your own bank alongside the main mortgage.' },
  ],
  singapore: [
    { name: 'DBS / POSB', short: 'DBS', note: 'Singapore\'s largest bank. Offers fixed-rate packages (usually fixed for two to three years) and floating packages pegged to 3-month compounded SORA, for both HDB flats and private property.' },
    { name: 'OCBC', note: 'One of the three local banks. Prices close to DBS and UOB on both fixed and SORA-pegged packages, with periodic promotions for refinancing from another bank or from an HDB loan.' },
    { name: 'UOB', note: 'The third local bank, with the same fixed and SORA-pegged structures. All bank home loans fall under MAS rules: a 55% total debt servicing ratio and a 75% loan-to-value limit on a first housing loan.', ltv: 'up to 75%' },
    { name: 'HDB housing loan', short: 'HDB', note: 'The concessionary loan from the Housing & Development Board for eligible flat buyers. Its rate is pegged at 0.1% above the CPF Ordinary Account rate and has stood at 2.6% for many years, which makes it steadier than bank packages.', rateRange: '2.6%', ltv: 'up to 75%' },
    { name: 'Standard Chartered, Maybank & HSBC', short: 'Standard Chartered', note: 'Foreign banks that compete with the local three mainly on promotional fixed rates and on private-property loans. Worth comparing at each refinancing point, since lock-in periods are short.' },
  ],
  'south-africa': [
    { name: 'Standard Bank', note: 'Generally regarded as the largest home loan lender in South Africa by book size. Like every bank here, it prices each bond as the prime lending rate plus or minus a margin set by your credit profile and deposit.' },
    { name: 'Absa', note: 'One of the big four. Offers 100% bonds to qualifying first-time buyers and prices relative to prime; the margin offered can differ noticeably between banks for the same applicant.' },
    { name: 'FNB', note: 'First National Bank, part of FirstRand. Strong with existing FNB transactional clients, who are often quoted a better margin against prime than walk-in applicants.' },
    { name: 'Nedbank', note: 'The fourth of the big four, with dedicated first-time-buyer and affordable-housing products alongside standard variable-rate bonds of up to 30 years.' },
    { name: 'ooba & BetterBond (bond originators)', short: 'ooba', note: 'Originators submit one application to all the major banks at no cost to the buyer and negotiate the rate on your behalf. A large share of South African home loans are arranged this way, because the banks\' offers on the same application vary.' },
  ],
  slovenia: [
    { name: 'NLB (Nova Ljubljanska banka)', short: 'NLB', note: 'Slovenia\'s largest bank. Housing loans (stanovanjski kredit) are available with a fixed rate or a variable rate tied to Euribor, on terms of up to 30 years.' },
    { name: 'OTP banka', note: 'Formed in 2024 when Nova KBM and SKB banka merged under Hungary\'s OTP Group, making it the second-largest lender in the country. Customers of either former bank now deal with the combined bank.' },
    { name: 'Intesa Sanpaolo Bank', short: 'Intesa Sanpaolo', note: 'The Slovenian arm of the Italian group, formerly Banka Koper and still strongest on the coast. Offers fixed and Euribor-linked housing loans.' },
    { name: 'UniCredit Banka Slovenija & Sparkasse', short: 'UniCredit', note: 'Foreign-owned banks that compete on fixed-rate offers for salaried borrowers. Banka Slovenije limits how much of your income loan repayments may take, so the amount you can borrow depends on net pay as well as the property value.' },
    { name: 'Delavska hranilnica & Gorenjska banka', short: 'Delavska hranilnica', note: 'Smaller domestic lenders with regional branch networks, often used by borrowers looking for lower account and arrangement fees.' },
  ],
  finland: [
    { name: 'OP Financial Group', short: 'OP', note: 'Finland\'s largest home lender, a cooperative group of local OP banks. Owner-customers earn OP bonuses on their loans, which can be set against banking and insurance fees.' },
    { name: 'Nordea', note: 'The largest Nordic bank and OP\'s main rival in Finnish mortgages. As at other banks, most loans are priced as 12-month Euribor plus a personal margin.' },
    { name: 'Danske Bank', note: 'The third large lender. Margins are negotiable everywhere in Finland, so it is normal to ask two or three banks for competing offers before signing.' },
    { name: 'Säästöpankki & S-Pankki', short: 'S-Pankki', note: 'The Savings Banks group and S-Bank. S-Bank grew sharply in 2024 when it took over Handelsbanken\'s Finnish retail customers. Loans are capped at 90% of the home\'s value, or 95% for first-time buyers.', ltv: 'up to 95% (first home)' },
    { name: 'ASP first-home loan', short: 'ASP', note: 'A state-backed scheme available through the banks: first-home savers under 45 who save 10% of the price in an ASP account get a loan with a partial state guarantee and interest-subsidy protection.' },
  ],
  spain: [
    { name: 'CaixaBank', note: 'The largest bank in Spain by domestic customers. Offers fixed-rate (hipoteca fija), mixed and Euribor-linked variable mortgages, with lower rates in exchange for bundling salary, insurance and other products.' },
    { name: 'Banco Santander', short: 'Santander', note: 'Lends to residents and to non-resident buyers. Residents can usually borrow up to 80% of the appraised value on a main home; non-residents are typically limited to 60–70%.', ltv: 'up to 80% (residents)' },
    { name: 'BBVA', note: 'A major lender with a fully online application process. As elsewhere in Spain, the headline rate assumes you take the linked products; the unbundled rate is higher.' },
    { name: 'Banco Sabadell & Bankinter', short: 'Sabadell', note: 'Both are active with foreign buyers and expatriates, particularly on the Mediterranean coast, and often price aggressively on fixed and mixed-rate loans.' },
    { name: 'ING & Openbank', short: 'ING', note: 'Online banks with fewer bundling requirements and low fees. Popular for straightforward purchases by salaried residents.' },
  ],
  cambodia: [
    { name: 'ABA Bank', short: 'ABA', note: 'Cambodia\'s largest bank by assets, majority-owned by National Bank of Canada. Home loans are mostly written in US dollars, the currency most property is priced in.' },
    { name: 'ACLEDA Bank', short: 'ACLEDA', note: 'The bank with the widest branch network in the country and a listing on the Cambodia Securities Exchange. Lends for house purchase and construction in US dollars or riel.' },
    { name: 'Canadia Bank', short: 'Canadia', note: 'One of the largest locally owned banks, with long-standing ties to major property developers, so it is a common lender on new condominium and borey projects.' },
    { name: 'Sathapana Bank & Hattha Bank', short: 'Sathapana', note: 'Commercial banks that grew out of microfinance institutions. They serve salaried and self-employed borrowers outside Phnom Penh who may not meet the larger banks\' income documentation.' },
  ],
  iran: [
    { name: 'Bank Maskan', note: 'The state housing bank and Iran\'s specialised mortgage lender. Most home-purchase lending runs through it, including loans funded by tradable housing facility certificates (Tashilat Maskan) and its first-home savings fund.' },
    { name: 'Bank Melli Iran', short: 'Bank Melli', note: 'The largest state-owned commercial bank. Housing facilities here are generally smaller top-up, renovation and marriage-linked loans rather than a full purchase mortgage.' },
    { name: 'Bank Mellat & Bank Tejarat', short: 'Bank Mellat', note: 'Large commercial banks offering purchase and renovation facilities within ceilings set by the Central Bank of Iran. Loan ceilings are small relative to city property prices, so most buyers combine several sources.' },
  ],
  belarus: [
    { name: 'Belarusbank', note: 'The largest state-owned bank and the main channel for state-supported housing loans to households on the official housing waiting list, alongside its commercial-rate loans.' },
    { name: 'Belagroprombank', note: 'The second big state bank. Lends for purchase and construction nationwide, including in rural areas where it has the densest network.' },
    { name: 'Priorbank', note: 'One of the largest privately run banks. Its housing loans are at commercial rates and are frequently offered through partner programmes with developers, which lower the rate for an initial period.' },
    { name: 'Sber Bank & Belinvestbank', short: 'Sber Bank', note: 'Further options for commercial-rate loans in Belarusian rubles. Rates across the market track the National Bank\'s refinancing rate, so they are usually quoted as that rate plus a margin.' },
  ],
  barbados: [
    { name: 'Republic Bank (Barbados)', short: 'Republic Bank', note: 'Formerly Barbados National Bank and one of the island\'s main mortgage lenders, with residential loans for purchase, construction and land.' },
    { name: 'CIBC Caribbean', note: 'The former FirstCaribbean, rebranded in 2023. Lends to residents and to non-resident buyers, who generally need a larger deposit and foreign-currency income.' },
    { name: 'Scotiabank & RBC Royal Bank', short: 'Scotiabank', note: 'Canadian banks with long-established Barbadian mortgage books. Both offer fixed-rate periods followed by a variable rate.' },
    { name: 'Credit unions (BPWCCUL & City of Bridgetown)', short: 'BPWCCUL', note: 'The Barbados Public Workers\' Co-operative Credit Union and City of Bridgetown Co-operative Credit Union are significant mortgage lenders to their members, often with lower fees than the commercial banks.' },
  ],
  oman: [
    { name: 'Bank Muscat', note: 'Oman\'s largest bank. Its Baituna home finance covers purchase, construction and completed property, with Sharia-compliant options through its Islamic window, Meethaq.' },
    { name: 'Bank Dhofar', note: 'A leading lender with housing loans for Omani nationals and for expatriates buying in designated Integrated Tourism Complexes, the areas where foreigners may own freehold.' },
    { name: 'National Bank of Oman & Sohar International', short: 'NBO', note: 'Both offer conventional housing loans. Sohar International expanded its retail base when it merged with HSBC Oman in 2023.' },
    { name: 'Oman Housing Bank', note: 'The government-owned housing lender. Provides subsidised loans to Omani citizens, with the subsidy scaled to income.' },
    { name: 'Bank Nizwa', note: 'Oman\'s first dedicated Islamic bank. Home finance is structured as Ijara or diminishing Musharaka rather than an interest-bearing loan.' },
  ],
  albania: [
    { name: 'BKT (Banka Kombëtare Tregtare)', short: 'BKT', note: 'The largest bank in Albania by assets. Home loans (kredi për shtëpi) are offered in lek or euro; lek loans are usually priced off the 12-month Treasury bill yield plus a margin.' },
    { name: 'Raiffeisen Bank Albania', short: 'Raiffeisen', note: 'Part of the Austrian group and one of the main mortgage lenders, with fixed-rate introductory periods followed by a variable rate.' },
    { name: 'Credins Bank', short: 'Credins', note: 'The largest Albanian-owned bank, strong in Tirana and the coastal property markets, and active in lending on new developments.' },
    { name: 'Intesa Sanpaolo Bank Albania & OTP Bank Albania', short: 'Intesa Sanpaolo', note: 'Foreign-owned banks that lend mainly in euro. A euro loan avoids exchange-rate risk only if your income is also in euro.' },
  ],
  mongolia: [
    { name: 'Khan Bank', note: 'The largest retail bank, with the widest branch network across the provinces. A main channel for the government\'s subsidised mortgage programme as well as commercial-rate loans.' },
    { name: 'Golomt Bank', note: 'One of the systemically important banks. Offers both programme and commercial housing loans, mostly for apartments in Ulaanbaatar.' },
    { name: 'TDB (Trade and Development Bank)', short: 'TDB', note: 'Mongolia\'s oldest commercial bank, with mortgage lending concentrated on salaried borrowers and partner developers.' },
    { name: 'State Bank & XacBank', short: 'State Bank', note: 'Also participate in the subsidised programme. Programme loans carry a fixed rate far below commercial pricing but are limited by apartment size, deposit and available funding, so waiting lists are common.' },
  ],
  austria: [
    { name: 'Erste Bank und Sparkassen', short: 'Erste Bank', note: 'The savings bank group and one of the two largest home lenders in Austria. Offers fixed-rate, variable (Euribor-linked) and combined loans.' },
    { name: 'Raiffeisen', note: 'The cooperative Raiffeisen banks have the densest local network, particularly outside Vienna. Lending decisions are made by the regional bank.' },
    { name: 'UniCredit Bank Austria', short: 'Bank Austria', note: 'A major lender in Vienna and the larger cities. Like other Austrian banks it generally expects around 20% of the purchase price as your own funds.' },
    { name: 'BAWAG', note: 'A nationwide retail bank with competitive standard-case pricing and distribution through brokers as well as branches.' },
    { name: 'Bausparkassen', short: 'Bausparkasse', note: 'Building societies such as Wüstenrot, Raiffeisen Bausparkasse and s Bausparkasse. A Bauspardarlehen comes with a contractual interest-rate ceiling, which is why it is often used for part of the financing.' },
  ],
  belgium: [
    { name: 'BNP Paribas Fortis', note: 'Belgium\'s largest bank. Most borrowers take a rate fixed for the full 20 or 25 years, which is the norm in the Belgian market.' },
    { name: 'KBC', note: 'A leading lender in Flanders (and as CBC in Wallonia, KBC Brussels in the capital). Rates improve with conditions such as salary domiciliation and insurance taken through the bank.' },
    { name: 'Belfius', note: 'The state-owned bank, with a large mortgage book and strong ties to public-sector employees.' },
    { name: 'ING Belgium', short: 'ING', note: 'Offers fixed and variable formulas. Belgian law limits how far a variable rate may rise over the life of the loan, and the cap must be stated in the offer.' },
    { name: 'Argenta & Crelan', short: 'Argenta', note: 'Smaller banks that often lead the comparison tables on rates. National Bank of Belgium guidance steers lenders toward a maximum 90% loan-to-value for owner-occupiers.', ltv: 'up to 90%' },
  ],
  kyrgyzstan: [
    { name: 'State Mortgage Company (GIK)', short: 'GIK', note: 'The government body behind the affordable housing programme. Its subsidised mortgages for public-sector workers and other eligible groups are issued through partner banks rather than directly.' },
    { name: 'Aiyl Bank & Eldik Bank', short: 'Aiyl Bank', note: 'State-owned banks and the main partners for state programme mortgages. Eldik Bank is the former RSK Bank, renamed in 2023.' },
    { name: 'Optima Bank, KICB & Demir Bank', short: 'Optima Bank', note: 'Commercial banks offering market-rate mortgages in som or US dollars. A dollar loan carries exchange-rate risk if your income is in som.' },
    { name: 'MBank', note: 'A fast-growing commercial bank with a strong mobile app, lending for apartment purchase mainly in Bishkek and Osh.' },
  ],
  poland: [
    { name: 'PKO Bank Polski', short: 'PKO BP', note: 'The largest bank in Poland and state-controlled. Offers loans with the rate fixed for an initial five years as well as variable-rate loans.' },
    { name: 'Bank Pekao', short: 'Pekao', note: 'The second-largest bank. Periodically fixed rates have become the standard choice since 2022, when variable-rate borrowers were hit by sharp benchmark increases.' },
    { name: 'ING Bank Śląski', short: 'ING', note: 'A major mortgage lender with a largely online process. Under the financial regulator\'s Recommendation S, lenders require a down payment of at least 10–20%.', ltv: 'up to 90%' },
    { name: 'mBank & Santander Bank Polska', short: 'mBank', note: 'Both are large retail lenders. Variable-rate loans have historically been priced off WIBOR, which Poland is replacing with a new benchmark, so check which index a variable offer uses.' },
  ],
  denmark: [
    { name: 'Nykredit & Totalkredit', short: 'Nykredit', note: 'Denmark\'s largest mortgage-credit institution. Totalkredit loans are sold through local and regional banks. A mortgage-credit loan can finance up to 80% of the home\'s value and is funded by covered bonds.', ltv: 'up to 80%' },
    { name: 'Realkredit Danmark', note: 'The mortgage-credit arm of Danske Bank. Offers the classic Danish 30-year fixed-rate callable loan, as well as adjustable-rate (F-loans) and interest-only periods.' },
    { name: 'Nordea Kredit', short: 'Nordea', note: 'Nordea\'s mortgage-credit institution. As with all Danish realkredit, the borrower can repay early by buying back the underlying bonds at market price, which is cheaper when rates have risen.' },
    { name: 'Jyske Realkredit', short: 'Jyske', note: 'Part of Jyske Bank. Buyers need at least a 5% deposit; the share between 80% and 95% of the price is covered by a separate, more expensive bank loan.' },
  ],
  norway: [
    { name: 'DNB', note: 'Norway\'s largest bank and biggest mortgage lender. Nearly all Norwegian home loans carry a floating rate that the bank can change with notice; fixed rates are available but uncommon.' },
    { name: 'SpareBank 1 & local savings banks', short: 'SpareBank 1', note: 'The SpareBank 1 alliance and the Eika banks dominate lending outside Oslo. Local savings banks decide loans locally and often match the large banks on price.' },
    { name: 'Nordea', note: 'The second-largest lender, strengthened when it took over Danske Bank\'s Norwegian personal customers. Member discounts negotiated by unions and professional associations are a common route to a lower rate.' },
    { name: 'Husbanken start loan', short: 'Husbanken', note: 'The state housing bank funds start loans (startlån) that municipalities grant to people who cannot get a regular bank mortgage. Bank lending is governed by a national regulation capping both loan-to-value and total debt relative to income.' },
  ],
  sweden: [
    { name: 'Swedbank', note: 'One of the two largest mortgage lenders, with the widest branch network. Published list rates are a starting point; most borrowers negotiate a discount, and banks publish the average rates actually granted each month.' },
    { name: 'Handelsbanken', note: 'Known for branch-level lending decisions (through its Stadshypotek mortgage arm). The three-month variable rate is the most common choice in Sweden.' },
    { name: 'SEB & Nordea', short: 'SEB', note: 'The other large universal banks. Rates fixed for one to five years are available alongside variable, and terms are tied to how much of your banking you hold with them.' },
    { name: 'SBAB', note: 'The state-owned, online-only lender. It prices by loan-to-value with no negotiation, which makes its rates easy to compare. Finansinspektionen sets the loan-to-value ceiling and amortisation requirements that apply to all lenders.' },
  ],
  switzerland: [
    { name: 'UBS', note: 'The largest bank, now including the former Credit Suisse mortgage book. Offers fixed-rate mortgages of two to fifteen years and SARON mortgages tied to the Swiss overnight rate.' },
    { name: 'Raiffeisen', note: 'The cooperative Raiffeisen banks are the biggest group in Swiss residential mortgages by number of customers, with local decision-making.' },
    { name: 'Cantonal banks', short: 'Kantonalbank', note: 'Each canton has its own bank (ZKB in Zurich, BCV in Vaud and so on), usually the strongest lender in its region.' },
    { name: 'Insurers & pension funds', short: 'Swiss Life', note: 'Swiss Life, AXA, Zurich and several pension funds lend directly and are often cheapest on long fixed terms. All lenders apply the same rules: at least 20% equity, and housing costs calculated at an imputed rate of about 5% must stay within a third of gross income.', ltv: 'up to 80%' },
  ],
  portugal: [
    { name: 'Caixa Geral de Depósitos', short: 'CGD', note: 'The state-owned bank and largest mortgage lender. Offers variable (Euribor-indexed), fixed and mixed-rate crédito habitação.' },
    { name: 'Millennium bcp', note: 'The largest private bank. As at other Portuguese banks, the spread is lower if you take linked products such as salary domiciliation, cards and insurance.' },
    { name: 'Santander Portugal', short: 'Santander', note: 'A leading lender to residents and to foreign buyers. Non-residents are usually limited to a lower loan-to-value than residents buying a main home.' },
    { name: 'Novo Banco & BPI', short: 'Novo Banco', note: 'Both compete on mixed-rate offers. Banco de Portugal recommends a maximum 90% loan-to-value on a main home and limits on repayments relative to income and on loan term by age.', ltv: 'up to 90%' },
  ],
  malaysia: [
    { name: 'Maybank', note: 'Malaysia\'s largest bank. Offers conventional home loans and Islamic home financing, priced against the bank\'s Standardised Base Rate, which moves with Bank Negara\'s Overnight Policy Rate.' },
    { name: 'CIMB', note: 'The second-largest lender, with flexi loans that let extra payments reduce interest while staying withdrawable.' },
    { name: 'Public Bank', note: 'Known for a large, conservative mortgage book and consistent pricing for salaried borrowers.' },
    { name: 'RHB & Hong Leong Bank', short: 'RHB', note: 'Both are active through developer panels for new projects. The margin of finance is up to 90% on a borrower\'s first two homes and 70% from the third.', ltv: 'up to 90%' },
    { name: 'LPPSA', note: 'The Public Sector Home Financing Board, which finances home purchases for civil servants on terms separate from the commercial banks.' },
  ],
  japan: [
    { name: 'Flat 35', note: 'A fixed-rate loan of up to 35 years backed by the Japan Housing Finance Agency and sold through partner institutions. The rate is fixed for the whole term, unlike most Japanese bank loans.' },
    { name: 'MUFG Bank, SMBC & Mizuho', short: 'MUFG', note: 'The three megabanks. Most of their borrowers choose a variable rate, which is reviewed twice a year, with repayments normally adjusted only every five years.' },
    { name: 'Online banks', short: 'SBI Sumishin', note: 'SBI Sumishin Net Bank, au Jibun Bank and PayPay Bank usually offer the lowest variable rates and include group credit life insurance with illness cover.' },
    { name: 'Lenders for foreign residents', short: 'SBI Shinsei', note: 'Most banks require permanent residency. SMBC Prestia, SBI Shinsei Bank and a few others will consider foreign residents without it, usually with a larger down payment.' },
  ],
  italy: [
    { name: 'Intesa Sanpaolo', note: 'Italy\'s largest bank. Offers fixed-rate mutui priced off the swap (IRS) rate and variable-rate loans priced off Euribor, on terms of up to 30 years or more for younger buyers.' },
    { name: 'UniCredit', note: 'The second-largest lender. As is standard in Italy, the loan covers up to 80% of the lower of purchase price and appraised value.', ltv: 'up to 80%' },
    { name: 'Banco BPM', note: 'Strong in the north. Lends to residents and, more selectively, to non-resident buyers, who normally face a lower loan-to-value.' },
    { name: 'Crédit Agricole Italia & BNL', short: 'Crédit Agricole', note: 'French-owned banks that often lead the comparison sites on fixed rates and offer online processing.' },
    { name: 'Fondo Garanzia Prima Casa', short: 'Consap', note: 'The state first-home guarantee fund, run by Consap. For eligible buyers it backs part of the loan, which lets participating banks lend above the usual 80%.' },
  ],
  'new-zealand': [
    { name: 'ANZ', note: 'New Zealand\'s largest bank and biggest home lender. Most borrowers fix their rate for one or two years and split the loan across more than one fixed term.' },
    { name: 'ASB', note: 'Owned by Commonwealth Bank of Australia. Offers fixed, floating and revolving-credit home loans.' },
    { name: 'BNZ & Westpac', short: 'BNZ', note: 'The other two Australian-owned majors. Reserve Bank rules limit how much lending banks can do at high loan-to-value and at high debt-to-income, so a deposit under 20% narrows your options.' },
    { name: 'Kiwibank', note: 'The New Zealand-owned bank, often competitive on one and two-year fixed rates and active with first-home buyers.' },
    { name: 'Kāinga Ora First Home Loan', short: 'Kāinga Ora', note: 'A scheme for buyers with a deposit of 5%. The loan is issued by a participating lender and underwritten by Kāinga Ora, subject to income caps.', ltv: 'up to 95%' },
  ],
  qatar: [
    { name: 'QNB', note: 'The largest bank in Qatar and the region. Lends to citizens and to expatriate residents, who may buy in designated freehold and leasehold zones.' },
    { name: 'Commercial Bank & Doha Bank', short: 'Commercial Bank', note: 'Conventional banks with mortgage products for residents. Qatar Central Bank sets different loan-to-value and term ceilings for citizens, residents and non-residents.' },
    { name: 'QIB & Dukhan Bank', short: 'QIB', note: 'Islamic banks offering Sharia-compliant home finance, usually structured as Ijara or Murabaha rather than an interest-bearing loan.' },
    { name: 'Qatar Development Bank', short: 'QDB', note: 'Administers the state housing loans available to Qatari citizens under the national housing system.' },
  ],
  kosovo: [
    { name: 'Raiffeisen Bank Kosovo', short: 'Raiffeisen', note: 'The largest bank in Kosovo and a leading home lender. Kosovo uses the euro, so loans carry no exchange-rate risk for euro earners.' },
    { name: 'ProCredit Bank', short: 'ProCredit', note: 'A German-owned bank focused on salaried clients and small businesses, with fixed-rate housing loans.' },
    { name: 'NLB Banka', short: 'NLB', note: 'Part of Slovenia\'s NLB Group. Offers purchase, construction and renovation loans, with terms that are shorter than in Western Europe.' },
    { name: 'TEB & BKT Kosova', short: 'TEB', note: 'Turkish-linked banks that compete on rate promotions and partner offers with developers, particularly for new apartments in Pristina.' },
  ],
  'papua-new-guinea': [
    { name: 'BSP (Bank South Pacific)', short: 'BSP', note: 'The largest bank in Papua New Guinea. Alongside standard home loans it runs the First Home Ownership Scheme loan, a concessional-rate product backed by government funding.' },
    { name: 'Kina Bank', note: 'The second commercial bank for retail lending, having taken over ANZ\'s retail customers in 2019. Offers home loans for purchase and construction on registered title.' },
    { name: 'Westpac PNG', short: 'Westpac', note: 'Lends mainly to salaried borrowers in Port Moresby and Lae. Lenders require registered state leasehold title, so customary land generally cannot be mortgaged.' },
    { name: 'Nasfund & Nambawan Super', short: 'Nasfund', note: 'The two big superannuation funds run housing advance schemes that let members use part of their savings toward a home, often together with a bank loan.' },
  ],
  liechtenstein: [
    { name: 'LLB (Liechtensteinische Landesbank)', short: 'LLB', note: 'The main mortgage lender in the Principality. Loans are in Swiss francs and follow Swiss-style structures: fixed-rate terms or SARON-based mortgages.' },
    { name: 'VP Bank', note: 'The second domestic bank lending on local residential property, with the same franc-denominated products.' },
    { name: 'LGT', note: 'Best known for private banking, and also provides mortgages for residents. Property purchase in Liechtenstein is tightly restricted for non-residents, so lending is essentially a local market.' },
  ],
  eswatini: [
    { name: 'Standard Bank Eswatini', short: 'Standard Bank', note: 'One of the main home lenders. The lilangeni is pegged to the South African rand, so lending rates follow the local prime rate, which moves closely with South Africa\'s.' },
    { name: 'FNB Eswatini', short: 'FNB', note: 'Part of FirstRand. Offers home loans for purchase and building on title-deed land, priced relative to prime.' },
    { name: 'Nedbank Eswatini', short: 'Nedbank', note: 'The third South African-linked bank, with standard variable-rate home loans.' },
    { name: 'Eswatini Bank & the building society', short: 'Eswatini Bank', note: 'The state-owned bank and the country\'s building society (long known as Swaziland Building Society) have traditionally been the largest providers of housing finance to local buyers.' },
  ],
  vanuatu: [
    { name: 'National Bank of Vanuatu', short: 'NBV', note: 'The locally owned bank with branches across the islands, and the main lender to ni-Vanuatu households.' },
    { name: 'BSP Vanuatu', short: 'BSP', note: 'Bank South Pacific took over Westpac\'s Vanuatu operations in 2016 and offers housing loans in vatu.' },
    { name: 'ANZ Vanuatu', short: 'ANZ', note: 'Lends to residents and expatriates, mainly in Port Vila and Luganville. Land is held on leases of up to 75 years rather than freehold, so the mortgage is taken over the lease.' },
    { name: 'BRED (Vanuatu)', short: 'BRED', note: 'Part of the French Banque Populaire group, competing for salaried and expatriate borrowers.' },
  ],
  australia: [
    { name: 'Commonwealth Bank', short: 'CommBank', note: 'Australia\'s largest home lender. Most borrowers take a variable rate, often with an offset account, or fix part of the loan for one to three years.' },
    { name: 'Westpac', note: 'The second-largest lender, including the St.George, Bank of Melbourne and BankSA brands.' },
    { name: 'NAB & ANZ', short: 'NAB', note: 'The other two major banks. Lenders must test that you could still afford repayments at a rate three percentage points above the one offered.' },
    { name: 'Macquarie & online lenders', short: 'Macquarie', note: 'Macquarie Bank and non-bank lenders have taken share with fast approvals and low variable rates. Mortgage brokers arrange roughly seven in ten new Australian home loans.' },
    { name: 'First Home Guarantee', note: 'A federal scheme that lets eligible first-home buyers purchase with a 5% deposit without paying lenders mortgage insurance, which normally applies above 80% loan-to-value.', ltv: 'up to 95%' },
  ],
  honduras: [
    { name: 'Banco Atlántida', short: 'Atlántida', note: 'One of the largest banks in Honduras. Offers crédito hipotecario in lempiras and in US dollars; a dollar loan suits borrowers with dollar income, such as remittance-receiving households.' },
    { name: 'Banco Ficohsa', short: 'Ficohsa', note: 'A leading private bank with mortgage products for residents and for Hondurans living abroad who are buying at home.' },
    { name: 'BAC Credomatic', short: 'BAC', note: 'The regional Central American bank, active in mid and upper-segment housing in Tegucigalpa and San Pedro Sula.' },
    { name: 'RAP & BANHPROVI funds', short: 'RAP', note: 'The private contributions scheme (RAP) and the state housing bank BANHPROVI fund lower-rate housing credit that is delivered through the commercial banks to eligible buyers.' },
  ],
};
