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
import Account from './Account';

const APIURL = 'https://srodrig-chess-trainers.herokuapp.com/logged_in';

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
      setCheck(false);

      window.setTimeout(() => {
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
            setChecking(false);
            setLoggedIn(true);
          })
          .catch(() => {
            setChecking(false);
            setLoggedIn(false);
          });
      } else {
        setChecking(false);
        setLoggedIn(false);
      }
    }
  }, [setLoggedIn, check, setCheck, setChecking]);

  let rootRenderedJSX = null;
  let trainersRenderedJSX = null;
  let appointmentsRenderedJSX = null;
  let accountRenderedJSX = null;

  if (checking) {
    rootRenderedJSX = <Loading />;
    trainersRenderedJSX = <Loading />;
    appointmentsRenderedJSX = <Loading />;
    accountRenderedJSX = <Loading />;
  } else if (!loggedIn) {
    rootRenderedJSX = <Login setLoggedUser={setLoggedUser} setLoggedIn={setLoggedIn} />;
    trainersRenderedJSX = <Redirect to="/" />;
    appointmentsRenderedJSX = <Redirect to="/" />;
    accountRenderedJSX = <Redirect to="/" />;
  } else {
    rootRenderedJSX = <Redirect to="/appointments" />;

    trainersRenderedJSX = (
      <>
        <Navbar setLoggedIn={setLoggedIn} loggedUser={loggedUser} />
        <Sidebar />
        <TrainersIndex />
      </>
    );

    appointmentsRenderedJSX = (
      <>
        <Navbar setLoggedIn={setLoggedIn} loggedUser={loggedUser} />
        <Sidebar />
        <Appointments />
      </>
    );

    accountRenderedJSX = (
      <>
        <Navbar setLoggedIn={setLoggedIn} loggedUser={loggedUser} />
        <Sidebar />
        <Account setLoggedUser={setLoggedUser} />
      </>
    );
  }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {rootRenderedJSX}
          </Route>
          <Route exact path="/trainers">
            {trainersRenderedJSX}
          </Route>
          <Route exact path="/appointments">
            {appointmentsRenderedJSX}
          </Route>
          <Route exact path="/account">
            {accountRenderedJSX}
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
