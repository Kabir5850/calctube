import { useState, useMemo } from 'react';

interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

function formatCurrency(value: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

function calculateMortgage(
  principal: number,
  annualRatePct: number,
  years: number
): {
  monthlyPayment: number;
  totalInterest: number;
  totalPaid: number;
  schedule: AmortizationRow[];
} {
  const monthlyRate = annualRatePct / 100 / 12;
  const numPayments = years * 12;

  if (monthlyRate === 0 || numPayments === 0) {
    const payment = numPayments > 0 ? principal / numPayments : 0;
    return {
      monthlyPayment: payment,
      totalInterest: 0,
      totalPaid: principal,
      schedule: [],
    };
  }

  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);

  const schedule: AmortizationRow[] = [];
  let balance = principal;
  for (let m = 1; m <= numPayments; m++) {
    const interest = balance * monthlyRate;
    const principalPaid = monthlyPayment - interest;
    balance -= principalPaid;
    schedule.push({
      month: m,
      payment: monthlyPayment,
      principal: principalPaid,
      interest,
      balance: Math.max(0, balance),
    });
  }

  return {
    monthlyPayment,
    totalInterest: monthlyPayment * numPayments - principal,
    totalPaid: monthlyPayment * numPayments,
    schedule,
  };
}

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [interestRate, setInterestRate] = useState<number>(7.0);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  const result = useMemo(
    () => calculateMortgage(loanAmount, interestRate, loanTerm),
    [loanAmount, interestRate, loanTerm]
  );

  const yearlySummary = useMemo(() => {
    const summary: Array<{
      year: number;
      yearlyPayment: number;
      yearlyPrincipal: number;
      yearlyInterest: number;
      endingBalance: number;
    }> = [];
    for (let y = 1; y <= loanTerm; y++) {
      const startIdx = (y - 1) * 12;
      const endIdx = y * 12;
      const slice = result.schedule.slice(startIdx, endIdx);
      if (slice.length === 0) break;
      summary.push({
        year: y,
        yearlyPayment: slice.reduce((s, r) => s + r.payment, 0),
        yearlyPrincipal: slice.reduce((s, r) => s + r.principal, 0),
        yearlyInterest: slice.reduce((s, r) => s + r.interest, 0),
        endingBalance: slice[slice.length - 1].balance,
      });
    }
    return summary;
  }, [result, loanTerm]);

  // Calculate principal vs interest ratio for visualization
  const interestPct = result.totalInterest > 0
    ? Math.round((result.totalInterest / result.totalPaid) * 100)
    : 0;
  const principalPct = 100 - interestPct;

  return (
    <div className="relative not-prose">
      <div className="bg-white border-[2.5px] border-ink-900 rounded-3xl overflow-hidden shadow-sticker">
        {/* Sticker header */}
        <div className="bg-lime-accent border-b-[2.5px] border-ink-900 px-5 sm:px-7 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏠</span>
            <h2
              className="!text-lg sm:!text-xl !my-0 !text-ink-900 font-extrabold"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.02em' }}
            >
              Mortgage Calculator
            </h2>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-900">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink-900 opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ink-900"></span>
            </span>
            Live
          </span>
        </div>

        {/* Inputs */}
        <div className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 bg-ink-50">
          {/* Loan amount */}
          <div>
            <label
              htmlFor="loan-amount"
              className="block text-xs font-extrabold uppercase tracking-wider text-ink-700 mb-2"
            >
              Loan Amount
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500 font-bold pointer-events-none">
                $
              </span>
              <input
                id="loan-amount"
                type="number"
                min={1000}
                step={1000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value) || 0)}
                className="w-full pl-7 pr-3 py-3 bg-white border-[2.5px] border-ink-900 rounded-xl text-base font-bold focus:outline-none focus:ring-4 focus:ring-lime-accent focus:ring-offset-0 transition-all"
                inputMode="numeric"
              />
            </div>
            <input
              type="range"
              min={50000}
              max={2000000}
              step={5000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full mt-2 accent-lime-accent"
              aria-label="Loan amount slider"
            />
          </div>

          {/* Interest rate */}
          <div>
            <label
              htmlFor="interest-rate"
              className="block text-xs font-extrabold uppercase tracking-wider text-ink-700 mb-2"
            >
              Interest Rate
            </label>
            <div className="relative">
              <input
                id="interest-rate"
                type="number"
                min={0}
                max={30}
                step={0.05}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value) || 0)}
                className="w-full pl-3.5 pr-8 py-3 bg-white border-[2.5px] border-ink-900 rounded-xl text-base font-bold focus:outline-none focus:ring-4 focus:ring-pink-accent focus:ring-offset-0 transition-all"
                inputMode="decimal"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-500 font-bold pointer-events-none">
                %
              </span>
            </div>
            <input
              type="range"
              min={0.5}
              max={15}
              step={0.05}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full mt-2 accent-pink-accent"
              aria-label="Interest rate slider"
            />
          </div>

          {/* Loan term */}
          <div>
            <label
              htmlFor="loan-term"
              className="block text-xs font-extrabold uppercase tracking-wider text-ink-700 mb-2"
            >
              Term (years)
            </label>
            <select
              id="loan-term"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full px-3.5 py-3 bg-white border-[2.5px] border-ink-900 rounded-xl text-base font-bold focus:outline-none focus:ring-4 focus:ring-yellow-accent focus:ring-offset-0 transition-all cursor-pointer"
            >
              {[5, 10, 15, 20, 25, 30, 35, 40].map((y) => (
                <option key={y} value={y}>
                  {y} years
                </option>
              ))}
            </select>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[15, 20, 30].map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setLoanTerm(y)}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold border-2 border-ink-900 transition-all ${
                    loanTerm === y
                      ? 'bg-yellow-accent text-ink-900 shadow-sticker-sm'
                      : 'bg-white text-ink-700 hover:bg-yellow-accent/40'
                  }`}
                >
                  {y}y
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results — big sticker stat cards */}
        <div className="p-5 sm:p-7 bg-white grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-t-[2.5px] border-ink-900">
          {/* Monthly payment — featured */}
          <div className="bg-lime-accent border-[2.5px] border-ink-900 rounded-2xl p-5 shadow-sticker-sm">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-ink-900 mb-1">
              Monthly Payment
            </div>
            <div
              className="text-3xl sm:text-4xl font-extrabold text-ink-900 leading-none"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.04em' }}
            >
              {formatCurrency(result.monthlyPayment)}
            </div>
            <div className="text-xs text-ink-800 mt-2 font-semibold">/month</div>
          </div>

          {/* Total interest */}
          <div className="bg-pink-accent border-[2.5px] border-ink-900 rounded-2xl p-5 shadow-sticker-sm">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-white mb-1">
              Total Interest
            </div>
            <div
              className="text-3xl sm:text-4xl font-extrabold text-white leading-none"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.04em' }}
            >
              {formatCurrency(result.totalInterest)}
            </div>
            <div className="text-xs text-white/90 mt-2 font-semibold">
              {interestPct}% of total
            </div>
          </div>

          {/* Total paid */}
          <div className="bg-yellow-accent border-[2.5px] border-ink-900 rounded-2xl p-5 shadow-sticker-sm">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-ink-900 mb-1">
              Total Paid
            </div>
            <div
              className="text-3xl sm:text-4xl font-extrabold text-ink-900 leading-none"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.04em' }}
            >
              {formatCurrency(result.totalPaid)}
            </div>
            <div className="text-xs text-ink-800 mt-2 font-semibold">over {loanTerm} years</div>
          </div>
        </div>

        {/* Principal vs Interest visualization */}
        <div className="px-5 sm:px-7 pb-5 sm:pb-7 bg-white">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-ink-700 mb-2">
            Principal vs Interest Split
          </div>
          <div className="relative h-10 rounded-full border-[2.5px] border-ink-900 overflow-hidden bg-white">
            <div
              className="absolute inset-y-0 left-0 bg-lime-accent flex items-center justify-center transition-all duration-300"
              style={{ width: `${principalPct}%` }}
            >
              {principalPct >= 15 && (
                <span className="text-[11px] sm:text-xs font-extrabold text-ink-900 whitespace-nowrap px-2">
                  {principalPct}% principal
                </span>
              )}
            </div>
            <div
              className="absolute inset-y-0 right-0 bg-pink-accent flex items-center justify-center transition-all duration-300"
              style={{ width: `${interestPct}%` }}
            >
              {interestPct >= 15 && (
                <span className="text-[11px] sm:text-xs font-extrabold text-white whitespace-nowrap px-2">
                  {interestPct}% interest
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Amortization toggle */}
        <div className="px-5 sm:px-7 pb-5 sm:pb-7 bg-white">
          <button
            onClick={() => setShowSchedule((v) => !v)}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border-[2.5px] border-ink-900 font-extrabold text-sm transition-all ${
              showSchedule
                ? 'bg-ink-900 text-white shadow-sticker-sm'
                : 'bg-white text-ink-900 hover:bg-cyan-accent shadow-sticker-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-sticker'
            }`}
          >
            <svg
              className={`w-4 h-4 transition-transform ${showSchedule ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            {showSchedule ? 'Hide' : 'Show'} amortization schedule
          </button>
        </div>

        {/* Amortization schedule table */}
        {showSchedule && (
          <div className="px-5 sm:px-7 pb-5 sm:pb-7 bg-white overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-ink-900 text-white">
                <tr>
                  <th className="text-left px-3 py-2.5 font-extrabold uppercase text-xs tracking-wider rounded-tl-xl">
                    Year
                  </th>
                  <th className="text-right px-3 py-2.5 font-extrabold uppercase text-xs tracking-wider">
                    Payment
                  </th>
                  <th className="text-right px-3 py-2.5 font-extrabold uppercase text-xs tracking-wider">
                    Principal
                  </th>
                  <th className="text-right px-3 py-2.5 font-extrabold uppercase text-xs tracking-wider">
                    Interest
                  </th>
                  <th className="text-right px-3 py-2.5 font-extrabold uppercase text-xs tracking-wider rounded-tr-xl">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {yearlySummary.map((row, idx) => (
                  <tr
                    key={row.year}
                    className={`border-b-2 border-ink-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-ink-50'}`}
                  >
                    <td className="px-3 py-2.5 font-extrabold text-ink-900">{row.year}</td>
                    <td className="px-3 py-2.5 text-right font-semibold text-ink-900">
                      {formatCurrency(row.yearlyPayment)}
                    </td>
                    <td className="px-3 py-2.5 text-right font-semibold text-emerald-700">
                      {formatCurrency(row.yearlyPrincipal)}
                    </td>
                    <td className="px-3 py-2.5 text-right font-semibold text-pink-accent">
                      {formatCurrency(row.yearlyInterest)}
                    </td>
                    <td className="px-3 py-2.5 text-right font-bold text-ink-900">
                      {formatCurrency(row.endingBalance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Small footer note under the card */}
      <div className="text-xs text-ink-500 mt-3 px-1 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-bold">✨ Live recalculation</span>
        <span>·</span>
        <span>Includes principal + interest only (no taxes or PMI)</span>
      </div>
    </div>
  );
}
