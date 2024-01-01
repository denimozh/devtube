import {useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { categories } from '../utils/constants';

import { grey } from '@mui/material/colors';

const IsOpened = () => {
  return (
    <div className='h-screen w-12 m-0 flex flex-col text-white'>
          {categories.slice(0, 5).map((category) => (
            <SidebarIcon icon={category.icon}/>
          ))}
    </div>
  )
}

const NotOpened = () => {
  return (
    <div className='h-screen w-36 m-0 flex flex-col gap-4 text-white justify-self-start '>
          {categories.map((category) => (
            <button className='py-2 pl-3 bg-black flex gap-5 items-center text-red-500 hover:bg-red-500 hover:text-white rounded-full' key={category.name}>
              <span className=' '>{category.icon}</span>
              <span className='text-white'>{category.name}</span>
            </button>
          ))}
    </div>
  )
}

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open
      ?<NotOpened/>
      :<IsOpened />}
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