import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Divider, Button, Pagination } from 'antd';
import './post-comments.scss';
import api from '../_utils/api';
import PostThread from './post-thread';
import { UserContext } from '../_context/user.context';
import { Link } from 'react-router-dom';

const THREAD_LIMIT = 10;

function PostComments({ post }: any) {
  const { loggedIn, userInfo } = useContext(UserContext);
  const [threads, setThreads] = useState([]);
  const [comment, setComment] = useState('');
  const [threadCount, setThreadCount] = useState(0);
  const [commentSubmitting, setCommentSubmitting] = useState(false);

  async function _loadComments(currentPost: any, page = 1) {
    const { data } = await api.get(`post/${currentPost.id}/threads`, {
      params: {
        page,
        limit: THREAD_LIMIT,
      },
    });
    setThreads(data.threads);
    setThreadCount(data.count);
  }

  useEffect(() => {
    if (post?.id) {
      _loadComments(post);
    }
  }, [post])

  const onPageChange = (page: number) => {
    _loadComments(post, page);
  }

  const onComment = async () => {
    setCommentSubmitting(true);
    await api.post('post/thread', {
      post_id: post.id,
      comment,
      owner_id: userInfo.id,
    });
    setComment('');
    setCommentSubmitting(false);
    _loadComments(post);
  }

  return (
    <section className="post-comments">
      {threads?.length > 0 && (
        <>
          <h3>
            <i className="far fa-comments"></i> 评论区 ({post.interactions?.comments})
          </h3>
          {threads.map((thread: any) => (
            <PostThread thread={thread} key={thread.id} />
          ))}
          <Pagination
            className="post-comments__pagination"
            size="small"
            defaultCurrent={1}
            pageSize={THREAD_LIMIT}
            onChange={onPageChange}
            showSizeChanger={false}
            total={threadCount}
          />
        </>
      )}
      <Divider />
      {loggedIn ? (
        <>
          <div className="post-comments__textarea-container">
            <span className="post-comments__textarea-avatar">
              <Avatar size={36} src={userInfo?.avatar_url} />
            </span>
            <textarea
              className="post-comments__textarea"
              name="comment-textarea"
              placeholder="说点啥儿..."
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              disabled={commentSubmitting}
            ></textarea>
          </div>
          <div className="post-comments__textarea-actions">
            <Button onClick={() => onComment()} loading={commentSubmitting}>
              留言
            </Button>
          </div>
        </>
      ) : (
        <div className="post-comments__textarea-login">
          <p>登录后即可留言</p>
          <Link to="/login">
            <Button type="primary">
              <i className="fas fa-sign-in-alt"></i> 登录
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default PostComments;
