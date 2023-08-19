import React, { useContext, useState } from 'react';
import { Button, Input, InputNumber, message } from 'antd';
import './admin.scss';
import api from '../_utils/api';
import { UserContext } from '../_context/user.context';
import { generatePosts } from './admin-posts';

export default function Admin() {
  const { userInfo } = useContext(UserContext);
  const [postIdToDelete, setPostIdToDelete] = useState<string>('');
  const [postCountToCreate, setPostCountToCreate] = useState<number>(0);

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

  const onAddPost = async () => {
    const posts = generatePosts(postCountToCreate);
    await api.post('posts', {
      posts,
      owner_id: userInfo.id,
    });
    message.info(`${postCountToCreate} posts created`);
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
      <br />
      <hr />
      <h2>Create entities</h2>
      <section>
        <div style={{ display: 'flex', gap: 4, width: '50%' }}>
          <InputNumber
            placeholder="Post id"
            value={postCountToCreate}
            onChange={(count) => setPostCountToCreate(count ?? 0)}
          />
          <Button onClick={onAddPost} disabled={postCountToCreate <= 0}>
            Add posts
          </Button>
        </div>
      </section>
    </div>
  );
}
