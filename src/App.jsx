import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, Sidebar } from './components'
import Main from './pages/Main'

const App = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen); // Toggles the click state
  };
  return (
    <BrowserRouter>
        <div className='bg-black '>
          <div className='px-5'>
            <Navbar handleClick={handleOpen}/>
          </div>
            <Routes>
                <Route path="/" exact element={<Main open={open}/>}/>
                <Route path='/video/:id' element={<VideoDetail/>}/>
                <Route path='/channel/:id' element={<ChannelDetail/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App