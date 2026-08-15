import type { LucideIcon } from "lucide-react";
import {
  Home,
  Info,
  GraduationCap,
  ClipboardList,
  Backpack,
  Users2,
  Newspaper,
  Images,
  Download,
  Phone,
  BarChart3,
} from "lucide-react";

// ----------------------------------------------------------------------------
// Primary navigation — every item is a real route with its own URL.
// This replaces the old scroll-anchor nav (#section) so links are shareable,
// indexable by search engines, and work with the browser back button.
// ----------------------------------------------------------------------------
export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  children?: { label: string; href: string; description: string }[];
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  {
    label: "Academics",
    href: "/academics",
    icon: GraduationCap,
    children: [
      { label: "Subjects & Combinations", href: "/academics", description: "O-Level & A-Level subjects, departments and combinations" },
      { label: "NECTA Results", href: "/academics/results", description: "ACSEE, CSEE and FTNA performance record" },
    ],
  },
  { label: "Admissions", href: "/admissions", icon: ClipboardList },
  { label: "Students", href: "/students", icon: Backpack },
  { label: "Parents", href: "/parents", icon: Users2 },
  { label: "News", href: "/news", icon: Newspaper },
  { label: "Gallery", href: "/gallery", icon: Images },
  { label: "Downloads", href: "/downloads", icon: Download },
  { label: "Contact", href: "/contact", icon: Phone },
];

// Mobile bottom navigation — only the 5 most common tasks stay permanently
// visible (thumb-reachable). Everything else lives behind "More".
export const BOTTOM_NAV: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Academics", href: "/academics", icon: GraduationCap },
  { label: "Admissions", href: "/admissions", icon: ClipboardList },
  { label: "Downloads", href: "/downloads", icon: Download },
  { label: "Results", href: "/academics/results", icon: BarChart3 },
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
  { label: "Government Officer", href: "/about#leadership", icon: "ShieldCheck", question: "Official records & verification" },
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
