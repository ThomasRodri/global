
import React from 'react';
import { useRouter } from 'next/router';

const DeleteProject = () => {
    const router = useRouter();
    const { id } = router.query;

    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/projetos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Erro ao excluir projeto');
            }
            alert('Projeto excluído com sucesso!');
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div>
            <h1>Deletar Projeto</h1>
            <button onClick={handleDelete}>Confirmar Exclusão</button>
        </div>
    );
};

export default DeleteProject;
