import React, { useState } from 'react';
import './user-avatar.scss';

import { Button, Avatar, Modal, Input } from 'antd';
import api from '../_utils/api';

function UserAvatar({ userInfo, onEdited }: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [avatarLink, setAvatarLink] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const onConfirmEdit = async () => {
    setIsUpdating(true);
    await api.patch('user', { avatar_url: avatarLink });
    setIsUpdating(false);
    setIsModalVisible(false);
    onEdited();
  }

  const handleCancel = () => {
    if (!isUpdating) setIsModalVisible(false);
  }

  return (
    <div className="user-avatar">
      <Avatar src={userInfo?.avatar_url} size={120} />
      <Button
        className="user-avatar__edit"
        shape="circle"
        onClick={() => setIsModalVisible(true)}
      >
        <i className="fas fa-pen"></i>
      </Button>
      <Modal
        title="修改用户头像"
        visible={isModalVisible}
        okText="确认修改"
        cancelText="取消"
        onOk={onConfirmEdit}
        confirmLoading={isUpdating}
        onCancel={handleCancel}
      >
        <p>请输入新头像链接地址:</p>
        <Input
          placeholder="https://www.example.com/my-new-avatar.png"
          value={avatarLink}
          onChange={(e) => setAvatarLink(e.currentTarget.value)}
        />
        {avatarLink && (
          <div className="user-avatar__preview">
            <p>预览:</p>
            <Avatar src={avatarLink} size={120}>
              无法显示
            </Avatar>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default UserAvatar;
