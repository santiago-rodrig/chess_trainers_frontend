import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainersIndex from './TrainersIndex';
import styles from './App.module.css';

function App() {
  return (
    <>
      <button type="button" className={styles.sidebarToggler}>
        <i className="fas fa-bars" />
      </button>
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
