import React, { useState } from 'react';
import { Button, Input } from 'antd';
import Editor from 'rich-markdown-editor';
import './post-creation.scss';
import api from '../_utils/api';

function PostCreation(props: any) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (getValue: Function) => {
    const value = getValue();
    setContent(value);
  };

  const onPublish = async () => {
    if (title.length && content.length) {
      const payload = { title, content };
      await api.post('post', payload);
      // Redirect back to homepage
      props.history.push('/');
    }
  }
  return (
    <div className="post-creation">
      <section className="post-creation__actions">
        <Button onClick={() => onPublish()}>
          发布
        </Button>
      </section>
      <section className="post-creation__editor">
        {/* Title */}
        <div className="post-creation__editor-title">
          <Input
            placeholder="输入你的标题"
            value={title}
            onChange={(e) => onChangeTitle(e)}
          />
        </div>
        {/* Content */}
        <div className="post-creation__editor-content">
          <Editor
            placeholder="写下你的心路历程"
            onChange={(e) => onChangeContent(e)}
          />
        </div>
        {/* Actions */}
        <div className="post-creation__editor-actions">
          <Button onClick={() => onPublish()}>发布</Button>
        </div>
      </section>
    </div>
  );
}

export default PostCreation;
