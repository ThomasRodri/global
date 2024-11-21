
'use client';

import { useState, useEffect } from 'react';
import { Leaf, Plus, Trash2 } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
}

export default function Projects() {
  const api_base_url = 'http://localhost:8080'; // Base URL for backend
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({ name: '', description: '' });

  // Fetch projects from backend API
  useEffect(() => {
    console.log('Fetching projects from:', `${api_base_url}/api/projetos`);
    fetch(`${api_base_url}/api/projetos`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status} ${res.statusText}`);
        console.log('Projects fetched successfully:', res);
        return res.json();
      })
      .then((data: Project[]) => {
        console.log('Projects data:', data);
        setProjects(data);
      })
      .catch((error) => console.error('Error fetching projects:', error.message));
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  // Submit new project to backend
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting new project:', newProject);
    if (newProject.name && newProject.description) {
      fetch(`${api_base_url}/api/projetos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      })
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to add project: ${res.status} ${res.statusText}`);
          console.log('Project added successfully:', res);
          return res.json();
        })
        .then((data: Project) => {
          console.log('Added project data:', data);
          setProjects((prev) => [...prev, data]); // Add the new project to the state
          setNewProject({ name: '', description: '' });
        })
        .catch((error) => {
          console.error('Error adding project:', error.message);
          alert('Failed to add project. Check the console for details.');
        });
    }
  };

  // Delete project in backend
  const deleteProject = (id: number) => {
    console.log('Deleting project with ID:', id);
    fetch(`${api_base_url}/api/projetos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to delete project: ${res.status} ${res.statusText}`);
        console.log('Project deleted successfully:', res);
        setProjects((prev) => prev.filter((project) => project.id !== id));
      })
      .catch((error) => console.error('Error deleting project:', error.message));
  };

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
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-700 p-4 rounded-md flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-green-400">{project.name}</h3>
                  <p className="text-gray-300">{project.description}</p>
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
  );
}
