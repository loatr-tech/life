import React from 'react';
import { Button, message } from 'antd';
import './admin.scss';
import api from '../_utils/api';

function Admin() {
  const onRemoveAllPosts = async () => {
    await api.delete('posts');
    message.info('Removed all the posts');
  }

  const onRemoveAllThreads = async () => {
    await api.delete('post/threads');
    message.info('Removed all the threads');
  };

  const onRemoveAllReplies = async () => {
    await api.delete('post/replies');
    message.info('Removed all the replies');
  };

  return (
    <div className="admin">
      <h1>Admin Dashboard</h1>
      <hr />
      <h2>Remove all records in selected collection</h2>
      <section>
        <Button onClick={() => onRemoveAllPosts()}>Remove all the post</Button>
        <Button onClick={() => onRemoveAllThreads()}>Remove all the threads</Button>
        <Button onClick={() => onRemoveAllReplies()}>Remove all the replies</Button>
      </section>
    </div>
  );
}

export default Admin;
