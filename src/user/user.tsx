import React, { useContext, useEffect } from 'react';
import './user.scss';

import { Breadcrumb, Button, Divider, Avatar } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { UserContext } from '../_context/user.context';

function User() {
  const history = useHistory();
  const { userInfo, loggedIn, initialized, logout } = useContext(UserContext);

  useEffect(() => {
    if (history && initialized && !loggedIn) {
      history.push('/');
    }
  }, [history, initialized, loggedIn]);

  const onLogout = () => {
    logout();
    history.push('/');
  }

  return (
    <div className="user">
      {/* Path */}
      <Breadcrumb className="user-path">
        <Breadcrumb.Item>
          <Link to="/">
            <HomeOutlined /> 主页
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>用户</Breadcrumb.Item>
      </Breadcrumb>

      {/* User Header */}
      <header className="user-header">
        <div className="user-avatar">
          <Avatar src={userInfo?.avatar_url} size={120} />
        </div>
      </header>

      {/* User details */}
      <section className="user-details">
        <h2 className="user-name">{userInfo?.name}</h2>
        <Divider />
        <div className="user-stats">
          <span>帖子 12</span>
          <span>粉丝 12</span>
          <span>关注 4</span>
        </div>
      </section>

      {/* Logout */}
      <section className="user-logout">
        <Button type="dashed" danger onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i> 退出账户
        </Button>
      </section>
    </div>
  );
}

export default User;
