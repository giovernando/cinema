import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { MovieCarousel } from "@/components/MovieCarousel";
import { MovieCard } from "@/components/MovieCard";
import { Footer } from "@/components/Footer";
import { movies } from "@/data/movies";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCinema, setSelectedCinema] = useState("All Cinemas");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  // Filter movies based on search and filters
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           movie.genre.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCinema = selectedCinema === "All Cinemas" || movie.cinema === selectedCinema;
      const matchesGenre = selectedGenre === "All Genres" || 
                          movie.genre.toLowerCase().includes(selectedGenre.toLowerCase());
      
      return matchesSearch && matchesCinema && matchesGenre;
    });
  }, [searchTerm, selectedCinema, selectedGenre]);

  // Categorize movies
  const popularMovies = filteredMovies.filter(m => m.category === 'popular');
  const recommendedMovies = filteredMovies.filter(m => m.category === 'recommended');
  const latestMovies = filteredMovies.filter(m => m.category === 'latest');

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        onSearch={setSearchTerm}
        onCinemaFilter={setSelectedCinema}
        onGenreFilter={setSelectedGenre}
      />
      
      <HeroBanner />

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Popular Movies Carousel */}
        {popularMovies.length > 0 && (
          <MovieCarousel title="Popular Movies" movies={popularMovies} />
        )}

        {/* Recommended Movies Carousel */}
        {recommendedMovies.length > 0 && (
          <MovieCarousel title="Recommended for You" movies={recommendedMovies} />
        )}

        {/* Latest Movies Carousel */}
        {latestMovies.length > 0 && (
          <MovieCarousel title="Latest Releases" movies={latestMovies} />
        )}

        {/* All Movies Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">All Movies</h2>
            <p className="text-muted-foreground">
              {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
            </p>
          </div>

          {filteredMovies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">
                No movies found matching your criteria
              </p>
              <p className="text-muted-foreground">
                Try adjusting your filters or search terms
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
