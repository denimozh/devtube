import React from 'react'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail }) => {
  return (
    <div className=' bg-black width-[358px] border-0 rounded-[20px] flex content-center items-center justify-center'>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className=' text-center text-white align-middle flex flex-col items-center justify-center pt-12'>
          <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title}
          className='rounded-full md:h-[250px] md:w-[250px] sm:w-[100px] sm:h-[100px]'/>
          <p className='font-medium text-xl pt-8'>{channelDetail?.snippet?.title}<CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px'}}/></p>
          {channelDetail?.statistics?.subscriberCount && (
            <p>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers</p>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ChannelCard