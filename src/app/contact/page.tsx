import React from 'react'
import Link from 'next/link'
import { FaGithub, FaDiscord } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-grey-400 to-orange-400 bg-fixed">
      <nav className="bg-fuchsia-100/100 backdrop-blur-sm shadow-md p-4">
        <div className="container mx-auto flex justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            SivarETH
          </Link>

          <div className="flex space-x-4">
        
            <Link href="/docs" className="text-black-800 hover:text-gray-600 px-8 py-4 rounded-md text-sm font-medium hover:border hover:border-black-600 hover:bg-purple-200">
              Docs
            </Link>
            <Link href="/contact" className="text-black-800 hover:text-gray-600 px-8 py-4 rounded-md text-sm font-medium hover:border hover:border-black-600 hover:bg-purple-200">
              Contact
            </Link>
          </div>

        </div>
      </nav>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 space-y-4">
          <p className="text-xl">
            Get in touch with the SivarETH team or follow us on social media:
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/Chinaskidev" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
            <a href="charlesdev" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
              <FaDiscord size={24} />
              <span>Discord</span>
            </a>
            {/* Add more social media links as needed */}
          </div>
          <p className="mt-4">
            For any inquiries, please email us at: <a href="mailto:contact@sivareth.com" className="text-blue-600 hover:underline">contact@sivareth.com</a>
          </p>

          <Link href="/" className="text-blue-600 hover:underline">
            Go to Home Page
          </Link>
        </div>
      </main>
    </div>
  )
}