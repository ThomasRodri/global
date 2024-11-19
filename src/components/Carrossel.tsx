'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import eolica from "../images/eolica.webp"
import solar from "../images/solar.webp"
import biomassa from "../images/biomassa.webp"
import hidreletrica from "../images/hidreletrica.webp"

const cards = [
  {
    title: "Energia Solar",
    text: "A energia solar é obtida através da conversão da luz do sol em eletricidade. Esse processo é realizado por painéis solares que capturam a radiação solar e a convertem em energia limpa e renovável. Ideal para residências, empresas e comunidades que buscam reduzir o uso de combustíveis fósseis.",
    renderImage: () => (
      <Image 
        src={solar} 
        alt="Energia Solar" 
        width={500} 
        height={400} 
        className="object-cover h-full w-full" 
      />
    )
  },
  {
    title: "Energia Eólica",
    text: "A energia eólica utiliza turbinas para transformar a força do vento em eletricidade. Esta forma de energia é sustentável e não emite poluentes, sendo uma das alternativas mais eficientes para reduzir a pegada de carbono em áreas com boa ventilação.",
    renderImage: () => (
      <Image 
        src= {eolica}
        alt="Energia Eólica" 
        width={500} 
        height={400} 
        className="object-cover h-full w-full" 
      />
    )
  },
  {
    title: "Biomassa",
    text: "A biomassa é uma fonte de energia renovável que aproveita materiais orgânicos, como resíduos agrícolas, florestais e restos de alimentos. A conversão desses resíduos em energia ajuda a reduzir o desperdício e as emissões de gases de efeito estufa.",
    renderImage: () => (
      <Image 
        src={biomassa}
        alt="Biomassa" 
        width={500} 
        height={400} 
        className="object-cover h-full w-full" 
      />
    )
  },
  {
    title: "Energia Hidrelétrica",
    text: "A energia hidrelétrica é gerada através do movimento da água, geralmente em grandes represas. É uma das fontes de energia renovável mais utilizadas no mundo e é conhecida pela sua capacidade de fornecer eletricidade de forma estável e em grande escala.",
    renderImage: () => (
      <Image 
        src={hidreletrica}
        alt="Energia Hidrelétrica" 
        width={500} 
        height={400} 
        className="object-cover h-full w-full" 
      />
    )
  }
]

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-poppins">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-6xl font-extrabold text-center mb-12 text-green-400">Tipos de Energias Renováveis</h1>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex">
                    <div className="w-1/2">
                      {card.renderImage()}
                    </div>
                    <div className="w-1/2 p-8">
                      <h2 className="text-4xl font-semibold mb-6 text-green-400">{card.title}</h2>
                      <p className="text-2xl text-gray-300">{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-500 text-gray-900 p-2 rounded-full hover:bg-green-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-500 text-gray-900 p-2 rounded-full hover:bg-green-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </main>
    </div>
  )
}