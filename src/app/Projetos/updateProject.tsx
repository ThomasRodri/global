'use client'
import React, { useState } from "react";

export default function UpdateProject() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        await fetch(`http://localhost:8080/projects/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });
        alert("Project updated successfully!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Project ID:
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <label>
                New Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <button type="submit">Update Project</button>
        </form>
    );
}
