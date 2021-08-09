import React from 'react';
import { Avatar } from 'antd';

import './post-card.scss';

function PostCardPlaceholder() {
  return (
    <div className="post-card">
      <section className="post-card__stats">
        <Avatar className="post-card__stats-avatar"></Avatar>
        <div className="post-card__stats-username">
          <div></div>
          <div className="post-card__stats-ago"></div>
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-eye"></i>
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-thumbs-up"></i>
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-comment"></i>
        </div>
      </section>
      <hr className="post-card__divider" />
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h3 className="post-card__details-title post-card-placeholder"></h3>
      <p className="post-card__details-content post-card-placeholder"></p>
    </div>
  );
}

export default PostCardPlaceholder;
