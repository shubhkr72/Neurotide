import React, { useEffect, useState } from 'react'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import {Podcast,Text,DraftingCompassIcon} from 'lucide-react'
const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState({
        blogs: 0,
        comments: 0,
        drafts: 0,
        recentBlogs: []
    })

    const { axios } = useAppContext()

     const fetchDashboard = async ()=>{
       try {
         const {data} = await axios.get('/api/admin/dashboard')
         data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
       } catch (error) {
            toast.error(error.message)
       }
     }

     useEffect(()=>{
        fetchDashboard()
     },[])

  return (
    <div className="flex-1 p-4 md:p-10 bg-gradient-to-r from-blue-600/20 via-indigo-700/20 to-purple-700/10">

        <div className='flex flex-wrap gap-4'>

            <div className=' flex items-center gap-4 bg-blue-600/20 p-4 min-w-58 rounded-3xl shadow cursor-pointer hover:scale-105 transition-all'>
                <Podcast className=''  alt="" />
                <div>
                    <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
                    <p className='text-gray-100 font-light text-center'>Blogs</p>
                </div>
            </div>

            <div className='flex items-center gap-4  bg-blue-600/20 p-4 min-w-58 rounded-3xl shadow cursor-pointer hover:scale-105 transition-all'>
                <Text alt="" />
                <div>
                    <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
                    <p className='text-gray-100 font-light'>Comments</p>
                </div>
            </div>

            <div className='flex items-center gap-4  bg-blue-600/20 p-4 min-w-58 rounded-3xl shadow cursor-pointer hover:scale-105 transition-all'>
                <DraftingCompassIcon alt="" />
                <div>
                    <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
                    <p className='text-gray-100 font-light'>Drafts</p>
                </div>
            </div>
        </div>

        <div>
            <div className='flex items-center gap-3 m-4 mt-6 text-gray-100'>
                <Text alt="" />
                <p>Latest Blogs</p>
            </div>

            <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide  bg-blue-600/20'>
                <table className='w-full text-sm text-gray-100'>
                    <thead className='text-xs text-gray-100 text-left uppercase'>
                        <tr>
                            <th scope='col' className='px-2 py-4 xl:px-6'> # </th>
                            <th scope='col' className='px-2 py-4'> Blog Title </th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'> Date </th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'> Status </th>
                            <th scope='col' className='px-2 py-4'> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dashboardData.recentBlogs.map((blog, index)=>(
                            <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard
