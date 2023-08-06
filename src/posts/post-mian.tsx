import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import './post-main.scss';
import PostComments from '../post-comments/post-comments';
import PostActions from './post-actions';
import PostInfo from './post-info';

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
      {post?.infos && <PostInfo category={post.category} infos={post.infos} />}
      {/* Content */}
      <main className="post-main__content" data-color-mode="light">
        {fetching ? (
          <div className="post-main__content-placeholder">
            <div className="loading-placeholder"></div>
            <div className="loading-placeholder"></div>
            <div className="loading-placeholder"></div>
          </div>
        ) : (
          <MDEditor.Markdown
            source={post.content}
            style={{ whiteSpace: 'pre-wrap' }}
          />
        )}
      </main>
      <p className="post-main_copyright-disclaimer">
        著作权归作者所有，未经授权禁止转载
      </p>
      {/* Interactions */}
      {!fetching && (
        <>
          <PostActions post={post} />
          <PostComments post={post} />
        </>
      )}
    </div>
  );
}

export default PostMain;
