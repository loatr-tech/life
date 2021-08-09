import React from 'react';
import { Avatar } from 'antd';
import './post-owner.scss';
import { timeSince } from '../_utils/time';

function PostOwner({ post }: any) {
  return (
    <div className="post-owner">
      <section className="post-owner__user-info">
        <Avatar className="post-owner__avatar" size={64}>
          A
        </Avatar>
        <h3>Michael Jackson</h3>
        <div className="post-owner__ago">
          发布于 {timeSince(post.createdAt)}
        </div>
      </section>

      {/* Post stats */}
      <section className="post-owner__stats">
        <div className="post-card__stats-icon">
          <i className="far fa-eye"></i> {post.views}
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-thumbs-up"></i> {post.likes}
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-comment"></i> {post.comments}
        </div>
      </section>
    </div>
  );
}

export default PostOwner;
