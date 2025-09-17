import { NavLink } from 'react-router-dom'
import {Home,PlusIcon,List,Text} from 'lucide-react'


const Sidebar = () => {
  return (
    <div className=' flex flex-col border-r border-gray-200 min-h-full pt-6'>

      <NavLink end={true} to='/admin' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <Home alt="home" className="w-5 h-5 invert brightness-0 sepia hue-rotate-180 saturate-200" />

        <p className='hidden md:inline-block'>Dashboard</p>
      </NavLink>

      <NavLink to='/admin/addBlog' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <PlusIcon alt="add" className='min-w-4 w-5 invert brightness-0 sepia hue-rotate-180 saturate-200'/>
        <p className='hidden md:inline-block'>Add blogs</p>
      </NavLink>

      <NavLink to='/admin/listBlog' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <List alt="list" className='min-w-4 w-5 invert brightness-0 sepia hue-rotate-180 saturate-200'/>
        <p className='hidden md:inline-block'>Blog lists</p>
      </NavLink>

    </div>
  )
}

export default Sidebar
