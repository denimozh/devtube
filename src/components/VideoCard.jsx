import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoChannelTitle, demoVideoUrl, demoVideoTitle } from '../utils/constants'

const VideoCard = ({ video: {id: {videoId}, snippet}}) => {
    console.log(snippet)
  return (
        <div className='grid grid-cols-1 bg-black rounded-xl width-[358px] border-0'>
            <div className='rounded-md width-[358px] height-[180px]'>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} className=''/>
                </Link>
            </div>
            <div className='h-[130px] p-4'>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <p className='font-medium text-lg text-white'>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</p>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <p className='font-medium text-md text-gray-600'>{snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}}/></p>
                </Link>
            </div>
        </div>
  )
}

export default VideoCard