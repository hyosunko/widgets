import React, { useEffect, useState } from 'react'

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../../apis/youtube'

const Video = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    onSearchTermSubmit('black pink')

  },[])

  const onSearchTermSubmit = async searchTerm => {
    const res = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  }

  const onVideoSelect = video => setSelectedVideo(video)

  return (
    <div className="ui container">
      <SearchBar onSearchTermSubmit={onSearchTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video
