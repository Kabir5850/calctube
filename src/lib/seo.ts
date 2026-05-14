/**
 * SEO/AEO utility functions and shared JSON-LD generators.
 * Used by every page to ensure consistent schema and meta.
 */

export const SITE = {
  name: 'Calctube',
  domain: 'calctube.com',
  url: 'https://calctube.com',
  description:
    'Free online calculators for finance, health, math, conversions, and more. Fast, accurate, no signup required.',
  twitter: '@calctube',
  defaultOgImage: '/og-default.png',
};

export interface CalculatorMeta {
  slug: string;
  name: string;
  description: string;
  category: 'finance' | 'health' | 'math' | 'conversion' | 'date-time' | 'construction' | 'auto' | 'other';
  keywords: string[];
  lastUpdated: string; // ISO date
  ratingValue?: string;
  ratingCount?: string;
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: SITE.description,
    sameAs: [
      `https://twitter.com/${SITE.twitter.replace('@', '')}`,
      `https://linkedin.com/company/${SITE.name.toLowerCase()}`,
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildCalculatorSchema(meta: CalculatorMeta, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${SITE.url}${path}#app`,
    name: meta.name,
    url: `${SITE.url}${path}`,
    description: meta.description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any (Web)',
    browserRequirements: 'Requires JavaScript',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@id': `${SITE.url}/#organization` },
    datePublished: meta.lastUpdated,
    dateModified: meta.lastUpdated,
    keywords: meta.keywords.join(', '),
    ...(meta.ratingValue && meta.ratingCount
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: meta.ratingValue,
            ratingCount: meta.ratingCount,
          },
        }
      : {}),
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE.url}${item.url}`,
    })),
  };
}

export function buildFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}
