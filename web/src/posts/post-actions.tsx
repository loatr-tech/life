import React from 'react';
import { Button } from 'antd';
import './post-actions.scss';
import api from '../_utils/api';

function PostActions({ post }: any) {
  const onLike = () => {
    api.post(`post/${post.id}/interact`, { like: true });
  };
  return (
    <section className="post-actions">
      <Button shape="circle" onClick={onLike}>
        <i className="far fa-thumbs-up"></i>
      </Button>
      <Button shape="circle">
        <i className="fa-solid fa-share-alt"></i>
      </Button>
      <Button shape="circle">
        <i className="far fa-bookmark"></i>
      </Button>
    </section>
  );
}

export default PostActions;
