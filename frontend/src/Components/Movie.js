import React from 'react';
import '../App.css';
import poster from '../images/noPoster.png';

// const Movie = (props) => {
//     return(
//         <div className="col-lg-2 col-md-3 col-6">
//             <div className="card text-white text-bottom">
//             {
//                 props.image == null
//                 ?
//                 <img className="card-img" src={poster} alt="Card" />
//                 :
//                 <img className="card-img" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Card" />
//             }
//             <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
//                 <p className="card-title movieTitle">{props.title}</p>
//                 <p className="card-text release">Release Data: {props.releaseDate}</p>
//                 <p className="card-text rating">Rating: {props.rating}</p>
//                 </div>
                
            
//             </div>
//         </div>
//     )
// }


class Movie extends React.Component{
    handleSubmit = () => {
        window['location'].assign(`/movie/${this.props.movieId}`)
      }
    
    render(){
    if(window.innerWidth > 768){
        return(
            <div className="col-lg-2 popularImage">
                {
                    this.props.image == null
                    ?
                    <img onClick={this.handleSubmit} src={poster} className="img-fluid" alt="Poster" />
                    :
                    <img onClick={this.handleSubmit} src={`http://image.tmdb.org/t/p/w185${this.props.image}`} className="img-fluid" alt="Iamge" />
                }
                <p onClick={this.handleSubmit} className="popularMovieTitle">{this.props.title}<br /><span onClick={this.handleSubmit} className="popularRelease">{this.props.releaseDate}</span></p>
            </div>
            )
    }
    else if(window.innerWidth <= 768){
        return(
            <div className="col-md-3 col-3 popularImage">
                {
                    this.props.image == null
                    ?
                    <img src={poster} className="img-fluid" alt="Poster" />
                    :
                    <img src={`http://image.tmdb.org/t/p/w185${this.props.image}`} className="img-fluid" alt="Iamge" />
                }
                <p onClick={this.handleSubmit} className="popularMovieTitle">{this.props.title}<br /><span onClick={this.handleSubmit} className="popularRelease">{this.props.release}</span></p>
            </div>
            )
        }
    }
}

export default Movie;