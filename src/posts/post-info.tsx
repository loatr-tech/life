import React from 'react';
import { CATEGORY } from '../_utils/categories';
import PostInfoTC from './post-info/post-info-tc';

function PostInfo({ category, infos }: any) {
  switch (category) {
    case CATEGORY.CAREER.TC:
      return <PostInfoTC infos={infos} />;
    default:
      return <></>;
  }
}

export default PostInfo;
