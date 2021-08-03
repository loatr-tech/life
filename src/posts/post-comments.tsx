import React from 'react';
import { Comment, Avatar } from 'antd';
import './post-comments.scss';

const ExampleComment = ({ children }: any) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<span>Han Solo</span>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
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
      <ExampleComment>
        <ExampleComment />
        <ExampleComment />
      </ExampleComment>
      <ExampleComment>
        <ExampleComment />
        <ExampleComment />
      </ExampleComment>
    </section>
  );
}

export default PostComments;
