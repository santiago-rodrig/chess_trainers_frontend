import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainersIndex from '../containers/TrainersIndex';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Appointments from '../containers/Appointments';
import Login from './Login';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/trainers">
            <Navbar />
            <Sidebar />
            <TrainersIndex />
          </Route>
          <Route exact path="/appointments">
            <Navbar />
            <Sidebar />
            <Appointments />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
