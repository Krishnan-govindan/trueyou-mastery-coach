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
      videoId: "VyruRJZHSe0",
      thumbnail: "https://img.youtube.com/vi/VyruRJZHSe0/maxresdefault.jpg",
      description: "Transform your morning routine with this powerful mindset engineering technique.",
      url: "https://youtu.be/VyruRJZHSe0?si=UYnyShjEDBg289yh"
    },
    {
      title: "From Engineer to Entrepreneur: My Transformation Story",
      duration: "15:42",
      views: "8.5K",
      videoId: "1AsDy67c2Go",
      thumbnail: "https://img.youtube.com/vi/1AsDy67c2Go/maxresdefault.jpg",
      description: "The complete journey of building myself from scratch and how you can too.",
      url: "https://youtu.be/1AsDy67c2Go?si=5OgJBM6z5CgXn_pS"
    },
    {
      title: "Confidence Building Secrets for Career Success",
      duration: "9:18",
      views: "15K",
      videoId: "EEYIOruFmLA",
      thumbnail: "https://img.youtube.com/vi/EEYIOruFmLA/maxresdefault.jpg",
      description: "Proven strategies to build unshakeable confidence in your professional life.",
      url: "https://youtu.be/EEYIOruFmLA?si=mCqMhLh1T43Cmw_R"
    },
    {
      title: "Advanced Mindset Engineering Techniques",
      duration: "12:25",
      views: "9.8K",
      videoId: "mqrkhfzSTN8",
      thumbnail: "https://img.youtube.com/vi/mqrkhfzSTN8/maxresdefault.jpg",
      description: "Deep dive into advanced techniques for mastering your mindset and achieving breakthrough results.",
      url: "https://youtu.be/mqrkhfzSTN8?si=kYdZaem9ZMZg6mDj"
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
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {featuredVideos.map((video, index) => (
            <Card key={index} className="card-hover border-border/50 overflow-hidden group cursor-pointer" onClick={() => window.open(video.url, '_blank')}>
              <div className="relative aspect-video bg-muted overflow-hidden">
                {/* Real Video Thumbnail */}
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
                
                {/* Video Stats */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <Badge variant="secondary" className="text-xs bg-black/70 text-white border-none">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration}
                  </Badge>
                </div>
                
                <div className="absolute bottom-3 left-3">
                  <Badge variant="outline" className="text-xs bg-black/70 text-white border-white/20">
                    <Eye className="w-3 h-3 mr-1" />
                    {video.views} views
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 leading-tight line-clamp-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {video.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-4 p-0 h-auto text-red-600 hover:text-red-700 font-semibold"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(video.url, '_blank');
                  }}
                >
                  Watch Now
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

        {/* Featured Video Embed */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Transformation Video</h3>
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VyruRJZHSe0"
              title="5-Minute Morning Mindset Reset for High Achievers"
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