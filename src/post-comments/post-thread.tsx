import React, { useState } from 'react';
import { Avatar, Button, Spin } from 'antd';
import './post-thread.scss';
import api from '../_utils/api';
import PostReply from './post-reply';
import { timeSince } from '../_utils/time';

function PostThread({ thread }: any) {
  const [viewReply, setViewReply] = useState(false);
  const [startReply, setStartReply] = useState(false);
  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState([]);
  const [totalReplies, setTotalReplies] = useState(0);
  const [fetchingReplies, setFetchingReplies] = useState(false);
  const [replySubmitting, setReplySubmitting] = useState(false);

  const onViewReply = async () => {
    if (viewReply) {
      setViewReply(false);
      setReplies([]);
    } else {
      setViewReply(true);
      setFetchingReplies(true);
      const { data } = await api.get(
        `post/${thread.post_id}/comment/${thread.id}/replies`
      );
      setFetchingReplies(false);
      setReplies(data.replies);
      setTotalReplies(data.count);
    }
  }

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
    <div className="post-thread">
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
            <div className="post-thread__head-content-message">
              {thread?.comment}
            </div>
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
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                disabled={replySubmitting}
              ></textarea>
            </div>
            <div className="post-thread__reply-textarea-actions">
              <Button
                size="small"
                type="text"
                onClick={() => setStartReply(false)}
                disabled={replySubmitting}
              >
                取消
              </Button>
              <Button
                size="small"
                onClick={() => onReply()}
                loading={replySubmitting}
              >
                回复
              </Button>
            </div>
          </div>
        )}
        {/* View reply */}
        {thread?.replies > 0 && (
          <Button
            className="post-thread__view-reply"
            type="link"
            onClick={() => onViewReply()}
          >
            <i className={`fas fa-caret-${viewReply ? 'up' : 'down'}`}></i>{' '}
            {viewReply ? '收起回复' : `查看${thread.replies}条回复`}
          </Button>
        )}
      </div>

      {/* Replys */}
      {viewReply && (
        <div className="post-thread__replys">
          {fetchingReplies && <Spin />}
          {replies.map((reply: any, index: number) => {
            return <PostReply reply={reply} key={index} isHero={reply.user_id === 2}/>;
          })}
          {!fetchingReplies && totalReplies > replies.length && (
            <Button type="link" className="post-thread__expand">
              <span className="post-thread__expand-line"></span>
              展开更多回复 ({totalReplies - replies.length})
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default PostThread;
