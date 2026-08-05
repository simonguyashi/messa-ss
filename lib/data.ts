// ============================================================================
// MESSA SECONDARY SCHOOL — SITE DATA
// Source of truth: https://shuleyetu.co.tz/shuleni/school/s4575-messa-secondary-school-mwanza-cc
// Fields marked [PLACEHOLDER] are not published on the official profile and
// should be replaced by the school with verified information.
// ============================================================================

export const SCHOOL = {
  name: "Messa Secondary School",
  shortName: "Messa SS",
  logo: "https://media.shuleyetu.co.tz/logo/s4575",
  centreNumber: "S4575",
  registrationNumber: "S.4368",
  privateCandidateCentre: "P4575",
  registeredYear: 2010,
  ownership: "Private",
  boarding: "Boarding and Day",
  gender: "Mixed (Boys & Girls)",
  levels: "O-Level & A-Level",
  phone: "+255 754 533 636",
  // [PLACEHOLDER] official email not published on source profile
  email: "info@messasecondary.sc.tz",
  address: "Buguku, Buhongwa Ward, Mwanza City Council, Mwanza Region, Tanzania",
  ward: "Buhongwa",
  council: "Mwanza City Council",
  region: "Mwanza",
  instagram: "https://www.instagram.com/messasecondary/?hl=en",
  profileUrl:
    "https://shuleyetu.co.tz/shuleni/school/s4575-messa-secondary-school-mwanza-cc",
  // Approximate coordinates for Buhongwa Ward, Mwanza — for map embed only.
  // [PLACEHOLDER] replace with the school's exact GPS pin.
  mapsEmbedQuery: "Buguku, Buhongwa, Mwanza City Council, Tanzania",
};

// ----------------------------------------------------------------------------
// NECTA performance record (official, from the profile's results summary)
// ----------------------------------------------------------------------------
export const EXAM_RESULTS = [
  {
    exam: "ACSEE",
    label: "Advanced Certificate (Form VI)",
    year: 2026,
    gpa: "2.7381",
    passRate: "100%",
    sat: 42,
    passed: 42,
  },
  {
    exam: "CSEE",
    label: "Certificate of Secondary Education (Form IV)",
    year: 2025,
    gpa: "2.2236",
    passRate: "93%",
    sat: 128,
    passed: 119,
  },
  {
    exam: "FTNA",
    label: "Form Two National Assessment",
    year: 2025,
    gpa: "2.4284",
    passRate: "100%",
    sat: 91,
    passed: 91,
  },
  {
    exam: "MOCK",
    label: "Mock Examination",
    year: 2026,
    gpa: "2.8447",
    passRate: "100%",
    sat: 104,
    passed: 104,
  },
];

export const ACHIEVEMENTS = [
  "Ranked among the Top 5 private schools with 40+ candidates in Mwanza City Council — ACSEE 2026",
  "Ranked among the Top 5 private schools with 40+ candidates in Mwanza Region — ACSEE 2026",
  "Ranked among the Top 100 private schools nationally with 40+ candidates — ACSEE 2026",
  "The only Form V–VI school in Mwanza City Council offering Computer Science",
  "One of 13 schools in Mwanza Region offering the PGM combination",
  "The only school in Mwanza City Council offering the PMCs combination",
];

// Best-performing subjects, ACSEE 2026 (GPA scale — lower is better on NECTA's scale)
export const TOP_SUBJECTS = [
  { name: "Geography", gpa: "2.5652", pass: "100%" },
  { name: "Economics", gpa: "2.8000", pass: "100%" },
  { name: "Kiswahili", gpa: "3.0000", pass: "100%" },
  { name: "English Language", gpa: "3.3636", pass: "100%" },
  { name: "History", gpa: "3.5500", pass: "100%" },
  { name: "Advanced Mathematics", gpa: "3.8889", pass: "100%" },
  { name: "Chemistry", gpa: "4.2222", pass: "100%" },
  { name: "Biology", gpa: "4.2308", pass: "100%" },
  { name: "General Studies", gpa: "4.5476", pass: "100%" },
  { name: "Physics", gpa: "4.6667", pass: "100%" },
];

// ----------------------------------------------------------------------------
// Animated statistics band
// ----------------------------------------------------------------------------
export const STATS = [
  { label: "Years of Academic Excellence", value: new Date().getFullYear() - 2010, suffix: "+" },
  { label: "O-Level Subjects Offered", value: 18, suffix: "" },
  { label: "A-Level Subjects Offered", value: 13, suffix: "" },
  { label: "2026 ACSEE Pass Rate", value: 100, suffix: "%" },
];

// ----------------------------------------------------------------------------
// Why Choose Messa — value pillars
// ----------------------------------------------------------------------------
export const VALUE_PILLARS = [
  {
    icon: "GraduationCap",
    title: "Proven Academic Results",
    description:
      "A 100% pass rate at ACSEE, FTNA and MOCK level, with consistent placement among the region's top private schools.",
  },
  {
    icon: "FlaskConical",
    title: "Science & ICT Focus",
    description:
      "Fully equipped laboratories and the only A-Level Computer Science programme in Mwanza City Council.",
  },
  {
    icon: "Users",
    title: "Dedicated Educators",
    description:
      "A committed teaching staff guiding students from Form I through Form VI with individual attention.",
  },
  {
    icon: "ShieldCheck",
    title: "Safe, Structured Environment",
    description:
      "A secure boarding and day campus built around discipline, routine, and pastoral care.",
  },
  {
    icon: "BookOpen",
    title: "Broad Curriculum",
    description:
      "18 O-Level and 13 A-Level subjects spanning sciences, business, languages and social studies.",
  },
  {
    icon: "Trophy",
    title: "Leadership & Character",
    description:
      "Structured co-curricular life that builds confidence, teamwork and future-ready leaders.",
  },
];

// ----------------------------------------------------------------------------
// Academic combinations (A-Level) — extracted verbatim from the official profile
// ----------------------------------------------------------------------------
export type Combination = {
  code: string;
  name: string;
  description: string;
  careers: string[];
};

export const COMBINATIONS: Combination[] = [
  {
    code: "HGL",
    name: "History, Geography, Literature in English",
    description:
      "A humanities pathway pairing historical and geographical analysis with literary study — Messa's most subscribed A-Level combination.",
    careers: ["Law", "Journalism", "Public Administration", "Diplomacy", "Education"],
  },
  {
    code: "PCB",
    name: "Physics, Chemistry, Biology",
    description:
      "The classic pre-medical and life-sciences pathway, taught in Messa's dedicated science laboratories.",
    careers: ["Medicine", "Pharmacy", "Nursing", "Biomedical Science", "Veterinary Science"],
  },
  {
    code: "CBG",
    name: "Chemistry, Biology, Geography",
    description:
      "Combines life and earth sciences for students pursuing environmental, agricultural or health-sciences careers.",
    careers: ["Environmental Science", "Agriculture", "Public Health", "Urban Planning"],
  },
  {
    code: "HGE",
    name: "History, Geography, Economics",
    description:
      "A social-sciences combination for students drawn to governance, development and economic policy.",
    careers: ["Economics", "Public Policy", "International Relations", "Banking"],
  },
  {
    code: "HGK",
    name: "History, Geography, Kiswahili",
    description:
      "A humanities and language combination preparing students for careers rooted in communication and culture.",
    careers: ["Education", "Media", "Translation", "Public Service"],
  },
  {
    code: "HKL",
    name: "History, Kiswahili, Literature in English",
    description:
      "A languages-and-humanities pathway for students with a strength in written and analytical communication.",
    careers: ["Law", "Journalism", "Publishing", "Education"],
  },
  {
    code: "PCM",
    name: "Physics, Chemistry, Mathematics",
    description:
      "A rigorous pure-sciences combination for students heading toward engineering and technology fields.",
    careers: ["Engineering", "Architecture", "Data Science", "Applied Physics"],
  },
  {
    code: "EGM",
    name: "Economics, Geography, Mathematics",
    description:
      "A quantitative social-sciences combination bridging economics, spatial analysis and mathematics.",
    careers: ["Economics", "Actuarial Science", "Statistics", "Urban & Regional Planning"],
  },
  {
    code: "PGM",
    name: "Physics, Geography, Mathematics",
    description:
      "One of Messa's specialised offerings — Messa is one of only 13 schools in Mwanza Region teaching this combination.",
    careers: ["Engineering", "Surveying", "Meteorology", "Geoinformatics"],
  },
  {
    code: "PMCs",
    name: "Physics, Mathematics, Computer Science",
    description:
      "Messa's flagship technology combination — the only school in Mwanza City Council offering it, built for the digital economy.",
    careers: ["Software Engineering", "Computer Science", "Data Engineering", "Cybersecurity"],
  },
];

// O-Level subjects (Form I–IV) — verbatim list from the official profile
export const OLEVEL_SUBJECTS = [
  "Civics",
  "History",
  "Geography",
  "Kiswahili",
  "English Language",
  "Literature in English",
  "Physics",
  "Chemistry",
  "Biology",
  "Information and Computer Studies",
  "Computer Science",
  "Basic Mathematics",
  "Mathematics",
  "Historia ya Tanzania na Maadili",
  "Commerce",
  "Book-Keeping",
  "Business Studies",
  "General Studies",
];

// A-Level subjects (Form V–VI) — verbatim list from the official profile
export const ALEVEL_SUBJECTS = [
  "History",
  "Geography",
  "Kiswahili",
  "English Language",
  "Academic Communication",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Basic Applied Mathematics",
  "Advanced Mathematics",
  "Economics",
  "Historia ya Tanzania na Maadili",
];

// ----------------------------------------------------------------------------
// Facilities — [PLACEHOLDER] descriptions where detail is not on the profile
// ----------------------------------------------------------------------------
export const FACILITIES = [
  {
    title: "Science Laboratories",
    description:
      "Dedicated Physics, Chemistry and Biology labs supporting Messa's strong record in the sciences.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Computer Laboratory",
    description:
      "Home of Mwanza City Council's only A-Level Computer Science programme, equipped for hands-on ICT learning.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Library & Study Hall",
    description:
      "A quiet, well-stocked space supporting independent study across all 31 subjects offered at O and A-Level.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Classrooms",
    description:
      "Purpose-built classrooms for Form I through Form VI, organised for focused, disciplined learning.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Sports Ground",
    description:
      "Open playing fields supporting athletics and team sports as part of a well-rounded school life.",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Boarding Facilities",
    description:
      "Messa operates as a Boarding and Day school, with supervised accommodation for boarding students.",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1600&auto=format&fit=crop",
  },
];

// ----------------------------------------------------------------------------
// Gallery — Unsplash placeholders, organised by category, ready for replacement
// ----------------------------------------------------------------------------
export type GalleryImage = {
  id: string;
  category: "Campus" | "Students" | "Academics" | "Laboratory" | "Sports" | "Events";
  src: string;
  alt: string;
};

export const GALLERY: GalleryImage[] = [
  { id: "g1", category: "Campus", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1400&auto=format&fit=crop", alt: "School campus building" },
  { id: "g2", category: "Students", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop", alt: "African students in uniform" },
  { id: "g3", category: "Academics", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop", alt: "Students studying in classroom" },
  { id: "g4", category: "Laboratory", src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop", alt: "Science laboratory" },
  { id: "g5", category: "Sports", src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1400&auto=format&fit=crop", alt: "Students on sports field" },
  { id: "g6", category: "Events", src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop", alt: "Graduation ceremony" },
  { id: "g7", category: "Campus", src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1400&auto=format&fit=crop", alt: "School campus grounds" },
  { id: "g8", category: "Academics", src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1400&auto=format&fit=crop", alt: "Teacher instructing class" },
  { id: "g9", category: "Laboratory", src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop", alt: "Computer laboratory" },
  { id: "g10", category: "Students", src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1400&auto=format&fit=crop", alt: "Students walking on campus" },
  { id: "g11", category: "Events", src: "https://images.unsplash.com/photo-1541958767940-9de6e35c7dfa?q=80&w=1400&auto=format&fit=crop", alt: "School assembly event" },
  { id: "g12", category: "Sports", src: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=1400&auto=format&fit=crop", alt: "Students playing team sports" },
];

// ----------------------------------------------------------------------------
// School life pillars
// ----------------------------------------------------------------------------
export const SCHOOL_LIFE = [
  { icon: "BookOpen", title: "Academics", description: "Rigorous teaching across 31 subjects from Form I to Form VI." },
  { icon: "Trophy", title: "Sports", description: "Athletics and team sports building fitness, discipline and teamwork." },
  { icon: "Users", title: "Clubs & Societies", description: "Student-led clubs building interests beyond the classroom." },
  { icon: "Star", title: "Leadership", description: "Prefects, class leaders and student councils developing responsibility." },
  { icon: "Lightbulb", title: "Innovation", description: "ICT and Computer Science driving digital-skills development." },
  { icon: "Medal", title: "Competitions", description: "Inter-school academic and sports competitions across the region." },
];

// ----------------------------------------------------------------------------
// News — [PLACEHOLDER] editorial content, ready for the school to update
// ----------------------------------------------------------------------------
export const NEWS = [
  {
    id: "n1",
    title: "2026 Admissions Now Open — Form I & Form V",
    date: "[Placeholder date]",
    excerpt:
      "Messa Secondary School is now accepting applications for Form I and Form V for the 2026 academic year. Limited boarding places available.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    category: "Admissions",
  },
  {
    id: "n2",
    title: "ACSEE 2026: Messa Ranked Among Region's Top 5 Private Schools",
    date: "[Placeholder date]",
    excerpt:
      "Messa's Form VI candidates recorded a 100% pass rate at ACSEE 2026, placing the school among the top-performing private schools in Mwanza Region.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "Results",
  },
  {
    id: "n3",
    title: "Annual Inter-Class Sports Day",
    date: "[Placeholder date]",
    excerpt:
      "Students from Form I to Form VI competed in athletics and team sports at Messa's annual sports day celebration.",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1200&auto=format&fit=crop",
    category: "School Life",
  },
  {
    id: "n4",
    title: "Form VI Graduation Ceremony",
    date: "[Placeholder date]",
    excerpt:
      "Messa Secondary School celebrated its graduating Form VI class in a ceremony attended by parents, staff and guests.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    category: "Events",
  },
  {
    id: "n5",
    title: "Science & Innovation Fair",
    date: "[Placeholder date]",
    excerpt:
      "Students showcased projects from the Physics, Chemistry, Biology and Computer Science departments at this year's science fair.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    category: "Academics",
  },
];

// ----------------------------------------------------------------------------
// Testimonials — [PLACEHOLDER] quotes, structured for later replacement
// ----------------------------------------------------------------------------
export const TESTIMONIALS = [
  {
    id: "t1",
    name: "[Placeholder Parent Name]",
    role: "Parent, Form IV Student",
    quote:
      "Messa has given our child structure, discipline and real academic support. The results speak for themselves.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "[Placeholder Student Name]",
    role: "Form VI Graduate",
    quote:
      "The teachers pushed us to work hard, especially in the sciences. I felt genuinely prepared for ACSEE.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "t3",
    name: "[Placeholder Alumni Name]",
    role: "Alumnus, Class of [Placeholder Year]",
    quote:
      "Messa built the foundation for everything I've achieved since. The discipline instilled here stays with you.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
];

// ----------------------------------------------------------------------------
// Admission process timeline
// ----------------------------------------------------------------------------
export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Application",
    description:
      "Form I applicants are placed through the government TAMISEMI selection system; Form V applicants apply directly to the school with their CSEE results.",
  },
  {
    step: "02",
    title: "Document Review",
    description:
      "The school reviews joining instructions, academic records and required documents for each applicant.",
  },
  {
    step: "03",
    title: "Confirmation",
    description:
      "Parents/guardians confirm the place, complete registration and settle applicable fees.",
  },
  {
    step: "04",
    title: "Orientation & Admission",
    description:
      "New students attend orientation and officially join Messa Secondary School for the academic year.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];
