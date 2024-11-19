
import React, { useEffect, useState } from 'react';

interface Project {
    id: number;
    name: string;
}

const ListProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projetos');
                if (!response.ok) {
                    throw new Error('Erro ao buscar projetos');
                }
                const data: Project[] = await response.json();
                console.log('Projects data:', data); // Log para verificar estrutura
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h1>Lista de Projetos</h1>
            <ul>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <li key={project.id}>
                            {project.name || 'Sem nome'}
                        </li>
                    ))
                ) : (
                    <p>Nenhum projeto encontrado</p>
                )}
            </ul>
        </div>
    );
};

export default ListProjects;
