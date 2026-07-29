import React from 'react';
import { Target, BookOpen, Compass, Shield, CheckCircle, AlertCircle } from 'lucide-react';

export const OverviewSection: React.FC = () => {
  const methodologies = [
    { title: 'Functional Testing', desc: 'Validated core business logic, user inputs, buttons, and state transitions across onboarding, water tracker, meal logging, and consultation appointments.' },
    { title: 'Validation Testing', desc: 'Checked field restrictions, incomplete phone number entries, invalid OTP formats, email syntax, and range limits.' },
    { title: 'Negative Testing', desc: 'Tested offline Wi-Fi disconnects, interrupted onboarding state machines, deleted account logins, and empty cart submissions.' },
    { title: 'Exploratory Testing', desc: 'Unscripted ad-hoc exploration discovering deep routing loops, unexpected back button jumps, and shop tab cross-navigation issues.' },
    { title: 'UI/UX Testing', desc: 'Evaluated safe-area window insets against Android 15 system gesture bars, visual typography hierarchy, dark mode fallbacks, and copywriting consistency.' },
    { title: 'Boundary Testing', desc: 'Exercised minimum and maximum limits on height inputs (90cm - 240cm), weight limits (20kg - 250kg), and water counters.' },
    { title: 'Navigation Testing', desc: 'Verified route stack behaviors, deep link handling, bottom navigation tab switching, and back-stack integrity.' },
    { title: 'Session Testing', desc: 'Evaluated application state handling during force-close recovery, background resume, and logout workflows.' },
  ];

  return (
    <div className="space-y-8">
      {/* Objective */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
        <div className="flex items-center space-x-2 text-sky-700 font-bold text-base">
          <Target className="w-5 h-5 text-sky-600" />
          <span>Assignment Objective</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          The primary objective of this manual testing assessment is to rigorously assess the quality, usability, functional consistency, and system stability of the Ayuvya Mobile Application on Android. The evaluation emphasizes candidate analytical thinking, realistic test case creation, boundary condition testing, defect identification, and professional documentation.
        </p>
      </div>

      {/* Application Overview */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center space-x-2 text-slate-900 font-bold text-base">
          <BookOpen className="w-5 h-5 text-sky-600" />
          <span>Application Overview — Ayuvya Mobile Application</span>
        </div>
        <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-3 leading-relaxed">
          <p>
            The Ayuvya Mobile Application is a mobile health and wellness platform that blends traditional Ayurvedic principles with personalized daily habit tracking and health consultations. Designed to empower users in managing lifestyle wellness goals—such as weight management, skin health, digestion, and stress reduction—the app provides tailored wellness regimens and e-commerce product recommendations.
          </p>
          <p>
            The user journey begins with a phone-number based authentication flow followed by an interactive multi-step onboarding questionnaire. Users record key physiological metrics including height, weight, goal weight, primary diet preferences, daily activity level, and primary health concerns. Once onboarded, users access the Home Dashboard featuring personalized daily trackers for water intake, meal logging, and physical activity.
          </p>
          <p>
            Beyond daily logging, the application incorporates a Doctor & Dietitian Appointment booking module, an interactive Health Coach chat assistant, progress analytics dashboards, and an integrated Ayuvya Wellness Shop for purchasing Ayurvedic herbal supplements.
          </p>
        </div>
      </div>

      {/* Testing Methodology Grid */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-slate-900 font-bold text-base">
          <Compass className="w-5 h-5 text-sky-600" />
          <span>Testing Methodologies Executed</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {methodologies.map((m, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1">{`0${idx + 1}. ${m.title}`}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
