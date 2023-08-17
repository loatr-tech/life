import React, { useState } from 'react';
import { Radio } from 'antd';
import './post-creation-category.scss';
import { CATEGORIES, CATEGORIES_MAP } from '../_utils/categories';

function PostCreationCategory(props: any) {
  const { selectedCategory, setSelectedCategory, showMissingField } = props;
  const [category, setCategory] = useState<string>(selectedCategory);

  const onCategoryChanged = (evt: any) => {
    setCategory(evt.target.value);
    setSelectedCategory(evt.target.value);
  };

  return (
    <>
      <div
        className={`post-creation__categories ${
          !selectedCategory && showMissingField
            ? 'post-creation__missing-field'
            : ''
        }`}
      >
        <span style={{ fontWeight: 200 }}>帖子分类:</span>
        {CATEGORIES.map((topCategory: any) => {
          return (
            <section
              className="post-creation-category__modal-section"
              key={topCategory.name}
            >
              <h3>{topCategory.name}</h3>
              <Radio.Group onChange={onCategoryChanged} value={category}>
                {topCategory.subcategories.map((subCategory: any) => {
                  return subCategory.type === 'group' ? (
                    subCategory.subcategories.map((category: any) => {
                      return (
                        <Radio value={category.id} key={category.id}>
                          {CATEGORIES_MAP[category.id]}
                        </Radio>
                      );
                    })
                  ) : (
                    <Radio value={subCategory.id} key={subCategory.id}>
                      {CATEGORIES_MAP[subCategory.id]}
                    </Radio>
                  );
                })}
              </Radio.Group>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default PostCreationCategory;
