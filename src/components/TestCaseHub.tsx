import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle2, XCircle, AlertCircle, Eye, Layers, ChevronDown, Check } from 'lucide-react';
import { TestCase, TestPriority, TestStatus } from '../types';
import { testCasesData } from '../data/qaReportData';

export const TestCaseHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedModule, setSelectedModule] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedPriority, setSelectedPriority] = useState<string>('All');
  const [selectedTestCase, setSelectedTestCase] = useState<TestCase | null>(null);

  const categories = ['All', 'Functional Testing', 'Validation Testing', 'Negative Testing', 'UI/UX Testing', 'Boundary Testing', 'Navigation Testing', 'Session Testing'];
  const modules = ['All', 'Authentication', 'Onboarding', 'Water Intake', 'Meal Logging', 'Activity Logging', 'Appointments', 'Shop', 'Chat', 'Bottom Navigation', 'Profile', 'Settings', 'Session Management'];
  const statuses = ['All', 'Pass', 'Fail', 'Blocked'];
  const priorities = ['All', 'High', 'Medium', 'Low'];

  // Filter logic
  const filteredTestCases = useMemo(() => {
    return testCasesData.filter((tc) => {
      const matchesSearch =
        tc.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tc.scenario.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tc.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tc.expectedResult.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tc.actualResult.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || tc.category === selectedCategory;
      const matchesModule = selectedModule === 'All' || tc.module === selectedModule;
      const matchesStatus = selectedStatus === 'All' || tc.status === selectedStatus;
      const matchesPriority = selectedPriority === 'All' || tc.priority === selectedPriority;

      return matchesSearch && matchesCategory && matchesModule && matchesStatus && matchesPriority;
    });
  }, [searchTerm, selectedCategory, selectedModule, selectedStatus, selectedPriority]);

  const stats = useMemo(() => {
    const total = testCasesData.length;
    const passed = testCasesData.filter((tc) => tc.status === 'Pass').length;
    const failed = testCasesData.filter((tc) => tc.status === 'Fail').length;
    const blocked = testCasesData.filter((tc) => tc.status === 'Blocked').length;
    return { total, passed, failed, blocked, passRate: ((passed / total) * 100).toFixed(1) };
  }, []);

  return (
    <div className="space-y-6">
      {/* Test Execution Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Test Scenarios</div>
          <div className="text-2xl font-black text-slate-900 mt-1">{stats.total}</div>
          <div className="text-[11px] text-slate-500 mt-1">7 Test Categories</div>
        </div>
        <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 shadow-xs">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Passed</div>
          <div className="text-2xl font-black text-emerald-700 mt-1">{stats.passed}</div>
          <div className="text-[11px] text-emerald-600 mt-1">32 Verified Successful</div>
        </div>
        <div className="bg-rose-50/80 border border-rose-200 rounded-xl p-4 shadow-xs">
          <div className="text-xs font-semibold text-rose-800 uppercase tracking-wider">Failed</div>
          <div className="text-2xl font-black text-rose-700 mt-1">{stats.failed}</div>
          <div className="text-[11px] text-rose-600 mt-1">10 Defect Scenarios</div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-xs">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Blocked</div>
          <div className="text-2xl font-black text-slate-600 mt-1">{stats.blocked}</div>
          <div className="text-[11px] text-slate-500 mt-1">0 Blocked Flows</div>
        </div>
        <div className="bg-sky-50/80 border border-sky-200 rounded-xl p-4 shadow-xs col-span-2 sm:col-span-1">
          <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider">Execution Target</div>
          <div className="text-2xl font-black text-sky-700 mt-1">Ayuvya v8.9</div>
          <div className="text-[11px] text-sky-600 mt-1">100% Executed</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by Test ID, scenario, module, or result..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition"
            />
          </div>

          {/* Select Dropdowns */}
          <div className="flex flex-wrap gap-2">
            {/* Status Dropdown */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-700 font-medium focus:outline-none focus:border-sky-500"
            >
              <option value="All">Status: All</option>
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
              <option value="Blocked">Blocked</option>
            </select>

            {/* Priority Dropdown */}
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-700 font-medium focus:outline-none focus:border-sky-500"
            >
              <option value="All">Priority: All</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            {/* Module Dropdown */}
            <select
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-700 font-medium focus:outline-none focus:border-sky-500"
            >
              {modules.map((m) => (
                <option key={m} value={m}>
                  Module: {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pt-2 border-t border-slate-100 scrollbar-none">
          <span className="text-[11px] font-semibold text-slate-400 mr-1 shrink-0">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Test Cases Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <div className="text-xs font-bold text-slate-900 flex items-center">
            <Layers className="w-4 h-4 mr-2 text-sky-600" />
            Showing {filteredTestCases.length} of {testCasesData.length} Test Cases
          </div>
          {(selectedCategory !== 'All' || selectedModule !== 'All' || selectedStatus !== 'All' || selectedPriority !== 'All' || searchTerm !== '') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedModule('All');
                setSelectedStatus('All');
                setSelectedPriority('All');
              }}
              className="text-xs text-sky-600 hover:text-sky-800 font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 text-[11px] uppercase font-bold tracking-wider border-b border-slate-200">
                <th className="py-3 px-4">TC ID</th>
                <th className="py-3 px-4">Module / Category</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4">Test Scenario</th>
                <th className="py-3 px-4">Actual Result Summary</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs text-slate-700">
              {filteredTestCases.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-400">
                    No test cases match the active filter criteria.
                  </td>
                </tr>
              ) : (
                filteredTestCases.map((tc) => (
                  <tr key={tc.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-3 px-4 font-mono font-bold text-slate-900 whitespace-nowrap">{tc.id}</td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-900">{tc.module}</div>
                      <div className="text-[10px] text-slate-500">{tc.category}</div>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                          tc.priority === 'High'
                            ? 'bg-rose-100 text-rose-800'
                            : tc.priority === 'Medium'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tc.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4 max-w-xs leading-snug font-medium text-slate-900">{tc.scenario}</td>
                    <td className="py-3 px-4 max-w-xs leading-snug text-slate-600 text-[11px]">{tc.actualResult}</td>
                    <td className="py-3 px-4 text-center whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          tc.status === 'Pass'
                            ? 'bg-emerald-100 text-emerald-800'
                            : tc.status === 'Fail'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {tc.status === 'Pass' ? (
                          <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" />
                        ) : tc.status === 'Fail' ? (
                          <XCircle className="w-3 h-3 mr-1 text-rose-600" />
                        ) : (
                          <AlertCircle className="w-3 h-3 mr-1 text-amber-600" />
                        )}
                        {tc.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center whitespace-nowrap">
                      <button
                        onClick={() => setSelectedTestCase(tc)}
                        className="inline-flex items-center px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-semibold text-[11px] transition cursor-pointer"
                      >
                        <Eye className="w-3 h-3 mr-1 text-slate-500" />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Test Case Detail Modal */}
      {selectedTestCase && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-xl border border-slate-200 overflow-hidden my-8">
            <div className="bg-slate-900 text-white p-5 flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-sky-400 font-bold text-sm">{selectedTestCase.id}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      selectedTestCase.status === 'Pass' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                    }`}
                  >
                    {selectedTestCase.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mt-1">{selectedTestCase.scenario}</h3>
              </div>
              <button
                onClick={() => setSelectedTestCase(null)}
                className="text-slate-400 hover:text-white p-1 text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div>
                  <span className="text-slate-500 font-medium">Module:</span>{' '}
                  <strong className="text-slate-900">{selectedTestCase.module}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Category:</span>{' '}
                  <strong className="text-slate-900">{selectedTestCase.category}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Priority:</span>{' '}
                  <strong className="text-slate-900">{selectedTestCase.priority}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Precondition:</span>{' '}
                  <span className="text-slate-800">{selectedTestCase.precondition}</span>
                </div>
              </div>

              <div>
                <div className="font-bold text-slate-900 mb-1.5 uppercase text-[11px] tracking-wide">Test Execution Steps</div>
                <ol className="list-decimal list-inside space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-800 font-mono text-[11px]">
                  {selectedTestCase.steps.map((step, idx) => (
                    <li key={idx}>{step.replace(/^\d+\.\s*/, '')}</li>
                  ))}
                </ol>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wide">Expected Result</div>
                  <div className="bg-emerald-50 text-emerald-950 p-3 rounded-xl border border-emerald-200 mt-1">
                    {selectedTestCase.expectedResult}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wide">Actual Result Observed</div>
                  <div
                    className={`p-3 rounded-xl border mt-1 ${
                      selectedTestCase.status === 'Pass'
                        ? 'bg-slate-50 border-slate-200 text-slate-800'
                        : 'bg-rose-50 border-rose-200 text-rose-950'
                    }`}
                  >
                    {selectedTestCase.actualResult}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedTestCase(null)}
                className="px-4 py-2 bg-slate-900 text-white font-bold rounded-lg text-xs cursor-pointer hover:bg-slate-800"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
