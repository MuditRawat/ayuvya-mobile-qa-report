import React, { useState } from 'react';
import { Copy, Check, Download, FileText } from 'lucide-react';
import { environmentDetails, positiveFindings, scopeModules, testCasesData, bugReportsData, uxIssuesData, productSuggestionsData, observationsData } from '../data/qaReportData';

export const PlainTextExport: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullMarkdownText = `# SOFTWARE QUALITY ASSURANCE ASSIGNMENT REPORT
Manual & Exploratory Mobile Testing — Ayuvya Mobile Application

Candidate Name: ${environmentDetails.candidateName}
Role / Title: QA Candidate - Manual & Mobile Testing
Target Application: ${environmentDetails.application} (v${environmentDetails.appVersion})
Test Platform: ${environmentDetails.platform} ${environmentDetails.androidVersion} on ${environmentDetails.device}
Network & Theme: ${environmentDetails.network} | Device: ${environmentDetails.deviceTheme} | App: ${environmentDetails.appTheme}
Testing Duration: ${environmentDetails.testingDuration}
Testing Approach: ${environmentDetails.testingType}

---

## EXECUTIVE SUMMARY
This report presents a comprehensive manual and exploratory Quality Assurance assessment of the Ayuvya Mobile Application (v8.9) executed on an Android 15 Moto G34 5G hardware device. Over a 3-hour test window, a total of 42 structured test scenarios were designed and validated against available application flows across core functional, validation, boundary, UI/UX, navigation, negative, and session workflows.

Key Results: Out of 42 executed test scenarios, 32 were passed, 10 failed, and 0 were blocked during validation of available application workflows. A total of 6 Bug Reports were identified and documented with reproducible steps, 3 UX Friction Points were categorized, 4 Product Value Suggestions were outlined, and 3 Operational Observations were evaluated.

### Positive Findings & System Performance
${positiveFindings.map((f) => `- ${f}`).join('\n')}

---

## TABLE OF CONTENTS
1. Assignment Objective & Application Overview
2. Testing Environment & Scope of Testing
3. Testing Methodology
4. TASK 1: Comprehensive Test Scenarios (42 Scenarios)
5. TASK 2: Professional Bug Reports (BUG-001 to BUG-006)
6. User Experience (UX) Issues
7. Product Suggestions & Value Enhancements
8. Observations & Trust Analysis
9. Test Execution Summary & Metrics
10. Overall Conclusion

---

## 1. ASSIGNMENT OBJECTIVE
The primary objective of this assignment is to execute a rigorous manual testing assessment of the Ayuvya Mobile Application on Android, demonstrating proficiency in test case design, defect identification, exploratory testing, boundary analysis, UI/UX evaluation, and clear technical documentation.

---

## 2. APPLICATION OVERVIEW
The Ayuvya Mobile Application is an Ayurvedic wellness and health platform designed to help users manage lifestyle goals through personalized wellness recommendations, daily health tracking, and healthcare practitioner consultations. The app combines holistic wellness tracking with an integrated e-commerce catalog.

Key functional pillars include mobile authentication, multi-step health metric onboarding (height, weight, primary diet, activity level, health concerns), personalized daily health trackers (water intake, meal logging, physical activity), Health Coach chat support, appointment scheduling with healthcare practitioners, and the Ayuvya Wellness Shop.

---

## 3. SCOPE OF TESTING
Evaluated modules in depth:
${scopeModules.map((m) => `- ${m.name}: ${m.items.join(', ')}`).join('\n')}

*Note: Paid subscription purchases were explicitly excluded from the test execution scope; only free-tier features were evaluated.*

---

## 4. TESTING METHODOLOGY
The test session employed eight recognized manual testing methodologies to ensure thorough coverage:
- Functional Testing: Validated core business logic, button click handlers, and feature outputs.
- Validation Testing: Verified data field constraints, input masking, and error messages.
- Negative Testing: Tested network dropouts, invalid inputs, and unexpected back button navigation.
- Exploratory Testing: Uncovered unscripted edge cases, interrupted states, and deep route paths.
- UI/UX Testing: Evaluated visual layout, safe-area insets, font hierarchy, and color contrast.
- Boundary Testing: Exercised minimum and maximum limits on height, weight, and water counters.
- Navigation Testing: Checked route stack integrity, tab bar behaviors, and deep-link redirections.
- Session Testing: Evaluated application state handling during force-close recovery, background resume, and logout workflows.

---

## 5. TASK 1 — COMPREHENSIVE TEST SCENARIOS (42 SCENARIOS)
${testCasesData
  .map(
    (tc) => `
### [${tc.id}] ${tc.scenario}
- Module: ${tc.module} | Category: ${tc.category} | Priority: ${tc.priority}
- Precondition: ${tc.precondition}
- Steps:
${tc.steps.map((s) => `  ${s}`).join('\n')}
- Expected Result: ${tc.expectedResult}
- Actual Result: ${tc.actualResult}
- Status: ${tc.status}
`
  )
  .join('\n')}

---

## 6. TASK 2 — PROFESSIONAL BUG REPORTS (6 BUGS)
${bugReportsData
  .map(
    (bug) => `
### [${bug.id}] ${bug.title}
- Severity: ${bug.severity} | Priority: ${bug.priority}
- Affected Module: ${bug.affectedModule}
- Screen Name: ${bug.screenName}
- Environment: ${bug.environment}
- Precondition: ${bug.precondition}
- Steps to Reproduce:
${bug.stepsToReproduce.map((s) => `  ${s}`).join('\n')}
- Expected Result: ${bug.expectedResult}
- Actual Result: ${bug.actualResult}
- Impact: ${bug.impact}
- Recommendation: ${bug.recommendation}
`
  )
  .join('\n')}

---

## 7. USER EXPERIENCE (UX) ISSUES
${uxIssuesData
  .map(
    (ux) => `
### [${ux.id}] ${ux.title}
- Location: ${ux.location}
- Description: ${ux.description}
- Impact: ${ux.impact}
- Recommendation: ${ux.recommendation}
`
  )
  .join('\n')}

---

## 8. PRODUCT SUGGESTIONS
${productSuggestionsData
  .map(
    (sug) => `
### [${sug.id}] ${sug.title}
- Current Behavior: ${sug.currentBehavior}
- Suggested Improvement: ${sug.suggestedImprovement}
- Value Proposition: ${sug.valueProposition}
`
  )
  .join('\n')}

---

## 9. OBSERVATIONS & TRUST ANALYSIS
${observationsData
  .map(
    (obs) => `
### [${obs.id}] ${obs.title}
- Observed Pattern: ${obs.observedPattern}
- Technical Analysis: ${obs.analysis}
- QA Assessment: ${obs.qaAssessment}
`
  )
  .join('\n')}

---

## 10. TEST EXECUTION SUMMARY
- Total Test Scenarios Designed: 42 (100%)
- Verified Successful Scenarios: 32 (N/A)
- Failed Test Scenarios: 10 (N/A)
- Blocked Test Scenarios: 0 (N/A)
- Bugs Logged: 6 (100%)
- UX Issues Logged: 3 (N/A)
- Product Suggestions: 4 (N/A)
- Observations: 3 (N/A)

---

## 11. OVERALL CONCLUSION
The Ayuvya Mobile Application (v8.9) exhibits commendable core runtime stability, smooth UI transitions, and stable performance across standard user flows on Android 15. The application suffered zero crashes, ANRs, or infinite loading locks during the 3-hour evaluation session.

However, addressing the identified defects—particularly the primary CTA safe-area overlap on Android 15 (BUG-001), height metric conversion formatting (BUG-002), Shop bottom navigation routing loops (BUG-003), and onboarding state machine clarity (BUG-005)—will significantly elevate the application’s polish, usability, and user retention.

Report Compiled and Submitted by:
Mudit Rawat
QA Candidate - Manual & Mobile Testing
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullMarkdownText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-base font-bold flex items-center">
            <FileText className="w-5 h-5 mr-2 text-sky-400" />
            Plain Text / Markdown Format (Ready for Google Docs & Notion)
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Copy the full raw report text below to paste directly into Google Docs, Microsoft Word, or email.
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-semibold text-xs transition cursor-pointer shadow-xs shrink-0"
        >
          {copied ? <Check className="w-4 h-4 mr-1.5" /> : <Copy className="w-4 h-4 mr-1.5" />}
          {copied ? 'Copied to Clipboard!' : 'Copy Full Markdown'}
        </button>
      </div>

      <div className="bg-slate-950 text-slate-300 p-5 rounded-2xl border border-slate-800 font-mono text-xs overflow-x-auto max-h-[600px] overflow-y-auto leading-relaxed scrollbar-thin">
        <pre className="whitespace-pre-wrap">{fullMarkdownText}</pre>
      </div>
    </div>
  );
};
