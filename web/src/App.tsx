import React, { useContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App as AntdAppWrapper } from 'antd';
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
import NotFound from './not-found/not-found';

function App() {
  const { screenSize, sidePanelOpen } = useContext(ScreenSizeContext);
  return (
    <AntdAppWrapper>
      <Router>
        <main
          className={`app-container ${
            sidePanelOpen ? 'app-container-pushed' : ''
          }`}
        >
          <GlobalHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/new-post" element={<PostCreation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/_admin" element={<Admin />} />

            {/* Not match, 404 not found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {screenSize === SCREEN.MOBILE && <GlobalSidePanel />}
      </Router>
    </AntdAppWrapper>
  );
}

export default App;
