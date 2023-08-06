import React from 'react';
import './login.scss';

import { Breadcrumb, Divider } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import LoginGoogle from './login-google';
import LoginForm from './login-form';

function Login() {
  const navigate = useNavigate();

  const onLoginFinished = () => {
    navigate('/'); // todo: original logic is go back, change to go home as temporary solution
  };

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

      <main className="login-container">
        {/* Login Form */}
        <LoginForm onLoginFinished={onLoginFinished} />

        {/* Other Login Method */}
        <Divider />
        <section className="login-other-method">
          <h3>选择其他方式登录</h3>
          <LoginGoogle onLoginFinished={onLoginFinished} />
        </section>
      </main>
    </div>
  );
}

export default Login;
