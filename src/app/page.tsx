import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import OurWorks from "@/components/sections/OurWorks";
import Problems from "@/components/sections/Problems";
import Solutions from "@/components/sections/Solutions";
import Process from "@/components/sections/Process";
import Benefits from "@/components/sections/Benefits";
import MidCta from "@/components/sections/MidCta";
import BeforeAfter from "@/components/sections/BeforeAfter";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CallToAction from "@/components/sections/CallToAction";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import HeroConnector from "@/components/ui/HeroConnector";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <HeroConnector />
        <OurWorks />
        <Problems />
        <Solutions />
        <Benefits />
        <MidCta />
        <Process />
        <BeforeAfter />
        <About />
        <Pricing />
        <WhyChooseUs />
        <CallToAction />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
