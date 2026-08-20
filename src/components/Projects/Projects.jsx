import { useState } from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Weather App",
      description: "Real-time weather information application.",
      image: "/weather.jpg",
      category: "web",
      tech: ["React", "API"],
    },
    {
      id: 2,
      name: "Finance Tracker App",
      description: "Tracks daily finances and visualises the data.",
      image: "/finance.jpg",
      category: "web",
      tech: ["React", "API"],
    },
    {
      id: 3,
      name: "49 All Out",
      description: "Match simulation with your own team.",
      image: "/cricket.jpg",
      category: "web",
      tech: ["React", "API"],
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="project-section">
      <h2>My Projects</h2>

      <div className="project-filters">
        <button
          className={filter === "all" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "web" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("web")}
        >
          Web
        </button>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.name}
            />

            <div className="project-card-body">
              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a href="#" className="btn btn-primary">
                  Live Demo
                </a>

                <a href="#" className="btn">
                  Github
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;