import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Amazon Alexa",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Audio Interfaces" },
    numberInStock: 6,
    condition: "work well",
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Artcessories Clean Box Pro",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Audio Interfaces" },
    numberInStock: 5,
    condition: "work well"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    condition: "work well"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "iPhone lightning cable",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cables" },
    numberInStock: 7,
    condition: "broken"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "DVI to DVI cable",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cables" },
    numberInStock: 7,
    condition: "work well"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "HDMI Cable",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Cables" },
    numberInStock: 7,
    condition: "work well"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "DJI OM5",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Gimbal" },
    numberInStock: 7,
    condition: "missing"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "DJI RSC 2",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Gimbal" },
    numberInStock: 4,
    condition: "work well"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Audio Mixer",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Audio Interfaces" },
    numberInStock: 7,
    condition: "work well"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.condition = movie.condition;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
