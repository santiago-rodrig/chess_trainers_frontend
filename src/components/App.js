import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import TrainersIndex from '../containers/TrainersIndex';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Appointments from '../containers/Appointments';
import Login from './Login';

const APIURL = 'http://localhost:4000/logged_in';

const POSTOptions = body => ({
  mode: 'cors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  body: JSON.stringify(body),
});

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    if (check) {
      window.setTimeout(() => setCheck(true), 60000, setCheck);
      const userToken = window.sessionStorage.getItem('user_token');
      if (userToken) {
        window.fetch(APIURL, POSTOptions({ token: userToken }))
          .then(response => {
            if (response.status !== 200) throw new Error();
            setLoggedIn(true);
            setCheck(false);
          })
          .catch(() => {
            setLoggedIn(false);
            setCheck(false);
          });
      } else {
        setLoggedIn(false);
        setCheck(false);
      }
    }
  }, [setLoggedIn, check, setCheck]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              loggedIn
                ? <Redirect to="/appointments" />
                : <Login setLoggedIn={setLoggedIn} />
            }
          </Route>
          <Route exact path="/trainers">
            {
              loggedIn
                ? (
                  <>
                    <Navbar />
                    <Sidebar />
                    <TrainersIndex />
                  </>
                )
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/appointments">
            {
              loggedIn
                ? (
                  <>
                    <Navbar />
                    <Sidebar />
                    <Appointments />
                  </>
                )
                : <Redirect to="/" />
            }
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
