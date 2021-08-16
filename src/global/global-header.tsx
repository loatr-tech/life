import React, { useContext } from 'react';
import { Avatar, Button, Input } from 'antd';
import './global-header.scss';
import { Link } from 'react-router-dom';
import { SCREEN, ScreenSizeContext } from '../_context/screen-size.context';

function GlobalHeader() {
  const { screenSize, toggleSidePanel } = useContext(ScreenSizeContext);
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
            placeholder="你在想啥？"
            allowClear
            onSearch={onSearch}
            className="global-header__search-input"
          />
        </div>
        {/* User */}
        {screenSize === SCREEN.MOBILE ? (
          <Button onClick={() => toggleSidePanel()}>
            <i className="fas fa-bars"></i>
          </Button>
        ) : (
          <Link to="/user">
            <Avatar>U</Avatar>
          </Link>
        )}
      </div>
    </header>
  );
}

export default GlobalHeader;
