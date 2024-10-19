"use client";
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Shield, Zap, ChevronLeft, ChevronRight} from "lucide-react"
import { ConnectButton, lightTheme, TransactionButton, useActiveAccount, useReadContract } from 'thirdweb/react';
import { client } from "../app/client";
import { getContract } from "thirdweb";
import { base } from "thirdweb/chains";
import { getContractMetadata } from "thirdweb/extensions/common";
import { claimTo } from "thirdweb/extensions/erc721";
import Link from 'next/link';
import Navbar from '../components/Navbar'

export default function NFTClaimLandingPage() {
  // Your existing component code here
  const account = useActiveAccount();

  const contract = getContract({
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
      image: "/santaana.jpg",
      title: "Ana",
      description: "Ilamatepec, or as the locals call it, Santa Ana, is not only the tallest volcano in El Salvador, but it’s also the Queen of heights, reaching an impressive 2,381 metres! And what makes it even more epic? Inside its active crater lies a stunning turquoise lagoon that looks as if it’s been pulled straight from a dream. A natural wonder that combines height, adventure, and beauty all in one place!"
    },
    {
      image: "/izalco.jpg",
      title: "Izalco",
      description: "This Blockchain Lighthouse of the Pacific due to its constant activity in the 19th and 20th centuries, this young volcano is located in the Apaneca Range, near Santa Ana Volcano. Although currently inactive, it was once one of the most active volcanoes in Central America, with almost continuous eruptions until 1958. It is famous for its perfectly conical shape and the surrounding lava fields."
    },
    {
      image: "/boqueron.png",
      title: "Boquerón",
      description: "Boquerón, is a mighty stratovolcano sitting northwest of El Salvador’s capital, San Salvador. At its summit, you'll find El Boquerón, a massive crater stretching 1.5 km across – perfect for those who love dramatic landscapes! While it hasn't erupted recently, this giant is still under watch due to its explosive past. The area is a hit with tourists, offering hiking trails and breathtaking panoramic views of the city and surrounding landscapes."
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
    style={{
      backgroundImage: "url('/backgroeundweb.png')",
      backgroundBlendMode: "normal",
      backgroundSize: "auto", // Ajusta el tamaño de la imagen
      backgroundPosition: "center", // Centra la imagen
      backgroundRepeat: "repeat" // Evita que la imagen se repita
    }}>
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Your existing main content here */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/vicente.png"
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
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-sm rounded-lg p-6 space-y-4 relative z-10">
          <h2 className="text-3xl font-semibold">{carouselItems[currentSlide].title}</h2>
          <p className="text-gray-700">{carouselItems[currentSlide].description}</p>
        </div>
        <div className="w-full md:w-1/2 relative">
          <Image
            src={carouselItems[currentSlide].image}
            alt={carouselItems[currentSlide].title}
            width={400}
            height={300}
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>
      </div>
      <Button 
        onClick={prevSlide} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-opacity-50 hover:bg-opacity-75 transition-opacity"
        style={{ left: '-80px' }}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button 
        onClick={nextSlide} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-opacity-50 hover:bg-opacity-75 transition-opacity"
        style={{ right: '-20px' }}
      >
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