import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Moment from 'moment'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Blog = () => {
  const { id } = useParams()
  const { axios } = useAppContext()
  const [data, setData] = useState(null)

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage)
    }
  }

  useEffect(() => {
    fetchBlogData()
  }, [id])

  return data ? (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-200">
      <Navbar />

      {/* Hero Section */}
      <div className="text-center pt-10 pb-12 px-4 sm:px-0">
        <p className="text-primary py-2 font-medium">
          Published on {Moment(data.createdAt).format('MMMM Do, YYYY')}
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold mx-auto text-white leading-tight">
          {data.title}
        </h1>
        <h2 className="my-4 mx-auto text-gray-300">{data.subTitle}</h2>
        
        {/* Author Info */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div>
            <p className="font-semibold text-white">{data.authorName}</p>
            {data.linkedinUrl && (
              <a 
                href={data.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-primary hover:underline"
              >
                View Profile
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="px-4 sm:px-6 lg:px-8 w-full my-12 space-y-12">
        <img
          src={data.image}
          alt={data.title}
          className="rounded-3xl shadow-2xl border border-gray-700 max-w-3xl mx-auto w-full object-cover"
        />

        {/* Markdown content (full width) */}
        <div className="w-full text-lg leading-relaxed text-gray-300 prose prose-invert prose-p:text-gray-300 prose-a:text-primary hover:prose-a:text-primary/80 prose-headings:text-white prose-strong:text-white">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data.description}
          </ReactMarkdown>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <Loader />
  )
}

export default Blog
