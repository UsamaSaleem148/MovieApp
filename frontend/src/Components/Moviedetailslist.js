import React from 'react';
import '../App.css';
import poster from '../images/noPoster.png';

class Moviedetailslist extends React.Component{

    render(){
        return(
            <div className="col popularImage">
                {
                    this.props.image == null
                    ?
                    <img src={poster} className="img-fluid" alt="Poster" />
                    :
                    <img src={`http://image.tmdb.org/t/p/w185${this.props.image}`} className="img-fluid" alt="Iamge" />
                }
                <p className="popularMovieTitle">{this.props.adult}<br /><span className="popularRelease">{this.props.release}</span></p>
            </div>
        )
    }
}

export default Moviedetailslist;