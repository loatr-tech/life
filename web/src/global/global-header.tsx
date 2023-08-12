import React, { useContext } from 'react';
import { Avatar, Button, Input } from 'antd';
import './global-header.scss';
import { Link } from 'react-router-dom';
import { SCREEN, ScreenSizeContext } from '../_context/screen-size.context';
import { UserContext } from '../_context/user.context';

export default function GlobalHeader() {
  const { screenSize, toggleSidePanel } = useContext(ScreenSizeContext);
  const { loggedIn, userInfo } = useContext(UserContext);
  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <header className="global-header">
      <div className="global-header__container">
        {/* Logo */}
        <Link className="global-header__logo" to="/">
          <h1>上岸</h1>
          <span>beta</span>
        </Link>

        {/* Search */}
        <div className="global-header__search">
          <Input.Search
            disabled
            placeholder="你在想啥？"
            allowClear
            onSearch={onSearch}
            className="global-header__search-input"
          />
        </div>

        {/* User */}
        {screenSize === SCREEN.MOBILE ? (
          <Button type="text" onClick={() => toggleSidePanel()}>
            <i className="fas fa-bars"></i>
          </Button>
        ) : loggedIn ? (
          <Link to="/user">
            <Avatar src={userInfo.avatar_url} />
          </Link>
        ) : (
          <Link to="/login">
            <Button type="primary">
              <i className="fas fa-sign-in-alt"></i> 登录
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
