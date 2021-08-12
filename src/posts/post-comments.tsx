import React from 'react';
import { Comment, Avatar, Divider, Button } from 'antd';
import './post-comments.scss';

const ExampleComment = ({ children }: any) => (
  <Comment
    actions={[
      <span key="comment-nested-reply-to">
        <i className="fas fa-reply"></i> 回复
      </span>,
      <span key="comment-nested-reply-to">
        <i className="fas fa-quote-left"></i> 引用
      </span>,
    ]}
    author={<span>岸上某位用户</span>}
    avatar={<Avatar>A</Avatar>}
    content={
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

function PostComments() {
  return (
    <section className="post-comments">
      <h3>
        <i className="far fa-comments"></i> 评论区 (24)
      </h3>
      <div className="post-comments__thread">
        <div className="post-comments__thread-head">
          <ExampleComment />
        </div>
        <div className="post-comments__thread-replys">
          <ExampleComment />
          <ExampleComment />
          <ExampleComment />
          <div className="post-comments__thread-expand">展开更多回复 (12)</div>
        </div>
      </div>
      <div className="post-comments__thread">
        <div className="post-comments__thread-head">
          <ExampleComment />
        </div>
      </div>
      <div className="post-comments__thread">
        <div className="post-comments__thread-head">
          <ExampleComment />
        </div>
        <div className="post-comments__thread-replys">
          <ExampleComment />
        </div>
      </div>
      <Divider />
      <div className="post-comments__textarea-container">
        <span className="post-comments__textarea-avatar">
          <Avatar size={36}>M</Avatar>
        </span>
        <textarea
          className="post-comments__textarea"
          name="comment-textarea"
          rows={4}
        ></textarea>
      </div>
      <div className="post-comments__textarea-actions">
        <Button>留言</Button>
      </div>
    </section>
  );
}

export default PostComments;
