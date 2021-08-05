import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeNavigation from '../home/home-navigation';
import { ScreenSizeContext } from '../_context/screen-size.context';
import './global-side-panel.scss';

function GlobalSidePanel() {
  const { sidePanelOpen } = useContext(ScreenSizeContext);

  return <div className={`global-side-panel ${sidePanelOpen ? 'side-panel-opened': ''}`}>
    <Switch>
      <Route path="/" exact >
        <HomeNavigation />
      </Route>
    </Switch>
  </div>;
}

export default GlobalSidePanel;
