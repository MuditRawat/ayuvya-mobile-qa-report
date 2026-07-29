import React from 'react';
import { CheckCircle2, Smartphone, ShieldCheck, Clock, User, Award, Layers, AlertTriangle } from 'lucide-react';
import { environmentDetails, positiveFindings, scopeModules } from '../data/qaReportData';

export const CoverSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Banner / Title Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Award className="w-3.5 h-3.5 mr-1" />
              Professional QA Internship Assignment Submission
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              QA Testing Report: Ayuvya Mobile App
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Comprehensive Manual & Exploratory Quality Assurance assessment covering core functional modules, validation boundaries, authentication security, UI/UX safe-area insets, and defect reporting.
            </p>
          </div>

          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 min-w-[280px] space-y-2">
            <div className="text-xs uppercase font-semibold tracking-wider text-slate-400">Candidate Submission</div>
            <div className="flex items-center space-x-3 pt-1">
              <div className="w-9 h-9 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-sm">
                MR
              </div>
              <div>
                <div className="text-sm font-bold text-white">{environmentDetails.candidateName}</div>
                <div className="text-xs text-slate-400">QA Candidate - Manual & Mobile Testing</div>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-between text-xs text-slate-400">
              <span>Date: July 2026</span>
              <span className="text-emerald-400 font-semibold">Status: Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Environment Grid */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
          <Smartphone className="w-5 h-5 mr-2 text-sky-600" />
          Testing Environment Specifications
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: 'Application', value: environmentDetails.application },
            { label: 'App Version', value: `v${environmentDetails.appVersion}` },
            { label: 'Target OS', value: `${environmentDetails.platform} ${environmentDetails.androidVersion}` },
            { label: 'Device Model', value: environmentDetails.device },
            { label: 'Testing Duration', value: environmentDetails.testingDuration },
            { label: 'Theme Testing', value: `${environmentDetails.deviceTheme} (Device)` }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-xs">
              <div className="text-xs text-slate-500 font-medium">{item.label}</div>
              <div className="text-sm font-semibold text-slate-900 mt-1">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Positive Findings Section */}
      <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-6">
        <h2 className="text-base font-bold text-emerald-950 mb-3 flex items-center">
          <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600" />
          Positive QA Findings & System Stability
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-emerald-900">
          {positiveFindings.map((finding, idx) => (
            <div key={idx} className="flex items-start space-x-2 bg-white/80 p-3 rounded-lg border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <span className="leading-relaxed font-medium">{finding}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scope Breakdown Grid */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
          <Layers className="w-5 h-5 mr-2 text-sky-600" />
          Scope of Testing (Modules Evaluated)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scopeModules.map((mod, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <div className="text-sm font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2 flex justify-between items-center">
                <span>{mod.name}</span>
                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  {mod.items.length} Modules
                </span>
              </div>
              <ul className="space-y-1.5">
                {mod.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-xs text-slate-600 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
