import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-900 border-t border-gray-800">
      <div className="text-xs text-shadow-blue-950 bg-gradient-to-r from-purple-600 to-red-600 px-2 py-1 rounded-full text-center">
            V 1.0.0
          </div>
      <div className="flex flex-col md:flex-row gap-10 py-10 text-gray-400">

        {/* Logo + Tagline */}
        {/* FIX 1: Wrapped navigate() in an arrow function */}
        <div onClick={() => navigate('/')} className="flex flex-col items-start gap-4 flex-1 hover:cursor-pointer">
          <img src='/protein.svg' alt="logo" className="w-30 sm:w-40" />
        </div>

        {/* Navigation Links */}
        {/* FIX 2: Replaced <a> tags with <Link> for internal navigation */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-semibold text-gray-200 mb-2">Navigation</h3>
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/contactus" className="hover:text-blue-400 transition">Contact Us</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        </div>

        {/* Social Handles (These correctly use <a> tags for external links) */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-semibold text-gray-200 mb-2">Social</h3>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Twitter</a>
          <a href="https://www.linkedin.com/in/shubham-sebrin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="https://github.com/shubhkr72" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a>
        </div>
      </div>

      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © Neurotide - All Rights Reserved. ❤️ Shubham Sebrin
      </p>
    </div>
  )
}

export default Footer;