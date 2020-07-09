import React from 'react';
import MainNav from './Mainnav';
import SearchBox from './Searchbox';
import Popularlist from './Popularlist';
import Populartvlist from './Populartvlist';
import Trending from './Trending';
import Footer from './Footer';
import '../App.css';

class Myhome extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            Popularmovies: [],
            Populartv: [],
            trending: []
        }

        this.apiKey = process.env.REACT_APP_API
    }

    Popularmovies = () => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        Popularmovies: [...data.results]
                    })
                })
                .catch(err => {
                    console.log(err);
                })
    }

    Populartv = () => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    Populartv: [...data.results]
                })
            })
            .catch(err => {
                console.log(err);
            })
}

    trending(){
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    trending: [...data.results]
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidMount() {
        this.Popularmovies();
        this.Populartv();
        this.trending();
    }

    render() {
        return ( 
        <div>
            <MainNav />
            <SearchBox />
            <div className="container-fluid titleTrending">
            <p>Trending</p>
            </div>
            <Trending trending = { this.state.trending } />
            <div className="container-fluid titlePopular">
            <p>Popular Movies</p>
            </div>
            <Popularlist Popularmovies = { this.state.Popularmovies } />
            <div className="container-fluid titleTv">
            <p>Popular Tv Series</p>
            </div>
            <Populartvlist Populartv = { this.state.Populartv } />
            <Footer />
            
        </div>
        )
    }
}
export default Myhome;