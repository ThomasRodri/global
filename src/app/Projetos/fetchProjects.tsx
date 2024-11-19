
import React, { useEffect, useState } from "react";

export default function FetchProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch("http://localhost:8080/projects");
            const data = await response.json();
            setProjects(data);
        }
        fetchProjects();
    }, []);

    return (
        <div>
            <h1>Projects List</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
}
