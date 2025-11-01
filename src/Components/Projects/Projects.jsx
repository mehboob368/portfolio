import React from "react";
import "./Projects.css";

// Images import (replace with your actual paths or keep Unsplash URLs)
import todo from "../../assets/todo.jpg";
import ecommerce from "../../assets/ecommerce.jpg";
import portfolio from "../../assets/portfolio.jpg";

// Projects array with your actual projects
const projects = [
  {
    title: "Interactive To-Do Web App",
    desc: "A responsive task management web app with add, delete, and complete features using localStorage and smooth animations.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    link: "https://mehboob368.github.io/Todo/", // update if you host it
    image: todo,
  },
  {
    title: "ShopEase – E-Commerce Website",
    desc: "A modern single-page e-commerce website with animated UI, light/dark theme toggle, and attractive product sections.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    link: "https://mehboob368.github.io/shopease/", // update your actual link
    image: ecommerce,
  },
  {
    title: "Personal Portfolio Website",
    desc: "A professional React.js portfolio showcasing projects, skills, and contact details with responsive design and theme toggle.",
    tags: ["React.js", "Bootstrap", "CSS", "JavaScript"],
    link: "https://mehboob368.github.io/portfolio/", // your portfolio link
    image: portfolio,
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <p className="lead">Some of my featured work showcasing my frontend development skills.</p>
        <div className="projects grid">
          {projects.map((p) => (
            <article key={p.title} className="project card">
              <div className="thumb">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="body">
                <h3>{p.title}</h3>
                <p className="muted">{p.desc}</p>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="actions">
                  <a className="btn" href={p.link} target="_blank" rel="noreferrer">
                    View
                  </a>
                  <a className="btn ghost" href="#contact">
                    Hire Me
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
