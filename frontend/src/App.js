import React from 'react';
import './App.css';
import Search from './Components/Search';
import Myhome from './Components/Myhome';
import Moviedetails from './Components/Moviedetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render(){
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component = { Myhome }/>
      <Route exact path="/search/:SearchValue" component = { Search } key={Math.random()}/>
      <Route exact path="/:media_type/:movieId" component = { Moviedetails } />
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
