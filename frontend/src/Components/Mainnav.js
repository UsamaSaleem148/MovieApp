import React from 'react';
import "../App.css";

class MainNav extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            SearchValue : ''
          }
    }


    handleChange = (e) => {
        const myVal = e.target.value;
        this.setState({
            SearchValue: myVal
        })
      }

    
      handleSubmit = () => {
        window['location'].assign(`/search/${this.state.SearchValue}`)
      }

      render(){

    return(
        <div className = "container-fluid p-0" >
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <a className="navbar-brand" href="/">Movie City</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Movies <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/TvSeries">Tv Series</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Trailers">Trailers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/WebTv">Web Tv</a>
                        </li>
                    </ul>
                        <input className="form-control mr-sm-2 searchBox" type="text" placeholder="Search" onChange={this.handleChange} aria-label="Search" />
                        <button className="btn btn-dark my-2 my-sm-0 searchBtn" onClick={this.handleSubmit}>Search</button>
                </div>
            </nav>
        </div>
    )
}
}

export default MainNav;