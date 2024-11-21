'use client'

import { useState } from 'react'
import { Leaf, Plus, Trash2 } from 'lucide-react'

export default function CProjetos() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Parque Solar', description: 'Instalação de painéis solares em parque municipal', fonteEnergia: 'Solar', regiao: 'Sul' },
    { id: 2, name: 'Turbinas Eólicas', description: 'Implementação de turbinas eólicas na costa', fonteEnergia: 'Eólica', regiao: 'Nordeste' },
    { id: 3, name: 'Reciclagem Comunitária', description: 'Programa de reciclagem para bairros locais', fonteEnergia: 'Biomassa', regiao: 'Sudeste' },
  ])

  const [newProject, setNewProject] = useState({ name: '', description: '', fonteEnergia: '', regiao: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProject(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newProject.name && newProject.description && newProject.fonteEnergia && newProject.regiao) {
      setProjects(prev => [...prev, { id: Date.now(), ...newProject }])
      setNewProject({ name: '', description: '', fonteEnergia: '', regiao: '' })
    }
  }

  const deleteProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Leaf className="h-8 w-8 text-green-400 mr-2" />
          <h1 className="text-3xl font-bold text-green-400">EcoConnect Projetos</h1>
        </div>

        {/* Quadro de Cadastro */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Cadastrar Novo Projeto</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">Nome do Projeto</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newProject.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Digite o nome do projeto"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-400">Descrição</label>
              <input
                type="text"
                id="description"
                name="description"
                value={newProject.description}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Digite a descrição do projeto"
                required
              />
            </div>
            <div>
              <label htmlFor="fonteEnergia" className="block text-sm font-medium text-gray-400">Fonte de Energia</label>
              <input
                type="text"
                id="fonteEnergia"
                name="fonteEnergia"
                value={newProject.fonteEnergia}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Digite a fonte de energia"
                required
              />
            </div>
            <div>
              <label htmlFor="regiao" className="block text-sm font-medium text-gray-400">Região</label>
              <input
                type="text"
                id="regiao"
                name="regiao"
                value={newProject.regiao}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Digite a região do projeto"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Plus className="h-5 w-5 mr-2" /> Adicionar Projeto
            </button>
          </form>
        </div>

        {/* Quadro de Projetos */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Projetos Atuais</h2>
          <div className="space-y-4">
            {projects.map(project => (
              <div key={project.id} className="bg-gray-700 p-4 rounded-md flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-green-400">{project.name}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <p className="text-sm text-gray-400">Fonte de Energia: {project.fonteEnergia}</p>
                  <p className="text-sm text-gray-400">Região: {project.regiao}</p>
                </div>
                <button
                  onClick={() => deleteProject(project.id)}
                  className="p-2 text-red-400 hover:text-red-300 focus:outline-none"
                  aria-label={`Deletar projeto ${project.name}`}
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}