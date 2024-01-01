import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoChannelTitle, demoVideoUrl, demoVideoTitle } from '../utils/constants'

const VideoCard = ({ video: {id: {videoId}, snippet}}) => {
  return (
        <div className='w-[500px]'>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} className='object-fill h-[360px]'/>
            </Link>
            <div className='h-[106px] bg-slate-800'>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <p className='font-medium text-lg'>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</p>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <p className='font-medium text-md'>{snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}}/></p>
                </Link>
            </div>
        </div>
  )
}

export default VideoCard