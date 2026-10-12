// Every word on the site lives here. Sections render from this file, so copy
// edits never touch JSX. Source: Shreesha_Rao_Mobile_Developer_Portfolio_Content_Guide.pdf.
//
// Empty strings mean "not supplied yet": the UI hides whatever depends on them.

export type TechIcon =
  | 'swift'
  | 'swiftui'
  | 'flutter'
  | 'dart'
  | 'xcode'
  | 'androidstudio'
  | 'git'
  | 'github'
  | 'firebase'
  | 'mediapipe'
  | 'mlkit'
  | 'gemma';

export const profile = {
  firstName: 'Shreesha',
  lastName: 'Rao',
  title: 'Mobile Application Developer',
  stack: 'Swift · SwiftUI · Flutter',
  pitch:
    'Building mobile experiences with Swift, SwiftUI and Flutter — with a growing focus on on-device AI and user-focused applications.',
  location: 'Mangaluru, Karnataka, India',
};

// Paste the Spline export URL (Export → Code → React → scene.splinecode).
// While empty, the hero shows the CSS keycap fallback.
export const SPLINE_SCENE = '';

export const links = {
  email: '',
  linkedin: '',
  github: '',
  // Drop the file at public/resume.pdf, then set this to '/resume.pdf'.
  resume: '',
};

export const nav = [
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export const about = {
  lead: 'I turn ideas into practical, maintainable mobile experiences — from native iOS to cross-platform apps and AI that runs on the device.',
  paragraphs: [
    "I'm a Mobile Application Developer with professional experience building applications using Swift, SwiftUI and Flutter. My work spans native iOS development, cross-platform mobile applications, API integration, application architecture and on-device AI.",
    "I focus on clean architecture, reusable components, performance and user experience. I'm currently working on Crampad Enterprise, building an iOS application with SwiftUI, and exploring offline AI experiences powered by on-device language models.",
    'I believe good software engineering goes beyond writing code — it means understanding the problem, making thoughtful technical decisions, testing thoroughly and building solutions that can evolve with the product.',
  ],
  stats: [
    { value: '4+', label: 'Years' },
    { value: 'iOS + Android', label: 'Platforms' },
    { value: '12+', label: 'Technologies' },
    { value: 'Always', label: 'Learning' },
  ],
};

export type Role = {
  title: string;
  company: string;
  type: string;
  dates: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export const experience: Role[] = [
  {
    title: 'iOS Application Developer',
    company: 'Crampad Enterprise',
    type: 'Native iOS',
    dates: 'Dec 2025 – Present',
    summary: 'Owning end-to-end iOS application development using Swift and SwiftUI.',
    bullets: [
      'Developing reusable application components and a structured architecture.',
      'Shared core functionality: theme configuration, text constants and error handling.',
      'Coordinator-based navigation and test-driven development practices.',
      'ML Kit translation workflows with downloadable language models for multilingual experiences.',
    ],
    tech: ['Swift', 'SwiftUI', 'Swift Package Manager', 'XCTest', 'ML Kit'],
  },
  {
    title: 'Mobile Engineer',
    company: 'KriyaXLabs',
    type: 'Freelance',
    dates: 'Nov 2025 – Present',
    summary:
      'Built an offline conversational chatbot in Flutter using Google Gemma 3N and MediaPipe — AI conversations with no backend inference server.',
    bullets: [
      'Local model integration, model selection and inference workflows.',
      'Streaming AI responses and structured outputs for summaries, diagrams and mathematical content.',
    ],
    tech: ['Flutter', 'Dart', 'Gemma 3N', 'MediaPipe', 'On-device AI'],
  },
  {
    title: 'Engineer — Software Development',
    company: 'Codecraft Technologies',
    type: 'Full-time',
    dates: 'Apr 2023 – Oct 2025',
    summary:
      'Contributed to mobile application development and software delivery, implementing features and integrating APIs.',
    bullets: [
      'Collaborated with the team to develop, debug and maintain applications.',
      'Focused on code quality, troubleshooting and maintainable solutions.',
    ],
    tech: ['Mobile', 'REST APIs', 'Debugging'],
  },
  {
    title: 'Trainee Engineer — Software Development',
    company: 'Codecraft Technologies',
    type: 'Full-time',
    dates: 'Oct 2021 – Mar 2023',
    summary:
      'Built foundational software development skills and progressed toward independent feature development.',
    bullets: ['Worked with application code, debugging and development workflows.'],
    tech: ['Software Development', 'Debugging'],
  },
];

export type Project = {
  index: string;
  name: string;
  tagline: string;
  highlights: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    index: '01',
    name: 'Crampad Enterprise',
    tagline:
      'A SwiftUI enterprise application focused on student-facing experiences and a reusable application architecture.',
    highlights: [
      'Shared core Swift package with reusable components',
      'Coordinator-based navigation',
      'Centralised theme, text and error-handling layer',
      'Multilingual workflows with ML Kit translation — language selection, model downloads with progress, persisted preferences',
      'Unit-tested, maintainable architecture',
    ],
    tech: ['Swift', 'SwiftUI', 'SPM', 'ML Kit', 'XCTest'],
  },
  {
    index: '02',
    name: 'Offline AI Chatbot',
    tagline:
      'A Flutter app running a local language model, so AI conversations happen directly on a supported device.',
    highlights: [
      'Google Gemma 3N integrated through MediaPipe',
      'Local model loading, selection and inference',
      'Streaming response generation',
      'Structured answers with summaries, diagrams and maths',
      'Handling model memory and device-resource limits',
    ],
    tech: ['Flutter', 'Dart', 'Gemma 3N', 'MediaPipe'],
  },
];

export const technologies: { name: string; icon: TechIcon }[] = [
  { name: 'Swift', icon: 'swift' },
  { name: 'SwiftUI', icon: 'swiftui' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'Dart', icon: 'dart' },
  { name: 'Xcode', icon: 'xcode' },
  { name: 'Android Studio', icon: 'androidstudio' },
  { name: 'Firebase', icon: 'firebase' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'MediaPipe', icon: 'mediapipe' },
  { name: 'ML Kit', icon: 'mlkit' },
  { name: 'Gemma', icon: 'gemma' },
];

export const skillGroups = [
  { label: 'Architecture', items: ['MVVM', 'Coordinator', 'Modular', 'Dependency injection'] },
  { label: 'APIs', items: ['REST', 'JSON', 'async/await'] },
  { label: 'Testing', items: ['XCTest', 'Unit testing', 'TDD', 'Mocking'] },
  { label: 'Tooling', items: ['Swift Package Manager', 'CocoaPods', 'VS Code', 'UIKit'] },
];

export const services = [
  {
    title: 'Native iOS Development',
    body: 'iOS applications in Swift and SwiftUI, with reusable components, structured navigation and maintainable architecture.',
  },
  {
    title: 'Cross-platform Mobile',
    body: 'Flutter applications for Android and iOS with shared business logic, responsive interfaces and API integrations.',
  },
  {
    title: 'On-device AI',
    body: 'Local language models and ML capabilities inside mobile apps, with attention to device memory and offline use.',
  },
  {
    title: 'Application Architecture',
    body: 'Modular code, reusable core components, navigation flows and clear boundaries between UI, logic and services.',
  },
  {
    title: 'Testing & Code Quality',
    body: 'Unit tests, validated behaviour and test-driven development where it pays off.',
  },
];

// Fill in from your actual records; the section stays hidden while degree is empty.
export const education = {
  degree: '',
  institution: '',
  years: '',
  location: '',
  detail: '',
};

export const contact = {
  heading: "Let's build something",
  body: "Have a mobile application idea, an interesting engineering challenge, or an opportunity to collaborate? I'm always happy to connect with people building useful products. Reach out to talk mobile development, iOS engineering, Flutter or on-device AI.",
};
