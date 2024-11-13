import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Rodape() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">EcoConnect</h3>
            <p className="text-gray-400">Conectando você a um futuro sustentável através de soluções inovadoras em energia renovável.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-400 mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-400 mb-4">Contate-nos</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-green-400" />
                <a href="mailto:info@ecoconnect.com" className="hover:text-green-400 transition-colors">info@ecoconnect.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-green-400" />
                <a href="tel:+551234567890" className="hover:text-green-400 transition-colors">+55 (12) 3456-7890</a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-400" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2024 EcoConnect. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-green-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-green-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-green-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-green-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}