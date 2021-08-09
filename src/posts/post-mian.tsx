import React from 'react';
import { Button } from 'antd';
import Editor from 'rich-markdown-editor';
import './post-main.scss';
import PostComments from './post-comments';

function PostMain({ post }: any) {
  return (
    <div className="post-main">
      {/* Header */}
      <header className="post-main__title">
        <h1>{post.title}</h1>
      </header>
      {/* Content */}
      <main className="post-main__content">
        <Editor value={post.content} readOnly={true} />
      </main>
      <p className="post-main_copyright-disclaimer">
        著作权归作者所有，未经授权禁止转载
      </p>
      {/* Interactions */}
      <section className="post-main__interactions">
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" shape="circle">
          B
        </Button>
        <Button type="primary" shape="circle">
          C
        </Button>
        <Button type="primary" shape="circle">
          D
        </Button>
      </section>
      <PostComments />
    </div>
  );
}

export default PostMain;
