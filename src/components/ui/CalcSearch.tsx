import { useState, useMemo, useRef, useEffect } from 'react';
import type { Calculator } from '../../data/calculators';

interface Props {
  calculators: Calculator[];
}

export default function CalcSearch({ calculators }: Props) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return calculators
      .filter((c) => {
        return (
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.keywords.some((k) => k.toLowerCase().includes(q)) ||
          c.category.toLowerCase().includes(q)
        );
      })
      .slice(0, 8);
  }, [query, calculators]);

  // Reset selection when results change
  useEffect(() => {
    setSelectedIdx(0);
  }, [results.length]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIdx]) {
      e.preventDefault();
      window.location.href = results[selectedIdx].href;
    } else if (e.key === 'Escape') {
      setFocused(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={handleKey}
          placeholder="Search 100+ calculators..."
          className="w-full pl-12 pr-12 py-4 text-base md:text-lg rounded-2xl border-2 border-slate-200 bg-white shadow-lg focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-all placeholder:text-slate-400"
          aria-label="Search calculators"
          aria-autocomplete="list"
          aria-controls="search-results"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
            aria-label="Clear search"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {focused && results.length > 0 && (
        <ul
          id="search-results"
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 z-50 max-h-[28rem] overflow-y-auto"
          role="listbox"
        >
          {results.map((c, idx) => (
            <li key={c.slug} role="option" aria-selected={idx === selectedIdx}>
              <a
                href={c.href}
                className={`flex items-start gap-3 px-4 py-3 no-underline transition-colors ${
                  idx === selectedIdx ? 'bg-brand-50' : 'hover:bg-slate-50'
                }`}
                onMouseEnter={() => setSelectedIdx(idx)}
              >
                <span className="text-2xl flex-shrink-0">{c.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900">{c.name}</span>
                    {c.status === 'coming-soon' && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">
                        Soon
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-slate-600 truncate">{c.description}</div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}

      {focused && query.trim() && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 z-50 text-center">
          <div className="text-3xl mb-2">🔍</div>
          <div className="font-medium text-slate-900">No calculator found for "{query}"</div>
          <p className="text-sm text-slate-600 mt-1">
            <a href="/contact/" className="text-brand-600 hover:underline">Request this calculator</a> and we'll build it.
          </p>
        </div>
      )}
    </div>
  );
}
