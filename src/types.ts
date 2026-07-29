export type TestPriority = 'High' | 'Medium' | 'Low';
export type TestStatus = 'Pass' | 'Fail' | 'Blocked';
export type BugSeverity = 'Critical' | 'Major' | 'Medium' | 'Minor' | 'Low';

export interface TestCase {
  id: string;
  module: string;
  category: 'Functional Testing' | 'Validation Testing' | 'Negative Testing' | 'UI/UX Testing' | 'Boundary Testing' | 'Navigation Testing' | 'Session Testing';
  priority: TestPriority;
  precondition: string;
  scenario: string;
  steps: string[];
  expectedResult: string;
  actualResult: string;
  status: TestStatus;
}

export interface BugReport {
  id: string;
  title: string;
  severity: BugSeverity;
  priority: TestPriority;
  environment: string;
  precondition: string;
  stepsToReproduce: string[];
  expectedResult: string;
  actualResult: string;
  impact: string;
  recommendation: string;
  affectedModule: string;
  screenName: string;
  screenshotDescription?: string;
}

export interface UXIssue {
  id: string;
  title: string;
  description: string;
  location: string;
  impact: string;
  recommendation: string;
}

export interface ProductSuggestion {
  id: string;
  title: string;
  currentBehavior: string;
  suggestedImprovement: string;
  valueProposition: string;
}

export interface Observation {
  id: string;
  title: string;
  observedPattern: string;
  analysis: string;
  qaAssessment: string;
}

export interface TestingEnvironment {
  application: string;
  platform: string;
  device: string;
  androidVersion: string;
  appVersion: string;
  network: string;
  deviceTheme: string;
  appTheme: string;
  testingDuration: string;
  testingType: string;
  candidateName: string;
}
