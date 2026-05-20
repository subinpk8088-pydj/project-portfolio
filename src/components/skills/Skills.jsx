function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Responsive Design",
      ],
    },

    {
      title: "Backend",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "REST APIs",
        "Authentication Systems",
        "CRUD Operations",
      ],
    },

    {
      title: "Databases",
      skills: [
        "MySQL",
        "PostgreSQL",
        "Django ORM",
        "Database Design",
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "API Integration",
        "Debugging",
      ],
    },
  ];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.header}>
        <p style={styles.smallTitle}>TECH STACK</p>

        <h2 style={styles.heading}>
          Technologies & tools used in modern web application development
        </h2>
      </div>

      <div style={styles.grid}>
        {skillGroups.map((group, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{group.title}</h3>

            <div style={styles.skillsContainer}>
              {group.skills.map((skill, idx) => (
                <span key={idx} style={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 10%",
    background: "#111",
    color: "white",
  },

  header: {
    marginBottom: "70px",
    maxWidth: "800px",
  },

  smallTitle: {
    textTransform: "uppercase",
    letterSpacing: "3px",
    color: "#888",
    marginBottom: "20px",
    fontSize: "0.9rem",
  },

  heading: {
    fontSize: "clamp(2rem, 5vw, 4rem)",
    lineHeight: "1.2",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },

  card: {
    background: "#1b1b1b",
    padding: "35px",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  cardTitle: {
    fontSize: "1.4rem",
    marginBottom: "25px",
  },

  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  skillBadge: {
    background: "rgba(255,255,255,0.08)",
    padding: "10px 16px",
    borderRadius: "999px",
    fontSize: "0.95rem",
    border: "1px solid rgba(255,255,255,0.1)",
  },
};

export default Skills;