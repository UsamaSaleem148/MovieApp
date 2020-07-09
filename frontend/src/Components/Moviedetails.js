import React from 'react';
import MainNav from './Mainnav';
import Footer from './Footer';
import Similar from './Similar';
import poster from '../images/noPoster.png';

class Moviedetails extends React.Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
            movieData: [],
            genres: [],
            cast: [],
            videoData: []
        }
        this.apiKey = process.env.REACT_APP_API
    }

    extractDetails = () => {
        const { match: { params } } = this.props;
        fetch(`https://api.themoviedb.org/3/${params.media_type}/${params.movieId}?api_key=${this.apiKey}&append_to_response=credits,videos`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    movieData: [data]
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    extractVideos = () => {
        const { match: { params } } = this.props;
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}/videos?api_key=${this.apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    videoData: [data]
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    componentDidMount(){
        this.extractDetails();
        this.extractVideos();
    }
    
    render(){
        const { match: { params } } = this.props;
        if(params.media_type === "movie"){
        return(
        <div>
            <MainNav />
            
            <div className="container-fluid p-0">
                {
                    this.state.movieData.map((movie, i) => {
                        const genres = Object.keys(movie.genres).map(key => {
                            return movie.genres[key].name + ", "
                        })
                        
                        const divStyle = {
                            color: 'blue',
                            // eslint-disable-next-line
                            backgroundImage: 'linear-gradient(to bottom, rgba(5, 5, 5, 0.884), rgba(20, 20, 20, 0.884)), url(' + `http://image.tmdb.org/t/p/original${movie.backdrop_path}` + ')',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            objectFit: 'fill',
                            height: 'auto',
                            padding: '100px 40px 40px 40px',
                            // eslint-disable-next-line
                            color: '#ffffff'
                        };
                        
                        const progressBar = {
                            // eslint-disable-next-line
                            width:  `${movie.vote_average * 10}`+'%',
                            backgroundColor: '#CC3333'
                        };
                        
                        return (
                        <div key={movie.id}>
                            <div style={divStyle}>
                                <div className="row poster-name">
                                <div className="col-lg-3">
                                    {
                                    movie.poster_path == null
                                    ?
                                    <img src={poster} className="img-fluid" alt="Poster" />
                                    :
                                    <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} className="img-fluid" alt="Iamge" />
                                    }
                                    </div>

                                <div className="col-lg-9 movieDetails">
                                    <h1>{movie.title}</h1>
                                    <p>{genres}</p>
                                    <h4>Runtime</h4><p>{Math.floor(movie.runtime / 60)} Hr {Math.round(((movie.runtime / 60) - Math.floor(movie.runtime / 60)) * 60 )} Min</p>
                                    <h4>User Score</h4>
                                    <div className="row progressDetails">
                                    <div className="col-lg-6">
                                    <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={progressBar} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{movie.vote_average * 10}%</div>
                                    </div>
                                    </div>
                                    </div>
                                    <h4>Release Date</h4><p>{movie.release_date}</p>
                                    <h4>Overview</h4><p>{movie.overview}</p>
                                    <button className="btn btn-primary">Watch Trailer</button>&nbsp;&nbsp;
                                    <button className="btn btn-success">Download Now</button>
                                </div>
                            </div>
                        </div>
                            <div className="row m-auto">
                                <div className="col-lg-6 col-md-12 col-12 castTable">
                                    <div className="table-responsive ">
                                    <table className="table table-striped table-bordered">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Cast Name</th>
                                                <th scope="col">Character Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.keys(movie.credits.cast).slice(0,Math.ceil(movie.credits.cast.length / 1.5)).map(key => {
                                                    return <tr key = {movie.credits.cast[key].cast_id}>
                                                        <td key = {movie.credits.cast[key].cast_id}>{movie.credits.cast[key].name}</td>
                                                        <td key = {movie.credits.cast[key].credit_id}>{movie.credits.cast[key].character}</td>
                                                        </tr>
                                                        })
                                            }
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>

                            <div className="container-fluid">

                            <div className="videosHeading"><p>Related Videos</p></div>
                            <div className="row iFrame">
                                {
                                Object.keys(movie.videos.results).map(key => {
                                    return <iframe title = "myFrame" height="200" width="300" className="embed-responsive-item" src={`https://www.youtube.com/embed/${movie.videos.results[key].key}`}></iframe>
                                })
                                }
                                
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
        <Similar movieId = {params.movieId} media_type = {params.media_type} />
        <Footer />
        </div>
        )
    }


    else if(params.media_type === "tv"){
        return(
        <div>
            <MainNav />
            
            <div className="container-fluid p-0">
                {
                    this.state.movieData.map((movie, i) => {
                        const genres = Object.keys(movie.genres).map(key => {
                            return movie.genres[key].name + ", "
                        })
                        
                        const divStyle = {
                            color: 'blue',
                            // eslint-disable-next-line
                            backgroundImage: 'linear-gradient(to bottom, rgba(5, 5, 5, 0.884), rgba(20, 20, 20, 0.884)), url(' + `http://image.tmdb.org/t/p/original${movie.backdrop_path}` + ')',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            objectFit: 'fill',
                            height: 'auto',
                            padding: '100px 40px 40px 40px',
                            // eslint-disable-next-line
                            color: '#ffffff'
                        };
                        
                        const progressBar = {
                            // eslint-disable-next-line
                            width:  `${movie.vote_average * 10}`+'%',
                            backgroundColor: '#CC3333'
                        };
                        
                        return (
                        <div key={movie.id}>
                            <div style={divStyle}>
                                <div className="row poster-name">
                                <div className="col-lg-3">
                                    {
                                    movie.poster_path == null
                                    ?
                                    <img src={poster} className="img-fluid" alt="Poster" />
                                    :
                                    <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} className="img-fluid" alt="Iamge" />
                                    }
                                    </div>

                                <div className="col-lg-9 movieDetails">
                                    <h2>{movie.name}</h2>
                                    <p>{genres}</p>
                                    <h4>User Score</h4>
                                    <div className="row progressDetails">
                                    <div className="col-lg-6">
                                    <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={progressBar} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{movie.vote_average * 10}%</div>
                                    </div>
                                    </div>
                                    </div>
                                    <h4>First Air Date</h4><p>{movie.first_air_date}</p>
                                    <h4>No. Of Seasons</h4><p>{movie.seasons.length === 1 ? movie.seasons.length : movie.seasons.length - 1}</p>
                                    <h4>Overview</h4><p>{movie.overview}</p>
                                    <button className="btn btn-primary">Watch Trailer</button>&nbsp;&nbsp;
                                    <button className="btn btn-success">Download Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="row m-auto">
                                <div className="col-lg-6 col-md-12 col-12 castTable">
                                    <div className="table-responsive ">
                                    <table className="table table-striped table-bordered">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Cast Name</th>
                                                <th scope="col">Character Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.keys(movie.credits.cast).slice(0,Math.ceil(movie.credits.cast.length / 1.5)).map(key => {
                                                    return <tr key = {movie.credits.cast[key].cast_id}>
                                                        <td key = {movie.credits.cast[key].cast_id}>{movie.credits.cast[key].name}</td>
                                                        <td key = {movie.credits.cast[key].credit_id}>{movie.credits.cast[key].character}</td>
                                                        </tr>
                                                        })
                                            }
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>

                            <div className="container-fluid">

                            <div className="videosHeading"><p>Related Videos</p></div>
                            <div className="row iFrame">
                                {
                                Object.keys(movie.videos.results).map(key => {
                                    return <iframe title = "myFrame" height="200" width="300" className="embed-responsive-item" src={`https://www.youtube.com/embed/${movie.videos.results[key].key}`}></iframe>
                                })
                                }
                                
                            </div>
                        </div>
                        </div>
                        )
                })
                
            }
        </div>
        <Similar movieId = {params.movieId} media_type = {params.media_type} />
        <Footer />
        </div>
        )

    }
}
}

export default Moviedetails;