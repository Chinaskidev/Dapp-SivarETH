import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function DocsPage() {
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
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">About SivarETH</h1>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 space-y-4">
          {/*<h2 className="text-2xl font-semibold">About SivarETH</h2>*/}
          
          <p className="text-2xl font-medium text-gray-800">
            SivarETH's support entrepreneurs and small foundations to benefit people in need. SivarETH's approach can be described as a collaborative formula: <br />
            a + b = 1, where:
          </p>
          <p className="text-2xl font-medium text-gray-800">
            "a" represents entrepreneurs and foundations, whom we educate in the Web3 ecosystem, helping them adopt new technologies and strategies to grow and adapt to the digital age.
          </p>
          <div className="flex justify-center">
            <Image 
              src="/a.png" 
              alt="elemento a" 
              width={600} 
              height={400} 
              className="my-4"
            />
          </div>
          <p className="text-2xl font-medium text-gray-800">
            "b" corresponds to the beneficiaries of these entrepreneurs, who also receive education in Web3, and are given access to products and services offered by 'a'. In turn, "b" can learn to use decentralized tools, such as cryptocurrencies, to improve their quality of life and access essential resources.
          </p>
          <div className="flex justify-center">
            <Image 
              src="/b.png" 
              alt="elemento b" 
              width={600} 
              height={400} 
              className="my-4"
            />
          </div>
          <p className="text-2xl font-medium text-gray-800">
            The SivarETH model seeks to create a cycle of mutual impact: entrepreneurs ("a") are trained in Web3, improve their businesses, and, thanks to NFT sales and donations, funds are generated to help beneficiaries ("b"). These beneficiaries, in addition to receiving financial support, consume products or services from the participating entrepreneurs, which strengthens local economies and generates synergy between both groups. In the long term, both "a" and "b" benefit, not only economically, but also through learning and adopting new technologies.
          </p>
          <div className="flex justify-center">
            <Image 
              src="/ayb.png" 
              alt="elemento a" 
              width={600} 
              height={400} 
              className="my-4"
            />
          </div>

          <p className="text-2xl font-medium text-gray-800">
            This approach ensures that Web3 technology is used not only as a means of raising funds, but as an educational tool that empowers all those involved, thus creating an inclusive and sustainable ecosystem.
          </p> <br /> <br />
        </div>
      </main>
    </div>
  )
}