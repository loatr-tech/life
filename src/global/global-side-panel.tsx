import React, { useContext } from 'react';
import { useHistory, Route, Switch, Link } from 'react-router-dom';
import { Avatar, Button, Divider } from 'antd';
import HomeNavigation from '../home/home-navigation';
import { ScreenSizeContext } from '../_context/screen-size.context';
import './global-side-panel.scss';
import { UserContext } from '../_context/user.context';

function GlobalSidePanel() {
  const history = useHistory();
  const { sidePanelOpen, toggleSidePanel } = useContext(ScreenSizeContext);
  const { loggedIn } = useContext(UserContext);

  const toUserPage = () => {
    toggleSidePanel();
    history.push('/user');
  }

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
          <Avatar>U</Avatar>
          <span className="global-side-panel__user-name">Michael Jackson</span>
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
      <Switch>
        <Route path="/" exact>
          <HomeNavigation onCategoryChange={() => toggleSidePanel()} />
        </Route>
      </Switch>
    </div>
  );
}

export default GlobalSidePanel;
