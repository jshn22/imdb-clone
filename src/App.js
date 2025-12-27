import MovieCard from "./Components/MovieCard";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Timer from "./Components/Timer";
import Home from "./Components/Home";

function App() {
  const moviedetails = {
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwOnfqLW2-EbN789Cp3uVx2Ay4BZ3k7J9FA&s",
    title: "Inception",
    releaseyear: "2010",
    rating: "8.8/10",
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieCard {...moviedetails} />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
}

export default App;

