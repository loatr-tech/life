import React, { useContext, useState } from 'react';
import { Avatar, Button } from 'antd';
import './post-thread-head.scss';
import api from '../_utils/api';
import { timeSince } from '../_utils/time';
import { UserContext } from '../_context/user.context';
import { Link } from 'react-router-dom';

function PostThreadHead({ thread, refreshReplies, children }: any) {
  const { loggedIn, userInfo } = useContext(UserContext);
  const [startReply, setStartReply] = useState(false);
  const [reply, setReply] = useState('');
  const [replySubmitting, setReplySubmitting] = useState(false);

  const onReply = async () => {
    setReplySubmitting(true);
    await api.post('post/reply', {
      post_id: thread.post_id,
      thread_id: thread.id,
      reply,
      owner_id: userInfo.id,
    });
    setReply('');
    setStartReply(false);
    setReplySubmitting(false);
    refreshReplies();
  };

  return (
    <div className="post-thread__head">
      {/* Thread head comment */}
      <div className="post-thread__head-container">
        <section className="post-thread__head-avatar">
          <Avatar src={thread?.owner?.avatar_url}/>
        </section>
        <section className="post-thread__head-content">
          <div className="post-thread__head-header">
            <span className="post-thread__head-header-username">
              {thread?.owner?.name}
            </span>
            <span className="post-thread__head-header-ago">
              {timeSince(thread?.createdAt)}
            </span>
          </div>
          <p className="post-thread__head-content-message">{thread?.comment}</p>
          <div className="post-thread__head-action">
            <span className="post-card__head-interaction">
              <i className="far fa-thumbs-up"></i> 123
            </span>
            <span className="post-card__head-interaction">
              <i className="far fa-thumbs-down"></i> 45
            </span>
            <Button
              size="small"
              type="text"
              onClick={() => setStartReply(!startReply)}
              disabled={replySubmitting}
            >
              回复
            </Button>
          </div>
        </section>
      </div>
      {startReply &&
        (loggedIn ? (
          <div className="post-thread__reply">
            <div className="post-thread__reply-textarea-container">
              <span className="post-thread__reply-textarea-avatar">
                <Avatar src={userInfo?.avatar_url} />
              </span>
              <textarea
                className="post-thread__reply-textarea"
                name="comment-textarea"
                rows={2}
                placeholder="说点什么..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                disabled={replySubmitting}
              ></textarea>
            </div>
            <div className="post-thread__reply-textarea-actions">
              <Button
                size="small"
                onClick={() => onReply()}
                loading={replySubmitting}
              >
                回复
              </Button>
              <Button
                size="small"
                type="text"
                onClick={() => setStartReply(false)}
                disabled={replySubmitting}
              >
                取消
              </Button>
            </div>
          </div>
        ) : (
          <div className="post-thread__reply-login">
            <p>登录后即可回复</p>
            <Link to="/login">
              <Button type="primary">
                <i className="fas fa-sign-in-alt"></i> 登录
              </Button>
            </Link>
          </div>
        ))}

      {/* Others */}
      {children}
    </div>
  );
}

export default PostThreadHead;
