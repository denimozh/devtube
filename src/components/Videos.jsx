import React from 'react'
import {VideoCard, ChannelCard} from "./"

const Videos = ({videos}) => {
  return (
    <div className='grid grid-cols-3 gap-4 justify-start'>
        {videos.map((item, idx) => (
          <div key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard ChannelDetail={item}/>}
          </div>
        ))}
    </div>
  )
}

export default Videos