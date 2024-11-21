import Image from 'next/image';
import thomas from '../images/thomas.jpg';
import pedro from '../images/pedro.jpg';
import miguel from '../images/miguel.jpg';

export default function Integrantes() {
    return (
      <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center text-green-400 mb-8">Integrantes</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={thomas}
                alt="Integrante Thomas" 
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h2 className="text-xl font-semibold text-green-400 mb-2">Thomas Rodrigues Ribeiro Silva</h2>
                <h2 className="text-xl font-semibold text-green-400 mb-2">RM558042</h2>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={pedro}
                alt="Integrante Pedro" 
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h2 className="text-xl font-semibold text-green-400 mb-2">Pedro Valentim Merise</h2>
                <h2 className="text-xl font-semibold text-green-400 mb-2">RM558043</h2>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                  src={miguel}
                  alt="Integrante Miguel" 
                  className="w-full h-48 object-cover"
                />
              <div className="p-3">
                <h2 className="text-xl font-semibold text-green-400 mb-2">Miguel Barros Ramos</h2>
                <h2 className="text-xl font-semibold text-green-400 mb-2">RM558044</h2>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 text-center">
            <p className="text-lg text-gray-300">
              Na EcoConnect, estamos comprometidos em fornecer soluções de energia renovável 
              que não apenas atendem às necessidades energéticas atuais, mas também protegem 
              o futuro do nosso planeta.
            </p>
            <p className="text-lg text-gray-300">
              Nossas tecnologias inovadoras em energia solar, eólica e biomassa estão 
              transformando a maneira como produzimos e consumimos energia, criando um 
              caminho sustentável para as gerações futuras.
            </p>
          </div>
        </div>
      </div>
    )
  }