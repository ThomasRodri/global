'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

const Bot = () => {
  const initialMessages = [
    { sender: "bot", text: "Sobre qual tipo de energia renovável você quer saber mais? (Solar, Eólica, Biomassa, Hidrelétrica)" },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [userInput, setUserInput] = useState("");

  const handleSend = (input) => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setUserInput("");

    const lowerInput = input.toLowerCase();

    const responses = {
      solar: "A energia solar é obtida através da conversão da luz do sol em eletricidade. Painéis solares captam a radiação solar e a transformam em energia. É ideal para reduzir o uso de combustíveis fósseis e pode ser usada tanto em residências quanto em grandes usinas solares. Gostaria de saber sobre mais alguma energia renovável?",
      eolica: "A energia eólica utiliza turbinas para transformar a força do vento em eletricidade. Turbinas eólicas são instaladas em locais com grande incidência de ventos constantes, como litorais ou áreas planas. É uma alternativa sustentável, limpa e eficiente. Gostaria de saber sobre mais alguma energia renovável?",
      biomassa: "A biomassa é uma fonte de energia renovável que utiliza resíduos orgânicos, como restos de alimentos, madeira e resíduos agrícolas, para gerar energia. Esse processo ajuda a reduzir o desperdício e promove a reutilização de recursos naturais. Além disso, é uma excelente forma de reduzir emissões de gases de efeito estufa. Gostaria de saber sobre mais alguma energia renovável?",
      hidreletrica: "A energia hidrelétrica é gerada pelo movimento da água em grandes represas, que acionam turbinas e produzem eletricidade. É uma das fontes mais utilizadas no mundo, oferecendo energia em grande escala. No entanto, exige cuidados ambientais para evitar impactos negativos em ecossistemas. Gostaria de saber sobre mais alguma energia renovável?",
    };

    const response = Object.keys(responses).find((key) => lowerInput.includes(key))
      ? responses[Object.keys(responses).find((key) => lowerInput.includes(key))]
      : "Desculpe, não entendi. Por favor, pergunte sobre Solar, Eólica, Biomassa ou Hidrelétrica.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <h1 className="text-center py-4 bg-green-600 text-white text-3xl font-bold">
        EcoBot
      </h1>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg text-lg ${
                msg.sender === "bot"
                  ? "bg-gray-700 text-white"
                  : "bg-green-600 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 p-4 bg-gray-800">
        <div className="flex space-x-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSend(userInput);
              }
            }}
          />
          <button
            onClick={() => handleSend(userInput)}
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <Send className="w-7 h-7" />
            <span className="sr-only">Enviar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bot;
