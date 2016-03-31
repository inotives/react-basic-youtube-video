import React,{Component} from 'react';
import VideoListItem from './VideoListItem.jsx';

const VideoList = (props) => {
  const videoItems = props.videos.map( (video) => {
    return <VideoListItem video={video} key={video.etag}/>
  } );

  return (
    <div>
      <hr />
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    </div>

  );
}

export default VideoList;
