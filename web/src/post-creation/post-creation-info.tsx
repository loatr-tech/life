import React from 'react';
import { CATEGORY } from '../_utils/categories';
import PostCreationTC from './post-creation-info/post-creation-tc';

function PostCreationInfo({ category, setInfos }: any) {
  switch (category) {
    case CATEGORY.CAREER.TC:
      return <PostCreationTC setInfos={setInfos} />;
    default:
      return <></>;
  }
}

export default PostCreationInfo;