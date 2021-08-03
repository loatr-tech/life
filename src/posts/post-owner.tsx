import React from 'react';
import { Avatar } from 'antd';

import './post-owner.scss';

function PostOwner() {
  return (
    <div className="post-owner">
      <section className="post-owner__user-info">
        <Avatar className="post-owner__avatar" size={64}>
          A
        </Avatar>
        <h3>Michael Jackson</h3>
        <div className="post-owner__ago">发布于 1 小时前</div>
      </section>

      {/* Post stats */}
      <section className="post-owner__stats">
        <div className="post-card__stats-icon">
          <i className="far fa-eye"></i> 100k
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-thumbs-up"></i> 123
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-comment"></i> 1.2k
        </div>
      </section>
    </div>
  );
}

export default PostOwner;
