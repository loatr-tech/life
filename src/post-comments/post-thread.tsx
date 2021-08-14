import React, { useState } from 'react';
import { Button } from 'antd';
import './post-thread.scss';
import api from '../_utils/api';
import PostReply from './post-reply';
import LoadingSpinner from '../_shared/loading-spinner';
import PostThreadHead from './post-thread-head';

const REPLIES_LIMIT = 10;

function PostThread({ thread }: any) {
  const [viewReply, setViewReply] = useState(false);
  const [replies, setReplies] = useState([]);
  const [repliesPage, setRepliesPage] = useState(1);
  const [totalReplies, setTotalReplies] = useState(thread?.replies || 0);
  const [fetchingReplies, setFetchingReplies] = useState(false);
  const [fetchingMoreReplies, setFetchingMoreReplies] = useState(false);

  const _loadReplies = async (page: number) =>{
    const { data } = await api.get(
      `post/${thread.post_id}/comment/${thread.id}/replies`,
      {
        params: { page, limit: REPLIES_LIMIT },
      }
    );
    return data;
  }

  const onViewReply = async () => {
    if (viewReply) {
      setViewReply(false);
      setReplies([]);
      setRepliesPage(1);
    } else {
      setViewReply(true);
      setFetchingReplies(true);
      const data = await _loadReplies(repliesPage);
      setFetchingReplies(false);
      setReplies(data.replies);
      setTotalReplies(data.count);
    }
  }

  const refreshReplies = async () => {
    const data = await _loadReplies(1);
    setRepliesPage(1);
    setReplies(data.replies);
    setTotalReplies(data.count);
  }

  const loadMoreReplies = async () => {
    setFetchingMoreReplies(true);
    const nextRepliesPage = repliesPage + 1;
    const data = await _loadReplies(nextRepliesPage);
    setRepliesPage(nextRepliesPage);
    setReplies(replies.concat(data.replies));
    setTotalReplies(data.count);
    setFetchingMoreReplies(false);
  }

  return (
    <div className="post-thread">
      <PostThreadHead thread={thread} refreshReplies={refreshReplies}>
        {/* View reply */}
        {totalReplies > 0 && (
          <Button
            className="post-thread__view-reply"
            type="link"
            onClick={() => onViewReply()}
          >
            <i className={`fas fa-caret-${viewReply ? 'up' : 'down'}`}></i>{' '}
            {viewReply ? '收起回复' : `查看${totalReplies}条回复`}
          </Button>
        )}
      </PostThreadHead>

      {/* Replys */}
      {viewReply && (
        <div className="post-thread__replys">
          {fetchingReplies && (
            <div className="post-thread__replys-loading">
              <LoadingSpinner />
            </div>
          )}
          {replies.map((reply: any) => {
            return (
              <PostReply
                reply={reply}
                key={reply.id}
                isHero={reply.user_id === 2}
              />
            );
          })}
          {!fetchingReplies && totalReplies > replies.length && (
            <Button
              type="link"
              className="post-thread__expand"
              onClick={() => loadMoreReplies()}
              loading={fetchingMoreReplies}
            >
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
