function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>

      <p style={styles.desc}>{description}</p>

      <div style={styles.tech}>
        {tech.map((item, index) => (
          <span key={index} style={styles.techItem}>
            {item}
          </span>
        ))}
      </div>

      <div style={styles.links}>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href={live} target="_blank" rel="noreferrer">
          Live
        </a>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#1e1e1e",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  title: {
    marginBottom: "10px",
  },
  desc: {
    fontSize: "14px",
    opacity: 0.8,
  },
  tech: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    margin: "10px 0",
  },
  techItem: {
    background: "#333",
    padding: "5px 8px",
    borderRadius: "5px",
    fontSize: "12px",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
};

export default ProjectCard;