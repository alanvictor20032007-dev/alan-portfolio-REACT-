import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "C Programming", level: 85 },
    { name: "HTML", level: 80 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            className="skill-item"
            data-level={skill.level}
            key={skill.name}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;