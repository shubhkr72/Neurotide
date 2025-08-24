import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Blog = () => {
  const { id } = useParams()
  const { axios } = useAppContext()
  const [data, setData] = useState(null)
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const fetchComments = async () => {
    try {
      const { data } = await axios.post('/api/blog/comments', { blogId: id })
      data.success ? setComments(data.comments) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const addComment = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/blog/add-comment', { blog: id, name, content })
      if (data.success) {
        toast.success(data.message)
        setName('')
        setContent('')
        fetchComments() // refresh comments
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchBlogData()
    fetchComments()
  }, [])

  return data ? (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-200">
      <Navbar />

      {/* Hero Section */}
      <div className="text-center mt-24 px-4 sm:px-0">
        <p className="text-primary py-2 font-medium">
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold max-w-2xl mx-auto text-white">
          {data.title}
        </h1>
        <h2 className="my-4 max-w-lg mx-auto text-gray-300">{data.subTitle}</h2>
        <span className="inline-block py-1 px-4 mb-6 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-medium shadow-lg">
          Shubham Sebrin
        </span>
      </div>

      {/* Blog Content */}
      <div className="mx-5 sm:mx-auto max-w-5xl my-12 space-y-12">
        <img
          src={data.image}
          alt=""
          className="rounded-3xl shadow-2xl mx-auto border border-gray-700"
        />

        <div
          className="rich-text max-w-3xl mx-auto text-gray-300 prose prose-invert prose-a:text-primary hover:prose-a:text-primary/80"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* Comments Section */}
        <div className="max-w-3xl mx-auto mt-14">
          <p className="font-semibold text-lg mb-4">Comments ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img src={assets.user_icon} alt="" className="w-6 rounded-full" />
                  <p className="font-medium text-white">{item.name}</p>
                </div>
                <p className="text-gray-300 text-sm max-w-md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs text-gray-400">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment Section */}
        <div className="max-w-3xl mx-auto mt-10">
          <p className="font-semibold text-lg mb-4">Add your comment</p>
          <form onSubmit={addComment} className="flex flex-col gap-4 max-w-lg">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-white outline-none focus:ring-2 focus:ring-primary transition"
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Comment"
              required
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-white outline-none h-48 focus:ring-2 focus:ring-primary transition"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white rounded-lg p-3 font-semibold hover:scale-105 transition transform"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Share Buttons */}
        <div className="max-w-3xl mx-auto mt-16 flex flex-col gap-4">
          <p className="font-semibold text-lg">Share this article on social media</p>
          <div className="flex gap-4">
            <img src={assets.facebook_icon} width={50} alt="Facebook" />
            <img src={assets.twitter_icon} width={50} alt="Twitter" />
            <img src={assets.googleplus_icon} width={50} alt="Google+" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <Loader />
  )
}

export default Blog
