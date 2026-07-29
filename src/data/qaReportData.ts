import { TestCase, BugReport, UXIssue, ProductSuggestion, Observation, TestingEnvironment } from '../types';

export const environmentDetails: TestingEnvironment = {
  candidateName: 'Mudit Rawat',
  application: 'Ayuvya Mobile App',
  platform: 'Android',
  device: 'Moto G34 5G',
  androidVersion: '15',
  appVersion: '8.9',
  network: 'Wi-Fi (High Speed)',
  deviceTheme: 'Dark Theme',
  appTheme: 'Default Light Theme',
  testingDuration: 'Approximately 3 Hours',
  testingType: 'Manual + Exploratory Testing'
};

export const positiveFindings = [
  'Stable Application Behaviour Observed: Zero application crashes, ANRs, or unhandled exceptions occurred during the 3-hour continuous manual testing session on Android 15.',
  'Smooth Visual Rendering: Smooth layout transitions and responsive interactions were observed across onboarding screens and daily trackers without visible stuttering.',
  'Stable Navigation Behaviour: Core navigation flows remained functional during exploratory testing except for the identified navigation defects.',
  'Responsive Bottom Sheet Controls: Water intake tracker and meal selection modal sheets responded immediately to user touch gestures.',
  'Responsive Form Controls: Goal selection and body metric pickers provided responsive interactions and clear selection controls during testing.'
];

export const scopeModules = [
  { name: 'Authentication', items: ['Sign Up', 'Login', 'OTP Verification', 'Session State'] },
  { name: 'Onboarding', items: ['Health Concern Selection', 'Height Input', 'Weight Input', 'Goal Weight Input', 'Primary Diet Type', 'Activity Level'] },
  { name: 'Core Navigation', items: ['Home Dashboard', 'Appointments Module', 'Consultation Chat', 'Progress Tracker', 'Wellness Shop'] },
  { name: 'Health Trackers', items: ['Water Intake Tracker', 'Meal Logging Module', 'Daily Activity Logging'] },
  { name: 'User Management', items: ['User Profile', 'Account Settings', 'Account Deletion Flow'] },
  { name: 'Subscriptions', items: ['Subscription Plans & Pricing UI (Free tier tested; no paid transactions made)'] }
];

export const testCasesData: TestCase[] = [
  // --- FUNCTIONAL TESTING (10) ---
  {
    id: 'TC-FUNC-001',
    module: 'Authentication',
    category: 'Functional Testing',
    priority: 'High',
    precondition: 'Application freshly installed; user on mobile auth screen',
    scenario: 'Verify account registration using valid 10-digit mobile number and correct OTP',
    steps: [
      '1. Open Ayuvya App on Moto G34 5G.',
      '2. Enter valid 10-digit mobile number on Sign Up screen.',
      '3. Tap "Send OTP".',
      '4. Enter received 6-digit OTP and tap "Verify OTP".'
    ],
    expectedResult: 'OTP verifies successfully and user advances to Onboarding Health Concern screen.',
    actualResult: 'OTP verified successfully and user navigated to onboarding flow as expected.',
    status: 'Pass'
  },
  {
    id: 'TC-FUNC-002',
    module: 'Authentication',
    category: 'Functional Testing',
    priority: 'High',
    precondition: 'Existing registered mobile number available',
    scenario: 'Verify successful user login with valid registered phone number',
    steps: [
      '1. Tap "Login" on welcome screen.',
      '2. Enter registered 10-digit mobile number.',
      '3. Enter valid OTP.',
      '4. Tap "Verify & Continue".'
    ],
    expectedResult: 'User is authenticated and redirected straight to Home Dashboard with saved user data.',
    actualResult: 'User logged in successfully and Home screen dashboard loaded personal data.',
    status: 'Pass'
  },
  {
    id: 'TC-FUNC-003',
    module: 'Onboarding',
    category: 'Functional Testing',
    priority: 'High',
    precondition: 'User is on Health Concern Selection screen during onboarding',
    scenario: 'Verify selecting a primary health concern and proceeding to physical metrics',
    steps: [
      '1. View list of health concerns (e.g. Weight Gain, Skin Care, Digestion).',
      '2. Tap on "Weight Gain" option card.',
      '3. Tap "Continue" button.'
    ],
    expectedResult: 'Card highlights active state and tapping Continue navigates to Height selection.',
    actualResult: 'Selection recorded cleanly and app transitioned to Height metric selection.',
    status: 'Pass'
  },
  {
    id: 'TC-FUNC-004',
    module: 'Onboarding',
    category: 'Functional Testing',
    priority: 'High',
    precondition: 'User is on Height selection screen',
    scenario: 'Verify height input selection and unit switching (cm / ft-in)',
    steps: [
      '1. Toggle height unit selector between "cm" and "ft/in".',
      '2. Adjust height slider/picker to 175 cm (5 ft 9 in).',
      '3. Tap "Next".'
    ],
    expectedResult: 'Height choice updates dynamically and converts accurately between cm and ft/in.',
    actualResult: 'Conversion bug observed when height reaches boundary foot limits (displays 4\'12" instead of 5\'0").',
    status: 'Fail'
  },
  {
    id: 'TC-FUNC-005',
    module: 'Onboarding',
    category: 'Functional Testing',
    priority: 'Medium',
    precondition: 'User on Weight & Goal Weight selection screen',
    scenario: 'Verify setting current weight and goal weight values',
    steps: [
      '1. Select current weight as 65 kg using weight wheel/slider.',
      '2. Select goal weight as 72 kg.',
      '3. Tap "Continue".'
    ],
    expectedResult: 'Current weight and target goal weight are accepted and saved to onboarding state.',
    actualResult: 'Both weight values recorded accurately without validation errors.',
    status: 'Pass'
  },
  {
    id: 'TC-FUNC-006',
    module: 'Water Intake',
    category: 'Functional Testing',
    priority: 'Medium',
    precondition: 'User logged in on Home screen water tracker card',
    scenario: 'Verify adding water glasses to daily water intake counter',
    steps: [
      '1. Locate Water Tracker widget on Home dashboard.',
      '2. Tap "+ 250ml" quick add button.',
      '3. Observe progress ring and numerical tally.'
    ],
    expectedResult: 'Water tally increments by 250ml and progress ring visual fills proportionally.',
    actualResult: 'Water count incremented accurately from 0ml to 250ml with visual feedback.',
    status: 'Pass'
  },
  {
    id: 'TC-FUNC-007',
    module: 'Meal Logging',
    category: 'Functional Testing',
    priority: 'High',
    precondition: 'User on Home screen or Meal Tracker module',
    scenario: 'Verify logging breakfast item from search catalog',
    steps: [
      '1. Navigate to Meal Tracker -> Breakfast section.',
      '2. Search for "Oats Bowl".',
      '3. Select quantity as "1 Serving (250g)" and tap "Add to Meal".'
    ],
    expectedResult: 'Meal item is added to daily intake and calorie breakdown summary updates.',
    actualResult: 'Oats bowl logged successfully; total daily calorie total updated in real time.',
    status: 'Pass'
  },
  {
    id: 'TC-FUNC-008',
    module: 'Activity Logging',
    category: 'Functional Testing',
    priority: 'Medium',
    precondition: 'User on Activity Tracker screen',
    scenario: 'Verify logging a 30-minute brisk walking activity',
    steps: [
      '1. Open Activity Logging screen.',
      '2. Select "Walking" from workout categories.',
      '3. Set duration to 30 minutes and intensity to Moderate.',
      '4. Tap "Save Activity".'
    ],
    expectedResult: 'Activity saved under today\'s history with estimated calories burned calculated.',
    actualResult: 'Activity logged successfully and displayed in daily activity timeline.',
    status: 'Pass'
  },
  {
    id: 'TC-FUNC-009',
    module: 'Appointments',
    category: 'Functional Testing',
    priority: 'High',
    precondition: 'User authenticated on free tier plan',
    scenario: 'Verify doctor appointment slot browsing and booking interface',
    steps: [
      '1. Tap "Appointments" tab from bottom navigation.',
      '2. Select "Ayurvedic Practitioner Consultation".',
      '3. Browse available date picker and time slots.',
      '4. Select tomorrow at 11:00 AM.'
    ],
    expectedResult: 'Available slots render correctly with practitioner details and booking confirmation CTA.',
    actualResult: 'Time slots loaded properly and consultation review bottom sheet appeared.',
    status: 'Pass'
  },
  {
    id: 'TC-FUNC-010',
    module: 'Shop',
    category: 'Functional Testing',
    priority: 'High',
    precondition: 'User navigating Ayuvya Wellness Shop tab',
    scenario: 'Verify filtering shop products by Ayurvedic health category',
    steps: [
      '1. Tap "Shop" on bottom navigation bar.',
      '2. Tap filter pill "Digestive Health".',
      '3. Select "Ayuvya Digex Capsule" product card.'
    ],
    expectedResult: 'Product list updates to match selected category filter; details page opens on product click.',
    actualResult: 'Category filter applied seamlessly and product details view loaded.',
    status: 'Pass'
  },

  // --- VALIDATION TESTING (6) ---
  {
    id: 'TC-VAL-001',
    module: 'Authentication',
    category: 'Validation Testing',
    priority: 'High',
    precondition: 'User on Login / Sign Up mobile input screen',
    scenario: 'Verify validation response when entering an incomplete 8-digit mobile number',
    steps: [
      '1. Enter "98765432" (8 digits) in mobile input field.',
      '2. Observe "Send OTP" button state or inline validation message.'
    ],
    expectedResult: '"Send OTP" button remains disabled or inline error "Enter valid 10-digit number" appears.',
    actualResult: 'Send OTP button stayed in disabled state preventing invalid submission.',
    status: 'Pass'
  },
  {
    id: 'TC-VAL-002',
    module: 'Authentication',
    category: 'Validation Testing',
    priority: 'High',
    precondition: 'OTP screen active following valid phone number submission',
    scenario: 'Verify validation error when entering an incorrect 6-digit OTP code',
    steps: [
      '1. Enter incorrect OTP code "000000".',
      '2. Tap "Verify OTP".'
    ],
    expectedResult: 'Toast or error message "Invalid OTP. Please check and try again" displays.',
    actualResult: 'Error toast "Invalid OTP" displayed; input field highlighted red.',
    status: 'Pass'
  },
  {
    id: 'TC-VAL-003',
    module: 'Onboarding',
    category: 'Validation Testing',
    priority: 'Medium',
    precondition: 'User on Weight selection step in onboarding',
    scenario: 'Verify height metric conversion display for foot/inch boundaries',
    steps: [
      '1. Switch unit to "ft/in".',
      '2. Scroll height selector through foot transitions (e.g. 149cm to 153cm).'
    ],
    expectedResult: 'Values transition smoothly from 4\'11" to 5\'0" and 5\'11" to 6\'0".',
    actualResult: 'System displays erroneous conversions such as "4\'12"" and "5\'12"" instead of 5\'0" / 6\'0".',
    status: 'Fail'
  },
  {
    id: 'TC-VAL-004',
    module: 'Settings',
    category: 'Validation Testing',
    priority: 'Medium',
    precondition: 'User on Profile -> Edit Profile screen',
    scenario: 'Verify email format validation in user profile settings',
    steps: [
      '1. Tap Email Address field.',
      '2. Enter invalid string "mudit.rawat@invalid".',
      '3. Tap "Save Changes".'
    ],
    expectedResult: 'Validation rule triggers "Please enter a valid email address".',
    actualResult: 'Inline validation error prevented submission until standard format provided.',
    status: 'Pass'
  },
  {
    id: 'TC-VAL-005',
    module: 'Meal Logging',
    category: 'Validation Testing',
    priority: 'Low',
    precondition: 'User on Custom Meal Creation dialog',
    scenario: 'Verify validation on entering zero or negative calorie values',
    steps: [
      '1. Tap "Add Custom Food".',
      '2. Enter name "Herbal Tea".',
      '3. Enter Calories as "-50".',
      '4. Tap "Save Item".'
    ],
    expectedResult: 'Negative calorie input is rejected with "Calories must be 0 or greater".',
    actualResult: 'Field auto-corrected to 0 and rejected negative integer entry.',
    status: 'Pass'
  },
  {
    id: 'TC-VAL-006',
    module: 'Water Intake',
    category: 'Validation Testing',
    priority: 'Low',
    precondition: 'User editing daily water target goal',
    scenario: 'Verify upper boundary limit validation for daily water intake target',
    steps: [
      '1. Open Water Target Settings.',
      '2. Attempt to input "20,000 ml" (20 Liters).',
      '3. Tap "Save Target".'
    ],
    expectedResult: 'Warning displayed "Maximum recommended daily water intake is 10,000 ml".',
    actualResult: 'System capped input value at 10,000 ml with informational message.',
    status: 'Pass'
  },

  // --- NEGATIVE TESTING (6) ---
  {
    id: 'TC-NEG-001',
    module: 'Authentication',
    category: 'Negative Testing',
    priority: 'High',
    precondition: 'Device Wi-Fi turned off; app launched',
    scenario: 'Verify network disconnect handling during OTP request',
    steps: [
      '1. Disable Wi-Fi and mobile data on Moto G34 5G.',
      '2. Enter valid 10-digit phone number.',
      '3. Tap "Send OTP".'
    ],
    expectedResult: 'App displays user-friendly offline toast or snackbar "No Internet connection. Please retry".',
    actualResult: 'Offline warning banner appeared; app prevented app crash or infinite spinner.',
    status: 'Pass'
  },
  {
    id: 'TC-NEG-002',
    module: 'Authentication',
    category: 'Negative Testing',
    priority: 'High',
    precondition: 'User account previously deleted via Settings -> Delete Account',
    scenario: 'Verify login flow behavior using mobile number of a deleted account',
    steps: [
      '1. Enter mobile number of an account that was deleted previously.',
      '2. Enter correct OTP and proceed.'
    ],
    expectedResult: 'System informs user "Account does not exist. Please Sign Up" or requests confirmation.',
    actualResult: 'App automatically creates a brand new blank user account without notifying the user.',
    status: 'Fail'
  },
  {
    id: 'TC-NEG-003',
    module: 'Onboarding',
    category: 'Negative Testing',
    priority: 'Medium',
    precondition: 'User mid-way through onboarding at Height Selection step',
    scenario: 'Verify system behavior when interrupting onboarding flow via hardware Back button',
    steps: [
      '1. Start Today -> Enter Phone -> Verify OTP -> Arrive at Height screen.',
      '2. Press Android system Back button.',
      '3. User lands on initial Welcome page.',
      '4. Tap "Start Today" again and enter same phone number.',
      '5. Tap "Send OTP".'
    ],
    expectedResult: 'App should either send a fresh OTP or cleanly resume onboarding without misleading button labels.',
    actualResult: 'App resumes directly at Height screen, but interface still misleadingly displays "Send OTP" button.',
    status: 'Fail'
  },
  {
    id: 'TC-NEG-004',
    module: 'Shop',
    category: 'Negative Testing',
    priority: 'Medium',
    precondition: 'User in Wellness Shop view with zero items in cart',
    scenario: 'Verify opening cart or checkout with an empty shopping bag',
    steps: [
      '1. Open Shop tab.',
      '2. Tap top-right Cart icon without adding any products.'
    ],
    expectedResult: 'Empty cart drawer/screen renders with clear message "Your cart is empty" and "Start Shopping" CTA.',
    actualResult: 'Empty cart graphic displayed cleanly with active link to browse catalog.',
    status: 'Pass'
  },
  {
    id: 'TC-NEG-005',
    module: 'Chat',
    category: 'Negative Testing',
    priority: 'Low',
    precondition: 'User active in Daily Health Coach AI chat view',
    scenario: 'Verify submitting empty text or whitespace spaces in chat input',
    steps: [
      '1. Open Consultation Chat.',
      '2. Type multiple space characters "     " into message bar.',
      '3. Tap Send button.'
    ],
    expectedResult: 'Send icon remains disabled or input is trimmed preventing empty message dispatch.',
    actualResult: 'Send button remained inactive; no empty messages sent to chat log.',
    status: 'Pass'
  },
  {
    id: 'TC-NEG-006',
    module: 'Profile',
    category: 'Negative Testing',
    priority: 'Medium',
    precondition: 'User editing profile details',
    scenario: 'Verify system handling when uploading an unsupported file format as profile picture',
    steps: [
      '1. Go to Profile -> Edit Avatar.',
      '2. Select a non-image document file (e.g., .PDF or .TXT file).',
      '3. Confirm selection.'
    ],
    expectedResult: 'App rejects file with message "Please select a valid image file (.JPG or .PNG)".',
    actualResult: 'File picker filtered out non-image extensions automatically.',
    status: 'Pass'
  },

  // --- UI/UX TESTING (6) ---
  {
    id: 'TC-UI-001',
    module: 'Authentication',
    category: 'UI/UX Testing',
    priority: 'High',
    precondition: 'Moto G34 5G with Android 15 gesture/3-button navigation bar active',
    scenario: 'Verify primary CTA button placement relative to Android system navigation bar',
    steps: [
      '1. Launch app on Moto G34 5G.',
      '2. Navigate to Login / Send OTP screen.',
      '3. Inspect bottom "Send OTP" and primary action CTA buttons.'
    ],
    expectedResult: 'Bottom CTA buttons render with sufficient bottom padding above system navigation buttons.',
    actualResult: 'Primary CTA buttons overlap Android navigation bar, obscuring button text and touch target.',
    status: 'Fail'
  },
  {
    id: 'TC-UI-002',
    module: 'Chat',
    category: 'UI/UX Testing',
    priority: 'Medium',
    precondition: 'User opens Chat tab from bottom navigation bar',
    scenario: 'Verify visibility of bottom navigation bar inside Chat view',
    steps: [
      '1. Tap "Chat" icon on main bottom navigation bar.',
      '2. Observe bottom of screen inside Chat conversation view.'
    ],
    expectedResult: 'Bottom navigation bar remains accessible or back header provides explicit exit route.',
    actualResult: 'Bottom navigation bar completely disappears inside Chat, forcing back header button to exit.',
    status: 'Fail'
  },
  {
    id: 'TC-UI-003',
    module: 'Authentication',
    category: 'UI/UX Testing',
    priority: 'Medium',
    precondition: 'User on Landing page reviewing registration options',
    scenario: 'Verify copy consistency and heading text across authentication flows',
    steps: [
      '1. Tap "Start Today" button on landing screen.',
      '2. Inspect heading title on the phone entry screen.'
    ],
    expectedResult: 'Heading copy clearly aligns with onboarding action (e.g. "Create Your Account").',
    actualResult: 'Heading copy displays "Welcome Back" inside "Start Today" flow, creating semantic confusion.',
    status: 'Fail'
  },
  {
    id: 'TC-UI-004',
    module: 'Theme & Contrast',
    category: 'UI/UX Testing',
    priority: 'Low',
    precondition: 'Device operating system set to Dark Theme mode',
    scenario: 'Verify app color palette behavior on dark mode Android devices',
    steps: [
      '1. Ensure Moto G34 system theme is set to Dark Mode.',
      '2. Launch Ayuvya application.',
      '3. Inspect text legibility, card backgrounds, and tab bars.'
    ],
    expectedResult: 'App renders crisp light theme or adaptive dark palette without contrast failures.',
    actualResult: 'App forces default clean light theme cleanly; text and icons meet contrast guidelines.',
    status: 'Pass'
  },
  {
    id: 'TC-UI-005',
    module: 'Home Dashboard',
    category: 'UI/UX Testing',
    priority: 'Low',
    precondition: 'User on Home Dashboard screen',
    scenario: 'Verify card alignment, spacing, and visual padding across health widgets',
    steps: [
      '1. Scroll through Home dashboard.',
      '2. Check visual spacing around Water Intake, Meal Tracker, and Banner cards.'
    ],
    expectedResult: 'Consistent 16px margins and card corner radii throughout screen layout.',
    actualResult: 'Layout spacing is harmonious with clean typographic hierarchy across widgets.',
    status: 'Pass'
  },
  {
    id: 'TC-UI-006',
    module: 'Shop',
    category: 'UI/UX Testing',
    priority: 'Medium',
    precondition: 'User browsing Shop products',
    scenario: 'Verify high-resolution rendering of product thumbnail images and badges',
    steps: [
      '1. Open Shop product grid.',
      '2. Inspect product graphics and discount tags.'
    ],
    expectedResult: 'Images load smoothly without pixelation, visual distortion, or broken image icons.',
    actualResult: 'Product imagery rendered cleanly with fast image caching.',
    status: 'Pass'
  },

  // --- BOUNDARY TESTING (5) ---
  {
    id: 'TC-BND-001',
    module: 'Onboarding',
    category: 'Boundary Testing',
    priority: 'Medium',
    precondition: 'User on Height selection wheel/slider screen',
    scenario: 'Verify minimum height boundary value selection (e.g., 90 cm)',
    steps: [
      '1. Drag height slider to extreme left/minimum boundary value (90 cm).',
      '2. Observe value display and tap "Next".'
    ],
    expectedResult: 'Minimum height value 90 cm (2\'11") recorded accurately without UI clipping.',
    actualResult: 'Minimum value accepted cleanly without visual distortion.',
    status: 'Pass'
  },
  {
    id: 'TC-BND-002',
    module: 'Onboarding',
    category: 'Boundary Testing',
    priority: 'Medium',
    precondition: 'User on Height selection wheel/slider screen',
    scenario: 'Verify maximum height boundary value selection (e.g., 240 cm)',
    steps: [
      '1. Drag height slider to extreme right/maximum boundary value (240 cm).',
      '2. Observe value display.'
    ],
    expectedResult: 'Maximum height value 240 cm (7\'10") displayed correctly.',
    actualResult: 'Maximum height boundary displayed cleanly.',
    status: 'Pass'
  },
  {
    id: 'TC-BND-003',
    module: 'Onboarding',
    category: 'Boundary Testing',
    priority: 'Medium',
    precondition: 'User on Weight selection screen',
    scenario: 'Verify weight selection minimum (20 kg) and maximum (250 kg) boundaries',
    steps: [
      '1. Scroll weight selector to minimum (20 kg).',
      '2. Scroll weight selector to maximum (250 kg).'
    ],
    expectedResult: 'Selector stops smoothly at defined boundaries without out-of-range errors.',
    actualResult: 'Boundaries enforced smoothly at 20 kg and 250 kg.',
    status: 'Pass'
  },
  {
    id: 'TC-BND-004',
    module: 'Meal Logging',
    category: 'Boundary Testing',
    priority: 'Low',
    precondition: 'User entering custom food quantity in meal logger',
    scenario: 'Verify quantity field behavior when entering maximum digits (999 servings)',
    steps: [
      '1. Open Meal Logger -> Add Custom Item.',
      '2. Input "999" in serving quantity field.'
    ],
    expectedResult: 'Field caps input at reasonable maximum limit or validates total calories.',
    actualResult: 'Quantity capped at 100 max servings with boundary toast.',
    status: 'Pass'
  },
  {
    id: 'TC-BND-005',
    module: 'Water Intake',
    category: 'Boundary Testing',
    priority: 'Low',
    precondition: 'User water tracker at 0ml progress',
    scenario: 'Verify water logging behavior at lower boundary (0ml) and single tap (+250ml)',
    steps: [
      '1. Ensure start-of-day water progress is 0 / 3000 ml.',
      '2. Tap minus button when at 0ml.',
      '3. Tap +250ml button.'
    ],
    expectedResult: 'Minus button disabled at 0ml; single tap increases counter to exactly 250ml.',
    actualResult: 'Minus button remained disabled at 0ml; addition incremented correctly to 250ml.',
    status: 'Pass'
  },

  // --- NAVIGATION TESTING (6) ---
  {
    id: 'TC-NAV-001',
    module: 'Shop',
    category: 'Navigation Testing',
    priority: 'High',
    precondition: 'User is active inside Shop tab module',
    scenario: 'Verify bottom navigation redirection behavior when clicking Appointments tab from Shop',
    steps: [
      '1. Tap "Shop" on bottom navigation bar.',
      '2. From within Shop view, tap "Appointments" icon on bottom navigation.'
    ],
    expectedResult: 'App navigates directly to Appointments tab screen.',
    actualResult: 'App incorrectly redirects user back to Home screen instead of Appointments tab.',
    status: 'Fail'
  },
  {
    id: 'TC-NAV-002',
    module: 'Shop',
    category: 'Navigation Testing',
    priority: 'High',
    precondition: 'User is active inside Shop tab module',
    scenario: 'Verify bottom navigation redirection behavior when clicking Progress tab from Shop',
    steps: [
      '1. Tap "Shop" on bottom navigation bar.',
      '2. From within Shop view, tap "Progress" icon on bottom navigation.'
    ],
    expectedResult: 'App navigates directly to Progress tab screen.',
    actualResult: 'App incorrectly redirects user back to Home screen instead of Progress tab.',
    status: 'Fail'
  },
  {
    id: 'TC-NAV-003',
    module: 'Shop',
    category: 'Navigation Testing',
    priority: 'High',
    precondition: 'User browsing inside Shop tab module',
    scenario: 'Verify target screen launched when clicking Chat icon inside Shop screen',
    steps: [
      '1. Open Shop tab.',
      '2. Click "Chat" entry point/icon inside Shop interface.'
    ],
    expectedResult: 'App displays primary Chat selection screen (Daily Health Coach, Doctor, Dietitian).',
    actualResult: 'App bypasses choice screen and directly launches Daily Health Coach chat session.',
    status: 'Fail'
  },
  {
    id: 'TC-NAV-004',
    module: 'Bottom Navigation',
    category: 'Navigation Testing',
    priority: 'High',
    precondition: 'User on Home Dashboard',
    scenario: 'Verify smooth tab switching across main bottom navigation bars (Home, Appointments, Chat, Progress, Shop)',
    steps: [
      '1. Tap Home -> Appointments -> Chat -> Progress -> Shop sequentially from Home.',
      '2. Observe tab highlight state and loaded screen.'
    ],
    expectedResult: 'Each bottom navigation tab highlights active tab icon and loads target module immediately.',
    actualResult: 'Direct navigation from Home functions properly; sub-navigation defects present inside Shop.',
    status: 'Pass'
  },
  {
    id: 'TC-NAV-005',
    module: 'Profile',
    category: 'Navigation Testing',
    priority: 'Medium',
    precondition: 'User on Home screen',
    scenario: 'Verify opening Profile screen from top avatar icon and returning via back button',
    steps: [
      '1. Tap user profile avatar in top-left header of Home screen.',
      '2. View Profile menu options.',
      '3. Tap hardware back button or top header back arrow.'
    ],
    expectedResult: 'Profile screen opens smoothly; back action returns user cleanly to Home dashboard.',
    actualResult: 'Profile screen opened and top back arrow returned cleanly to Home.',
    status: 'Pass'
  },
  {
    id: 'TC-NAV-006',
    module: 'Settings',
    category: 'Navigation Testing',
    priority: 'Medium',
    precondition: 'User on Profile screen',
    scenario: 'Verify navigation depth from Profile -> Settings -> Privacy Policy and webview exit',
    steps: [
      '1. Profile -> Tap "Settings".',
      '2. Tap "Privacy Policy".',
      '3. View in-app webview container.',
      '4. Tap Close / Back.'
    ],
    expectedResult: 'Privacy Policy webview renders securely; closing returns user to Settings menu.',
    actualResult: 'Webview loaded policy document cleanly; close action returned state to Settings.',
    status: 'Pass'
  },

  // --- SESSION TESTING (3) ---
  {
    id: 'TC-SES-001',
    module: 'Session Management',
    category: 'Session Testing',
    priority: 'High',
    precondition: 'User logged in and actively viewing Home Dashboard',
    scenario: 'Verify user authentication session persistence across application force-close and relaunch',
    steps: [
      '1. Ensure user is logged in with active account.',
      '2. Swipe app away from Android Recent Apps switcher (force kill).',
      '3. Relaunch Ayuvya application from launcher icon.'
    ],
    expectedResult: 'App opens directly on Home Dashboard without requesting login or OTP credentials again.',
    actualResult: 'Session persisted reliably; Home screen opened immediately without re-login.',
    status: 'Pass'
  },
  {
    id: 'TC-SES-002',
    module: 'Session Management',
    category: 'Session Testing',
    priority: 'High',
    precondition: 'User logged in on Home screen',
    scenario: 'Verify session destruction and navigation state upon performing explicit Logout',
    steps: [
      '1. Navigate to Profile -> Settings.',
      '2. Scroll down and tap "Log Out".',
      '3. Confirm logout in modal popup dialog.'
    ],
    expectedResult: 'User tokens cleared; user redirected to initial Welcome / Login screen.',
    actualResult: 'Session destroyed successfully and app returned to initial Welcome landing screen.',
    status: 'Pass'
  },
  {
    id: 'TC-SES-003',
    module: 'Session Management',
    category: 'Session Testing',
    priority: 'Medium',
    precondition: 'User active on Appointments screen',
    scenario: 'Verify app behavior during backgrounding (minimize to home screen) and foreground resume',
    steps: [
      '1. Open Appointments tab.',
      '2. Press Android Home button to minimize app to background.',
      '3. Wait 60 seconds, then reopen app from recent apps stack.'
    ],
    expectedResult: 'App resumes smoothly in same view state without reloading or losing form context.',
    actualResult: 'App restored Appointments view state seamlessly with zero UI glitching.',
    status: 'Pass'
  }
];

export const bugReportsData: BugReport[] = [
  {
    id: 'BUG-001',
    title: 'Primary CTA buttons overlap Android system navigation bar on gesture/3-button layouts',
    severity: 'Major',
    priority: 'High',
    affectedModule: 'Authentication / Global CTAs',
    screenName: 'Login, Send OTP, and Onboarding screens',
    environment: 'Moto G34 5G | Android 15 | App v8.9 | Default Light Theme',
    precondition: 'Device operating with standard Android system navigation bar or gesture pill bar.',
    stepsToReproduce: [
      '1. Open Ayuvya app on Moto G34 5G running Android 15.',
      '2. Navigate to Login / Mobile Number entry screen.',
      '3. Observe the bottom "Send OTP" primary call-to-action button.',
      '4. Observe bottom CTA buttons across secondary onboarding screens.'
    ],
    expectedResult: 'Primary CTA buttons should observe safe-area bottom insets, positioning buttons cleanly above system navigation controls with adequate clearance.',
    actualResult: 'Primary CTA buttons (Login, Send OTP, Continue) render beneath the Android system navigation bar, causing text labels to be partially cut off and resulting in unreliable touch interaction in some cases.',
    impact: 'Directly degrades core user acquisition flow; causes friction during initial login and signup.',
    recommendation: 'Ensure proper bottom padding and safe-area inset handling on edge-to-edge screens, allowing primary action buttons to render cleanly above gesture navigation bars across all supported device resolutions and system layouts.',
    screenshotDescription: 'UI Mockup showing bottom "Send OTP" button rendered underneath Android back/home system bar buttons.'
  },
  {
    id: 'BUG-002',
    title: 'Height metric conversion displays 5\'12" for 182 cm and "6 feet" for 183 cm',
    severity: 'Medium',
    priority: 'High',
    affectedModule: 'Onboarding',
    screenName: 'Height Selection Screen',
    environment: 'Moto G34 5G | Android 15 | App v8.9',
    precondition: 'User is on Height selection screen during onboarding with unit set to "cm".',
    stepsToReproduce: [
      '1. Navigate to Onboarding -> Height Selection screen.',
      '2. Select metric unit (cm) and adjust height picker to 182 cm.',
      '3. Observe imperial conversion display.',
      '4. Adjust height picker to 183 cm and observe imperial conversion display.'
    ],
    expectedResult: 'Imperial height conversions should follow standard feet and inches notation with proper rounding.',
    actualResult: 'Selecting 182 cm displays 5\'12", and selecting 183 cm displays 6 feet. The conversion displays non-standard formats (5\'12" is mathematically 6\'0") and inconsistent labeling ("6 feet" vs "6\'0"").',
    impact: 'Diminishes technical credibility and user trust during initial profile creation in a health & wellness app.',
    recommendation: 'Implement a standard height unit conversion utility function that normalizes inches so that 12 inches rolls over into 1 foot (e.g., 182 cm -> 6\'0"), and enforces consistent notation (Feet\'Inches") across all values.',
    screenshotDescription: 'Height picker screen displaying 5\'12" in display font instead of 6\'0".'
  },
  {
    id: 'BUG-003',
    title: 'Bottom navigation bar inside Shop redirects users to Home when clicking Appointments or Progress tabs',
    severity: 'Major',
    priority: 'High',
    affectedModule: 'Shop / Navigation Routing',
    screenName: 'Shop Tab Screen',
    environment: 'Moto G34 5G | Android 15 | App v8.9',
    precondition: 'User is actively viewing the Shop tab.',
    stepsToReproduce: [
      '1. Open Ayuvya app and tap "Shop" on bottom navigation bar.',
      '2. From within Shop screen, tap "Appointments" on bottom navigation.',
      '3. Return to Shop tab and tap "Progress" on bottom navigation.'
    ],
    expectedResult: 'Tapping "Appointments" should open the Appointments screen; tapping "Progress" should open the Progress screen.',
    actualResult: 'Tapping either "Appointments" or "Progress" from inside the Shop tab forces an unexpected redirection back to the Home Dashboard screen.',
    impact: 'Breaks bottom navigation consistency, causing navigation loops and user frustration.',
    recommendation: 'Review bottom navigation routing logic from the Shop screen and ensure each tab maps correctly to its intended destination.',
    screenshotDescription: 'Flow diagram showing Shop tab bottom bar tap leading unexpectedly back to Home screen.'
  },
  {
    id: 'BUG-004',
    title: 'Chat entry point inside Shop directly launches Daily Health Coach chat screen instead of full Chat selection menu',
    severity: 'Medium',
    priority: 'Medium',
    affectedModule: 'Shop / Chat Module',
    screenName: 'Shop Screen -> Chat Action',
    environment: 'Moto G34 5G | Android 15 | App v8.9',
    precondition: 'User is browsing items inside Shop tab.',
    stepsToReproduce: [
      '1. Open Shop tab.',
      '2. Click on the "Chat" float icon/CTA inside the Shop screen header/body.',
      '3. Observe the chat interface that opens.'
    ],
    expectedResult: 'Clicking Chat should open the primary Consultation Chat HUB screen displaying all available options: Daily Health Coach, Doctor Consultation, and Dietitian Chat.',
    actualResult: 'Clicking Chat inside Shop directly launches the "Daily Health Coach" AI chat view, bypassing Doctor and Dietitian options completely.',
    impact: 'Inconsistent feature entry points prevent users in Shop from easily booking human doctor/dietitian chats.',
    recommendation: 'Standardize click listener for Chat button in Shop view to route to ChatHubFragment rather than deep-linking directly to HealthCoachChatActivity.',
    screenshotDescription: 'Shop screen chat button bypassing Chat hub menu and opening Health Coach chat screen.'
  },
  {
    id: 'BUG-005',
    title: 'Interrupted onboarding flow resumes at Height screen while misleadingly displaying "Send OTP" button',
    severity: 'Major',
    priority: 'High',
    affectedModule: 'Authentication / Onboarding State Machine',
    screenName: 'Onboarding Height Screen (Resumed State)',
    environment: 'Moto G34 5G | Android 15 | App v8.9',
    precondition: 'User begins registration, verifies OTP, and reaches Height screen.',
    stepsToReproduce: [
      '1. Tap "Start Today" -> Enter mobile number -> Verify OTP.',
      '2. Arrive at Height screen during onboarding.',
      '3. Press Android Back button to exit onboarding back to Landing page.',
      '4. Tap "Start Today" again, re-enter mobile number, and tap "Send OTP".'
    ],
    expectedResult: 'Application state machine should recognize existing verified session state and present a clear "Continue Onboarding" CTA or issue a fresh OTP.',
    actualResult: 'App directly skips phone verification and jumps straight to Height screen, but button label still reads "Send OTP" instead of "Continue" or "Next".',
    impact: 'Confuses user about whether an SMS code was sent or required; degrades registration UX quality.',
    recommendation: 'Update button label binding logic based on onboarding state enum: if state is `ONBOARDING_HEIGHT`, display label "Continue" or "Next".',
    screenshotDescription: 'Height selection screen displaying a button labeled "Send OTP" instead of "Next".'
  },
  {
    id: 'BUG-006',
    title: 'Deleted account login flow does not inform user about account recreation',
    severity: 'Medium',
    priority: 'Medium',
    affectedModule: 'Authentication / Account Lifecycle',
    screenName: 'Login Screen',
    environment: 'Moto G34 5G | Android 15 | App v8.9',
    precondition: 'User has previously deleted their Ayuvya account via Settings -> Delete Account.',
    stepsToReproduce: [
      '1. Delete account via Settings -> Delete Account.',
      '2. From initial landing screen, select "Login".',
      '3. Enter the phone number belonging to the recently deleted account.',
      '4. Enter valid OTP and proceed.'
    ],
    expectedResult: 'Login flow should detect account deletion state and inform user: "Account not found. Would you like to Sign Up?" or offer account restoration.',
    actualResult: 'Login flow silently creates a brand new user profile without informing the user that their old account data was purged, causing confusion if user expected account recovery.',
    impact: 'Functional ambiguity between Login and Registration semantics.',
    recommendation: 'Provide distinct API response or user prompt for deleted/non-existent user mobile numbers during Login request.',
    screenshotDescription: 'Login flow auto-generating blank account without user notification.'
  }
];

export const uxIssuesData: UXIssue[] = [
  {
    id: 'UX-001',
    title: 'Bottom navigation bar disappears inside Chat module, creating a navigation dead-end',
    location: 'Chat Tab / Health Coach Conversation View',
    description: 'When the user opens the Chat tab, the persistent bottom navigation bar is completely removed from the view layout hierarchy.',
    impact: 'Users cannot switch directly to Home, Appointments, or Shop while inside Chat. They are forced to locate and tap the top-left header back arrow, creating additional navigation clicks and feeling like a trapping screen.',
    recommendation: 'Maintain persistent bottom navigation bar across top-level tab views, or provide a clear close icon anchored in header bar.'
  },
  {
    id: 'UX-002',
    title: 'Inconsistent authentication terminology ("Welcome Back" displayed inside "Start Today" flow)',
    location: 'Landing Page -> Phone Entry Screen',
    description: 'Tapping the primary "Start Today" button (intended for new registration) leads to a screen titled "Welcome Back" (typically reserved for returning users). Simultaneously, "Login" and "Start Today" lead to nearly identical phone number forms.',
    impact: 'Creates cognitive friction for first-time users who feel unsure whether they are creating a new account or logging into an existing one.',
    recommendation: 'Differentiate titles: Use "Create Your Account" for Start Today / Sign Up flow and "Welcome Back" exclusively for Login flow.'
  },
  {
    id: 'UX-003',
    title: 'Misleading "Send OTP" CTA label displayed on resumed onboarding screen',
    location: 'Resumed Onboarding Screen (Height / Weight)',
    description: 'When a user interrupts onboarding and resumes by re-entering their phone number, the app jumps back to the height/weight screen, but the action button continues to display "Send OTP".',
    impact: 'Users expect an SMS code to be triggered on their phone, leading to confusion when no SMS arrives and the screen asks for height input instead.',
    recommendation: 'Bind button labels dynamically to the active step (`Step 1: Next`, `Step 2: Verify OTP`, `Step 3: Save Height`).'
  }
];

export const productSuggestionsData: ProductSuggestion[] = [
  {
    id: 'SUG-001',
    title: 'Allow Multi-Select capability for Health Concerns during onboarding',
    currentBehavior: 'Users are restricted to selecting only one single health concern (e.g., either "Weight Gain" OR "Digestion") during onboarding.',
    suggestedImprovement: 'Enable multi-select chip selection allowing users to select up to 3 complementary health concerns (e.g., "Digestion" + "Skin Care" + "Hair Health").',
    valueProposition: 'Ayurvedic health concerns are inherently holistic and interconnected. Multi-select creates a much more tailored health plan and improves user onboarding conversion.'
  },
  {
    id: 'SUG-002',
    title: 'Add an "Other" option with custom text field in Health Concerns list',
    currentBehavior: 'Health Concern selection presents a fixed list of predefined cards with no option for unlisted conditions.',
    suggestedImprovement: 'Include an "Other / Custom Concern" card at the bottom of the list that expands a clean text field for user input.',
    valueProposition: 'Captures valuable user health data that falls outside standard catalog options and prevents user drop-off during onboarding.'
  },
  {
    id: 'SUG-003',
    title: 'Clarify Login vs Start Today authentication flow',
    currentBehavior: 'On the initial screen, users are presented with two primary options: "Login" and "Start Today". Both options lead to the same phone number authentication screen.',
    suggestedImprovement: 'Clarify the distinction on the landing screen, or combine them into a single primary action (e.g., "Get Started / Sign In").',
    valueProposition: 'Reduces initial cognitive hesitation for new users who are unsure whether "Start Today" creates a new account or leads to onboarding.'
  },
  {
    id: 'SUG-004',
    title: 'Introduce explicit Onboarding Progress Indicator (e.g., Step 2 of 5)',
    currentBehavior: 'Onboarding screens transition without a visible step counter or progress bar.',
    suggestedImprovement: 'Add a subtle linear progress bar and "Step X of Y" label at top of onboarding views.',
    valueProposition: 'Gives users a clear sense of completion time, lowering drop-off rates during multi-step metrics collection.'
  }
];

export const observationsData: Observation[] = [
  {
    id: 'OBS-001',
    title: 'Repeated static social proof toast notifications ("Just now")',
    observedPattern: 'During testing, pop-up notifications continuously appeared in the bottom corner with messages like "Karan from Pune just started plan", "Anita from Mumbai just started plan", and "Rahul from Pune just started plan"—all tagged with "Just now".',
    analysis: 'The notifications appeared at fixed short intervals during the session, showing identical relative timestamps ("Just now").',
    qaAssessment: 'Because these notifications repeat identical names and timestamps continuously, users may perceive them as automated or static promotional UI elements rather than live activity.'
  },
  {
    id: 'OBS-002',
    title: 'Unverified concurrent viewer banner ("52 people looking at plans right now")',
    observedPattern: 'The plan subscription screen displays a sticky banner stating "52 people are looking at plans right now".',
    analysis: 'The counter displayed a static value during the testing session.',
    qaAssessment: 'While social proof elements are common in marketing, static indicators can reduce perceived authenticity if users notice the number does not change over time.'
  },
  {
    id: 'OBS-003',
    title: 'Static/Evergreen promotional countdown timer ("Offer ends in 15 minutes")',
    observedPattern: 'A countdown banner on the subscription tier screen indicated "Offer ends in 15:00 minutes". After extended navigation across screens, the timer restarted from 15:00 minutes.',
    analysis: 'The timer resets upon screen re-entry rather than maintaining a persistent countdown across session navigation.',
    qaAssessment: 'This behaviour may indicate that the countdown is session-based rather than a persistent offer expiry timer.'
  }
];
