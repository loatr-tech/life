import React, { useContext, useState } from 'react';
import { Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { CATEGORIES, CATEGORIES_MAP } from '../_utils/categories';
import { NavigationContext } from '../_context/navigation.context';

function HomeNavigation({ onCategoryChange }: any) {
  const { activeCategory, setActiveCategory } = useContext(NavigationContext);
  const [selectedKeys, setSelectedKeys] = useState([activeCategory]);
  const [openKeys, setOpenKeys] = useState(['career']);

  const handleClick = ({ key }: MenuInfo) => {
    setActiveCategory(key);
    onCategoryChange?.(key);
  };

  const onSelect = ({ selectedKeys }: any) => {
    setSelectedKeys(selectedKeys);
  };

  const onOpenChange = (keys: any[]) => {
    setOpenKeys([keys[keys.length - 1]]);
  }

  return (
    <Menu
      onClick={(menuInfo) => handleClick(menuInfo)}
      selectedKeys={selectedKeys}
      onSelect={onSelect}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      mode="inline"
    >
      {/* All */}
      <Menu.Item key="all" icon={<i className="fas fa-rss"></i>}>
        最新动态
      </Menu.Item>
      {/* By Categories */}
      {CATEGORIES.map((topCategory) => {
        return (
          <Menu.SubMenu
            key={topCategory.id}
            icon={<i className={topCategory.icon}></i>}
            title={topCategory.name}
          >
            {topCategory.subcategories.map((subCategory: any) => {
              return subCategory.type === 'group' ? (
                <Menu.ItemGroup key={subCategory.id} title={subCategory.name}>
                  {subCategory.subcategories.map((category: any) => {
                    return (
                      <Menu.Item key={category.id}>
                        {CATEGORIES_MAP[category.id]}
                      </Menu.Item>
                    );
                  })}
                </Menu.ItemGroup>
              ) : (
                <Menu.Item key={subCategory.id}>
                  {CATEGORIES_MAP[subCategory.id]}
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
        );
      })}
    </Menu>
  );
}

export default HomeNavigation;
