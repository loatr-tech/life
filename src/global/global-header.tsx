import React from 'react';
import { Avatar, Badge, Input } from 'antd';

import { BellOutlined } from '@ant-design/icons';
import './global-header.scss';
import { Link } from 'react-router-dom';

const { Search } = Input;

function GlobalHeader() {
  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <header className="global-header">
      <div className="global-header__container">
        <Link className="global-header__logo" to="/">
          <h1>上岸</h1>
          <span>beta</span>
        </Link>
        <div className="global-header__search">
          <Search
            placeholder="你在想啥？"
            allowClear
            onSearch={onSearch}
            className="global-header__search-input"
          />
        </div>
        <div className="global-header-user">
          <Badge count={5}>
            <BellOutlined className="global-header-nofitication-bell" />
          </Badge>
          <Avatar>U</Avatar>
        </div>
      </div>
    </header>
  );
}

export default GlobalHeader;
