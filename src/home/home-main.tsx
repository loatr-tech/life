import React from 'react';
import PostCard from '../post/post-card';
import './home-main.scss';

function HomeMain() {
  return (
    <main className="home-main">
      <section className="home-navigation"></section>
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
