import React from 'react';
import { Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';

const { SubMenu } = Menu;
// import './home-navigation.scss';

function HomeNavigation() {
  const handleClick = (menuInfo: MenuInfo) => {
    console.log('menuInfo ', menuInfo);
  };
  return (
    <Menu
      onClick={(menuInfo) => handleClick(menuInfo)}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.Item key="0" icon={<i className="fas fa-rss"></i>}>
        最新动态
      </Menu.Item>
      <SubMenu
        key="sub1"
        icon={<i className="fas fa-suitcase"></i>}
        title="打工人儿"
      >
        <Menu.ItemGroup key="g1" title="经验分享">
          <Menu.Item key="1">上岸指南</Menu.Item>
          <Menu.Item key="2">升职加薪</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="数据分享">
          <Menu.Item key="3">我的包裹</Menu.Item>
          <Menu.Item key="4">北美面经</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu
        key="sub2"
        icon={<i className="far fa-id-card"></i>}
        title="身份移民"
      >
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu
        key="sub4"
        icon={<i className="fas fa-book-reader"></i>}
        title="天天向上"
      >
        <Menu.Item key="9">自习</Menu.Item>
        <Menu.Item key="10">组队刷题</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub5"
        icon={<i className="fas fa-book-reader"></i>}
        title="街坊领居"
      >
        <Menu.Item key="used">二手市场</Menu.Item>
        <Menu.Item key="rent">房屋出租</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default HomeNavigation;
