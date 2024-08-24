const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
const movies = [
  {
    id: 1,
    name: "Harry Potter",
    genre: "Fantasy",
    year: 2001,
    rating: 7.6,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
  },
  {
    id: 2,
    name: "The Lord of the Rings",
    genre: "Fantasy",
    year: 2001,
    rating: 8.8,
    actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
  },
  {
    id: 3,
    name: "The Matrix",
    genre: "Action",
    year: 1999,
    rating: 8.7,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  },
  {
    id: 4,
    name: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  },
  {
    id: 5,
    name: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 6,
    name: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    rating: 8.8,
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
  },
  {
    id: 7,
    name: "The Godfather",
    genre: "Crime",
    year: 1972,
    rating: 9.2,
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
  },
  {
    id: 8,
    name: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    rating: 8.9,
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
  },
];

app.get("/", (req, res) => {
  res.send(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
  if (!movie) {
    res.status(404).send("The movie with the given ID was not found.");
  }
  res.send(movie);
});
app.get("/api/movies/", (req, res) => {
  res.send(movies);
});
app.post("/api/movies", (req, res) => {
  const movie = {
    id: movies.length + 1,
    name: req.body.name,
    genre: req.body.genre,
    year: req.body.year,
    rating: req.body.rating,
    actors: req.body.actors,
  };
  movies.push(movie);
  res.send(movie);
});
