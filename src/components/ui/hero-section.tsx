import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/dr-r-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-scale-in">
              <Star className="w-4 h-4" />
              Engineer, Scientist, Your Sis Coach & Mentor
            </div>

            {/* Main Headline */}
            <h1 className="hero-text mb-6 animate-slide-up">
              Transform Your Life
              <span className="block text-gradient-gold">Unlock Your True Potential</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Mindset, Growth & Success for High Achievers. 
              <span className="block font-semibold text-foreground mt-2">
                Level Up Your Life & Career in Just 5 Minutes
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="btn-hero group">
                Book Your Free Discovery Call
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                Watch Latest Videos
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" />
                <span>500+ Lives Transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-secondary" />
                <span>Tech Innovation Advisor</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-secondary" />
                <span>Built From Scratch</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Dr. R Taraneh - Professional Coach & Mentor" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-secondary">5-Min</div>
              <div className="text-sm text-muted-foreground">Daily Transformation</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="text-2xl font-bold text-primary">@TrueYouMastery</div>
              <div className="text-sm text-muted-foreground">YouTube Channel</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;