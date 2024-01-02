import {useState, useEffect } from 'react'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState('');
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm]);

  console.log(searchTerm);
  console.log(videos);

  return (
    <div className='pt-1 pl-10 max-w-full'>
      <div className='mb-2 text-5xl font-medium'>
        <p className='text-white'>Search Results For <span className='text-red-500 text-5xl'>{searchTerm}</span> videos</p>
      </div>
      <div className='w-full'>
        <Videos videos={videos}/>
      </div>
    </div>
  )
}

export default SearchFeed