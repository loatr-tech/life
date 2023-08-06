import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import './post.scss';
import PostOwner from './post-owner';
import PostMain from './post-mian';
import api from '../_utils/api';
import { CATEGORIES_MAP, CATEGORIES_PARENT } from '../_utils/categories';

function Post(props: any) {
  const { postId } = useParams();
  const [post, setPost] = useState<any>({});
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const getPostDetails = async () => {
      setFetching(true);
      const { data } = await api.get(`post/${postId}`);
      setFetching(false);
      setPost(data);
    };
    getPostDetails();
  }, [postId]);

  return (
    <div className="post">
      <section className="post__path">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">
              <HomeOutlined /> 主页
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{CATEGORIES_PARENT[post.category]}</Breadcrumb.Item>
          <Breadcrumb.Item>{CATEGORIES_MAP[post.category]}</Breadcrumb.Item>
        </Breadcrumb>
      </section>
      <section className="post__container">
        <PostOwner post={post} />
        <PostMain post={post} fetching={fetching} />
      </section>
    </div>
  );
}

export default Post;
