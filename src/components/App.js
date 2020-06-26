import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainersIndex from '../containers/TrainersIndex';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <TrainersIndex />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
