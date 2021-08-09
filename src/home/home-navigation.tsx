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
      defaultSelectedKeys={['all']}
      defaultOpenKeys={['career']}
      mode="inline"
    >
      <Menu.Item key="all" icon={<i className="fas fa-rss"></i>}>
        最新动态
      </Menu.Item>
      <SubMenu
        key="career"
        icon={<i className="fas fa-suitcase"></i>}
        title="打工人儿"
      >
        <Menu.ItemGroup key="career-exp" title="经验分享">
          <Menu.Item key="experience_sharing">上岸指南</Menu.Item>
          <Menu.Item key="promotion">升职加薪</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="career-data" title="数据分享">
          <Menu.Item key="total_package">我的包裹</Menu.Item>
          <Menu.Item key="interview_questions">北美面经</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu
        key="immigration"
        icon={<i className="far fa-id-card"></i>}
        title="身份移民"
      >
        <Menu.Item key="work_visa">工作签证</Menu.Item>
        <Menu.Item key="green_card">移民绿卡</Menu.Item>
        <Menu.Item key="student_visa">学生签证</Menu.Item>
      </SubMenu>
      <SubMenu
        key="study"
        icon={<i className="fas fa-book-reader"></i>}
        title="天天向上"
      >
        <Menu.Item key="lets_study">自习</Menu.Item>
        <Menu.Item key="leet_code">组队刷题</Menu.Item>
      </SubMenu>
      <SubMenu
        key="neighborhood"
        icon={<i className="fas fa-book-reader"></i>}
        title="街坊领居"
      >
        <Menu.Item key="used_items">二手市场</Menu.Item>
        <Menu.Item key="house_rental">房屋出租</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default HomeNavigation;
