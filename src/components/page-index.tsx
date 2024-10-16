"use client";
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Star, Shield, Zap, ChevronLeft, ChevronRight, Contact, Ligature } from "lucide-react"
import { ConnectButton, darkTheme, lightTheme, TransactionButton, useActiveAccount, useReadContract } from 'thirdweb/react';
import { client } from "./client";
import { getContract } from "thirdweb";
import { base } from "thirdweb/chains";
import { getContractMetadata } from "thirdweb/extensions/common";
import { claimTo } from "thirdweb/extensions/erc721";
import Link from 'next/link';

export default function NFTClaimLandingPage() {
const account = useActiveAccount();

  const contract= getContract({
    client: client,
    chain: base,
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS as string,

  });
  const { data: contractMetadata } = useReadContract(
    getContractMetadata,
    {
      contract:contract
    }
  );
  console.log(contractMetadata);


  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      image: "/sivar_moster_degen 01.png",
      title: "Creator: Digital Visionary",
      description: "Digital Visionary is a renowned artist in the NFT space, known for creating immersive and thought-provoking digital experiences. With a background in both traditional art and blockchain technology, their work pushes the boundaries of what's possible in the world of digital ownership."
    },
    {
      image: "/sivar_moster_degen 02.png",
      title: "Creator: Blockchain Picasso",
      description: "Blockchain Picasso brings a unique perspective to the NFT world, blending traditional artistic techniques with cutting-edge blockchain technology. Their creations are not just visually stunning but also push the boundaries of what's possible in the realm of digital ownership."
    },
    {
      image: "/sivar_moster04.png",
      title: "Creator: Crypto Dali",
      description: "Crypto Dali is known for surrealist NFT creations that challenge perceptions and provoke thought. By merging the unpredictable nature of cryptocurrency with the boundless creativity of surrealism, they create pieces that are both visually captivating and intellectually stimulating."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-grey-400 to-orange-400 bg-fixed" 
     style={{backgroundImage: "url('/backgroeundweb.png')", backgroundBlendMode: "normal"}}>
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
        <Link href="/docs" className="text-black-800 hover:text-gray-600 px-8 py-4 rounded-md text-sm font-medium  hover:border hover:border-black-600 hover:bg-purple-200">
          Docs
        </Link>
        <Link href="/contact" className="text-black-800 hover:text-gray-600 px-8 py-4 rounded-md text-sm font-medium  hover:border hover:border-black-600 hover:bg-purple-200">
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


      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/ethvolcano.png"
              alt="Featured NFT"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl"
            />
         
            </div>

          <div className="w-full md:w-1/2 bg-white/70 backdrop-blur-sm rounded-lg p-6 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Sivar Volcanoes</h1>
            <p className="text-xl text-black-900">
              Claim your volcano and join the SivarETH community.
              
            </p>
            {/*<Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
              Claim NFT
            </Button>*/}

            <TransactionButton 
              transaction={() => claimTo({
                contract: contract,
                to: account?.address as string,
                quantity: BigInt(1),
                
              })}
              onTransactionConfirmed={async () => alert("Transaction Confirmed")}
              className="bg-blue-900 hover:bg-violet-700 text-dark font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 border-4 border-black-300 hover:border-blue-200 shadow-lg"
              
            >
              <span className="text-black-900 font-extrabold text-lg tracking-wide drop-shadow-md">Claim your Volcano</span>
              
            </TransactionButton>
          </div>
        </section>

        <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/letrasennegro.png"
              alt="NFT Collection"
              width={400}
              height={300}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-sm rounded-lg p-6 space-y-4">
            <h2 className="text-3xl font-semibold">SivarETH</h2>
            <p className="text-gray-700">
             We're harnessing the power of Web3 and NFTs to raise funds that directly create 
             a positive impact on individuals and local communities. These exclusive NFTs are part of a limited collection featuring unique 
             digital artwork that blends cutting-edge technology with artistic vision. 
             Each piece is individually numbered and provides access to exclusive benefits for holders.
            </p>
            <p className="text-gray-700">
             Our NFTs are more than just digital art; they serve as a gateway to 
             a community of like-minded people and offer a ticket to exclusive 
             experiences in both the digital and physical worlds.
            </p>
          </div>
        </section>

        <section className="mb-16 relative">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src={carouselItems[currentSlide].image}
                alt={carouselItems[currentSlide].title}
                width={400}
                height={300}
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-sm rounded-lg p-6 space-y-4">
              <h2 className="text-3xl font-semibold">{carouselItems[currentSlide].title}</h2>
              <p className="text-gray-700">{carouselItems[currentSlide].description}</p>
            </div>
          </div>
          <Button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Holder Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-6 w-6 text-yellow-500" />
                  Exclusive Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                Gain entry to VIP events and private online communities.
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-gray-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-6 w-6 text-green-500" />
                  Voting Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                Participate in governance decisions for future projects.
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-gray-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-6 w-6 text-blue-500" />
                  Airdrops
                </CardTitle>
              </CardHeader>
              <CardContent>
                Receive future airdrops and special offers exclusively for holders.
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}