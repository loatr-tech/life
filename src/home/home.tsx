import React from 'react';
import './home.scss';

import HomeMain from './home-main';

function Home() {

  return (
    <div className="home">
      {/* Main Content */}
      <HomeMain />
      {/* Footer */}
      <footer className="home-footer">©2021 Created by Loatr</footer>
    </div>
  );
}

export default Home;
