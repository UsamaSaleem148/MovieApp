import React from 'react';
import MainNav from './Mainnav';
import Movielist from './Movielist';
import SearchBox from './Searchbox';
import Pagination from './Pagination';
import Footer from './Footer';
import '../App.css';

class Search extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            movies: [],
            totalResults: 0,
            currentPage: 1
        }

        this.apiKey = process.env.REACT_APP_API
    }
    
    mySearch = () => {
        const { match: { params } } = this.props;
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${params.SearchValue}`)
        .then(res => res.json())
        .then(data => {
            this.setState({ movies: [...data.results], totalResults: data.total_results })
        })
        .catch(err => {
            console.log(err);
        })
    }

    nextPage = (pageNumber) => {
        
        const { match: { params } } = this.props;
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${params.SearchValue}&page=${pageNumber}`)
        .then(res => res.json())
        .then(data => {
            this.setState({ movies: [...data.results], currentPage: pageNumber})
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidMount(){
        this.mySearch();
    }

    render(){
        const { match: { params } } = this.props;
        const numberPages = Math.floor(this.state.totalResults / 20);
    return(
        <div>
            <MainNav />
            <SearchBox />
            <div className="container-fluid titleSearch">
            <p>Search Results for: <b>{params.SearchValue}</b></p>
            </div>
            <Movielist movies={this.state.movies}/>
            { this.state.totalResults > 20 ? <Pagination pages= {numberPages} nextPage = {this.nextPage} currentPage = {this.state.currentPage} movieName = {params.SearchValue} /> : '' }
            <Footer />
        </div>
    )
}
}
export default Search;