'use client'

import { Leaf } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Leaf className="h-8 w-8 text-green-400" />
          <span className="text-2xl font-bold text-green-400">EcoConnect</span>
        </div>

        <nav className="flex space-x-6">
          <a href="#" className="hover:text-green-400 transition-colors">Home</a>
          <a href="#" className="hover:text-green-400 transition-colors">About</a>
          <a href="#" className="hover:text-green-400 transition-colors">Services</a>
          <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}