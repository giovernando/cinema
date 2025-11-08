import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

export const HeroBanner = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-video-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0" 
          style={{ background: 'var(--gradient-hero)' }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-end pb-16">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Experience Movies
            <span className="block text-primary">Like Never Before</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Immerse yourself in the ultimate cinema experience. Book your seats now and enjoy the latest blockbusters in premium comfort.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="gap-2">
              <Play className="w-5 h-5" />
              Watch Trailer
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Info className="w-5 h-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
