import { useState } from "react";
function MovieCard({poster, title, releaseyear, rating, }){
    return(
        <div className="w-60 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={poster} alt={title} className="w-full h-80 object-cover"/>
            <div className="p-4">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-gray-600">Release Year: {releaseyear}</p>
                <p className="text-yellow-500 font-semibold">Rating: {rating}</p>
            </div>
        </div>
    )
}
export default MovieCard;