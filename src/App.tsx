import React, { useContext } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { SCREEN, ScreenSizeContext } from './_context/screen-size.context';
import GlobalHeader from './global/global-header';

import Home from './home/home';
import User from './user/user';
import Post from './posts/post';
import PostCreation from './post-creation/post-creation';
import GlobalSidePanel from './global/global-side-panel';
import Login from './login/login';
import Calculator from './calculator/calculator';
import Admin from './admin/admin';



function App() {
  const { screenSize, sidePanelOpen } = useContext(ScreenSizeContext);
  return (
    <Router>
      <main
        className={`app-container ${
          sidePanelOpen ? 'app-container-pushed' : ''
        }`}
      >
        <GlobalHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post/:postId" component={Post} />
          <Route path="/new-post" component={PostCreation} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={User} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/_admin" component={Admin} />
        </Switch>
      </main>
      {screenSize === SCREEN.MOBILE && <GlobalSidePanel />}
    </Router>
  );
}

export default App;
