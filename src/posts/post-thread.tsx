import React, { useState } from 'react';
import { Comment, Avatar, Button, Spin } from 'antd';
import './post-thread.scss';
import api from '../_utils/api';

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
        <Comment
          actions={[
            <span
              key="comment-action-reply-to"
              onClick={() => setStartReply(!startReply)}
            >
              回复
            </span>,
          ]}
          author={<span>岸上某位用户</span>}
          avatar={<Avatar>A</Avatar>}
          content={<p>{thread?.comment}</p>}
        />
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
          <div className="post-thread__view-reply">
            <Button type="link" onClick={() => onViewReply()}>
              <i className={`fas fa-caret-${viewReply ? 'up' : 'down'}`}></i>{' '}
              {viewReply ? '收起回复' : `查看${thread.replies}条回复`}
            </Button>
          </div>
        )}
      </div>

      {/* Replys */}
      {viewReply && (
        <div className="post-thread__replys">
          {fetchingReplies && <Spin />}
          {replies.map((reply: any, index: number) => {
            return (
              <Comment
                key={index}
                actions={[
                  <span key="comment-action-quote">
                    引用
                  </span>,
                ]}
                author={<span>岸上某位用户</span>}
                avatar={<Avatar>R</Avatar>}
                content={<p>{reply?.reply}</p>}
              />
            );
          })}
          {totalReplies > replies.length && (
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
