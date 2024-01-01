import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, Sidebar } from './components'

const App = () => {
  return (
    <BrowserRouter>
        <div className='bg-black px-5'>
          <div >
            <Navbar/>
            <Sidebar />
          </div>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path='/video/:id' element={<VideoDetail/>}/>
                <Route path='/channel/:id' element={<ChannelDetail/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App