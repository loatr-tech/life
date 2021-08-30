import React from 'react';
import { CATEGORY } from '../_utils/categories';
import PostCreationTC from './post-creation-info/post-creation-tc';

function PostCreationInfo({ category }: any) {
  switch(category) {
    case CATEGORY.CAREER.TC:
      return <PostCreationTC />
    default:
      return <></>;
  }
}

export default PostCreationInfo;