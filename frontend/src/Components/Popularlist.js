import React from 'react';
import Popularmovies from './Popularmovies';
import '../App.css';

const PopularList = (props) => {
    return(
        <div className="container-fluid">
        <div className="row popularList">
            {
                props.Popularmovies.slice(0,8).map((movie, i) => {
                    return (
                        <Popularmovies key = {i} movieId = {movie.id} image = {movie.poster_path} title = {movie.title} release = {movie.release_date}/>
                    )
                })
            }
        </div>
        </div>
    )
}

export default PopularList;