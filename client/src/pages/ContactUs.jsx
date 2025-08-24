import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center mb-12 text-green-300">
          We'd love to hear from you! Reach out via any of the methods below.
        </p>

        {/* Contact Details in One Line */}
        <div className="flex flex-wrap justify-center gap-12 text-center mb-16">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <p>NIT AGARTALA</p>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <p>+91-xxxxxxxxxx</p>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <p>neurotide@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <span>⏰</span>
            <p>Mon - Fri: 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Send us a message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
