import React, { useState } from 'react';
import { Button, Modal, Radio } from 'antd';
import './post-creation-category.scss';
import { CATEGORIES, CATEGORIES_MAP } from '../_utils/categories';

function PostCreationCategory(props: any) {
  const { selectedCategory, setSelectedCategory, showMissingField } = props;
  const [modalOpen, setModelOpen] = useState(false);
  const [category, setCategory] = useState<string>(selectedCategory);

  const onCategoryChanged = (evt: any) => {
    setCategory(evt.target.value);
  };

  const onCategoryConfirmed = () => {
    setSelectedCategory(category);
    setModelOpen(false);
  };

  return (
    <>
      <h3 className="post-creation-category__btn">
        文章分类:{' '}
        <Button
          onClick={() => setModelOpen(true)}
          size="small"
          shape={selectedCategory ? 'round' : undefined}
          danger={!selectedCategory && showMissingField ? true : false}
        >
          {selectedCategory ? <i className="fa-solid fa-pen"></i> : '请选择'}
          {selectedCategory ? CATEGORIES_MAP[selectedCategory] : ''}
        </Button>
      </h3>
      <Modal
        className="post-creation-category__modal"
        title="选择分类"
        visible={modalOpen}
        onOk={() => onCategoryConfirmed()}
        onCancel={() => setModelOpen(false)}
      >
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
      </Modal>
    </>
  );
}

export default PostCreationCategory;
