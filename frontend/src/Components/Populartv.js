import React from 'react';
import '../App.css';
import poster from '../images/noPoster.png';

class Populattv extends React.Component {

    handleTvSubmit = () => {
        window['location'].assign(`/tv/${this.props.movieId}`)
      }

    render(){
    if(window.innerWidth > 768){
    return(
        <div className="col popularImage">
            {
                this.props.image == null
                ?
                <img onClick={this.handleTvSubmit} src={poster} className="img-fluid" alt="Poster" />
                :
                <img onClick={this.handleTvSubmit} src={`http://image.tmdb.org/t/p/w185${this.props.image}`} className="img-fluid" alt="Iamge" />
            }
            <p onClick={this.handleTvSubmit} className="popularMovieTitle">{this.props.name}<br /><span onClick={this.handleTvSubmit} className="popularRelease">{this.props.first_air_date}</span></p>
        </div>
    )
        }
        else if(window.innerWidth <= 768){
        return(
            <div className="col-md-3 col-3 popularImage">
                {
                    this.props.image == null
                    ?
                    <img onClick={this.handleTvSubmit} src={poster} className="img-fluid" alt="Poster" />
                    :
                    <img onClick={this.handleTvSubmit} src={`http://image.tmdb.org/t/p/w185${this.props.image}`} className="img-fluid" alt="Iamge" />
                }
                <p onClick={this.handleTvSubmit} className="popularMovieTitle">{this.props.name}<br /><span onClick={this.handleTvSubmit} className="popularRelease">{this.props.first_air_date}</span></p>
            </div>
        )
            }
}
}
export default Populattv;