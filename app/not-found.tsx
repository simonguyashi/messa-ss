import Link from "next/link";
import { Search, Home, ClipboardList } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[60vh] items-center bg-white py-20">
        <Container className="mx-auto max-w-lg text-center">
          <p className="font-heading text-6xl font-bold text-navy-100">404</p>
          <h1 className="mt-4 font-heading text-2xl font-bold text-navy-900">Page not found</h1>
          <p className="mt-3 text-slate-600">
            The page you&rsquo;re looking for may have moved. Try one of these instead:
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="flex items-center justify-center gap-2 rounded-full bg-navy-600 px-6 py-3 text-sm font-semibold text-white">
              <Home size={16} /> Go Home
            </Link>
            <Link href="/admissions" className="flex items-center justify-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-semibold text-navy-800">
              <ClipboardList size={16} /> Admissions
            </Link>
            <Link href="/downloads" className="flex items-center justify-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-semibold text-navy-800">
              <Search size={16} /> Downloads
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
