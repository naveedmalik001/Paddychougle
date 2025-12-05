import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import PortfolioGrid from "@/components/PortfolioGrid";
import Testimonials from "@/components/Testimonials";
import MediaKitCTA from "@/components/MediaKitCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal text-white selection:bg-gold selection:text-charcoal">
      <Header />
      <Hero />
      <StatsGrid />
      <About />
      <Services />
      <Process />
      <PortfolioGrid />
      <Testimonials />
      <MediaKitCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
