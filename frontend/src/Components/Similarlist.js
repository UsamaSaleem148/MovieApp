import React from 'react';
import Similarmovies from './Similarmovies';
import '../App.css';

const Similarlist = (props) => {
    return(
        <div className="container-fluid">
        <div className="row popularList similarList">
            {
                props.similarMovies.slice(0,8).map((similarMovies, i) => {
                    console.log("Similar "+props.media_type);
                    return (
                        <Similarmovies
                            key = {i}
                            movieId = {similarMovies.id}
                            media_type = {props.media_type}
                            image = {similarMovies.poster_path}
                            title = {similarMovies.title}
                            release = {similarMovies.release_date}
                        />
                    )
                })
            }
        </div>
        </div>
    )
}

export default Similarlist;