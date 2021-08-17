import React from 'react';
import './login.scss';

import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import LoginGoogle from './login-google';

function Login() {
  return (
    <div className="login">
      <Breadcrumb className="user-path">
        <Breadcrumb.Item>
          <Link to="/">
            <HomeOutlined /> 主页
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>用户登录</Breadcrumb.Item>
      </Breadcrumb>
      <form className="login-form">
        <h3>选择登录方式</h3>
        <LoginGoogle />
      </form>
    </div>
  );
}

export default Login;
