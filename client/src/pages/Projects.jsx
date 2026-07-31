import { useEffect, useState } from "react";
import api from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProjects(res.data.projects);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Projects</h1>

      {projects.length === 0 ? (
        <p>No Projects Found</p>
      ) : (
        projects.map((project) => (
          <div
            key={project._id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <strong>Status:</strong> {project.status}
          </div>
        ))
      )}
    </div>
  );
}

export default Projects;