import Navbar from '@/components/Navbar'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-grey-400 to-orange-400 bg-fixed" 
     style={{backgroundImage: "url('/backgroeundweb.png')", backgroundBlendMode: "normal"}}>
      <Navbar />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Documentation</h1>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">About SivarETH</h2>
          <p>
            SivarETH is a project that harnesses the power of Web3 and NFTs to create positive impact in local communities.
            Our unique NFT collection represents more than just digital art; it's a gateway to a community of like-minded
            individuals and a ticket to exclusive experiences in both digital and physical realms.
          </p>
          <h2 className="text-2xl font-semibold mt-6">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Claim your SivarETH NFT</li>
            <li>Join our community of holders</li>
            <li>Participate in governance decisions</li>
            <li>Gain access to exclusive events and benefits</li>
          </ol>
          {/* Add more documentation content as needed */}

        </div>
      </main>
    </div>
  )
}