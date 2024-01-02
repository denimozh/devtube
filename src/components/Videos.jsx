import React from 'react'
import {VideoCard, ChannelCard} from "./"

const Videos = ({videos}) => {
  return (
    <div className='flex-1 mx-auto'>
      <div className='grid grid-cols-1 sm:gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4 justify-start'>
          {videos.map((item, idx) => (
            <div key={idx}>
              {item.id.videoId && <VideoCard video={item}/>}
              {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Videos