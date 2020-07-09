import React from 'react';
import Movie from './Movie';

const Movielist = (props) => {
    return(
        <div className="container-fluid">
        <div className="row Searchmovies">
            {
                props.movies.map((movie, i) => {
                    return (
                        <Movie key = {i} movieId = {movie.id} image = {movie.poster_path} title = {movie.title} releaseDate = {movie.release_date} rating = {movie.vote_average}/>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Movielist;