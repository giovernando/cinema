import { useNavigate } from "react-router-dom";
import { User, Mail, Calendar, Ticket, LogOut, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    navigate("/auth");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    toast.success("Successfully logged out");
    navigate("/");
  };

  // Get user data from localStorage
  const user = {
    name: localStorage.getItem("userName") || "User",
    email: localStorage.getItem("userEmail") || "user@example.com",
    memberSince: "January 2024",
  };

  // Mock booking history
  const bookingHistory = [
    {
      id: 1,
      movie: "Shriller",
      cinema: "Grand Mall Cinema",
      date: "2024-11-15",
      time: "20:00",
      seats: "A5, A6",
      status: "Completed",
      total: 100000
    },
    {
      id: 2,
      movie: "The Dart Alienian",
      cinema: "Plaza Cinema XXI",
      date: "2024-11-20",
      time: "18:00",
      seats: "C7, C8, C9",
      status: "Upcoming",
      total: 165000
    },
    {
      id: 3,
      movie: "Dragon's Quest",
      cinema: "Central Park Cinema",
      date: "2024-11-10",
      time: "14:00",
      seats: "E5",
      status: "Completed",
      total: 58000
    },
  ];

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
          Back to Home
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Info */}
          <div className="lg:col-span-1">
            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <span>Member since {user.memberSince}</span>
                </div>
                
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                  <Button
                    variant="destructive"
                    className="w-full gap-2"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking History */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="w-6 h-6 text-primary" />
                  Booking History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {bookingHistory.length === 0 ? (
                  <div className="text-center py-12">
                    <Ticket className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
                    <p className="text-lg text-muted-foreground">No bookings yet</p>
                    <Button
                      onClick={() => navigate("/")}
                      className="mt-4"
                    >
                      Browse Movies
                    </Button>
                  </div>
                ) : (
                  bookingHistory.map((booking) => (
                    <Card
                      key={booking.id}
                      className="border-border bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-start justify-between">
                              <h3 className="font-bold text-lg">{booking.movie}</h3>
                              <Badge
                                variant={booking.status === "Completed" ? "secondary" : "default"}
                              >
                                {booking.status}
                              </Badge>
                            </div>
                            
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <p className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {booking.date} at {booking.time}
                              </p>
                              <p className="flex items-center gap-2">
                                <Ticket className="w-4 h-4" />
                                Seats: {booking.seats}
                              </p>
                              <p>{booking.cinema}</p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">
                              Rp {booking.total.toLocaleString('id-ID')}
                            </p>
                            {booking.status === "Upcoming" && (
                              <Button variant="outline" size="sm" className="mt-2">
                                View Ticket
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
