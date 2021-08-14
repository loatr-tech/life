import React from 'react';
import { Button } from 'antd';
import Editor from 'rich-markdown-editor';
import './post-main.scss';
import PostComments from '../post-comments/post-comments';

function PostMain({ post, fetching }: any) {
  return (
    <div className="post-main">
      {/* Header */}
      <header className="post-main__title">
        <h1
          className={`post-main__title-text ${
            fetching ? 'post-mian__placeholder loading-placeholder' : ''
          }`}
        >
          {post.title}
        </h1>
      </header>
      {/* Content */}
      <main className="post-main__content">
        {fetching ? (
          <div className="post-main__content-placeholder">
            <div className="loading-placeholder"></div>
            <div className="loading-placeholder"></div>
            <div className="loading-placeholder"></div>
          </div>
        ) : (
          <Editor value={post.content} readOnly={true} />
        )}
      </main>
      <p className="post-main_copyright-disclaimer">
        著作权归作者所有，未经授权禁止转载
      </p>
      {/* Interactions */}
      {!fetching && (
        <>
          <section className="post-main__interactions">
            <Button type="primary" shape="circle">
              <i className="far fa-thumbs-up"></i>
            </Button>
            <Button type="primary" shape="circle">
              <i className="far fa-star"></i>
            </Button>
            <Button type="primary" shape="circle">
              <i className="fas fa-share-alt"></i>
            </Button>
            <Button type="primary" shape="circle">
              <i className="far fa-bookmark"></i>
            </Button>
          </section>
          <PostComments post={post} />
        </>
      )}
    </div>
  );
}

export default PostMain;
