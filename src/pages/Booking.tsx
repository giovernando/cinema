import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Armchair, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { movies } from "@/data/movies";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === Number(id));
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!movie) {
    navigate("/");
    return null;
  }

  // Generate seat layout (8 rows x 12 seats)
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 12;
  const unavailableSeats = ['A5', 'A6', 'C7', 'E8', 'E9', 'G5']; // Simulated booked seats

  const toggleSeat = (seat: string) => {
    if (unavailableSeats.includes(seat)) return;
    
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length === 0) {
      toast.error("Please select at least one seat");
      return;
    }
    if (!selectedTime) {
      toast.error("Please select a showtime");
      return;
    }

    const total = selectedSeats.length * movie.price;
    toast.success(`Booking confirmed! Total: Rp ${total.toLocaleString('id-ID')}`);
    
    // Simulate booking and redirect
    setTimeout(() => {
      navigate("/profile");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(`/movie/${id}`)}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Movie
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Seat Selection */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 border-border">
              <h2 className="text-2xl font-bold mb-4">Select Showtime</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {movie.showtimes.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    className="font-semibold"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-border">
              <h2 className="text-2xl font-bold mb-6">Select Your Seats</h2>
              
              {/* Screen */}
              <div className="mb-8">
                <div className="bg-gradient-to-b from-primary/20 to-transparent h-2 rounded-t-full mb-2" />
                <p className="text-center text-sm text-muted-foreground">SCREEN</p>
              </div>

              {/* Seat Map */}
              <div className="space-y-3">
                {rows.map((row) => (
                  <div key={row} className="flex items-center gap-2">
                    <span className="w-6 text-sm font-semibold text-muted-foreground">
                      {row}
                    </span>
                    <div className="flex gap-2 flex-1 justify-center">
                      {Array.from({ length: seatsPerRow }, (_, i) => {
                        const seatNumber = `${row}${i + 1}`;
                        const isUnavailable = unavailableSeats.includes(seatNumber);
                        const isSelected = selectedSeats.includes(seatNumber);

                        return (
                          <button
                            key={seatNumber}
                            onClick={() => toggleSeat(seatNumber)}
                            disabled={isUnavailable}
                            className={cn(
                              "w-8 h-8 rounded-t-lg transition-all flex items-center justify-center",
                              isUnavailable && "bg-muted cursor-not-allowed opacity-50",
                              !isUnavailable && !isSelected && "bg-card border-2 border-border hover:border-primary",
                              isSelected && "bg-primary text-primary-foreground"
                            )}
                          >
                            {isSelected ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Armchair className="w-4 h-4" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-6 justify-center mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-card border-2 border-border rounded-t-lg" />
                  <span className="text-sm">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded-t-lg" />
                  <span className="text-sm">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-muted rounded-t-lg opacity-50" />
                  <span className="text-sm">Booked</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-border bg-card sticky top-24">
              <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Movie</p>
                  <p className="font-semibold">{movie.title}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Cinema</p>
                  <p className="font-semibold">{movie.cinema}</p>
                </div>

                {selectedTime && (
                  <div>
                    <p className="text-sm text-muted-foreground">Showtime</p>
                    <Badge variant="secondary">{selectedTime}</Badge>
                  </div>
                )}

                <div>
                  <p className="text-sm text-muted-foreground">Selected Seats</p>
                  <p className="font-semibold">
                    {selectedSeats.length > 0 ? selectedSeats.join(", ") : "No seats selected"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Number of Tickets</p>
                  <p className="font-semibold">{selectedSeats.length}</p>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Price per ticket</span>
                  <span>Rp {movie.price.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">
                    Rp {(selectedSeats.length * movie.price).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleConfirmBooking}
                variant="hero"
                size="lg"
                className="w-full"
                disabled={selectedSeats.length === 0 || !selectedTime}
              >
                Confirm Booking
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
