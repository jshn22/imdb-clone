import MovieCard from "./Components/MovieCard";
function App() {
  const moviedetails = {
    poster: "https://m.media-amazon.com/images/I/51oD2V6gYdL._AC_SY445_.jpg",
    title: "Inception",
    releaseyear: "2010",
    rating: "8.8/10",
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <MovieCard poster={moviedetails.poster} title={moviedetails.title} releaseyear={moviedetails.releaseyear} rating={moviedetails.rating} />
    </div>
  );
}

export default App;
