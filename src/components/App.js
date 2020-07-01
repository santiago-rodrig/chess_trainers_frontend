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
import Signup from './Signup';
import Loading from './Loading';

const APIURL = 'http://localhost:4000/logged_in';

const GETOptions = token => ({
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
  },
});

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [check, setCheck] = useState(true);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (check) {
      window.setTimeout(() => {
        setChecking(true);
        setCheck(true);
      }, 600000, setCheck);

      const userToken = window.sessionStorage.getItem('user_token');

      if (userToken) {
        window.fetch(APIURL, GETOptions(userToken))
          .then(response => {
            if (response.status !== 200) throw new Error();

            return response.json();
          })
          .then(data => {
            setLoggedUser(data.username);
            setLoggedIn(true);
            window.setTimeout(() => setChecking(false), 500, setChecking);
            setCheck(false);
          })
          .catch(() => {
            setLoggedIn(false);
            window.setTimeout(() => setChecking(false), 500, setChecking);
            setCheck(false);
          });
      } else {
        setLoggedIn(false);
        window.setTimeout(() => setChecking(false), 500, setChecking);
        setCheck(false);
      }
    }
  }, [setLoggedIn, check, setCheck, setChecking]);

  const renderedJSX = checking
    ? <Loading />
    : <Login setLoggedUser={setLoggedUser} setLoggedIn={setLoggedIn} />;

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              loggedIn
                ? <Redirect to="/appointments" />
                : renderedJSX
            }
          </Route>
          <Route exact path="/trainers">
            {
              loggedIn
                ? (
                  <>
                    <Navbar setLoggedIn={setLoggedIn} loggedUser={loggedUser} />
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
                    <Navbar setLoggedIn={setLoggedIn} loggedUser={loggedUser} />
                    <Sidebar />
                    <Appointments />
                  </>
                )
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/signup">
            <Signup setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
