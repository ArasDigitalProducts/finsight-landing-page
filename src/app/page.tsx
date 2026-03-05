import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ERPIntegration from "@/components/ERPIntegration";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoBar />
      <Features />
      <HowItWorks />
      <ERPIntegration />
      <CTABanner />
      <Footer />
    </main>
  );
}
