import React from 'react';
import '../App.css';

class SearchBox extends React.Component {

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
            <div className="row searchBar mx-auto">
                <p className="coverTitle">Watch Millions Of Movies/Tv Shows<br /><span>Anywhere & Anytime</span></p>
                {/* <div className="col-lg-11 col-md-11 col-10">
                <div className="form-group">
                    <input placeholder="Search for a Movie" className="form-control" type="text" onChange={this.handleChange} />
                </div>
                </div>
                <div className="col-lg-1 col-md-1 col-2">
                    <button className="btn btn-primary search" onClick={this.handleSubmit}><i className="fa fa-search"></i></button>
                </div> */}
            </div>
    )
}
}

export default SearchBox;