import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { red } from '@mui/material/colors';


const SearchBar = () => {
  return (
    <div >
        <div className='flex bg-white rounded-full items-center w-full h-12'>
            <input className='outline-none w-full h-12 pl-4 rounded-full'></input>
            <div className=''>
                <button className='h-12 w-16 rounded-r-full hover:bg-gray-100'>
                    <SearchIcon sx={{fontSize: 28, color:red[300]}}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SearchBar