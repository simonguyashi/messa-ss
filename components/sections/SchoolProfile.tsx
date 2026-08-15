import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SCHOOL } from "@/lib/data";

const ROWS: [string, string][] = [
  ["School Name", SCHOOL.name],
  ["Registration Number", SCHOOL.registrationNumber],
  ["NECTA Centre Number", SCHOOL.centreNumber],
  ["Private Candidate Centre", SCHOOL.privateCandidateCentre],
  ["Established", String(SCHOOL.registeredYear)],
  ["Ward", SCHOOL.ward],
  ["Council / District", SCHOOL.council],
  ["Region", SCHOOL.region],
  ["School Type", SCHOOL.ownership],
  ["Ownership", SCHOOL.ownership],
  ["Gender", SCHOOL.gender],
  ["Day / Boarding", SCHOOL.boarding],
  ["Education Levels", SCHOOL.levels],
  ["Telephone", SCHOOL.phone],
  ["Email", SCHOOL.email],
  ["Website", "[Placeholder] Not yet published"],
];

// Page purpose within /about: an official, verifiable snapshot — the kind
// of table a District Education Officer or a parent comparing schools would
// scan in seconds. Every value here traces back to the official profile;
// nothing is invented.
export function SchoolProfile() {
  return (
    <section id="profile" className="scroll-mt-24 bg-mist section-py">
      <Container>
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} className="text-gold-600" />
          <h2 className="font-heading text-2xl font-bold text-navy-900 md:text-3xl">Official School Profile</h2>
        </div>
        <p className="mt-2 max-w-2xl text-slate-600">
          Verified against Messa&rsquo;s NECTA-linked school profile. Fields marked [Placeholder] are not yet published.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-navy-100 bg-white">
          <dl className="divide-y divide-navy-50">
            {ROWS.map(([label, value]) => (
              <div key={label} className="grid grid-cols-1 gap-1 px-6 py-3.5 sm:grid-cols-3 sm:gap-4 sm:py-3">
                <dt className="text-sm font-semibold text-slate-500">{label}</dt>
                <dd className="text-sm text-navy-900 sm:col-span-2">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
