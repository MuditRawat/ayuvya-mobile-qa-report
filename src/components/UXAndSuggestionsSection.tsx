import React from 'react';
import { Sparkles, Lightbulb, Eye, Compass, CheckCircle2, ShieldCheck } from 'lucide-react';
import { uxIssuesData, productSuggestionsData, observationsData } from '../data/qaReportData';

export const UXAndSuggestionsSection: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* SECTION 1: UX ISSUES */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-slate-900 border-b border-slate-200 pb-3">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-bold">User Experience (UX) Friction Points</h2>
          <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
            Separate from Functional Bugs
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {uxIssuesData.map((ux) => (
            <div key={ux.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded">
                    {ux.id}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">{ux.location}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{ux.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{ux.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px]">
                <div className="text-slate-700">
                  <strong className="text-slate-900">Impact:</strong> {ux.impact}
                </div>
                <div className="bg-sky-50 text-sky-950 p-2.5 rounded-lg border border-sky-100">
                  <strong>Recommendation:</strong> {ux.recommendation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: PRODUCT SUGGESTIONS */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-slate-900 border-b border-slate-200 pb-3">
          <Lightbulb className="w-5 h-5 text-sky-600" />
          <h2 className="text-lg font-bold">Product Value & Feature Suggestions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productSuggestionsData.map((sug) => (
            <div key={sug.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-sky-50 text-sky-700 border border-sky-200 rounded">
                  {sug.id}
                </span>
                <h3 className="text-sm font-bold text-slate-900">{sug.title}</h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-700">
                  <span className="font-bold text-slate-900 block mb-0.5">Current Behavior</span>
                  {sug.currentBehavior}
                </div>
                <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200 text-emerald-950">
                  <span className="font-bold text-emerald-900 block mb-0.5">Suggested Improvement</span>
                  {sug.suggestedImprovement}
                </div>
                <div className="bg-sky-50/80 p-3 rounded-xl border border-sky-200 text-sky-950">
                  <span className="font-bold text-sky-900 block mb-0.5">Value Proposition</span>
                  {sug.valueProposition}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: OBSERVATIONS */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-slate-900 border-b border-slate-200 pb-3">
          <Eye className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg font-bold">QA Observations & User Trust Analysis</h2>
        </div>

        <div className="space-y-4">
          {observationsData.map((obs) => (
            <div key={obs.id} className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-xs space-y-3 border border-slate-800">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded">
                  {obs.id}
                </span>
                <h3 className="text-base font-bold text-white">{obs.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                  <span className="text-purple-400 font-bold uppercase text-[10px] block mb-1">Observed UI Pattern</span>
                  <p className="text-slate-300 leading-relaxed">{obs.observedPattern}</p>
                </div>
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                  <span className="text-sky-400 font-bold uppercase text-[10px] block mb-1">Technical Analysis</span>
                  <p className="text-slate-300 leading-relaxed">{obs.analysis}</p>
                </div>
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                  <span className="text-emerald-400 font-bold uppercase text-[10px] block mb-1">Objective QA Evaluation</span>
                  <p className="text-slate-300 leading-relaxed">{obs.qaAssessment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
