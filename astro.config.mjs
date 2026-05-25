import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://calctube.com',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Differentiate priorities so Google focuses crawl budget on important pages.
      // Homepage 1.0, category hubs 0.9, calculator hubs 0.8, long-tail spokes 0.5.
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;

        // Homepage
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
          return item;
        }

        // Category indexes
        if (
          path === '/finance/' ||
          path === '/health/' ||
          path === '/math/' ||
          path === '/conversions/' ||
          path === '/date-time/' ||
          path === '/construction/'
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
          return item;
        }

        // Calculator-hub pages (each calculator's main URL)
        if (
          path === '/finance/mortgage-calculator/' ||
          path === '/finance/emi-calculator/' ||
          path === '/finance/loan-calculator/' ||
          path === '/finance/sip-calculator/' ||
          path === '/finance/compound-interest-calculator/' ||
          path === '/finance/fd-calculator/' ||
          path === '/finance/ppf-calculator/' ||
          path === '/finance/rd-calculator/' ||
          path === '/finance/hra-calculator/' ||
          path === '/finance/gst-calculator/' ||
          path === '/health/bmi-calculator/' ||
          path === '/health/bmr-calculator/' ||
          path === '/health/tdee-calculator/' ||
          path === '/health/calorie-calculator/' ||
          path === '/math/percentage-calculator/' ||
          path === '/math/tip-calculator/' ||
          path === '/math/discount-calculator/' ||
          path === '/date-time/age-calculator/' ||
          path === '/date-time/date-difference-calculator/' ||
          path === '/finance/retirement-calculator/' ||
          path === '/finance/inflation-calculator/' ||
          path === '/finance/net-worth-calculator/' ||
          path === '/conversions/currency/' ||
          path === '/finance/mortgage-calculator/cities/'
        ) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
          return item;
        }

        // Long-tail programmatic SEO spokes
        if (
          path.startsWith('/conversions/currency/') ||
          path.startsWith('/finance/mortgage-calculator/') ||
          path.startsWith('/finance/emi-calculator/') ||
          path.startsWith('/finance/income-tax-india/')
        ) {
          item.priority = 0.5;
          item.changefreq = 'monthly';
          return item;
        }

        // Author pages
        if (path.startsWith('/authors/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
          return item;
        }

        // Comparison/static pages (about, legal, etc.)
        item.priority = 0.4;
        item.changefreq = 'monthly';
        return item;
      },
    }),
  ],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
