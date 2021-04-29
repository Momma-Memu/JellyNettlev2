import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { restoreUser } from './store/session';
import NavBar from './components/NavBarComponents/NavBar';
import Landing from './components/landingComponents/Landing';
import NotFound from './components/NotFound';
import Home from './components/homeComponents/Home';
import Welcome from './components/profileBuildComponents/Welcome';
import Settings from './components/settings/Settings';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser());
  }, [dispatch])

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Landing} />
        <Route path='/profile/builder' component={Welcome} />
        <Route path='/settings' component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
