import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'; 
import Register from './Components/Register'; 
import Login from './Components/Login'; 
import JokesPage from './Components/JokesPage'; 
import Home from './Components/Home'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path = "/" component = {Home} />
        <Route path = "/register" component = {Register} /> 
        <Route path = "/login" component = {Login} />
        <Route path = "/jokes" component = {JokesPage} />
      </div>
    );
  }
}

export default App;
