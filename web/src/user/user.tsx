import React, { useContext, useEffect } from 'react';
import './user.scss';

import { Breadcrumb, Button, Divider } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { UserContext } from '../_context/user.context';
import UserAvatar from './user-avatar';
import api from '../_utils/api';

function User() {
  const navigate = useNavigate();
  const { userInfo, loggedIn, initialized, logout, setupUser } =
    useContext(UserContext);

  useEffect(() => {
    if (initialized && !loggedIn) {
      navigate('/');
    }
  }, [initialized, loggedIn]);

  const onEdited = async () => {
    const { data } = await api.get('user');
    setupUser(data);
  };

  const onLogout = () => {
    logout();
    navigate('/');
  };

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
        <UserAvatar userInfo={userInfo} onEdited={onEdited} />
      </header>

      {/* User details */}
      <section className="user-details">
        <h2 className="user-name">{userInfo?.name}</h2>
        <Divider />
        <div className="user-stats">
          <span>帖子 {userInfo?.posts || 0}</span>
          <span>粉丝 {userInfo?.fans || 0}</span>
          <span>关注 {userInfo?.follows || 0}</span>
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
