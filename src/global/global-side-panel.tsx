import React, { useContext } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import { Avatar, Divider } from 'antd';
import HomeNavigation from '../home/home-navigation';
import { ScreenSizeContext } from '../_context/screen-size.context';
import './global-side-panel.scss';

function GlobalSidePanel() {
  const history = useHistory();
  const { sidePanelOpen, toggleSidePanel } = useContext(ScreenSizeContext);

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
      <section className="global-side-panel__user" onClick={() => toUserPage()}>
        <Avatar>U</Avatar>
        <span className="global-side-panel__user-name">Michael Jackson</span>
        <i className="fas fa-chevron-right"></i>
      </section>
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
