import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home-main.scss';
import { SCREEN, ScreenSizeContext } from '../_context/screen-size.context';
import PostCard from '../post/post-card';
import HomeNavigation from './home-navigation';
import { Button } from 'antd';
import api from '../_utils/api';
import PostCardPlaceholder from '../post/post-card-placeholder';


function HomeMain() {
  const { screenSize } = useContext(ScreenSizeContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllPosts = async () => {
      setLoading(true);
      const { data } = await api.get('posts');
      setPosts(data.items);
      setLoading(false);
    }

    fetchAllPosts();
  }, [])
  return (
    <main className="home-main">
      <section className="home-navigation">
        <HomeNavigation />
      </section>
      <section className="home-content">
        {screenSize !== SCREEN.DESKTOP && (
          <div className="home-content__actions">
            <Link to="/new-post">
              <Button shape="round" size="middle">
                <i className="fas fa-pen"></i> 发帖
              </Button>
            </Link>
          </div>
        )}
        {loading
          ? new Array(10).fill(null).map(() => <PostCardPlaceholder />)
          : posts.map((post: any) => {
              return <PostCard post={post} key={post.id} />;
            })}
      </section>
      <section className="home-sidebar">
        <Link to="/new-post">
          <Button shape="round" size="middle" block>
            <i className="fas fa-pen"></i> 发帖
          </Button>
        </Link>
      </section>
    </main>
  );
}

export default HomeMain;
