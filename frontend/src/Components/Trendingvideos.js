import React from 'react';
import '../App.css';
import poster from '../images/noPoster.png';

class Trendingvideos extends React.Component {

    handleMovieSubmit = () => {
        window['location'].assign(`/${this.props.media_type}/${this.props.movieId}`)
      }

      handleTvSubmit = () => {
        window['location'].assign(`/${this.props.media_type}/${this.props.movieId}`)
      }

    render(){
    if(window.innerWidth > 768){
        if(this.props.media_type === "tv"){
        return(
            <div className="col popularImage">
                {
                    this.props.image == null
                    ?
                    <img onClick={this.handleTvSubmit} src={poster} className="img-fluid" alt="Poster" />
                    :
                    <img onClick={this.handleTvSubmit} src={`http://image.tmdb.org/t/p/original${this.props.image}`} className="img-fluid" alt="Iamge" />
                }
                <p onClick={this.handleTvSubmit} className="popularMovieTitle">{this.props.name}</p>
                <p onClick={this.handleTvSubmit} className="trendingRelease">{this.props.first_air}</p>
            </div>
        )
            }

            else{
                return(
                    <div className="col popularImage">
                        {
                            this.props.image == null
                            ?
                            <img onClick={this.handleMovieSubmit} src={poster} className="img-fluid" alt="Poster" />
                            :
                            <img onClick={this.handleMovieSubmit} src={`http://image.tmdb.org/t/p/original${this.props.image}`} className="img-fluid" alt="Iamge" />
                        }
                        <p onClick={this.handleMovieSubmit} className="popularMovieTitle">{this.props.title}</p>
                        <p onClick={this.handleMovieSubmit} className="trendingRelease">{this.props.release}</p>
                    </div>
                )
            }
        }
        else if(window.innerWidth <= 768){
            if(this.props.media_type === "tv"){
                return(
                    <div className="col-md-3 col-3 popularImage">
                        {
                            this.props.image == null
                            ?
                            <img onClick={this.handleTvSubmit} src={poster} className="img-fluid" alt="Poster" />
                            :
                            <img onClick={this.handleTvSubmit} src={`http://image.tmdb.org/t/p/original${this.props.image}`} className="img-fluid" alt="Iamge" />
                        }
                        <p onClick={this.handleTvSubmit} className="popularMovieTitle">{this.props.name}</p>
                        <p onClick={this.handleTvSubmit} className="trendingRelease">{this.props.first_air}</p>
                    </div>
                )
                    }
            
                    else{
                        return(
                            <div className="col-md-3 col-3 popularImage">
                                {
                                    this.props.image == null
                                    ?
                                    <img onClick={this.handleMovieSubmit} src={poster} className="img-fluid" alt="Poster" />
                                    :
                                    <img onClick={this.handleMovieSubmit} src={`http://image.tmdb.org/t/p/original${this.props.image}`} className="img-fluid" alt="Iamge" />
                                }
                                <p onClick={this.handleMovieSubmit} className="popularMovieTitle">{this.props.title}</p>
                                <p onClick={this.handleMovieSubmit} className="trendingRelease">{this.props.release}</p>
                                <p></p>
                            </div>
                        )
                    }
        }
}
}
export default Trendingvideos;