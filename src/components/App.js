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
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (check) {
      window.setTimeout(() => {
        setChecking(true);
        setCheck(true);
      }, 600000, setCheck);
      const userToken = window.sessionStorage.getItem('user_token');
      if (userToken) {
        window.fetch(APIURL, POSTOptions({ token: userToken }))
          .then(response => {
            if (response.status !== 200) throw new Error();
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

  const renderedJSX = checking ? <Loading /> : <Login setLoggedIn={setLoggedIn} />;

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              loggedIn && !checking
                ? <Redirect to="/appointments" />
                : renderedJSX
            }
          </Route>
          <Route exact path="/trainers">
            {
              loggedIn && !checking
                ? (
                  <>
                    <Navbar setLoggedIn={setLoggedIn} />
                    <Sidebar />
                    <TrainersIndex />
                  </>
                )
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/appointments">
            {
              loggedIn && !checking
                ? (
                  <>
                    <Navbar setLoggedIn={setLoggedIn} />
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
