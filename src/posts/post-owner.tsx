import React from 'react';
import { Avatar } from 'antd';
import './post-owner.scss';
import { timeSince } from '../_utils/time';
import { displayCount } from '../_utils/number';

function PostOwner({ post, fetching }: any) {
  return (
    <div className="post-owner">
      <section className="post-owner__user-info">
        <Avatar
          className={`post-owner__avatar ${
            fetching ? 'loading-placeholder' : ''
          }`}
          size={64}
          src={post?.owner?.avatar_url}
        >
          {post?.owner?.name[0]}
        </Avatar>
        <h3>{post?.owner?.name}</h3>
        <div
          className={`post-owner__ago ${
            fetching ? 'post-owner__ago-loading loading-placeholder' : ''
          }`}
        >
          {post?.createdAt ? `发布于 ${timeSince(post.createdAt)}` : ''}
        </div>
      </section>

      {/* Post stats */}
      <section className="post-owner__stats">
        <div className="post-card__stats-icon">
          <i className="far fa-eye"></i> {displayCount(post.views)}
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-thumbs-up"></i> {displayCount(post.likes)}
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-comment"></i> {displayCount(post.comments)}
        </div>
      </section>
    </div>
  );
}

export default PostOwner;
