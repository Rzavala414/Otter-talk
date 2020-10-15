import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from './Pages/register';
import Login from './Pages/Login/login';
import PublicFeed from './Pages/PublicFeed/publicfeed'
import './App.css';

export default function App() {
  return (
    <Router>
      <>
        <Route path="/public-feed" component={PublicFeed}></Route>
        <Route exact path='/' component={Login}/>
        <Route exact path='/register' component={Signup}/>
      </>
    </Router>
  );
}
// joji the best



