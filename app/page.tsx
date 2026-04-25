import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Philosophy } from "@/components/philosophy";
import { Works } from "@/components/works";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Works />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
