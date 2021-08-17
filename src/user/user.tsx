import React, { useContext, useEffect } from 'react';
import './user.scss';

import { Breadcrumb, Divider } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { UserContext } from '../_context/user.context';

function User() {
  const history = useHistory();
  const { userInfo, loggedIn } = useContext(UserContext);
  useEffect(() => {
    if (history && !loggedIn) {
      history.push('/login');
    }
  }, [history, loggedIn]);

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
          <img src={userInfo?.avatarUrl} alt="User avatar" />
        </div>
      </header>
      <section className="user-details">
        <h2 className="user-name">{userInfo?.name}</h2>
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
