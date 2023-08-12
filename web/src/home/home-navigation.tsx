import React, { useContext, useState } from 'react';
import { CATEGORIES, CATEGORIES_MAP } from '../_utils/categories';
import { NavigationContext } from '../_context/navigation.context';
import './home-navigation.scss';

export default function HomeNavigation({ onCategoryChange }: any) {
  const { activeCategory, setActiveCategory } = useContext(NavigationContext);
  const [opnedSection, setOpenedSection] = useState('career');

  const handleClick = (category: string, topCategory: string) => {
    setActiveCategory({ category, top: topCategory });
    onCategoryChange?.(category);
  };

  const toggleSection = (topCategory: string) => {
    if (opnedSection === topCategory) {
      setOpenedSection('');
    } else {
      setOpenedSection(topCategory);
    }
  };

  return (
    <div className="home-navigation">
      {/* All Posts */}
      <section
        className={`home-navigation__section ${
          activeCategory.top === 'all' ? 'home-navigation__section--active' : ''
        }`}
      >
        <h4
          className="home-navigation__top-category"
          onClick={() => handleClick('all', 'all')}
        >
          <i className="fa-solid fa-rss"></i>
          <span>全部帖子</span>
        </h4>
      </section>

      {/* Categories */}
      {CATEGORIES.map((topCategory) => {
        const isActive = activeCategory.top === topCategory.id;
        const isOpened = opnedSection === topCategory.id;
        return (
          <section
            key={topCategory.id}
            className={`home-navigation__section ${
              isActive ? 'home-navigation__section--active' : ''
            } ${isOpened ? 'home-navigation__section--opened' : ''}`}
          >
            {/* Top category title swithcer */}
            <h4
              className="home-navigation__top-category"
              onClick={() => toggleSection(topCategory.id)}
            >
              <i className={topCategory.icon}></i>
              <span>{topCategory.name}</span>
              <i className="fa-solid fa-chevron-down"></i>
            </h4>
            {/* Sub-Categories */}
            <div className="home-navigation__subcategories-wrapper">
              <div className="home-navigation__subcategories">
                {topCategory.subcategories.map((subCategory: any) => {
                  return subCategory.type === 'group' ? (
                    [
                      // Section title
                      <h5
                        key={subCategory.id}
                        className="home-navigation__group-name"
                      >
                        {subCategory.name}
                      </h5>,
                      // Section categories
                      <div key={`${subCategory.id}-categories`}>
                        {subCategory.subcategories.map((category: any) => {
                          return (
                            <HomeNavigationItem
                              key={category.id}
                              activeCategory={activeCategory}
                              category={category}
                              onSelect={() =>
                                handleClick(category.id, topCategory.id)
                              }
                            />
                          );
                        })}
                      </div>,
                    ]
                  ) : (
                    <HomeNavigationItem
                      key={subCategory.id}
                      activeCategory={activeCategory}
                      category={subCategory}
                      onSelect={() =>
                        handleClick(subCategory.id, topCategory.id)
                      }
                    />
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function HomeNavigationItem({ activeCategory, category, onSelect }: any) {
  return (
    <span
      className={`home-navigation__category ${
        activeCategory.category === category.id
          ? 'home-navigation__category--active'
          : ''
      }`}
      onClick={() => onSelect()}
    >
      {CATEGORIES_MAP[category.id]}
    </span>
  );
}
