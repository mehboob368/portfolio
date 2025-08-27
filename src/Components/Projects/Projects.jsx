import React from "react";
import "./Projects.css";

// Images import
import sport from "../../assets/sport.png";
import portfolio from "../../assets/portfolio.png";
import edusity from "../../assets/edusity.png";

// Projects array with unique image for each project
const projects = [
  {
    title: "Educational Platform",
    desc: "A modern studying website providing structured courses and interactive learning experiences, built with React and responsive design.",
    tags: ["React", "CSS", "Vite"],
    link: "https://mehboob368.github.io/ReactJSProject.github.io/",
    image: edusity,
  },
  {
    title: "Personal Portfolio Website",
    desc: "An interactive and animated personal portfolio showcasing projects and skills with smootth scrolling and and reusable components.",
    tags: ["React", "CSS", "Vite"],
    link: "https://mehboob368.github.io/",
    image: portfolio,
  },
  {
    title: "E-Commerce Platform",
    desc: "A fully responsive e-commerce website built with React, featuring smooth animations, reusable components, and modern UI design.",
    tags: ["React", "CSS", "Vite"],
    link: "https://insighteye-react.vercel.app/",
    image: sport,
  },
];


function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <p className="lead">A few highlights. More available on request.</p>
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
                  <a className="btn" href={p.link}>
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
