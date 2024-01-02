import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { red } from '@mui/material/colors';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  console.log(searchTerm);

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
  
  return (
    <div >
          <form className='flex bg-white rounded-full items-center w-full h-12 ' onSubmit={onhandleSubmit}>
              <input placeholder='Search...' class="search-bar" className='outline-none w-full h-12 pl-4 rounded-full' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <div className=''>
                  <button type='submit' className='h-12 w-16 rounded-r-full hover:bg-gray-100' >
                      <SearchIcon sx={{fontSize: 28, color:red[300]}}/>
                  </button>
              </div>
          </form>
    </div>
  )
}

export default SearchBar