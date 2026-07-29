import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CoverSection } from './components/CoverSection';
import { OverviewSection } from './components/OverviewSection';
import { TestCaseHub } from './components/TestCaseHub';
import { BugReportsSection } from './components/BugReportsSection';
import { UXAndSuggestionsSection } from './components/UXAndSuggestionsSection';
import { ExecutionSummary } from './components/ExecutionSummary';
import { PlainTextExport } from './components/PlainTextExport';
import { generateDocxReport } from './utils/docxExporter';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isGeneratingDocx, setIsGeneratingDocx] = useState(false);

  // Automatically reset scroll position when switching report tabs
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [activeTab]);

  const handleDownloadDocx = async () => {
    try {
      setIsGeneratingDocx(true);
      await generateDocxReport();
    } catch (err) {
      console.error('Failed to generate DOCX document:', err);
    } finally {
      setIsGeneratingDocx(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans antialiased selection:bg-sky-500 selection:text-white pb-16">
      {/* Fixed Navbar Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onDownloadDocx={handleDownloadDocx}
        isGeneratingDocx={isGeneratingDocx}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Render Active View */}
        {activeTab === 'overview' && (
          <div className="space-y-10">
            <CoverSection />
            <OverviewSection />
          </div>
        )}

        {activeTab === 'test-cases' && <TestCaseHub />}

        {activeTab === 'bugs' && <BugReportsSection />}

        {activeTab === 'ux-suggestions' && <UXAndSuggestionsSection />}

        {activeTab === 'metrics' && <ExecutionSummary />}

        {activeTab === 'plain-text' && <PlainTextExport />}
      </main>

      {/* Persistent Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            QA Interview Assignment — <strong className="text-slate-800">Mudit Rawat</strong> | Ayuvya Mobile Application v8.9
          </div>
          <div className="flex items-center space-x-4 text-slate-400">
            <span>Android 15 (Moto G34 5G)</span>
            <span>•</span>
            <button
              onClick={handleDownloadDocx}
              disabled={isGeneratingDocx}
              className="text-sky-600 font-semibold hover:underline cursor-pointer"
            >
              Export .DOCX
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
