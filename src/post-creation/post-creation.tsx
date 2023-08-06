import React, { useContext, useState } from 'react';
import { Button, Input } from 'antd';
// import Editor from 'rich-markdown-editor';
import './post-creation.scss';
import api from '../_utils/api';
import PostCreationCategory from './post-creation-category';
import { UserContext } from '../_context/user.context';
import { Link } from 'react-router-dom';
import PostCreationInfo from './post-creation-info';

function PostCreation(props: any) {
  const { loggedIn, userInfo } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [infos, setInfos] = useState({});
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
      const payload = {
        title,
        content,
        category: selectedCategory,
        owner_id: userInfo.id,
        infos,
      };
      await api.post('post', payload);
      setPublishing(false);
      // Redirect back to homepage
      props.history.push('/');
    }
  };

  return loggedIn ? (
    <div className="post-creation">
      <section className="post-creation__actions">
        <PostCreationCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          showMissingField={showMissingField}
        />
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

        {/* Infos */}
        <PostCreationInfo category={selectedCategory} setInfos={setInfos} />

        {/* Content */}
        <div
          className={`post-creation__editor-content ${
            !content && showMissingField ? 'post-creation__missing-field' : ''
          }`}
        >
          {/* <Editor
            placeholder="写下你的心路历程"
            onChange={(e) => onChangeContent(e)}
          /> */}
        </div>
        {/* Actions */}
        <div className="post-creation__editor-actions">
          <Button
            type="primary"
            onClick={() => onPublish()}
            loading={publishing}
            disabled={publishing}
          >
            发布
          </Button>
        </div>
      </section>
    </div>
  ) : (
    <div className="post-creation__login">
      <p>登录后即可发布帖子</p>
      <Link to="/login">
        <Button type="primary">
          <i className="fas fa-sign-in-alt"></i> 登录
        </Button>
      </Link>
    </div>
  );
}

export default PostCreation;
