import React, {useEffect, useState} from "react";
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/projects')
        .then((res) => {
            setProjects(res.data);
        })
        .catch((err) => {
            console.error('Error fetching projects:', err);
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-12 px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                {project.imageUrl && (
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded mb-4"
                />
                )}
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                    <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 text-sm font-medium px-2 py-1 rounded"
                    >
                    {tech}
                    </span>
                ))}
                </div>
                {project.projectUrl && (
                <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                >
                    GitHub
                </a>
                )}
            </div>
            ))}
        </div>
        </div>
    );
}

export default Projects;