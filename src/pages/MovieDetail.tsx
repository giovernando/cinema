import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, MapPin, Calendar, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { movies } from "@/data/movies";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(movies.find(m => m.id === Number(id)));

  useEffect(() => {
    if (!movie) {
      navigate("/");
    }
  }, [movie, navigate]);

  if (!movie) return null;

  const handleBooking = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/auth");
    } else {
      navigate(`/booking/${movie.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Movies
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden border-border">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full aspect-[2/3] object-cover"
              />
            </Card>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genre.split(", ").map((g) => (
                  <Badge key={g} variant="secondary">{g}</Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <span className="font-semibold">{movie.rating}/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{movie.cinema}</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {movie.description}
              </p>
            </div>

            {/* Showtimes */}
            <Card className="p-6 border-border bg-card">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Available Showtimes
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {movie.showtimes.map((time) => (
                  <Button
                    key={time}
                    variant="outline"
                    className="font-semibold"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Pricing & Booking */}
            <Card className="p-6 border-border bg-gradient-to-br from-card to-muted">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Ticket Price</p>
                  <p className="text-3xl font-bold text-primary">
                    Rp {movie.price.toLocaleString('id-ID')}
                  </p>
                </div>
                <Play className="w-12 h-12 text-primary opacity-20" />
              </div>
              
              <Button
                onClick={handleBooking}
                variant="hero"
                size="lg"
                className="w-full"
              >
                Book Tickets Now
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieDetail;
