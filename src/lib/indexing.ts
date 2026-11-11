import evidence from '../data/index-evidence.json';

/**
 * Evidence-gated indexing for the three programmatic tiers Google has ignored.
 *
 * By November 2026 Google indexed 115 of ~900 sitemap URLs and was dropping
 * hand-built pages (guides, India calculators) while holding on to templated
 * ones. Six months of Search Console data showed three tiers earning almost
 * nothing: currency pairs (1 click), Indian city pages (0) and unit-converter
 * pairs (0). Most of their URLs were never crawled at all.
 *
 * A page in one of these tiers stays indexable only if Google has shown real
 * interest in it: it is in the index, or it has earned at least one search
 * impression. Every other page in the tier still builds and still works for
 * visitors, but it is noindexed, left out of the sitemap, and not linked with a
 * crawlable <a>. That stops the site advertising ~450 URLs Google declined and
 * points what little crawl and link equity there is at pages that can rank.
 *
 * To bring a page back, add evidence to src/data/index-evidence.json (refresh it
 * from Search Console) rather than special-casing it here. astro.config.mjs
 * applies the same rule to the sitemap, reading the same JSON.
 */
export type PrunedTier = 'currency' | 'city' | 'unit';

const keep: Record<PrunedTier, Set<string>> = {
  currency: new Set([...evidence.currency.indexed, ...evidence.currency.impressions]),
  city: new Set([...evidence.city.indexed, ...evidence.city.impressions]),
  unit: new Set([...evidence.unit.indexed, ...evidence.unit.impressions]),
};

/** True when a page in a pruned tier has earned its place in the index. */
export function isIndexable(tier: PrunedTier, slug: string): boolean {
  return keep[tier].has(slug);
}

/** Keeps only the items whose page is indexable. For "related pages" link lists. */
export function onlyIndexable<T extends { slug: string }>(tier: PrunedTier, items: T[]): T[] {
  return items.filter((item) => keep[tier].has(item.slug));
}
