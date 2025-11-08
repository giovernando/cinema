import { useNavigate } from "react-router-dom";
import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(0_72%_51%/0.2)]">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
          <Star className="w-4 h-4 fill-secondary text-secondary" />
          <span className="text-sm font-semibold">{movie.rating}</span>
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            className="w-full"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            Book Now
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">
          {movie.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-1">
          {movie.genre}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{movie.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="line-clamp-1">{movie.cinema}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-sm font-semibold text-primary">
            Rp {movie.price.toLocaleString('id-ID')}
          </p>
        </div>
      </div>
    </Card>
  );
};
