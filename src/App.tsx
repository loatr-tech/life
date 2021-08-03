import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import GlobalHeader from './global/global-header';

import Home from './home/home';
import Post from './posts/post';

function App() {
  return (
    <Router>
      <GlobalHeader />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:postId" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
