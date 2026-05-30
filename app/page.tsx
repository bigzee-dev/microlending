import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LoanCalculator } from "@/components/loan-calculator";
import { HowItWorks } from "@/components/how-it-works";
import { WhyUs } from "@/components/why-us";
import { UseCases } from "@/components/use-cases";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LoanCalculator />
        <HowItWorks />
        <WhyUs />
        <UseCases />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
