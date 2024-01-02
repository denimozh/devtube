import {useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { categories } from '../utils/constants';
import { grey } from '@mui/material/colors';
const selectedCatergory = 'New';

const IsOpened = ({selectedCatergory, setSelectedCatergory}) => {
  return (
    <div className='h-screen w-12 m-0 flex flex-col text-white'>
          {categories.slice(0, 5).map((category) => (
            <button onClick={() => setSelectedCatergory(category.name)}>
              <SidebarIcon icon={category.icon} />
            </button>
          ))}
    </div>
  )
}

const NotOpened = ({selectedCatergory, setSelectedCatergory}) => {
  return (
    <div className='h-screen w-36 m-0 flex flex-col gap-4 text-white justify-self-start pt-1'>
          {categories.map((category) => (
            <button className='py-3 pl-3 bg-black flex gap-5 items-center text-red-500 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 ease-linear focus:bg-red-500 focus:text-white' key={category.name}
            onClick={() => setSelectedCatergory(category.name)}>
              <span className=''>{category.icon}</span>
              <span className='text-white'>{category.name}</span>
            </button>
          ))}
    </div>
  )
}

const Sidebar = ({ open, selectedCatergory, setSelectedCatergory }) => {
  return (
    <div>
      {open
      ?<NotOpened selectedCatergory={selectedCatergory} setSelectedCatergory={setSelectedCatergory}/>
      :<IsOpened selectedCatergory={selectedCatergory} setSelectedCatergory={setSelectedCatergory}/>}
    </div>
  )
};

const SidebarIcon = ({icon}) => {
    return (
        <div className='sidebar-icon'>
            {icon}
        </div>
    )
}


export default Sidebar