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
import Footer from './components/landingComponents/Footer';
import Profile from './components/profileComponents/Profile';

function App() {
  const dispatch = useDispatch();
  const apiKey = process.env.CLOUDINARY_API_KEY
  console.log(apiKey)

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
        <Route path='/profile/:username' component={Profile} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
