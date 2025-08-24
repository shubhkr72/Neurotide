import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 my-32">
      <h1 className="md:text-4xl text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Never Miss a Blog!
      </h1>
      <p className="md:text-lg text-gray-400 pb-8">
        Subscribe to get the latest blogs related to Artificial Intelligence.
      </p>
      <form className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12 bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg">
        <input
          className="h-full w-full px-4 text-gray-200 bg-transparent outline-none placeholder-gray-500"
          type="email"
          placeholder="Enter your email id"
          required
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all cursor-pointer font-medium"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter
