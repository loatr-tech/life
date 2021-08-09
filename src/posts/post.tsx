
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import './post.scss';
import PostOwner from './post-owner';
import PostMain from './post-mian';
import api from '../_utils/api';

function Post(props: any) {
  const [post, setPost] = useState<any>({});

  useEffect(() => {
    const getPostDetails = async () => {
      const { data } = await api.get(`post/${props.match.params.postId}`);
      setPost(data);
    }
    getPostDetails();
  }, [props.match.params.postId]);

  return (
    <div className="post">
      <section className="post__path">
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <UserOutlined />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
      </section>
      <section className="post__container">
        <PostOwner />
        <PostMain post={post} />
      </section>
    </div>
  );
}

export default Post;
