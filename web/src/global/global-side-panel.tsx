import React, { useContext } from 'react';
import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import { Avatar, Button, Divider } from 'antd';
import HomeNavigation from '../home/home-navigation';
import { ScreenSizeContext } from '../_context/screen-size.context';
import './global-side-panel.scss';
import { UserContext } from '../_context/user.context';

function GlobalSidePanel() {
  const navigate = useNavigate();
  const { sidePanelOpen, toggleSidePanel } = useContext(ScreenSizeContext);
  const { loggedIn, userInfo } = useContext(UserContext);

  const toUserPage = () => {
    toggleSidePanel();
    navigate('/user');
  };

  return (
    <div
      className={`global-side-panel ${
        sidePanelOpen ? 'side-panel-opened' : ''
      }`}
    >
      {/* User */}
      {loggedIn ? (
        <section
          className="global-side-panel__user"
          onClick={() => toUserPage()}
        >
          <Avatar src={userInfo.avatar_url} />
          <span className="global-side-panel__user-name">{userInfo.name}</span>
          <i className="fas fa-chevron-right"></i>
        </section>
      ) : (
        <Link to="/login" className="global-side-panel__login">
          <Button type="primary">
            <i className="fas fa-sign-in-alt"></i> 登录
          </Button>
        </Link>
      )}
      <Divider />
      <Routes>
        <Route
          path="/"
          element={
            <HomeNavigation onCategoryChange={() => toggleSidePanel()} />
          }
        />
      </Routes>
    </div>
  );
}

export default GlobalSidePanel;
