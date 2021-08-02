import React from 'react';
import { Avatar, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import './home.scss';
import HomeMain from './home-main';

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <header className="home-header">
        <div>Logo</div>
        <div className="home-header-search">Search</div>
        <div className="home-header-user">
          <Badge count={5}>
            <BellOutlined className="home-header-nofitication-bell"/>
          </Badge>
          <Avatar>U</Avatar>
        </div>
      </header>
      <HomeMain />
      {/* Footer */}
      <footer className="home-footer">©2021 created by Loatr</footer>
    </div>
  );
}

export default Home;
