import {useState} from 'react'
import { Feed, Sidebar } from '../components'


const Main = ({open}) => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  return (
    <div className='flex pt-3 max-w-full px-5'>
      <Sidebar open={open} selectedCategory={selectedCategory} setSelectedCatergory={setSelectedCategory}/>
      <Feed selectedCategory={selectedCategory}/>
    </div>
  )
}

export default Main