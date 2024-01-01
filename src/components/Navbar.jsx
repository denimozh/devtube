import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { grey } from '@mui/material/colors';

const Navbar = ({ handleClick }) => {
  return (
    <div className='flex flex-row justify-between items-center pt-4 pb-2'>
      <div className='flex gap-8 items-center'>
        <div className='px-3 py-2 sidebar-icon'>
          <MenuIcon sx={{ color: grey[50], fontSize: 30 }} onClick={handleClick}/>
        </div>
        <Link to={"/"}>
          <p className='text-2xl text-white font-medium tracking-wide'><b className='text-red-500 pl-2'>DEV</b>TUBE</p>
        </Link>
      </div>
      <div className='w-4/12'>
        <SearchBar />
      </div>
      <Link>
        <div className='flex flex-row items-center border-2 rounded-full px-2 py-1'>
          <PersonIcon sx={{ color: grey[50], fontSize: 25}}/>
          <p className='text-xl text-white font-medium tracking-wide pr-1 pb-1'>Log In</p>
        </div>
      </Link>
    </div>
  )
}

export default Navbar