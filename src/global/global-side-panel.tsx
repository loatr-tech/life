import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Avatar, Divider } from 'antd';
import HomeNavigation from '../home/home-navigation';
import { ScreenSizeContext } from '../_context/screen-size.context';
import './global-side-panel.scss';

function GlobalSidePanel() {
  const { sidePanelOpen } = useContext(ScreenSizeContext);

  return (
    <div
      className={`global-side-panel ${
        sidePanelOpen ? 'side-panel-opened' : ''
      }`}
    >
      {/* User */}
      <section className="global-side-panel__user">
        <Avatar>U</Avatar>
        <span className="global-side-panel__user-name">Michael Jackson</span>
        <i className="fas fa-chevron-right"></i>
      </section>
      <Divider />
      <Switch>
        <Route path="/" exact>
          <HomeNavigation />
        </Route>
      </Switch>
    </div>
  );
}

export default GlobalSidePanel;
