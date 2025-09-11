import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Target, 
  Trophy, 
  Users, 
  Briefcase, 
  Compass,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Mindset Mastery Programs",
      description: "Transform limiting beliefs into empowering mindsets that drive success",
      features: [
        "Identify & eliminate mental blocks",
        "Build unshakeable confidence",
        "Develop growth-oriented thinking",
        "Master emotional intelligence"
      ],
      popular: true
    },
    {
      icon: Target,
      title: "Personal Growth Coaching",
      description: "Accelerate your personal development with tailored strategies",
      features: [
        "Custom growth roadmap",
        "Weekly accountability sessions",
        "Goal achievement frameworks",
        "Life design principles"
      ],
      popular: false
    },
    {
      icon: Trophy,
      title: "Career Success Strategies",
      description: "Navigate your career path with confidence and strategic clarity",
      features: [
        "Career transition planning",
        "Leadership skill development",
        "Professional branding",
        "Networking mastery"
      ],
      popular: false
    },
    {
      icon: Users,
      title: "Confidence Building",
      description: "Build authentic confidence that radiates in every area of life",
      features: [
        "Overcome imposter syndrome",
        "Public speaking confidence",
        "Social confidence mastery",
        "Self-advocacy skills"
      ],
      popular: false
    },
    {
      icon: Briefcase,
      title: "Leadership Development",
      description: "Develop the leadership skills that inspire and create impact",
      features: [
        "Executive presence training",
        "Team leadership strategies",
        "Influence & persuasion",
        "Decision-making frameworks"
      ],
      popular: false
    },
    {
      icon: Compass,
      title: "Early Career Navigation",
      description: "Perfect for students and early professionals finding their path",
      features: [
        "Career exploration guidance",
        "Interview preparation",
        "Skill development planning",
        "Industry insights"
      ],
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Services & Programs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Every Area of Your Life
            <span className="block text-gradient-gold">With Expert Guidance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a student, startup founder, or seasoned professional, 
            I provide tailored coaching solutions to accelerate your growth and success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`card-hover border-border/50 relative ${
                service.popular ? 'ring-2 ring-secondary shadow-lg' : ''
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-secondary text-secondary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your free discovery call and let's create a personalized plan 
            to unlock your true potential and achieve extraordinary success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero group">
              Book Free Discovery Call
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
              View Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;