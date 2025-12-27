import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Task Dashboard</h1>
            <div className="grid gap-6 max-w-md mx-auto">
                <Link to="/timer" className="bg-blue-600 hover:bg-blue-700 p-4 rounded-xl text-center text-lg font-semibold transition">Go to Timer</Link>
                <Link to="/movies" className="bg-purple-600 hover:bg-purple-700 p-4 rounded-xl text-center text-lg font-semibold transition">Go to Movies</Link>
            </div>
        </div>
    )
}
export default Home;