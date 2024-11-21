"use client"
import React from 'react';
import Create from '../Projetos/create';
import CreateProject from '../Projetos/createProject';
import Delete from '../Projetos/delete';
import DeleteProject from '../Projetos/deleteProject';
import FetchProjects from '../Projetos/fetchProjects';
import Update from '../Projetos/update';
import UpdateProject from '../Projetos/updateProject';

const ProjetosPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Página de Projetos</h1>
      <div className="grid gap-4">
        <section>
          <h2 className="text-xl font-semibold">Create</h2>
          <Create />
        </section>
        <section>
          <h2 className="text-xl font-semibold">Create Project</h2>
          <CreateProject />
        </section>
        <section>
          <h2 className="text-xl font-semibold">Delete</h2>
          <Delete />
        </section>
        <section>
          <h2 className="text-xl font-semibold">Delete Project</h2>
          <DeleteProject />
        </section>
        <section>
          <h2 className="text-xl font-semibold">Fetch Projects</h2>
          <FetchProjects />
        </section>
        <section>
          <h2 className="text-xl font-semibold">Update</h2>
          <Update />
        </section>
        <section>
          <h2 className="text-xl font-semibold">Update Project</h2>
          <UpdateProject />
        </section>
      </div>
    </div>
  );
};

export default ProjetosPage;




