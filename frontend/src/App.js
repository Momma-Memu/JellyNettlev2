import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {restoreUser} from './store/session';
import NavBar from './components/NavBarComponents/NavBar';
import Landing from './components/landingComponents/Landing';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/login' component={Landing} />
      </Switch>
    </>
  );
}

export default App;
