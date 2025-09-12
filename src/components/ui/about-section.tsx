import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Rocket, Heart, Award } from "lucide-react";

const AboutSection = () => {
  const credentials = [
    "Engineer & Scientist",
    "Tech Innovation Advisor",
    "Mindset Engineering Expert",
    "Personal Growth Catalyst"
  ];

  const achievements = [
    {
      icon: Brain,
      title: "Mindset Engineering",
      description: "Combining analytical thinking with emotional intelligence for breakthrough results"
    },
    {
      icon: Rocket,
      title: "Career Acceleration",
      description: "From startup founder to tech advisor - I've walked the path of ambitious growth"
    },
    {
      icon: Heart,
      title: "Authentic Connection",
      description: "Your 'sis coach' who understands the challenges of high achievers"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "500+ professionals transformed through science-backed coaching methods"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            About Dr. R
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Dr. R Taraneh
            <span className="block text-gradient-gold">Built Myself From Scratch, Now I Help You Do The Same</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As Dr. R Taraneh, an engineer, scientist, and innovation advisor, I understand the unique challenges 
            high achievers face. I've transformed my own life and now I'm here as your sis mentor 
            to guide your transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-4">Dr. R Taraneh's Transformation Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              I started as an engineer with big dreams but limiting beliefs. Through my journey 
              in tech, startups, and scientific research, I discovered the power of mindset 
              engineering - the intersection of analytical thinking and personal growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, as Dr. R Taraneh, I combine my technical background with proven coaching methodologies to 
              help ambitious minds like yours breakthrough barriers and achieve extraordinary success.
            </p>
            
            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mt-6">
              {credentials.map((credential, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {credential}
                </Badge>
              ))}
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-hover border-border/50">
                <CardContent className="p-6">
                  <achievement.icon className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Why Choose True You Mastery?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <h4 className="font-semibold mb-2">5-Minute Transformations</h4>
                <p className="text-sm text-muted-foreground">
                  Quick, actionable strategies that fit into your busy schedule
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Science-Backed Methods</h4>
                <p className="text-sm text-muted-foreground">
                  Engineering precision meets psychological insights
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Authentic Support</h4>
                <p className="text-sm text-muted-foreground">
                  Your sis mentor who truly understands your journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;