import { FaGithub, FaTelegram } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

export default function ContactPage() {
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
            <a href="https://t.me/Chinaskicharles" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
              <FaTelegram size={24} />
              <span>Telegram</span>
            </a>
            {/* Add more social media links as needed */}
          </div>
          <p className="mt-4">
            For any inquiries, please email us at: <a href="mailto:contact@sivareth.com" className="text-blue-600 hover:underline">contact@sivareth.com</a>
          </p>
        </div>
      </main>
    </div>
  )
}