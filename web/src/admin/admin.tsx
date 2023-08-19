import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import './admin.scss';
import api from '../_utils/api';

export default function Admin() {
  const [postIdToDelete, setPostIdToDelete] = useState<string>('');

  const onRemoveAllPosts = async () => {
    await api.delete('posts');
    message.info('Removed all the posts');
  };

  const onRemoveAllThreads = async () => {
    await api.delete('post/threads');
    message.info('Removed all the threads');
  };

  const onRemoveAllReplies = async () => {
    await api.delete('post/replies');
    message.info('Removed all the replies');
  };

  const onRemovePost = async () => {
    await api.delete(`posts/${postIdToDelete}`);
    message.info('Post removed');
  };

  return (
    <div className="admin">
      <h1>Admin Dashboard</h1>
      <hr />
      <h2>Remove all records in selected collection</h2>
      <section>
        <Button onClick={() => onRemoveAllPosts()}>Remove all the post</Button>
        <Button onClick={() => onRemoveAllThreads()}>
          Remove all the threads
        </Button>
        <Button onClick={() => onRemoveAllReplies()}>
          Remove all the replies
        </Button>
      </section>
      <br />
      <hr />
      <h2>Remove entities</h2>
      <section>
        <div style={{ display: 'flex', gap: 4, width: '50%' }}>
          <Input
            placeholder="Post id"
            value={postIdToDelete}
            onChange={(e) => setPostIdToDelete(e.target.value)}
          />
          <Button onClick={() => onRemovePost()} disabled={!postIdToDelete}>
            Remove post
          </Button>
        </div>
      </section>
    </div>
  );
}
