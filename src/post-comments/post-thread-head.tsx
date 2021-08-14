import React, { useState } from 'react';
import { Avatar, Button } from 'antd';
import './post-thread-head.scss';
import api from '../_utils/api';
import { timeSince } from '../_utils/time';

function PostThreadHead({ thread, children }: any) {
  const [startReply, setStartReply] = useState(false);
  const [reply, setReply] = useState('');
  const [replySubmitting, setReplySubmitting] = useState(false);

  const onReply = async () => {
    setReplySubmitting(true);
    await api.post('post/reply', {
      post_id: thread.post_id,
      thread_id: thread.id,
      reply,
      user_id: 1,
    });
    setReply('');
    setStartReply(false);
    setReplySubmitting(false);
  };

  return (
    <div className="post-thread__head">
      {/* Thread head comment */}
      <div className="post-thread__head-container">
        <section className="post-thread__head-avatar">
          <Avatar>R</Avatar>
        </section>
        <section className="post-thread__head-content">
          <div className="post-thread__head-header">
            <span className="post-thread__head-header-username">
              岸上某位用户
            </span>
            <span className="post-thread__head-header-ago">
              {timeSince(thread?.createdAt)}
            </span>
          </div>
          <p className="post-thread__head-content-message">{thread?.comment}</p>
          <div className="post-thread__head-action">
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
      {startReply && (
        <div className="post-thread__reply">
          <div className="post-thread__reply-textarea-container">
            <span className="post-thread__reply-textarea-avatar">
              <Avatar>M</Avatar>
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
      )}

      {/* Others */}
      {children}
    </div>
  );
}

export default PostThreadHead;
