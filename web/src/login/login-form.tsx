import React, { useContext, useState } from 'react';
import './login-form.scss';

import { Button, Input, message } from 'antd';
import api from '../_utils/api';
import { UserContext } from '../_context/user.context';

function LoginForm({ onLoginFinished }: any) {
  const { setupUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignup = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent form default
    setIsSignup(!isSignup);
  };

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent form default
    if (isSignup) {
      // Sign up
      api
        .post('signup', {
          username,
          email,
          password,
        })
        .then(({ data: userData }) => {
          setupUser(userData);
          onLoginFinished();
        })
        .catch(({ response }) => {
          if (response.status === 409) {
            message.error(response.data);
          } else {
            message.error('Oops something wrong happened');
          }
        });
    } else {
      // Sign in
      api
        .post('login', {
          username,
          password,
        })
        .then(({ data: userData }) => {
          setupUser(userData);
          onLoginFinished();
        })
        .catch(({ response }) => {
          if ([401, 404].includes(response.status)) {
            message.error(response.data);
          } else {
            message.error('Oops something wrong happened');
          }
        });
    }
  };

  return (
    <form className="login-form">
      {/* Username */}
      <div className="login-form-field">
        <label htmlFor="username">用户名{!isSignup ? '/邮箱' : ''}</label>
        <Input
          id="username"
          placeholder={`请输入用户名${!isSignup ? '或邮箱' : ''}`}
          className="login-form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {/* Email */}
      {isSignup && (
        <div className="login-form-field">
          <label htmlFor="username">电子邮箱</label>
          <Input
            id="email"
            type="email"
            placeholder="请输入电子邮箱"
            className="login-form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      )}

      {/* Password */}
      <div className="login-form-field">
        <label htmlFor="password">密码</label>
        <Input.Password
          id="password"
          placeholder="请输入密码"
          className="login-form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Actions */}
      <section>
        <Button type="primary" onClick={onSubmit}>
          {isSignup ? '注册' : '登录'}
        </Button>
        <div className="login-form-ask-signup">
          <span>{isSignup ? '已有账号? ' : '没有账号？'}</span>
          <button onClick={toggleSignup}>{isSignup ? '去登录' : '注册'}</button>
        </div>
      </section>
    </form>
  );
}

export default LoginForm;
