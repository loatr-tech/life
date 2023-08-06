import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

import './post-card.scss';
import { timeSince } from '../_utils/time';
import { displayCount } from '../_utils/number';
import { CATEGORIES_MAP } from '../_utils/categories';

function PostCard({ post }: any) {
  return (
    <Link to={`/post/${post.id}`} className="post-card__details">
      <div className="post-card">
        <section className="post-card__stats">
          <Avatar
            className="post-card__stats-avatar"
            src={post?.owner?.avatar_url}
          />
          <div className="post-card__stats-username">
            <div style={{ color: 'black' }}>{post?.owner?.name}</div>
            <div className="post-card__stats-ago">
              {timeSince(post?.createdAt)}
            </div>
          </div>
          <div className="post-card__stats-icon">
            <i className="far fa-eye"></i>{' '}
            {displayCount(post?.interactions?.views)}
          </div>
          <div className="post-card__stats-icon">
            <i className="far fa-thumbs-up"></i>{' '}
            {displayCount(post?.interactions?.vlikes)}
          </div>
          <div className="post-card__stats-icon">
            <i className="far fa-comment"></i>{' '}
            {displayCount(post?.interactions?.vcomments)}
          </div>
        </section>
        <hr className="post-card__divider" />

        <div className="post-card__details-title-container">
          <h3 className="post-card__details-title">{post.title}</h3>
          <span className="post-card__details-category">
            {CATEGORIES_MAP[post.category] || '未知分类'}
          </span>
        </div>
        <p className="post-card__details-content">
          {post.content ||
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nemo mollitia repellendus, laudantium unde, vel iste tempora eum nihil aperiam aliquid? Deleniti cum beatae iste sapiente molestias ullam consequatur alias.'}
        </p>
      </div>
    </Link>
  );
}

export default PostCard;
