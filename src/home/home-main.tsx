import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home-main.scss';
import { SCREEN, ScreenSizeContext } from '../_context/screen-size.context';
import PostCard from '../post/post-card';
import HomeNavigation from './home-navigation';
import { Button } from 'antd';
import api from '../_utils/api';
import PostCardPlaceholder from '../post/post-card-placeholder';
import { NavigationContext } from '../_context/navigation.context';
import HomeEmptyPosts from './home-empty-posts';
import removeMarkdown from '../_utils/remove-markdown';


function HomeMain() {
  const { screenSize } = useContext(ScreenSizeContext);
  const { activeCategory } = useContext(NavigationContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let destroyed = false;
    const fetchAllPosts = async () => {
      setLoading(true);
      const params: any = {};
      if (activeCategory && activeCategory.category !== 'all') {
        params.category = activeCategory.category;
      }
      const { data } = await api.get('posts', { params });

      if (!destroyed) {
        setPosts(
          data.items.map((post: any) => {
            post.content = removeMarkdown(post.content);
            return post;
          })
        );
        setLoading(false);
      }
    };

    fetchAllPosts();
    return () => {
      destroyed = true;
    }
  }, [activeCategory]);
  return (
    <main className="home-main">
      {screenSize !== SCREEN.MOBILE && (
        <section className="home-navigation">
          <HomeNavigation />
        </section>
      )}
      <section className="home-content">
        {/* Actions */}
        {screenSize !== SCREEN.DESKTOP && (
          <div className="home-content__actions">
            <Link to="/new-post">
              <Button shape="round" size="middle" type="primary">
                <i className="fas fa-pen"></i> 发帖
              </Button>
            </Link>
          </div>
        )}
        {/* Post Lists */}
        {loading ? (
          new Array(5)
            .fill(null)
            .map((_, index) => <PostCardPlaceholder key={index} />)
        ) : posts.length ? (
          posts.map((post: any) => {
            return <PostCard post={post} key={post.id} />;
          })
        ) : (
          <HomeEmptyPosts />
        )}
      </section>
      <section className="home-sidebar">
        <Link to="/new-post">
          <Button shape="round" size="middle" block type="primary">
            <i className="fas fa-plus"></i> 发帖
          </Button>
        </Link>
      </section>
    </main>
  );
}

export default HomeMain;
