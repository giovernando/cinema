export interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  duration: string;
  description: string;
  price: number;
  cinema: string;
  image: string;
  category: 'popular' | 'recommended' | 'latest';
  showtimes: string[];
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Shriller",
    genre: "Action, Thriller",
    rating: 4.5,
    duration: "2h 15m",
    description: "An intense action-packed thriller that will keep you on the edge of your seat. Follow the protagonist as they navigate through a web of danger and conspiracy.",
    price: 50000,
    cinema: "Grand Mall Cinema",
    image: "/movie-1.jpg",
    category: "popular",
    showtimes: ["10:00", "13:30", "16:45", "20:00"]
  },
  {
    id: 2,
    title: "The Dart Alienian",
    genre: "Sci-Fi, Adventure",
    rating: 4.8,
    duration: "2h 30m",
    description: "An epic space adventure that explores the depths of the universe. Join the crew as they encounter alien civilizations and face cosmic challenges.",
    price: 55000,
    cinema: "Plaza Cinema XXI",
    image: "/movie-2.jpg",
    category: "popular",
    showtimes: ["11:00", "14:30", "18:00", "21:15"]
  },
  {
    id: 3,
    title: "Horron 1's Ilrn",
    genre: "Horror, Mystery",
    rating: 4.3,
    duration: "1h 55m",
    description: "A chilling horror mystery that will haunt your dreams. Uncover the dark secrets that lurk in the shadows of an abandoned mansion.",
    price: 45000,
    cinema: "Grand Mall Cinema",
    image: "/movie-3.jpg",
    category: "recommended",
    showtimes: ["12:00", "15:30", "19:00", "22:00"]
  },
  {
    id: 4,
    title: "Loneline",
    genre: "Romance, Drama",
    rating: 4.6,
    duration: "2h 5m",
    description: "A heartwarming love story that transcends time and distance. Experience the emotional journey of two souls destined to be together.",
    price: 48000,
    cinema: "Central Park Cinema",
    image: "/movie-4.jpg",
    category: "recommended",
    showtimes: ["10:30", "13:45", "17:15", "20:30"]
  },
  {
    id: 5,
    title: "Adventure Kingdom",
    genre: "Animation, Family",
    rating: 4.7,
    duration: "1h 45m",
    description: "A magical animated adventure perfect for the whole family. Join beloved characters on an unforgettable journey filled with laughter and wonder.",
    price: 42000,
    cinema: "Plaza Cinema XXI",
    image: "/movie-5.jpg",
    category: "latest",
    showtimes: ["09:00", "11:30", "14:00", "16:30"]
  },
  {
    id: 6,
    title: "City of Shadows",
    genre: "Crime, Drama",
    rating: 4.4,
    duration: "2h 20m",
    description: "A gritty crime drama set in the heart of the urban jungle. Follow detectives as they unravel a complex web of corruption and betrayal.",
    price: 50000,
    cinema: "Grand Mall Cinema",
    image: "/movie-6.jpg",
    category: "latest",
    showtimes: ["12:30", "15:45", "19:15", "22:30"]
  },
  {
    id: 7,
    title: "Dragon's Quest",
    genre: "Fantasy, Adventure",
    rating: 4.9,
    duration: "2h 45m",
    description: "An epic fantasy adventure in a world of magic and dragons. Join heroes on their quest to save the kingdom from an ancient evil.",
    price: 58000,
    cinema: "Central Park Cinema",
    image: "/movie-7.jpg",
    category: "popular",
    showtimes: ["10:15", "14:00", "18:30", "21:45"]
  },
  {
    id: 8,
    title: "Laugh Out Loud",
    genre: "Comedy",
    rating: 4.2,
    duration: "1h 50m",
    description: "A hilarious comedy that will have you laughing from start to finish. Join the misadventures of quirky characters in absurd situations.",
    price: 45000,
    cinema: "Plaza Cinema XXI",
    image: "/movie-8.jpg",
    category: "recommended",
    showtimes: ["11:15", "14:45", "18:15", "21:00"]
  },
  {
    id: 9,
    title: "Mystic Waters",
    genre: "Fantasy, Romance",
    rating: 4.7,
    duration: "2h 10m",
    description: "A enchanting tale of love and magic in an underwater kingdom. Discover the secrets of the deep and the power of true love.",
    price: 52000,
    cinema: "Grand Mall Cinema",
    image: "/movie-9.jpg",
    category: "popular",
    showtimes: ["10:30", "13:45", "17:00", "20:15"]
  },
  {
    id: 10,
    title: "Cyberpunk Revolution",
    genre: "Sci-Fi, Action",
    rating: 4.9,
    duration: "2h 35m",
    description: "In a dystopian future, rebels fight against a tyrannical AI regime. Experience high-octane action and mind-bending twists.",
    price: 60000,
    cinema: "Central Park Cinema",
    image: "/movie-10.jpg",
    category: "latest",
    showtimes: ["12:00", "15:30", "19:00", "22:15"]
  },
  {
    id: 11,
    title: "The Haunted Forest",
    genre: "Horror, Thriller",
    rating: 4.4,
    duration: "1h 45m",
    description: "A group of friends venture into a cursed forest where ancient spirits awaken. Will they escape the terror that lurks within?",
    price: 47000,
    cinema: "Plaza Cinema XXI",
    image: "/movie-11.jpg",
    category: "recommended",
    showtimes: ["11:30", "14:00", "17:30", "20:45"]
  },
  {
    id: 12,
    title: "Summer Vibes",
    genre: "Romance, Comedy",
    rating: 4.5,
    duration: "1h 55m",
    description: "A lighthearted romantic comedy set during a perfect summer. Follow the blossoming love between two unlikely friends.",
    price: 44000,
    cinema: "Grand Mall Cinema",
    image: "/movie-12.jpg",
    category: "popular",
    showtimes: ["09:15", "12:30", "15:45", "19:00"]
  },
  {
    id: 13,
    title: "Warriors of the Dawn",
    genre: "Action, Adventure",
    rating: 4.8,
    duration: "2h 25m",
    description: "Ancient warriors rise to defend their homeland from invading forces. Epic battles and heroic deeds await in this thrilling saga.",
    price: 57000,
    cinema: "Central Park Cinema",
    image: "/movie-13.jpg",
    category: "latest",
    showtimes: ["10:45", "14:15", "17:45", "21:00"]
  },
  {
    id: 14,
    title: "The Lost Treasure",
    genre: "Adventure, Family",
    rating: 4.6,
    duration: "1h 40m",
    description: "A family embarks on a treasure hunt across mysterious islands. Discover hidden secrets and forge unbreakable bonds.",
    price: 43000,
    cinema: "Plaza Cinema XXI",
    image: "/movie-14.jpg",
    category: "recommended",
    showtimes: ["10:00", "12:45", "15:30", "18:15"]
  },
  {
    id: 15,
    title: "Noir Nights",
    genre: "Crime, Mystery",
    rating: 4.3,
    duration: "2h 5m",
    description: "A detective navigates the dark underbelly of the city in this noir masterpiece. Unravel clues and confront dangerous criminals.",
    price: 49000,
    cinema: "Grand Mall Cinema",
    image: "/movie-15.jpg",
    category: "popular",
    showtimes: ["13:00", "16:30", "20:00", "23:15"]
  },
  {
    id: 16,
    title: "Galactic Explorers",
    genre: "Sci-Fi, Adventure",
    rating: 4.9,
    duration: "2h 40m",
    description: "Bold explorers venture into uncharted galaxies, encountering wondrous worlds and formidable challenges.",
    price: 59000,
    cinema: "Central Park Cinema",
    image: "/movie-16.jpg",
    category: "latest",
    showtimes: ["11:45", "15:15", "18:45", "22:00"]
  },
  {
    id: 17,
    title: "Heartstrings",
    genre: "Drama, Romance",
    rating: 4.7,
    duration: "2h 15m",
    description: "A poignant drama about love, loss, and redemption. Follow characters as they navigate the complexities of human emotions.",
    price: 51000,
    cinema: "Plaza Cinema XXI",
    image: "/movie-17.jpg",
    category: "recommended",
    showtimes: ["12:15", "15:30", "18:45", "21:30"]
  },
  {
    id: 18,
    title: "Comedy Central",
    genre: "Comedy",
    rating: 4.1,
    duration: "1h 35m",
    description: "A non-stop laugh riot featuring hilarious sketches and outrageous situations. Perfect for a fun night out.",
    price: 41000,
    cinema: "Grand Mall Cinema",
    image: "/movie-18.jpg",
    category: "popular",
    showtimes: ["10:15", "13:00", "16:00", "19:00"]
  }
];

export const cinemas = [
  "All Cinemas",
  "Grand Mall Cinema",
  "Plaza Cinema XXI",
  "Central Park Cinema"
];

export const genres = [
  "All Genres",
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller"
];
