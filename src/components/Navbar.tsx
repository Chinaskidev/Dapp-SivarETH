import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { ConnectButton, lightTheme } from 'thirdweb/react';
import { client } from "../app/client";

export default function Navbar() {
  return (
    <nav className="bg-fuchsia-100/100 backdrop-blur-sm shadow-md">
      <div className="container mx-auto max-w-6xl px-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center -ml-20">
            <Image
              src="/letrasennegro.png"
              alt="NFT Claim Logo"
              width={60}
              height={60}
              className="rounded-full navbar-image"
            />
          </div>

          <div className="flex items-baseline space-x-6 -ml-96">
            <Link href="/" className="text-black-800 hover:text-gray-600 px-8 py-4 rounded-md text-sm font-medium hover:border hover:border-black-600 hover:bg-purple-200">
              Home
            </Link>
            <Link href="/docs" className="text-black-800 hover:text-gray-600 px-8 py-4 rounded-md text-sm font-medium hover:border hover:border-black-600 hover:bg-purple-200">
              Docs
            </Link>
            <Link href="/contact" className="text-black-800 hover:text-gray-600 px-8 py-4 rounded-md text-sm font-medium hover:border hover:border-black-600 hover:bg-purple-200">
              Contact
            </Link>
          </div>

          <div className="flex items-center">
            <ConnectButton 
              client={client}
              connectButton={{ label: "Start" }}
              theme={lightTheme()}
            />
          </div>  
        </div>
      </div>
    </nav>
  )
}