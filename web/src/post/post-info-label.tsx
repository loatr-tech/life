import React from 'react';
import './post-info-label.scss';
import { MetadataLabel } from '../_utils/post-infos';

export default function PostInfoLabel({
  metadataLabel,
}: {
  metadataLabel: MetadataLabel;
}) {
  return (
    <div className="post-info-label">
      <h4>{metadataLabel?.name}</h4>
      <small style={{ color: 'darkgrey', fontWeight: 300 }}>
        ({metadataLabel?.engName})
      </small>
    </div>
  );
}
