import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const { setInput, input } = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>

        <div className="inline-flex items-center justify-center gap-4 px-6 py-2.5 mb-4 border border-blue-500/40 bg-blue-500/10 rounded-full text-base text-blue-400">
          <p>Shubham Kumar (NIT Agartala)</p>
        </div>

        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-white'>Artificial Intelligence <span className='text-primary'> blogging</span> <br />Platform</h1>

        <p className="my-6 sm:my-8 max-w-4xl m-auto max-sm:text-sm text-lg sm:text-xl text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text">
          An AI blogging platform focused on AI/RAI topics generates insightful content, offers intelligent research tools, and streamlines publishing—helping users share the latest in artificial intelligence and responsible AI advancements.
        </p>

        {input && <p onClick={onClear} className='text-sm cursor-pointer underline text-red-500 mb-2'>Clear Search</p>}


        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white overflow-hidden rounded-3xl shadow-md hover:shadow-lg transition-all'>
          <input ref={inputRef} type="text" placeholder='Search for blogs' required className='w-full pl-4 outline-none text-black' />

          <button type="submit" className='bg-primary text-white px-8 py-2 m-1.5 rounded-4xl hover:scale-105 transition-all cursor-pointer'>Search</button>
        </form>

      </div>
      
    </div>
  )
}

export default Header
