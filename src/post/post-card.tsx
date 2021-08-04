import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

import './post-card.scss';


function PostCard() {
  return (
    <div className="post-card">
      <section className="post-card__stats">
        <Avatar className="post-card__stats-avatar">U</Avatar>
        <div className="post-card__stats-username">
          <div>Michael Jackson</div>
          <div className="post-card__stats-ago">1 小时前</div>
        </div>
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
      <hr className="post-card__divider" />
      <Link to={`/post/${123}`} className="post-card__details">
        <h3 className="post-card__details-title">Title</h3>
        <p className="post-card__details-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nemo
          mollitia repellendus, laudantium unde, vel iste tempora eum nihil
          aperiam aliquid? Deleniti cum beatae iste sapiente molestias ullam
          consequatur alias.
        </p>
      </Link>
    </div>
  );
}

export default PostCard;
