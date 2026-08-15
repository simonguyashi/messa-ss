// ----------------------------------------------------------------------------
// Downloads Centre index. Every document is [PLACEHOLDER] until the school
// uploads a real PDF — file is null so the UI can show a "Coming soon" state
// instead of a broken link. Once a real file exists, drop it in /public/docs
// and set `file` to that path.
// ----------------------------------------------------------------------------
export type DownloadDoc = {
  title: string;
  category: "Admissions" | "Academics" | "Fees" | "Policies" | "Calendar";
  description: string;
  file: string | null;
};

export const DOWNLOADS: DownloadDoc[] = [
  { title: "Admission Application Form", category: "Admissions", description: "Form I and Form V application form.", file: null },
  { title: "School Prospectus", category: "Admissions", description: "Overview of programmes, facilities and school life.", file: null },
  { title: "Required Documents Checklist", category: "Admissions", description: "Documents needed to complete registration.", file: null },
  { title: "Fee Structure — Day Students", category: "Fees", description: "Term-by-term fee breakdown for day students.", file: null },
  { title: "Fee Structure — Boarding Students", category: "Fees", description: "Term-by-term fee breakdown for boarding students.", file: null },
  { title: "Academic Calendar", category: "Calendar", description: "Term dates, holidays and key school events.", file: null },
  { title: "Examination Timetable", category: "Calendar", description: "Internal and mock examination schedule.", file: null },
  { title: "School Rules & Regulations", category: "Policies", description: "Code of conduct for students and boarders.", file: null },
  { title: "Uniform Guidelines", category: "Policies", description: "Approved school uniform and boarding kit list.", file: null },
  { title: "O-Level Subject Outline", category: "Academics", description: "Subjects taught from Form I to Form IV.", file: null },
  { title: "A-Level Combinations Guide", category: "Academics", description: "All 10 combinations offered with career guidance.", file: null },
];

export const DOWNLOAD_CATEGORIES: DownloadDoc["category"][] = [
  "Admissions",
  "Fees",
  "Calendar",
  "Academics",
  "Policies",
];
