import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Instagram, 
  Youtube, 
  Calendar,
  Gift,
  ArrowRight,
  Star,
  Clock
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Ready to Transform?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start Your Journey
            <span className="block text-gradient-gold">To True Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step towards unlocking your true potential. 
            Book your free discovery call or grab your transformation guide below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Lead Magnet Card */}
          <Card className="card-hover border-secondary/20 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl">
                FREE: 5-Minute Daily Transformation Guide
              </CardTitle>
              <p className="text-muted-foreground">
                Get the exact framework I use with high achievers to create 
                breakthrough results in just 5 minutes a day.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">What You'll Get:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 5-minute morning mindset reset</li>
                  <li>• Daily confidence building exercises</li>
                  <li>• Goal achievement tracking system</li>
                  <li>• Weekly growth challenges</li>
                </ul>
              </div>
              
              <form className="space-y-4">
                <Input 
                  placeholder="Enter your first name" 
                  className="border-border/50 focus:border-secondary"
                />
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="border-border/50 focus:border-secondary"
                />
                <Button className="w-full btn-hero">
                  Get Free Transformation Guide
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground text-center">
                No spam, ever. Unsubscribe anytime. Your information is secure.
              </p>
            </CardContent>
          </Card>

          {/* Discovery Call Card */}
          <Card className="card-hover border-primary/20 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">
                Book Your Free Discovery Call
              </CardTitle>
              <p className="text-muted-foreground">
                30-minute strategy session to identify your biggest growth opportunities 
                and create a personalized transformation roadmap.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="text-sm">30-minute focused session</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary" />
                  <span className="text-sm">Personalized growth strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-secondary" />
                  <span className="text-sm">Completely free, no obligations</span>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Perfect for:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Students seeking career clarity</li>
                  <li>• Startup founders building confidence</li>
                  <li>• Professionals ready for next level</li>
                  <li>• Anyone feeling stuck or unfulfilled</li>
                </ul>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                Schedule Discovery Call
                <Calendar className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="border-border/50 shadow-lg mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            <p className="text-muted-foreground">
              Have questions? Want to share your story? I'd love to hear from you.
            </p>
          </CardHeader>
          
          <CardContent>
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input placeholder="Your Name" className="border-border/50" />
                <Input type="email" placeholder="Your Email" className="border-border/50" />
                <Input placeholder="Subject" className="border-border/50" />
              </div>
              
              <div className="space-y-4">
                <Textarea 
                  placeholder="Your Message" 
                  className="border-border/50 min-h-[120px] resize-none"
                />
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  Send Message
                  <Mail className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-white"
              onClick={() => window.open('https://instagram.com/dr.r.mindsetengineer', '_blank')}
            >
              <Instagram className="mr-2 w-5 h-5" />
              @dr.r.mindsetengineer
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
              onClick={() => window.open('https://www.youtube.com/@TrueYouMastery', '_blank')}
            >
              <Youtube className="mr-2 w-5 h-5" />
              @TrueYouMastery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;