import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

import './post-card.scss';
import { displayCount } from '../_utils/number';
import { CATEGORIES_MAP, CATEGORY } from '../_utils/categories';

function PostCard({ post }: any) {
  return (
    <Link to={`/post/${post.id}`} className="post-card__details">
      <div className="post-card">
        {/* Header */}
        <div className="post-card__header">
          <h3 className="post-card__title">{post.title}</h3>
          <span className="post-card__category">
            {CATEGORIES_MAP[post.category] || '未知分类'}
          </span>
        </div>

        {/* Content */}
        <p className="post-card__content">
          {post.category === CATEGORY.CAREER.TC
            ? new Array(3).fill(
                <i className="fas fa-dollar-sign" style={{ marginRight: 1 }} />
              )
            : post.content ||
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nemo mollitia repellendus, laudantium unde, vel iste tempora eum nihil aperiam aliquid? Deleniti cum beatae iste sapiente molestias ullam consequatur alias.'}
        </p>

        <hr className="post-card__divider" />

        {/* Card footer */}
        <div className="post-card__footer">
          <section className="post-card__stats">
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

          <section className="post-card__author">
            <Avatar
              className="post-card__author-avatar"
              src={post?.owner?.avatar_url}
              size={16}
            />
            <span className="post-card__author-username">
              {post?.owner?.name}
            </span>
          </section>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
