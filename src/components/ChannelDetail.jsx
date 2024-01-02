import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  console.log(channelDetail)
  console.log(videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id])

  return (
    <div className='min-h-[95vh] pt-5'>
      <div className='relative pb-52'>
        <div className='h-[300px] bg-gradient-to-r from-red-600 to-red-200'></div>
        <div className='absolute inset-0 top-48 '>
          <ChannelCard channelDetail={channelDetail} padding={0}/>
        </div>
      </div>
      <div className='flex p-2'>
        <div className='px-5'>
          <Videos videos={videos}/>
        </div>
      </div>
    </div>
  )
}

export default ChannelDetail