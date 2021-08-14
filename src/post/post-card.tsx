import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

import './post-card.scss';
import { timeSince } from '../_utils/time';
import { displayCount } from '../_utils/number';


function PostCard({ post }: any) {
  return (
    <div className="post-card">
      <section className="post-card__stats">
        <Avatar className="post-card__stats-avatar">U</Avatar>
        <div className="post-card__stats-username">
          <div>{post?.owner?.name}</div>
          <div className="post-card__stats-ago">
            {timeSince(post?.createdAt)}
          </div>
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-eye"></i> {displayCount(post?.views)}
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-thumbs-up"></i> {displayCount(post?.likes)}
        </div>
        <div className="post-card__stats-icon">
          <i className="far fa-comment"></i> {displayCount(post?.comments)}
        </div>
      </section>
      <hr className="post-card__divider" />
      <Link to={`/post/${post.id}`} className="post-card__details">
        <h3 className="post-card__details-title">{post.title}</h3>
        <p className="post-card__details-content">
          {post.content ||
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nemo mollitia repellendus, laudantium unde, vel iste tempora eum nihil aperiam aliquid? Deleniti cum beatae iste sapiente molestias ullam consequatur alias.'}
        </p>
      </Link>
    </div>
  );
}

export default PostCard;
