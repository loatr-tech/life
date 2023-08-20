import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home-main.scss';
import { SCREEN, ScreenSizeContext } from '../_context/screen-size.context';
import PostCard from '../post/post-card';
import HomeNavigation from './home-navigation';
import { Breadcrumb, Button } from 'antd';
import api from '../_utils/api';
import PostCardPlaceholder from '../post/post-card-placeholder';
import { NavigationContext } from '../_context/navigation.context';
import HomeEmptyPosts from './home-empty-posts';
import removeMarkdown from '../_utils/remove-markdown';
import { CATEGORIES_MAP } from '../_utils/categories';
import { HomeOutlined } from '@ant-design/icons';

const postLimit = 10;

function HomeMain() {
  const { screenSize } = useContext(ScreenSizeContext);
  const { activeCategory, setActiveCategory } = useContext(NavigationContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [endOfPage, setEndOfPage] = useState(false);

  useEffect(() => {
    let destroyed = false;
    const fetchAllPosts = async () => {
      setLoading(true);
      setPosts([]);
      const params: any = { limit: postLimit };
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
        setPage(data.page);
        setLoading(false);
        setEndOfPage(data.items.length < postLimit);
      }
    };

    fetchAllPosts();
    return () => {
      destroyed = true;
    };
  }, [activeCategory]);

  async function loadMore() {
    const params: any = { page: page + 1 };
    if (activeCategory && activeCategory.category !== 'all') {
      params.category = activeCategory.category;
    }
    const { data } = await api.get('posts', { params });
    setPosts((prevPosts) => {
      return prevPosts.concat(
        data.items.map((post: any) => {
          post.content = removeMarkdown(post.content);
          return post;
        })
      );
    });
    if (data.items.length) setPage(data.page);
    if (data.items.length < postLimit) setEndOfPage(true);
  }

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
                <i className="fa-solid fa-pen"></i> 发帖
              </Button>
            </Link>
          </div>
        )}

        {activeCategory.category && activeCategory.category !== 'all' && (
          <Breadcrumb style={{ marginBottom: 12 }}>
            <Breadcrumb.Item>
              <Link to="/" onClick={() => setActiveCategory('all')}>
                <HomeOutlined /> 主页
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {CATEGORIES_MAP[activeCategory.category]}
            </Breadcrumb.Item>
          </Breadcrumb>
        )}

        {/* Post Lists */}
        <div className="home-content__posts">
          {loading
            ? new Array(6)
                .fill(null)
                .map((_, index) => <PostCardPlaceholder key={index} />)
            : posts.map((post: any) => {
                return <PostCard post={post} key={post.id} />;
              })}
        </div>

        {Boolean(posts.length) &&
          (endOfPage ? (
            <div
              style={{
                color: 'darkgrey',
                textAlign: 'center',
                userSelect: 'none',
              }}
            >
              <i className="fa-solid fa-heart-crack"></i> 没有更多了
            </div>
          ) : (
            <Button
              style={{ margin: '0 auto', width: '100%' }}
              type="text"
              icon={<i className="fa-solid fa-down-long"></i>}
              onClick={loadMore}
            >
              加载更多
            </Button>
          ))}

        {/* Empty states */}
        {!loading && !posts?.length && <HomeEmptyPosts />}
      </section>

      <section className="home-sidebar">
        <Link to="/new-post">
          <Button shape="round" size="middle" block type="primary">
            <i className="fa-solid fa-plus"></i> 发帖
          </Button>
        </Link>
      </section>
    </main>
  );
}

export default HomeMain;
