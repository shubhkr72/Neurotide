import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-900 border-t border-gray-800">
      <div className="text-xs text-shadow-blue-950 bg-gradient-to-r from-purple-600 to-red-600 px-2 py-1 rounded-full text-center">
            V 1.0.0
          </div>
      <div className="flex flex-col md:flex-row gap-10 py-10 text-gray-400">

        {/* Logo + Tagline */}
        <div className="flex flex-col items-start gap-4 flex-1">
          <img src={assets.logo} alt="logo" className="w-30 sm:w-40" />
         
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-semibold text-gray-200 mb-2">Navigation</h3>
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/contactus" className="hover:text-blue-400 transition">Contact Us</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
        </div>

        {/* Social Handles */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-semibold text-gray-200 mb-2">Social</h3>
          <a href="https://twitter.com" className="hover:text-blue-400 transition">Twitter</a>
          <a href="https://linkedin.com" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="https://github.com" className="hover:text-blue-400 transition">GitHub</a>
        </div>
      </div>

      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © Neurotide - All Rights Reserved. ❤️ Shubham Sebrin
      </p>
    </div>
  )
}

export default Footer