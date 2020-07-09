import React from 'react';
import Similarlist from './Similarlist';

export default class Similar extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            similarMovies: []
        }

        this.apiKey = process.env.REACT_APP_API
    }

    similarMovies(){
            fetch(`https://api.themoviedb.org/3/${this.props.media_type}/${this.props.movieId}/similar?api_key=${this.apiKey}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        similarMovies: [...data.results]
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }

        componentDidMount(){
            this.similarMovies();
        }

    render(){
        return(
        <div>
            <div className="similarHeading"><p>You May Also Like</p></div>
            <Similarlist similarMovies = { this.state.similarMovies } media_type = { this.props.media_type } />
        </div>
        )
    }

}