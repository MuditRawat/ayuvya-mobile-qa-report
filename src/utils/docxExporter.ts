import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  WidthType,
  ShadingType,
  Header,
  Footer,
  PageNumber,
  NumberFormat
} from 'docx';
import { saveAs } from 'file-saver';
import { environmentDetails, positiveFindings, scopeModules, testCasesData, bugReportsData, uxIssuesData, productSuggestionsData, observationsData } from '../data/qaReportData';

export const generateDocxReport = async (): Promise<void> => {
  // Helper for colored text
  const heading1 = (text: string) =>
    new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 280, after: 120 },
    });

  const heading2 = (text: string) =>
    new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 200, after: 80 },
    });

  const normalParagraph = (text: string, bold = false, italic = false) =>
    new Paragraph({
      children: [
        new TextRun({
          text: text,
          bold: bold,
          italics: italic,
          font: 'Calibri',
          size: 22, // 11pt
        }),
      ],
      spacing: { after: 100 },
    });

  const bulletPoint = (text: string) =>
    new Paragraph({
      bullet: { level: 0 },
      children: [
        new TextRun({
          text: text,
          font: 'Calibri',
          size: 22,
        }),
      ],
      spacing: { after: 60 },
    });

  // Table creation helper
  const createSimpleTable = (headers: string[], rows: string[][]) => {
    return new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          tableHeader: true,
          children: headers.map(
            (header) =>
              new TableCell({
                shading: { fill: '1E293B', type: ShadingType.CLEAR, color: 'FFFFFF' },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: header,
                        bold: true,
                        color: 'FFFFFF',
                        font: 'Calibri',
                        size: 20,
                      }),
                    ],
                    alignment: AlignmentType.LEFT,
                  }),
                ],
              })
          ),
        }),
        ...rows.map(
          (row, idx) =>
            new TableRow({
              children: row.map(
                (cell) =>
                  new TableCell({
                    shading: { fill: idx % 2 === 0 ? 'F8FAFC' : 'FFFFFF', type: ShadingType.CLEAR },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: cell,
                            font: 'Calibri',
                            size: 18,
                          }),
                        ],
                      }),
                    ],
                  })
              ),
            })
        ),
      ],
    });
  };

  // Construct Document
  const doc = new Document({
    sections: [
      {
        properties: {},
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'QA INTERVIEW ASSIGNMENT — MUDIT RAWAT | AYUVYA MOBILE APP v8.9',
                    font: 'Calibri',
                    size: 16,
                    color: '64748B',
                  }),
                ],
                alignment: AlignmentType.RIGHT,
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: 'Page ',
                    font: 'Calibri',
                    size: 18,
                    color: '64748B',
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    font: 'Calibri',
                    size: 18,
                    color: '64748B',
                  }),
                  new TextRun({
                    text: ' of ',
                    font: 'Calibri',
                    size: 18,
                    color: '64748B',
                  }),
                  new TextRun({
                    children: [PageNumber.TOTAL_PAGES],
                    font: 'Calibri',
                    size: 18,
                    color: '64748B',
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          // TITLE COVER PAGE
          new Paragraph({
            children: [
              new TextRun({
                text: 'SOFTWARE QUALITY ASSURANCE ASSIGNMENT REPORT',
                bold: true,
                size: 36, // 18pt
                font: 'Calibri',
                color: '0F172A',
              }),
            ],
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Manual & Exploratory Mobile Testing — Ayuvya Mobile Application',
                size: 24, // 12pt
                font: 'Calibri',
                color: '0284C7',
              }),
            ],
            spacing: { after: 300 },
          }),

          // Metadata Table
          createSimpleTable(
            ['Attribute', 'Candidate & Environment Details'],
            [
              ['Candidate Name', environmentDetails.candidateName],
              ['Role / Title', 'QA Candidate - Manual & Mobile Testing'],
              ['Target Application', `${environmentDetails.application} (v${environmentDetails.appVersion})`],
              ['Test Platform', `${environmentDetails.platform} ${environmentDetails.androidVersion} on ${environmentDetails.device}`],
              ['Network & Theme', `${environmentDetails.network} | Device: ${environmentDetails.deviceTheme} | App: ${environmentDetails.appTheme}`],
              ['Testing Duration', environmentDetails.testingDuration],
              ['Testing Approach', environmentDetails.testingType]
            ]
          ),

          new Paragraph({ text: '', spacing: { after: 200 } }),

          // EXECUTIVE SUMMARY
          heading1('Executive Summary'),
          normalParagraph(
            'This report presents a comprehensive manual and exploratory Quality Assurance assessment of the Ayuvya Mobile Application (v8.9) executed on an Android 15 Moto G34 5G hardware device. Over a 3-hour test window, a total of 42 structured test scenarios were designed and validated against available application flows across core functional, validation, boundary, UI/UX, navigation, negative, and session workflows.'
          ),
          normalParagraph(
            'Key Results: Out of 42 executed test scenarios, 32 were passed, 10 failed, and 0 were blocked during validation of available application workflows. A total of 6 Bug Reports were identified and documented with reproducible steps, 3 UX Friction Points were categorized, 4 Product Value Suggestions were outlined, and 3 Operational Observations were evaluated.'
          ),

          // POSITIVE FINDINGS
          heading2('Positive Findings & System Performance'),
          ...positiveFindings.map((finding) => bulletPoint(finding)),

          new Paragraph({ text: '', spacing: { after: 200 } }),

          // TABLE OF CONTENTS SUMMARY
          heading1('Table of Contents'),
          bulletPoint('1. Assignment Objective & Application Overview'),
          bulletPoint('2. Testing Environment & Scope of Testing'),
          bulletPoint('3. Testing Methodology'),
          bulletPoint('4. TASK 1: Comprehensive Test Scenarios (42 Scenarios)'),
          bulletPoint('5. TASK 2: Professional Bug Reports (BUG-001 to BUG-006)'),
          bulletPoint('6. User Experience (UX) Issues'),
          bulletPoint('7. Product Suggestions & Value Enhancements'),
          bulletPoint('8. Observations & Trust Analysis'),
          bulletPoint('9. Test Execution Summary & Metrics'),
          bulletPoint('10. Overall Conclusion'),

          new Paragraph({ text: '', spacing: { after: 200 } }),

          // ASSIGNMENT OBJECTIVE & OVERVIEW
          heading1('1. Assignment Objective'),
          normalParagraph(
            'The primary objective of this assignment is to execute a rigorous manual testing assessment of the Ayuvya Mobile Application on Android, demonstrating proficiency in test case design, defect identification, exploratory testing, boundary analysis, UI/UX evaluation, and clear technical documentation.'
          ),

          heading1('2. Application Overview'),
          normalParagraph(
            'The Ayuvya Mobile Application is an Ayurvedic wellness and health platform designed to help users manage lifestyle goals through personalized wellness recommendations, daily health tracking, and healthcare practitioner consultations. The app combines holistic wellness tracking with an integrated e-commerce catalog.'
          ),
          normalParagraph(
            'Key functional pillars include mobile authentication, multi-step health metric onboarding (height, weight, primary diet, activity level, health concerns), personalized daily health trackers (water intake, meal logging, physical activity), Health Coach chat support, appointment scheduling with healthcare practitioners, and the Ayuvya Wellness Shop.'
          ),

          // SCOPE OF TESTING
          heading1('3. Scope of Testing'),
          normalParagraph('The testing session covered the following modules in depth:'),
          ...scopeModules.map((mod) =>
            bulletPoint(`${mod.name}: ${mod.items.join(', ')}`)
          ),
          normalParagraph('Note: Paid subscription purchases were explicitly excluded from the test execution scope; only free-tier features were evaluated.'),

          // TESTING METHODOLOGY
          heading1('4. Testing Methodology'),
          normalParagraph(
            'The test session employed eight recognized manual testing methodologies to ensure thorough coverage:'
          ),
          bulletPoint('Functional Testing: Validated core business logic, button click handlers, and feature outputs.'),
          bulletPoint('Validation Testing: Verified data field constraints, input masking, and error messages.'),
          bulletPoint('Negative Testing: Tested network dropouts, invalid inputs, and unexpected back button navigation.'),
          bulletPoint('Exploratory Testing: Uncovered unscripted edge cases, interrupted states, and deep route paths.'),
          bulletPoint('UI/UX Testing: Evaluated visual layout, safe-area insets, font hierarchy, and color contrast.'),
          bulletPoint('Boundary Testing: Exercised minimum and maximum limits on height, weight, and water counters.'),
          bulletPoint('Navigation Testing: Checked route stack integrity, tab bar behaviors, and deep-link redirections.'),
          bulletPoint('Session Testing: Evaluated application state handling during force-close recovery, background resume, and logout workflows.'),

          new Paragraph({ text: '', spacing: { after: 200 } }),

          // TASK 1: TEST CASES
          heading1('5. TASK 1 — Comprehensive Test Scenarios'),
          normalParagraph(
            'A total of 42 structured test scenarios were designed and validated against available application flows. Below is the complete test suite matrix:'
          ),

          createSimpleTable(
            ['ID', 'Module', 'Category', 'Priority', 'Scenario', 'Status'],
            testCasesData.map((tc) => [
              tc.id,
              tc.module,
              tc.category,
              tc.priority,
              tc.scenario,
              tc.status
            ])
          ),

          new Paragraph({ text: '', spacing: { after: 250 } }),

          // TASK 2: BUG REPORTS
          heading1('6. TASK 2 — Professional Bug Reports'),
          normalParagraph('The following 6 defects were identified during test execution:'),

          ...bugReportsData.flatMap((bug) => [
            heading2(`${bug.id}: ${bug.title}`),
            createSimpleTable(
              ['Attribute', 'Bug Detail'],
              [
                ['Bug ID', bug.id],
                ['Severity / Priority', `${bug.severity} / ${bug.priority}`],
                ['Affected Module', bug.affectedModule],
                ['Screen Name', bug.screenName],
                ['Environment', bug.environment],
                ['Precondition', bug.precondition],
                ['Steps to Reproduce', bug.stepsToReproduce.join('\n')],
                ['Expected Result', bug.expectedResult],
                ['Actual Result', bug.actualResult],
                ['Impact', bug.impact],
                ['Recommendation', bug.recommendation]
              ]
            ),
            new Paragraph({ text: '', spacing: { after: 150 } })
          ]),

          // UX ISSUES
          heading1('7. User Experience (UX) Issues'),
          ...uxIssuesData.flatMap((ux) => [
            heading2(`${ux.id}: ${ux.title}`),
            bulletPoint(`Location: ${ux.location}`),
            bulletPoint(`Description: ${ux.description}`),
            bulletPoint(`Impact: ${ux.impact}`),
            bulletPoint(`Recommendation: ${ux.recommendation}`),
            new Paragraph({ text: '', spacing: { after: 100 } })
          ]),

          // PRODUCT SUGGESTIONS
          heading1('8. Product Suggestions'),
          ...productSuggestionsData.flatMap((sug) => [
            heading2(`${sug.id}: ${sug.title}`),
            bulletPoint(`Current Behavior: ${sug.currentBehavior}`),
            bulletPoint(`Suggested Improvement: ${sug.suggestedImprovement}`),
            bulletPoint(`Value Proposition: ${sug.valueProposition}`),
            new Paragraph({ text: '', spacing: { after: 100 } })
          ]),

          // OBSERVATIONS
          heading1('9. Observations & Trust Analysis'),
          ...observationsData.flatMap((obs) => [
            heading2(`${obs.id}: ${obs.title}`),
            bulletPoint(`Observed Pattern: ${obs.observedPattern}`),
            bulletPoint(`Technical Analysis: ${obs.analysis}`),
            bulletPoint(`QA Assessment: ${obs.qaAssessment}`),
            new Paragraph({ text: '', spacing: { after: 100 } })
          ]),

          // EXECUTION SUMMARY
          heading1('10. Test Execution Summary'),
          createSimpleTable(
            ['Metric', 'Total Count', 'Percentage'],
            [
              ['Total Test Scenarios Designed', '42', '100%'],
              ['Verified Successful Scenarios', '32', 'N/A'],
              ['Failed Test Scenarios', '10', 'N/A'],
              ['Blocked Test Scenarios', '0', 'N/A'],
              ['Bugs Logged', '6', '100% (6 Bugs)'],
              ['UX Issues Logged', '3', 'N/A'],
              ['Product Suggestions', '4', 'N/A'],
              ['Observations', '3', 'N/A']
            ]
          ),

          new Paragraph({ text: '', spacing: { after: 200 } }),

          // CONCLUSION
          heading1('11. Overall Conclusion'),
          normalParagraph(
            'The Ayuvya Mobile Application (v8.9) exhibits commendable core runtime stability, smooth UI transitions, and stable performance across standard user flows on Android 15. The application suffered zero crashes, ANRs, or infinite loading locks during the 3-hour evaluation session.'
          ),
          normalParagraph(
            'However, addressing the identified defects—particularly the primary CTA safe-area overlap on Android 15 (BUG-001), height metric conversion formatting (BUG-002), Shop bottom navigation routing loops (BUG-003), and onboarding state machine clarity (BUG-005)—will significantly elevate the application’s polish, usability, and user retention.'
          ),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Report Compiled and Submitted by:',
                bold: true,
                size: 20,
                font: 'Calibri',
                color: '334155',
              }),
            ],
            spacing: { before: 200, after: 50 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Mudit Rawat',
                bold: true,
                size: 20,
                font: 'Calibri',
                color: '0F172A',
              }),
            ],
            spacing: { after: 30 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'QA Candidate - Manual & Mobile Testing',
                italics: true,
                size: 20,
                font: 'Calibri',
                color: '334155',
              }),
            ],
          }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `QA_Assignment_Mudit_Rawat_Ayuvya_App.docx`);
};
