import React from 'react';
import Trendingvideos from './Trendingvideos';
import '../App.css';

const Trending = (props) => {
    return(
        <div className="container-fluid">
        <div className="row popularList">
            {
                props.trending.slice(0,8).map((trending, i) => {
                    return (
                        <Trendingvideos key = {i} movieId = {trending.id} media_type = {trending.media_type} image = {trending.poster_path} name = {trending.name} title = {trending.title} release = {trending.release_date} first_air = {trending.first_air_date}/>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Trending;