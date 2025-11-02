import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3 / Bootstrap", level: 92 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 75 },
  { name: "WordPress", level: 85 },
  { name: "Shopify", level: 80 },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <p className="lead">A quick look at my core stack and proficiency.</p>
        <div className="skills grid">
          {skills.map((s) => (
            <div className="skill card" key={s.name}>
              <div className="row">
                <strong>{s.name}</strong>
                <span className="muted">{s.level}%</span>
              </div>
              <div className="bar">
                {/* 👇 yahan percentage ke hisaab se width set ho rahi hai */}
                <span
                  style={{
                    width: `${s.level}%`,
                    "--w": `${s.level}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
