import React, { useEffect, useState } from 'react'

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../../hooks/useVideos'

const Video = () => {
  const [videos, search] = useVideos("black pink");
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  const onVideoSelect = video => setSelectedVideo(video)

  return (
    <div className="ui container">
      <SearchBar onSearchTermSubmit={search} />
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
