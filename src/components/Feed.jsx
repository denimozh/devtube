import {useState, useEffect } from 'react'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = ({selectedCategory}) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory])
  return (
    <div className='pt-1 pl-10 max-w-full'>
      <div className='mb-2 text-5xl font-medium'>
        <p className='text-white'>{selectedCategory} <span className='text-red-500 text-5xl'>Videos</span></p>
      </div>
      <div className='w-full'>
        <Videos videos={videos}/>
      </div>
    </div>
  )
}

export default Feed