
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const UpdateProject = () => {
    const router = useRouter();
    const { id } = router.query;
    const [name, setName] = useState('');

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/projetos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });
            if (!response.ok) {
                throw new Error('Erro ao atualizar projeto');
            }
            alert('Projeto atualizado com sucesso!');
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    return (
        <form onSubmit={handleUpdate}>
            <label>Atualizar Nome do Projeto:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Atualizar</button>
        </form>
    );
};

export default UpdateProject;
