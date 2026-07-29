import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Award, CheckCircle2, XCircle, Bug, ShieldCheck, FileText, Activity } from 'lucide-react';
import { testCasesData, bugReportsData } from '../data/qaReportData';

export const ExecutionSummary: React.FC = () => {
  // Chart Data
  const passFailData = [
    { name: 'Passed', value: 32, color: '#10B981' },
    { name: 'Failed', value: 10, color: '#EF4444' },
    { name: 'Blocked', value: 0, color: '#F59E0B' },
  ];

  const categoryBreakdown = [
    { name: 'Functional', passed: 9, failed: 1 },
    { name: 'Validation', passed: 5, failed: 1 },
    { name: 'Negative', passed: 4, failed: 2 },
    { name: 'UI/UX', passed: 3, failed: 3 },
    { name: 'Boundary', passed: 5, failed: 0 },
    { name: 'Navigation', passed: 3, failed: 3 },
    { name: 'Session', passed: 3, failed: 0 },
  ];

  const bugSeverityData = [
    { severity: 'Major', count: 3, fill: '#F59E0B' },
    { severity: 'Medium', count: 3, fill: '#3B82F6' },
    { severity: 'Critical', count: 0, fill: '#EF4444' },
  ];

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xs">
        <div>
          <h2 className="text-xl font-bold">Test Scenario Analytics & Summary</h2>
          <p className="text-xs text-slate-400 mt-1">
            Quantitative analysis of 42 designed test scenarios and 6 identified defect reports.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 text-xs">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-slate-200">32 Verified / 10 Failed</span>
        </div>
      </div>

      {/* Visual Analytics Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pass vs Fail Pie Chart */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Test Execution Status Breakdown</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={passFailData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                >
                  {passFailData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-6 text-xs text-slate-600 font-medium border-t border-slate-100 pt-3">
            <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-emerald-500 mr-1.5" /> Passed (32)</span>
            <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-rose-500 mr-1.5" /> Failed (10)</span>
            <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-amber-500 mr-1.5" /> Blocked (0)</span>
          </div>
        </div>

        {/* Category Bar Chart */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Test Results by Category</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryBreakdown}>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Bar dataKey="passed" name="Passed" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="failed" name="Failed" fill="#EF4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Metric Summary Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-900">
          Executive Execution Metrics Table
        </div>
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
            <tr>
              <th className="p-3">Execution Metric</th>
              <th className="p-3">Value / Count</th>
              <th className="p-3">Distribution / Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            <tr>
              <td className="p-3 font-semibold text-slate-900">Total Test Scenarios Designed</td>
              <td className="p-3 font-mono font-bold">42 Test Scenarios</td>
              <td className="p-3">Across 7 distinct testing categories</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-emerald-700">Verified Successful Scenarios</td>
              <td className="p-3 font-mono font-bold text-emerald-600">32 Verified</td>
              <td className="p-3">Verified across available application flows</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-rose-700">Failed Test Scenarios</td>
              <td className="p-3 font-mono font-bold text-rose-600">10 Failed</td>
              <td className="p-3">Defects & routing issues documented</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-slate-900">Defect Reports Logged (Task 2)</td>
              <td className="p-3 font-mono font-bold">6 Bug Reports</td>
              <td className="p-3">3 Major, 3 Medium Severity</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-slate-900">UX Friction Points Documented</td>
              <td className="p-3 font-mono font-bold">3 UX Issues</td>
              <td className="p-3">Safe area insets, navigation bar trapping, copy ambiguity</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-slate-900">Product Value Proposals</td>
              <td className="p-3 font-mono font-bold">4 Suggestions</td>
              <td className="p-3">Multi-select concerns, unified auth input, progress bar</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-slate-900">Operational Observations</td>
              <td className="p-3 font-mono font-bold">3 Observations</td>
              <td className="p-3">Social proof toasts, viewer counts, promotional timers</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Overall Conclusion */}
      <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center space-x-2 text-sky-400 font-bold text-base border-b border-slate-800 pb-3">
          <Award className="w-5 h-5 text-sky-400" />
          <span>Overall QA Conclusion & Strategic Assessment</span>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed space-y-3">
          <p>
            The Ayuvya Mobile Application (v8.9) exhibits commendable core runtime stability, smooth UI transitions, and stable performance across standard user flows on Android 15. Throughout the 3-hour test session on the Moto G34 5G, the application exhibited zero crashes, ANR lockups, or unhandled process terminations.
          </p>
          <p>
            However, several key navigation loops and UI/UX defects require engineering remediation. Resolving the bottom CTA button overlay on Android 15 navigation bars (BUG-001), correcting height unit calculation boundaries (BUG-002), repairing Shop tab bottom navigation route handlers (BUG-003), and refining onboarding state machine buttons (BUG-005) will immediately remove user friction and enhance product trust.
          </p>
          <p className="font-semibold text-slate-200">
            With these targeted fixes implemented, the Ayuvya Mobile Application will deliver a seamless, highly conversion-optimized user experience for holistic wellness tracking.
          </p>
        </div>

        <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <div>Report Compiled and Submitted by: <strong className="text-white">Mudit Rawat</strong></div>
          <span>QA Candidate - Manual & Mobile Testing</span>
        </div>
      </div>
    </div>
  );
};
