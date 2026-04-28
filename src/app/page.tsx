import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Dollarization from "@/components/Dollarization";
import BillingSoftware from "@/components/BillingSoftware";
import UseCases from "@/components/UseCases";
import Metrics from "@/components/Metrics";
import BillingCalculator from "@/components/BillingCalculator";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Dollarization />
        <BillingSoftware />
        <BillingCalculator />
        <UseCases />
        <Metrics />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
