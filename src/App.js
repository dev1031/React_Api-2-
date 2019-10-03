import React from 'react';
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import Comments from './Components/Comments';
import Albums from './Components/Albums';
import Photos from './Components/Photos';
import Users from './Components/Users';
//import './App.css';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div className = "App">
        <Navbar />
          <Switch>
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/users" component={Users} />
          </Switch>
      </div>
      </BrowserRouter>  
    )
  }
}

export default App;
