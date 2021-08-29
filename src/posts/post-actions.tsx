import React from 'react';
import { Button } from 'antd';
import './post-actions.scss';
import api from '../_utils/api';

function PostActions({ post }: any) {
  const onLike = () => {
    api.post(`post/${post.id}/interact`, { like: true });
  }
  return (
    <section className="post-actions">
      <Button type="primary" shape="circle" onClick={onLike}>
        <i className="far fa-thumbs-up"></i>
      </Button>
      <Button type="primary" shape="circle">
        <i className="far fa-star"></i>
      </Button>
      <Button type="primary" shape="circle">
        <i className="fas fa-share-alt"></i>
      </Button>
      <Button type="primary" shape="circle">
        <i className="far fa-bookmark"></i>
      </Button>
    </section>
  );
}

export default PostActions;
