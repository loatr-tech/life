import React, { useState } from 'react';
import { Button, Divider, Input } from 'antd';
import Editor from 'rich-markdown-editor';
import './post-creation.scss';
import api from '../_utils/api';
import PostCreationCategory from './post-creation-category';

function PostCreation(props: any) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [publishing, setPublishing] = useState(false);
  const [showMissingField, setShowMissingField] = useState(false);

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (getValue: Function) => {
    const value = getValue();
    setContent(value);
  };

  const onPublish = async () => {
    setShowMissingField(true);
    if (title.length && content.length && selectedCategory) {
      setPublishing(true);
      const payload = { title, content, category: selectedCategory };
      await api.post('post', payload);
      setPublishing(false);
      // Redirect back to homepage
      props.history.push('/');
    }
  }

  return (
    <div className="post-creation">
      <section className="post-creation__actions">
        <PostCreationCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          showMissingField={showMissingField}
        />
        <Divider />
        <Button
          onClick={() => onPublish()}
          block
          loading={publishing}
          disabled={publishing}
        >
          发布
        </Button>
      </section>
      <section className="post-creation__editor">
        {/* Title */}
        <div
          className={`post-creation__editor-title ${
            !title && showMissingField ? 'post-creation__missing-field' : ''
          }`}
        >
          <Input
            placeholder="输入你的标题"
            value={title}
            onChange={(e) => onChangeTitle(e)}
          />
        </div>
        {/* Content */}
        <div
          className={`post-creation__editor-content ${
            !content && showMissingField ? 'post-creation__missing-field' : ''
          }`}
        >
          <Editor
            placeholder="写下你的心路历程"
            onChange={(e) => onChangeContent(e)}
          />
        </div>
        {/* Actions */}
        <div className="post-creation__editor-actions">
          <Button
            onClick={() => onPublish()}
            loading={publishing}
            disabled={publishing}
          >
            发布
          </Button>
        </div>
      </section>
    </div>
  );
}

export default PostCreation;
