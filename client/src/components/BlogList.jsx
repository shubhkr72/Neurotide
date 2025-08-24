import React, { useState } from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {
  const [menu, setMenu] = useState("All")
  const { blogs, input } = useAppContext()

  const filteredBlogs = () => {
    if (input === '') {
      return blogs
    }
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    )
  }

  return (
    <div className="py-1">
      {/* Category Buttons */}
      <div className='flex justify-center gap-4 sm:gap-8 mb-1 relative flex-wrap'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`relative z-10 cursor-pointer px-5 py-2 rounded-full transition-all duration-300 ${
                menu === item
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-full shadow-lg shadow-indigo-800/50"
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mb mx-8 sm:mx-16 xl:mx-40'>
        {filteredBlogs()
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  )
}

export default BlogList
