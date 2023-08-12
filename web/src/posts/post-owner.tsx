import React from 'react';
import { Avatar } from 'antd';
import './post-owner.scss';
import { timeSince } from '../_utils/time';
import { displayCount } from '../_utils/number';

function PostOwner({ post, fetching }: any) {
  return (
    <div className="post-owner">
      <section className="post-owner__avatar">
        <Avatar
          className={fetching ? 'loading-placeholder' : ''}
          size={64}
          src={post?.owner?.avatar_url}
        >
          {post?.owner?.name[0]}
        </Avatar>
      </section>

      <section className="post-owner__user-info">
        <h3>{post?.owner?.name}</h3>
        <span
          className={`post-owner__ago ${
            fetching ? 'post-owner__ago-loading loading-placeholder' : ''
          }`}
        >
          {post?.createdAt ? `发布于 ${timeSince(post.createdAt)}` : ''}
        </span>
      </section>

      {/* Post stats */}
      <section className="post-owner__stats">
        <div className="post-card__stats-icon">
          <i className="far fa-eye"></i>{' '}
          {displayCount(post?.interactions?.views)}
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-thumbs-up"></i>{' '}
          {displayCount(post?.interactions?.likes)}
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-comment"></i>{' '}
          {displayCount(post?.interactions?.comments)}
        </div>
      </section>
    </div>
  );
}

export default PostOwner;
