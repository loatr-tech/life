import React from 'react';
import { Button, Tooltip } from 'antd';
import './post-actions.scss';
import api from '../_utils/api';
import { useUser } from '../_context/user.context';

function PostActions({ post }: any) {
  const { loggedIn } = useUser();

  const onLike = () => {
    api.post(`post/${post.id}/interact`, { like: true });
  };

  return (
    <section className="post-actions">
      <Tooltip title={loggedIn ? '赞' : '请登陆后使用'}>
        <Button shape="circle" onClick={onLike} disabled={!loggedIn}>
          <i className="far fa-thumbs-up"></i>
        </Button>
      </Tooltip>
      <Button shape="circle">
        <i className="fa-solid fa-share-alt"></i>
      </Button>
      <Tooltip title={loggedIn ? '收藏' : '请登陆后使用'}>
        <Button shape="circle" disabled={!loggedIn}>
          <i className="far fa-bookmark"></i>
        </Button>
      </Tooltip>
    </section>
  );
}

export default PostActions;
