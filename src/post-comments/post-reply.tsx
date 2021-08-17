import React from 'react';
import { Avatar } from 'antd';
import './post-reply.scss';
import { timeSince } from '../_utils/time';

function PostReply({ isHero, reply }: any) {

  return (
    <div className={`post-reply ${isHero ? 'post-reply--hero' : ''}`}>
      <section className="post-reply__avatar">
        <Avatar src={reply.owner?.avatar_url} />
      </section>
      <section className="post-reply__content">
        <div className="post-reply__header">
          <span className="post-reply__header-username">
            {reply.owner?.name}
          </span>
          <span className="post-reply__header-ago">
            {timeSince(reply?.createdAt)}
          </span>
        </div>
        <div className="post-reply__content-message">
          {reply?.reply ||
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque animi dicta natus pariatur sequi distinctio iste debitis? Veritatis, architecto placeat, aliquid enim perferendis ad quidem ipsum doloribus minus voluptatibus provident.'}
        </div>
      </section>
    </div>
  );
}

export default PostReply;
