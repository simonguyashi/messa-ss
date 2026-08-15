import type { LucideIcon } from "lucide-react";
import {
  Home,
  Info,
  GraduationCap,
  ClipboardList,
  Backpack,
  Newspaper,
  Images,
  Download,
  Phone,
  BarChart3,
} from "lucide-react";

// ----------------------------------------------------------------------------
// Primary navigation — every item is a real route with its own URL.
// Dropdown children give NECTA-style information density: a visitor can see
// everything available under a topic without clicking through, and every
// child still lands on (or scrolls to an anchor within) a real page — never
// a fake button.
// ----------------------------------------------------------------------------
export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  children?: { label: string; href: string; description: string }[];
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "About",
    href: "/about",
    icon: Info,
    children: [
      { label: "School Overview", href: "/about#profile", description: "Official school profile & verified details" },
      { label: "History, Vision & Mission", href: "/about#story", description: "Our story, mission, vision and values" },
      { label: "Leadership & Staff", href: "/about/leadership", description: "Head of School, administration and departments" },
      { label: "Achievements", href: "/about#achievements", description: "NECTA rankings and recognitions" },
      { label: "Facilities", href: "/academics#facilities", description: "Laboratories, library and campus facilities" },
      { label: "Location", href: "/contact#map", description: "Find us in Buhongwa, Mwanza City Council" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    icon: GraduationCap,
    children: [
      { label: "Subjects & Departments", href: "/academics", description: "O-Level and A-Level subjects offered" },
      { label: "A-Level Combinations", href: "/academics#combinations", description: "PCB, PCM, HGL, PMCs and more" },
      { label: "Facilities", href: "/academics#facilities", description: "Labs, ICT room and library" },
      { label: "Timetable", href: "/students#timetable", description: "Class and examination timetable" },
      { label: "Academic Calendar", href: "/students#calendar", description: "Term dates and key school events" },
      { label: "NECTA Results", href: "/academics/results", description: "ACSEE, CSEE, FTNA performance by year" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    icon: ClipboardList,
    children: [
      { label: "Form I Admission", href: "/admissions#form-one", description: "Government TAMISEMI placement process" },
      { label: "Form V Admission", href: "/admissions#form-five", description: "Direct A-Level application with CSEE results" },
      { label: "Requirements & Documents", href: "/admissions#requirements", description: "What you need to register" },
      { label: "Fees", href: "/parents#fees", description: "Day and boarding fee structure" },
      { label: "Joining Instructions", href: "/downloads", description: "Official forms and instructions" },
      { label: "Admissions FAQ", href: "/admissions#faq", description: "Common questions answered" },
    ],
  },
  {
    label: "Students",
    href: "/students",
    icon: Backpack,
    children: [
      { label: "Learning Notes", href: "/students#notes", description: "Subject notes by form" },
      { label: "Past Papers", href: "/students#past-papers", description: "Previous examination papers" },
      { label: "Timetable", href: "/students#timetable", description: "Class schedule" },
      { label: "Results", href: "/academics/results", description: "Check examination performance" },
      { label: "Clubs & Sports", href: "/students#school-life", description: "Co-curricular activities" },
      { label: "Student Leadership", href: "/students#school-life", description: "Prefects and student councils" },
    ],
  },
  { label: "Results", href: "/academics/results", icon: BarChart3 },
  { label: "News", href: "/news", icon: Newspaper },
  { label: "Gallery", href: "/gallery", icon: Images },
  { label: "Downloads", href: "/downloads", icon: Download },
  { label: "Contact", href: "/contact", icon: Phone },
];

// Mobile bottom navigation — only the 5 most common tasks stay permanently
// visible (thumb-reachable). Everything else lives behind "More", which
// shows the same expandable categories as the desktop dropdowns.
export const BOTTOM_NAV: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Academics", href: "/academics", icon: GraduationCap },
  { label: "Admissions", href: "/admissions", icon: ClipboardList },
  { label: "Results", href: "/academics/results", icon: BarChart3 },
  { label: "Downloads", href: "/downloads", icon: Download },
];

// ----------------------------------------------------------------------------
// Role selector — the "reception desk" question. Each role routes to the
// page that answers what that visitor came to do, not a generic homepage.
// ----------------------------------------------------------------------------
export const ROLES = [
  { label: "Parent", href: "/parents", icon: "Users2", question: "Fees, announcements & how my child is doing" },
  { label: "Student", href: "/students", icon: "Backpack", question: "Notes, past papers, timetable & results" },
  { label: "New Applicant", href: "/admissions", icon: "ClipboardList", question: "How do I join Messa?" },
  { label: "Teacher / Staff", href: "/academics", icon: "GraduationCap", question: "Academic resources & calendar" },
  { label: "Visitor", href: "/about", icon: "Info", question: "Learn about the school" },
  { label: "Government Officer", href: "/about/leadership", icon: "ShieldCheck", question: "Official records & verification" },
] as const;

// ----------------------------------------------------------------------------
// Homepage Quick Access — real services, not feature cards. Each answers
// "what do I need to do" rather than "what does the school have".
// ----------------------------------------------------------------------------
export const QUICK_ACCESS = [
  { label: "Apply for Admission", href: "/admissions", icon: "FileEdit" },
  { label: "School Fees", href: "/parents#fees", icon: "Wallet" },
  { label: "NECTA Results", href: "/academics/results", icon: "BarChart3" },
  { label: "Academic Calendar", href: "/students#calendar", icon: "CalendarDays" },
  { label: "Learning Notes", href: "/students#notes", icon: "NotebookPen" },
  { label: "Past Papers", href: "/students#past-papers", icon: "FileText" },
  { label: "Downloads Centre", href: "/downloads", icon: "Download" },
  { label: "Timetable", href: "/students#timetable", icon: "Clock" },
  { label: "Announcements", href: "/parents#announcements", icon: "Megaphone" },
  { label: "Gallery", href: "/gallery", icon: "Images" },
  { label: "Location & Map", href: "/contact#map", icon: "MapPin" },
  { label: "Contact School", href: "/contact", icon: "Phone" },
] as const;
