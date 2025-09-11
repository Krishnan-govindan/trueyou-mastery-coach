import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Clock, Eye } from "lucide-react";

const YouTubeSection = () => {
  const featuredVideos = [
    {
      title: "5-Minute Morning Mindset Reset for High Achievers",
      duration: "5:32",
      views: "12K",
      thumbnail: "https://img.youtube.com/vi/placeholder1/maxresdefault.jpg",
      description: "Transform your morning routine with this powerful mindset engineering technique."
    },
    {
      title: "From Engineer to Entrepreneur: My Transformation Story",
      duration: "15:42",
      views: "8.5K",
      thumbnail: "https://img.youtube.com/vi/placeholder2/maxresdefault.jpg",
      description: "The complete journey of building myself from scratch and how you can too."
    },
    {
      title: "Confidence Building Secrets for Career Success",
      duration: "9:18",
      views: "15K",
      thumbnail: "https://img.youtube.com/vi/placeholder3/maxresdefault.jpg",
      description: "Proven strategies to build unshakeable confidence in your professional life."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Free Content Library
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Watch & Transform
            <span className="block text-gradient-gold">Your Life Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Get instant access to powerful transformation strategies, mindset shifts, 
            and success principles through my YouTube channel @TrueYouMastery.
          </p>
          
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => window.open('https://www.youtube.com/@TrueYouMastery', '_blank')}
          >
            <ExternalLink className="mr-2 w-5 h-5" />
            Visit YouTube Channel
          </Button>
        </div>

        {/* Featured Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredVideos.map((video, index) => (
            <Card key={index} className="card-hover border-border/50 overflow-hidden group">
              <div className="relative aspect-video bg-muted">
                {/* Video Thumbnail Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Video Stats */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration}
                  </Badge>
                </div>
                
                <div className="absolute bottom-3 left-3">
                  <Badge variant="outline" className="text-xs bg-black/50 text-white border-white/20">
                    <Eye className="w-3 h-3 mr-1" />
                    {video.views} views
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 leading-tight">{video.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-4 p-0 h-auto text-primary hover:text-primary-hover"
                >
                  Watch Video
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Channel Stats & CTA */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Transformation Videos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Subscribers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">500K+</div>
              <div className="text-muted-foreground">Total Views</div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">
            Never Miss a Transformation Video
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to @TrueYouMastery for weekly content that empowers ambitious minds 
            to breakthrough barriers and achieve extraordinary success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.open('https://www.youtube.com/@TrueYouMastery', '_blank')}
            >
              Subscribe on YouTube
            </Button>
            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
              Get Video Notifications
            </Button>
          </div>
        </div>

        {/* Embedded Channel Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Latest from @TrueYouMastery</h3>
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/videoseries?list=UU_channel_id_placeholder"
              title="True You Mastery YouTube Channel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;