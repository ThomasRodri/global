'use client'
import React, { useState } from 'react';

const CreateProject = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/projetos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });
            if (!response.ok) {
                throw new Error('Erro ao criar projeto');
            }
            alert('Projeto criado com sucesso!');
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Nome do Projeto:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Criar</button>
        </form>
    );
};

export default CreateProject;
