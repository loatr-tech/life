import React, { useState } from 'react';
import { Button, Modal, Radio } from 'antd';
import './post-creation-category.scss';
import { CATEGORIES_MAP } from '../_utils/categories';

function PostCreationCategory(props: any) {
  const { selectedCategory, setSelectedCategory, showMissingField } = props;
  const [modalOpen, setModelOpen] = useState(false);
  const [category, setCategory] = useState<string>(selectedCategory);

  const onCategoryChanged = (evt: any) => {
    setCategory(evt.target.value);
  }

  const onCategoryConfirmed = () => {
    setSelectedCategory(category);
    setModelOpen(false);
  }

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
          {selectedCategory ? <i className="fas fa-pen"></i> : '请选择'}
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
        <h3>打工人儿</h3>
        <Radio.Group onChange={(e) => onCategoryChanged(e)} value={category}>
          <Radio value="experience_sharing">上岸指南</Radio>
          <Radio value="promotion">升职加薪</Radio>
          <Radio value="total_package">我的包裹</Radio>
          <Radio value="interview_questions">北面面经</Radio>
        </Radio.Group>
        <h3>身份移民</h3>
        <Radio.Group onChange={(e) => onCategoryChanged(e)} value={category}>
          <Radio value="work_visa">工作签证</Radio>
          <Radio value="green_card">绿卡移民</Radio>
          <Radio value="student_visa">学生签证</Radio>
        </Radio.Group>
        <h3>天天向上</h3>
        <Radio.Group onChange={(e) => onCategoryChanged(e)} value={category}>
          <Radio value="lets_study">自习</Radio>
          <Radio value="leet_code">组队刷题</Radio>
        </Radio.Group>
        <h3>街坊领居</h3>
        <Radio.Group onChange={(e) => onCategoryChanged(e)} value={category}>
          <Radio value="used_items">二手市场</Radio>
          <Radio value="house_rental">房屋出租</Radio>
        </Radio.Group>
      </Modal>
    </>
  );
}

export default PostCreationCategory;
