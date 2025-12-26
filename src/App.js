import MovieCard from "./Components/MovieCard";
function App() {
  const moviedetails = {
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwOnfqLW2-EbN789Cp3uVx2Ay4BZ3k7J9FA&s",
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
