import React from 'react';
import './login.scss';

import { Breadcrumb } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import LoginGoogle from './login-google';

function Login() {
  const history = useHistory();

  const onLoginFinished = () => {
    history.goBack();
  }

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
        <LoginGoogle onLoginFinished={onLoginFinished} />
      </form>
    </div>
  );
}

export default Login;
