import React from 'react';
import './user.scss';

import { Breadcrumb, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

function User() {
  return (
    <div className="user">
      <Breadcrumb className="user-path">
        <Breadcrumb.Item>
          <Link to="/">
            <HomeOutlined /> 主页
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>用户</Breadcrumb.Item>
      </Breadcrumb>
      <header className="user-header">
        <div className="user-avatar">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="User avatar"
          />
        </div>
      </header>
      <section className="user-details">
        <h2 className="user-name">Alexej Fausta</h2>
        <Divider />
        <div className="user-stats">
          <span>帖子 12</span>
          <span>粉丝 12</span>
          <span>关注 4</span>
        </div>
      </section>
    </div>
  );
}

export default User;
