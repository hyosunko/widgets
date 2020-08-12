import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content item">
        <div
          className="header"
          dangerouslySetInnerHTML={{ __html: video.snippet.title }}
        ></div>
      </div>
    </div>
  );
};

export default VideoItem
