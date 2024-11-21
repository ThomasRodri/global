'use client'
import React, { useState } from "react";

export default function CreateProject() {
    const [name, setName] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        await fetch("http://localhost:8080/projects", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });
        alert("Project created successfully!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Project Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <button type="submit">Create Project</button>
        </form>
    );
}
