/**
 * Shared currency utilities for all calculator widgets.
 *
 * Strategy:
 *   • Country pages pass an explicit `currency` prop (e.g., 'AED' for /uae/, 'INR' for /india/).
 *   • Global calculator pages omit the prop; the widget auto-detects from `navigator.language`
 *     and exposes a dropdown so users can override.
 *   • All formatting goes through Intl.NumberFormat for proper grouping (1,00,000 in en-IN,
 *     1,000,000 in en-US, etc.).
 */

export interface CurrencyOption {
  code: string;        // ISO 4217 (e.g., 'USD', 'AED', 'INR')
  symbol: string;      // Display symbol ($, ₹, AED, etc.)
  label: string;       // Dropdown label ("US Dollar", "Indian Rupee")
  locale: string;      // BCP-47 for Intl.NumberFormat ('en-US', 'en-IN')
  flag: string;        // Emoji flag for visual recognition
}

/**
 * 30 most commonly-used currencies. Covers ~95% of global mortgage / loan / EMI traffic
 * for Calctube. Ordered by approximate global usage in finance contexts.
 */
export const CURRENCIES: CurrencyOption[] = [
  { code: 'USD', symbol: '$',   label: 'US Dollar',           locale: 'en-US', flag: '🇺🇸' },
  { code: 'INR', symbol: '₹',   label: 'Indian Rupee',        locale: 'en-IN', flag: '🇮🇳' },
  { code: 'EUR', symbol: '€',   label: 'Euro',                locale: 'de-DE', flag: '🇪🇺' },
  { code: 'GBP', symbol: '£',   label: 'British Pound',       locale: 'en-GB', flag: '🇬🇧' },
  { code: 'AED', symbol: 'AED', label: 'UAE Dirham',          locale: 'en-AE', flag: '🇦🇪' },
  { code: 'SAR', symbol: 'SAR', label: 'Saudi Riyal',         locale: 'ar-SA', flag: '🇸🇦' },
  { code: 'CAD', symbol: 'C$',  label: 'Canadian Dollar',     locale: 'en-CA', flag: '🇨🇦' },
  { code: 'AUD', symbol: 'A$',  label: 'Australian Dollar',   locale: 'en-AU', flag: '🇦🇺' },
  { code: 'SGD', symbol: 'S$',  label: 'Singapore Dollar',    locale: 'en-SG', flag: '🇸🇬' },
  { code: 'JPY', symbol: '¥',   label: 'Japanese Yen',        locale: 'ja-JP', flag: '🇯🇵' },
  { code: 'CNY', symbol: '¥',   label: 'Chinese Yuan',        locale: 'zh-CN', flag: '🇨🇳' },
  { code: 'HKD', symbol: 'HK$', label: 'Hong Kong Dollar',    locale: 'en-HK', flag: '🇭🇰' },
  { code: 'NZD', symbol: 'NZ$', label: 'New Zealand Dollar',  locale: 'en-NZ', flag: '🇳🇿' },
  { code: 'CHF', symbol: 'CHF', label: 'Swiss Franc',         locale: 'de-CH', flag: '🇨🇭' },
  { code: 'MYR', symbol: 'RM',  label: 'Malaysian Ringgit',   locale: 'ms-MY', flag: '🇲🇾' },
  { code: 'THB', symbol: '฿',   label: 'Thai Baht',           locale: 'th-TH', flag: '🇹🇭' },
  { code: 'IDR', symbol: 'Rp',  label: 'Indonesian Rupiah',   locale: 'id-ID', flag: '🇮🇩' },
  { code: 'PHP', symbol: '₱',   label: 'Philippine Peso',     locale: 'en-PH', flag: '🇵🇭' },
  { code: 'PKR', symbol: '₨',   label: 'Pakistani Rupee',     locale: 'en-PK', flag: '🇵🇰' },
  { code: 'BDT', symbol: '৳',   label: 'Bangladeshi Taka',    locale: 'bn-BD', flag: '🇧🇩' },
  { code: 'LKR', symbol: 'Rs',  label: 'Sri Lankan Rupee',    locale: 'si-LK', flag: '🇱🇰' },
  { code: 'NPR', symbol: 'Rs',  label: 'Nepalese Rupee',      locale: 'en-NP', flag: '🇳🇵' },
  { code: 'QAR', symbol: 'QAR', label: 'Qatari Riyal',        locale: 'ar-QA', flag: '🇶🇦' },
  { code: 'KWD', symbol: 'KWD', label: 'Kuwaiti Dinar',       locale: 'ar-KW', flag: '🇰🇼' },
  { code: 'BHD', symbol: 'BHD', label: 'Bahraini Dinar',      locale: 'ar-BH', flag: '🇧🇭' },
  { code: 'OMR', symbol: 'OMR', label: 'Omani Rial',          locale: 'ar-OM', flag: '🇴🇲' },
  { code: 'EGP', symbol: 'E£',  label: 'Egyptian Pound',      locale: 'ar-EG', flag: '🇪🇬' },
  { code: 'ZAR', symbol: 'R',   label: 'South African Rand',  locale: 'en-ZA', flag: '🇿🇦' },
  { code: 'NGN', symbol: '₦',   label: 'Nigerian Naira',      locale: 'en-NG', flag: '🇳🇬' },
  { code: 'BRL', symbol: 'R$',  label: 'Brazilian Real',      locale: 'pt-BR', flag: '🇧🇷' },
  { code: 'MXN', symbol: 'Mex$',label: 'Mexican Peso',        locale: 'es-MX', flag: '🇲🇽' },
  { code: 'TRY', symbol: '₺',   label: 'Turkish Lira',        locale: 'tr-TR', flag: '🇹🇷' },
];

const BY_CODE = new Map(CURRENCIES.map((c) => [c.code, c]));

/** Sensible default if nothing else is known. */
export const DEFAULT_CURRENCY: CurrencyOption = CURRENCIES[0]; // USD

/** Look up a CurrencyOption by ISO code. Falls back to USD. */
export function getCurrency(code: string | undefined | null): CurrencyOption {
  if (!code) return DEFAULT_CURRENCY;
  return BY_CODE.get(code.toUpperCase()) || DEFAULT_CURRENCY;
}

/** Format a number using a given currency. Strips fractional digits for whole-rupee/dollar display. */
export function formatMoney(value: number, currency: CurrencyOption, maxFractionDigits = 0): string {
  try {
    return new Intl.NumberFormat(currency.locale, {
      style: 'currency',
      currency: currency.code,
      maximumFractionDigits: maxFractionDigits,
    }).format(value);
  } catch {
    // Fallback if Intl rejects an exotic code/locale combo
    return `${currency.symbol}${value.toLocaleString('en-US', { maximumFractionDigits: maxFractionDigits })}`;
  }
}

/** Compact form for headline prose: $350K in en-US, ₹3.5L in en-IN (Intl handles lakh/crore). */
export function formatMoneyCompact(value: number, currency: CurrencyOption): string {
  try {
    return new Intl.NumberFormat(currency.locale, {
      style: 'currency',
      currency: currency.code,
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return formatMoney(value, currency);
  }
}

/**
 * Auto-detect currency from browser. Used by global calculator pages.
 * Order of signals:
 *   1. Stored user preference (localStorage `calctube-currency`)
 *   2. navigator.language (e.g., 'en-IN' → INR, 'en-AE' → AED)
 *   3. Intl.DateTimeFormat resolved locale
 *   4. Default (USD)
 *
 * SSR-safe: returns DEFAULT_CURRENCY when window is undefined.
 */
export function detectClientCurrency(): CurrencyOption {
  if (typeof window === 'undefined') return DEFAULT_CURRENCY;

  // 1. User preference
  try {
    const stored = window.localStorage.getItem('calctube-currency');
    if (stored) {
      const found = BY_CODE.get(stored.toUpperCase());
      if (found) return found;
    }
  } catch {
    /* localStorage unavailable */
  }

  // 2. + 3. navigator.language / DateTimeFormat
  const sources: string[] = [];
  if (navigator.language) sources.push(navigator.language);
  if (Array.isArray(navigator.languages)) sources.push(...navigator.languages);
  try {
    sources.push(Intl.DateTimeFormat().resolvedOptions().locale);
  } catch { /* ignore */ }

  for (const lang of sources) {
    const parts = lang.split('-');
    const region = (parts[1] || '').toUpperCase();
    const hit = REGION_TO_CURRENCY[region];
    if (hit) {
      const found = BY_CODE.get(hit);
      if (found) return found;
    }
  }

  return DEFAULT_CURRENCY;
}

/** ISO 3166-1 alpha-2 region → ISO 4217 currency code. Subset matching CURRENCIES above. */
const REGION_TO_CURRENCY: Record<string, string> = {
  US: 'USD', IN: 'INR', GB: 'GBP', AE: 'AED', SA: 'SAR',
  CA: 'CAD', AU: 'AUD', SG: 'SGD', JP: 'JPY', CN: 'CNY', HK: 'HKD',
  NZ: 'NZD', CH: 'CHF', MY: 'MYR', TH: 'THB', ID: 'IDR', PH: 'PHP',
  PK: 'PKR', BD: 'BDT', LK: 'LKR', NP: 'NPR', QA: 'QAR', KW: 'KWD',
  BH: 'BHD', OM: 'OMR', EG: 'EGP', ZA: 'ZAR', NG: 'NGN', BR: 'BRL',
  MX: 'MXN', TR: 'TRY',
  // EUR countries (all use Euro)
  DE: 'EUR', FR: 'EUR', IT: 'EUR', ES: 'EUR', NL: 'EUR', BE: 'EUR',
  AT: 'EUR', IE: 'EUR', PT: 'EUR', GR: 'EUR', FI: 'EUR', LU: 'EUR',
};

/** Persist user's currency choice (called from dropdown onChange). */
export function setStoredCurrency(code: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem('calctube-currency', code.toUpperCase());
  } catch {
    /* localStorage unavailable */
  }
  // Broadcast so non-widget copy (the hero "Quick answer" figures) follows the
  // dropdown too. Without this the headline and the calculator can disagree.
  try {
    window.dispatchEvent(new CustomEvent('calctube:currency', { detail: code.toUpperCase() }));
  } catch {
    /* CustomEvent unavailable */
  }
}
