import React from 'react';
import '../App.css';
import poster from '../images/noPoster.png';

class Popularmovies extends React.Component{
    
    handleSubmit = () => {
        window['location'].assign(`/movie/${this.props.movieId}`)
      }
    
    render(){
    if(window.innerWidth > 768){
        return(
            <div className="col popularImage">
                {
                    this.props.image == null
                    ?
                    <img onClick={this.handleSubmit} src={poster} className="img-fluid" alt="Poster" />
                    :
                    <img onClick={this.handleSubmit} src={`http://image.tmdb.org/t/p/w185${this.props.image}`} className="img-fluid" alt="Iamge" />
                }
                <p onClick={this.handleSubmit} className="popularMovieTitle">{this.props.title}<br /><span onClick={this.handleSubmit} className="popularRelease">{this.props.release}</span></p>
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

export default Popularmovies;