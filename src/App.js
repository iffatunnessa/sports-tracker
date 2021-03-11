import './App.css';
import React from 'react';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoPageFound from './component/NoPageFound/NoPageFound';
import LeagueDetails from './component/LeagueDetails/LeagueDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/leagueDetails/:id">
          <LeagueDetails />
        </Route>
        <Route exact path="*">
          <NoPageFound />
        </Route>
      </Switch>
    </Router >
    
  );
}

export default App;
