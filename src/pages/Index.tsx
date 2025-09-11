import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import ServicesSection from "@/components/ui/services-section";
import YouTubeSection from "@/components/ui/youtube-section";
import ContactSection from "@/components/ui/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="youtube">
          <YouTubeSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xl font-bold mb-2">True You Mastery</div>
          <p className="text-primary-foreground/80">
            © 2024 Dr. R Taraneh. All rights reserved. Transform your life, unlock your potential.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
