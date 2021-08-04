import React from 'react';
import { Link } from 'react-router-dom';
import './home-main.scss';
import PostCard from '../post/post-card';
import HomeNavigation from './home-navigation';
import { Button } from 'antd';


function HomeMain() {
  return (
    <main className="home-main">
      <section className="home-navigation">
        <HomeNavigation />
      </section>
      <section className="home-content">
        <div className="home-content__actions">
          <Link to="/new-post">
            <Button shape="round" size="middle">
              <i className="fas fa-pen"></i> 发帖
            </Button>
          </Link>
        </div>
        {new Array(10).fill(null).map(() => {
          return <PostCard />;
        })}
      </section>
      <section className="home-sidebar"></section>
    </main>
  );
}

export default HomeMain;
