import React from 'react';
import Populartv from './Populartv';
import '../App.css';

const Populartvlist = (props) => {
    return(
        <div className="container-fluid">
        <div className="row popularList">
            {
                props.Populartv.slice(0,8).map((tv, i) => {
                    return (
                        <Populartv key = {i} movieId = {tv.id} image = {tv.poster_path} name = {tv.name} first_air_date = {tv.first_air_date}/>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Populartvlist;