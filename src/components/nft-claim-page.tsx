'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Star, Shield, Zap } from "lucide-react"

export function NftClaimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <nav className="flex justify-between items-center p-4 bg-black/20 backdrop-blur-sm">
        <div className="text-2xl font-bold">NFT Claim</div>
        <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
          <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Featured NFT"
              className="rounded-lg shadow-2xl"
              width={400}
              height={400}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Claim Your Exclusive NFT</h1>
            <p className="text-xl text-gray-300">
              Don't miss out on this unique opportunity to own a piece of digital history.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white">
              Claim NFT
            </Button>
          </div>
        </section>

        <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="NFT Collection"
              className="rounded-lg shadow-xl"
              width={400}
              height={300}
            />
          </div>
          <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm rounded-lg p-6 space-y-4">
            <h2 className="text-3xl font-semibold">About the NFT</h2>
            <p className="text-gray-300">
              This exclusive NFT is part of a limited collection, featuring unique digital artwork that combines
              cutting-edge technology with artistic vision. Each piece is individually numbered and provides access
              to exclusive holder benefits.
            </p>
            <p className="text-gray-300">
              Our NFTs are more than just digital art; they're a gateway to a community of like-minded individuals
              and a ticket to exclusive experiences in both the digital and physical worlds.
            </p>
          </div>
        </section>

        <section className="mb-16 flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Digital Visionary"
              className="rounded-lg shadow-xl"
              width={400}
              height={300}
            />
          </div>
          <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm rounded-lg p-6 space-y-4">
            <h2 className="text-3xl font-semibold">Creator: Digital Visionary</h2>
            <p className="text-gray-300">
              Digital Visionary is a renowned artist in the NFT space, known for creating immersive and
              thought-provoking digital experiences. With a background in both traditional art and blockchain
              technology, their work pushes the boundaries of what's possible in the world of digital ownership.
            </p>
            <p className="text-gray-300">
              Their unique style blends elements of surrealism, cyberpunk, and abstract expressionism, resulting in
              NFTs that are not just visually stunning but also rich in meaning and cultural significance.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Holder Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-6 w-6 text-yellow-400" />
                  Exclusive Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                Gain entry to VIP events and private online communities.
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-6 w-6 text-green-400" />
                  Voting Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                Participate in governance decisions for future projects.
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-6 w-6 text-blue-400" />
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