// ----------------------------------------------------------------------------
// Global search index. This is intentionally a static, hand-curated list
// rather than a full-text crawler — for a site this size, a small curated
// index returns more relevant results than fuzzy full-text search, and it
// costs nothing to run (no server, no database).
//
// Add an entry here whenever a new page or downloadable document is added.
// ----------------------------------------------------------------------------
export type SearchItem = {
  title: string;
  description: string;
  url: string;
  keywords: string[];
  group: "Page" | "Document" | "Service";
};

export const SEARCH_INDEX: SearchItem[] = [
  { title: "Admission Requirements", description: "How to join Messa Secondary School", url: "/admissions", keywords: ["admission", "apply", "join", "requirements", "form one", "form five", "usajili"], group: "Service" },
  { title: "School Fees", description: "Fee structure and payment information", url: "/parents#fees", keywords: ["fees", "payment", "school fees", "malipo", "ada"], group: "Service" },
  { title: "NECTA Results", description: "ACSEE, CSEE and FTNA performance record", url: "/academics/results", keywords: ["results", "necta", "matokeo", "acsee", "csee", "ftna", "gpa"], group: "Service" },
  { title: "Academic Calendar", description: "Term dates and school calendar", url: "/students#calendar", keywords: ["calendar", "term dates", "kalenda", "holiday"], group: "Service" },
  { title: "Learning Notes", description: "Subject notes for students", url: "/students#notes", keywords: ["notes", "masomo", "vitabu"], group: "Service" },
  { title: "Past Papers", description: "Previous examination papers", url: "/students#past-papers", keywords: ["past papers", "mitihani ya nyuma", "exams"], group: "Service" },
  { title: "Timetable", description: "Class and examination timetable", url: "/students#timetable", keywords: ["timetable", "ratiba"], group: "Service" },
  { title: "Downloads Centre", description: "All downloadable school documents", url: "/downloads", keywords: ["downloads", "documents", "forms", "nyaraka", "pdf"], group: "Page" },
  { title: "A-Level Combinations", description: "PCB, PCM, HGL, PMCs and more", url: "/academics", keywords: ["combinations", "michepuo", "pcb", "pcm", "hgl", "pmcs", "subjects"], group: "Page" },
  { title: "About Messa Secondary School", description: "History, mission, vision and school profile", url: "/about", keywords: ["about", "history", "mission", "vision", "historia", "profile"], group: "Page" },
  { title: "Leadership & Administration", description: "Head of School and department leaders", url: "/about/leadership", keywords: ["leadership", "headmaster", "administration", "uongozi", "staff"], group: "Page" },
  { title: "Gallery", description: "Campus, students, labs and events photos", url: "/gallery", keywords: ["gallery", "photos", "picha"], group: "Page" },
  { title: "News & Announcements", description: "Latest school news", url: "/news", keywords: ["news", "announcements", "habari", "matangazo"], group: "Page" },
  { title: "Contact & Location", description: "Phone, email, map and office hours", url: "/contact", keywords: ["contact", "phone", "email", "map", "location", "mawasiliano"], group: "Page" },
  { title: "Parents Portal", description: "Fees, announcements, meetings and reports", url: "/parents", keywords: ["parents", "wazazi"], group: "Page" },
  { title: "Students Portal", description: "Notes, timetable, results and clubs", url: "/students", keywords: ["students", "wanafunzi"], group: "Page" },
];
