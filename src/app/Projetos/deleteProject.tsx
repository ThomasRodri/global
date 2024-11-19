
import React, { useState } from "react";

export default function DeleteProject() {
    const [id, setId] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        await fetch(`http://localhost:8080/projects/${id}`, {
            method: "DELETE",
        });
        alert("Project deleted successfully!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Project ID:
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <button type="submit">Delete Project</button>
        </form>
    );
}
