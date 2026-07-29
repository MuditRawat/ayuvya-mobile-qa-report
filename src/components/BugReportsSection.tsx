import React from 'react';
import { Bug, AlertTriangle, ArrowRight, ShieldAlert, CheckCircle2, Terminal } from 'lucide-react';
import { bugReportsData } from '../data/qaReportData';

export const BugReportsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-rose-950/20 border border-rose-200 rounded-2xl p-6 flex items-start space-x-4 shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-600 shrink-0">
          <Bug className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">TASK 2 — Professional Defect Reports (6 Bugs)</h2>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            All defect reports were identified on an Android 15 Moto G34 5G hardware device during the 3-hour manual test session. Each report includes exact steps to reproduce, observed vs expected outcomes, technical impact analysis, and engineering recommendations.
          </p>
        </div>
      </div>

      {/* Bug Report Cards */}
      <div className="space-y-6">
        {bugReportsData.map((bug) => (
          <div
            key={bug.id}
            id={bug.id}
            className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden transition hover:border-slate-300"
          >
            {/* Card Header */}
            <div className="bg-slate-900 text-white p-4 sm:p-5 flex flex-wrap justify-between items-center gap-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-md">
                  {bug.id}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    bug.severity === 'Major' ? 'bg-amber-500/20 text-amber-300' : 'bg-sky-500/20 text-sky-300'
                  }`}
                >
                  {bug.severity} Severity
                </span>
                <span className="text-xs text-slate-400">Priority: {bug.priority}</span>
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Module: <span className="text-slate-200 font-bold">{bug.affectedModule}</span>
              </div>
            </div>

            {/* Title & Screen */}
            <div className="p-5 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-base font-bold text-slate-900 leading-snug">{bug.title}</h3>
              <div className="text-xs text-slate-500 mt-1 flex items-center">
                <span className="font-semibold text-slate-700 mr-2">Screen:</span> {bug.screenName}
              </div>
            </div>

            <div className="p-5 space-y-4 text-xs">
              {/* Environment & Precondition */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-slate-700">
                <div>
                  <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider block mb-0.5">Environment</span>
                  <span className="font-mono text-[11px] text-slate-800">{bug.environment}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider block mb-0.5">Precondition</span>
                  <span className="text-slate-700">{bug.precondition}</span>
                </div>
              </div>

              {/* Steps to Reproduce */}
              <div>
                <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider block mb-1.5 flex items-center">
                  <Terminal className="w-3.5 h-3.5 mr-1 text-slate-500" /> Steps to Reproduce
                </span>
                <ol className="bg-slate-900 text-slate-200 p-3.5 rounded-xl font-mono text-[11px] space-y-1">
                  {bug.stepsToReproduce.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

              {/* Expected vs Actual */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl">
                  <span className="font-bold text-emerald-900 uppercase text-[10px] tracking-wider block mb-1">Expected Result</span>
                  <p className="text-emerald-950 leading-relaxed text-[11px]">{bug.expectedResult}</p>
                </div>
                <div className="bg-rose-50 border border-rose-200 p-3.5 rounded-xl">
                  <span className="font-bold text-rose-900 uppercase text-[10px] tracking-wider block mb-1">Actual Result</span>
                  <p className="text-rose-950 leading-relaxed text-[11px]">{bug.actualResult}</p>
                </div>
              </div>

              {/* Impact & Recommendation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                  <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider block mb-1">Business / QA Impact</span>
                  <p className="text-slate-700 leading-relaxed text-[11px]">{bug.impact}</p>
                </div>
                <div className="bg-sky-50 border border-sky-200 p-3.5 rounded-xl">
                  <span className="font-bold text-sky-900 uppercase text-[10px] tracking-wider block mb-1">QA Recommendation</span>
                  <p className="text-sky-950 leading-relaxed text-[11px]">{bug.recommendation}</p>
                </div>
              </div>

              {/* Visual Mockup Placeholder */}
              {bug.screenshotDescription && (
                <div className="border border-dashed border-slate-300 rounded-xl p-3 bg-slate-50/80 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold uppercase text-[10px]">Screenshot</span>
                    <span>{bug.screenshotDescription}</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[10px]">[{bug.id}_moto_g34.png]</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
