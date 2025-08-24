import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {

    const {title, description, category, image, _id} = blog;
    const navigate = useNavigate()

  return (
    <div onClick={()=> navigate(`/blog/${_id}`)} className='my-5 w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer bg-gray-800'>
      <img src={image} alt="" className='aspect-video'/>
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>{category}</span>
      <div className='p-2'>
        <h5 className='mb- font-medium text-white'>{title}</h5>
        <p className='mb text-xs text-gray-300' dangerouslySetInnerHTML={{"__html": description.slice(0,80)}}></p>
      </div>
    </div>
  )
}

export default BlogCard
