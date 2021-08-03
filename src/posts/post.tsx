
import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import './post.scss';
import PostOwner from './post-owner';
import PostMain from './post-mian';

function Post() {
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
        <PostMain />
      </section>
    </div>
  );
}

export default Post;
