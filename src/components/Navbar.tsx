import React from 'react';
import { FileText, CheckCircle2, Download, Search, ShieldCheck, User, Sparkles, Layers } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onDownloadDocx: () => void;
  isGeneratingDocx: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onDownloadDocx,
  isGeneratingDocx,
}) => {
  const tabs = [
    { id: 'overview', label: 'Overview & Scope', icon: Layers },
    { id: 'test-cases', label: 'Test Suite (42 TCs)', icon: CheckCircle2 },
    { id: 'bugs', label: 'Bug Reports (6 Bugs)', icon: ShieldCheck },
    { id: 'ux-suggestions', label: 'UX & Suggestions', icon: Sparkles },
    { id: 'metrics', label: 'Execution Metrics', icon: FileText },
    { id: 'plain-text', label: 'Raw Copy / Markdown', icon: Download },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Title & Badge */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base font-bold text-white tracking-tight">QA Assignment Report</h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  Ayuvya App v8.9
                </span>
              </div>
              <div className="flex items-center text-xs text-slate-400 space-x-2">
                <span className="flex items-center text-slate-300">
                  <User className="w-3 h-3 mr-1 text-slate-400" /> Mudit Rawat
                </span>
                <span>•</span>
                <span>Android 15 (Moto G34 5G)</span>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onDownloadDocx}
              disabled={isGeneratingDocx}
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 transition shadow-sm border border-sky-400/30 disabled:opacity-50 cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" />
              {isGeneratingDocx ? 'Generating DOCX...' : 'Download .DOCX Report'}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 border-t border-slate-800/80 overflow-x-auto py-2 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-3.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 mr-2 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
