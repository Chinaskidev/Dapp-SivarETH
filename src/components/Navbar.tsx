'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ConnectButton, lightTheme } from 'thirdweb/react';
import { client } from "../app/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-fuchsia-100/100 backdrop-blur-sm shadow-md">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
          <span className="text-4xl font-bold">
          <span style={{ color: '#435259'}}>Sivar</span>
          <span style={{ color: '#a3cae2'}}>ETH</span>
        </span>
          </div>

          <div className="hidden md:flex items-baseline space-x-6">
            <Link href="/" className="text-black-800 hover:text-gray-600 px-8 py-4 rounded-md text-sm font-medium hover:border hover:border-black-600 hover:bg-purple-200">
              Home
            </Link>
            <Link href="/docs" className="text-black-800 hover:text-gray-600 px-8 py-4 rounded-md text-sm font-medium hover:border hover:border-black-600 hover:bg-purple-200">
              About SivarETH
            </Link>
            <Link href="/contact" className="text-black-800 hover:text-gray-600 px-8 py-4 rounded-md text-sm font-medium hover:border hover:border-black-600 hover:bg-purple-200">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <ConnectButton 
              client={client}
              connectButton={{ 
                label: (
                  <span className="flex items-center" style={{ color: '#fe5166'}}>
                    <FontAwesomeIcon icon={faPlay} className="mr-2" />
                    Start
                  </span>
                )
              }}
              theme={lightTheme()}
            />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black-800 hover:text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <Link href="/" className="block text-black-800 hover:text-gray-600 px-4 py-2 rounded-md text-sm font-medium hover:border hover:border-black-600 hover:bg-purple-200">
              Home
            </Link>
            <Link href="/docs" className="block text-black-800 hover:text-gray-600 px-4 py-2 rounded-md text-sm font-medium hover:border hover:border-black-600 hover:bg-purple-200">
              About SivarETH
            </Link>
            <Link href="/contact" className="block text-black-800 hover:text-gray-600 px-4 py-2 rounded-md text-sm font-medium hover:border hover:border-black-600 hover:bg-purple-200">
              Contact
            </Link>
            <div className="flex justify-center py-2">
              <ConnectButton 
                client={client}
                connectButton={{ label: "Start" }}
                theme={lightTheme()}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}