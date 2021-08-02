import React from 'react';
import './home-main.scss';
import PostCard from '../post/post-card';
import HomeNavigation from './home-navigation';

function HomeMain() {
  return (
    <main className="home-main">
      <section className="home-navigation">
        <HomeNavigation />
      </section>
      <section className="home-content">
        {
          new Array(10).fill(null).map(() => {
            return <PostCard />;
          })
        }
      </section>
      <section className="home-sidebar"></section>
    </main>
  );
}

export default HomeMain;
