import "./projects.css";

function ProjectCard({ project }) {
  return (
    <div style={styles.card} className="project-card">
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          style={styles.image}
          className="project-image"
        />
      </div>

      <div style={styles.content}>
        <p style={styles.category}>
          {project.category}
        </p>

        <h3 style={styles.title}>
          {project.title}
        </h3>

        <p style={styles.description}>
          {project.description}
        </p>

        <p style={styles.tech}>
          {project.tech}
        </p>

        <div style={styles.buttons}>
          <a
            href={project.live}
            style={styles.primaryBtn}
            className="project-button"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            style={styles.secondaryBtn}
            className="project-button"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "white",

    borderRadius: "24px",

    overflow: "hidden",

    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",

    display: "flex",
    flexDirection: "column",

    height: "100%",
  },

  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
  },

  content: {
    padding: "30px",
  },

  category: {
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#777",
    marginBottom: "14px",
  },

  title: {
    fontSize: "1.5rem",
    marginBottom: "18px",
    color: "#111",
  },

  description: {
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "22px",
  },

  tech: {
    color: "#111",
    fontWeight: "600",
    lineHeight: "1.7",
    marginBottom: "28px",
  },

  buttons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "12px 20px",
    background: "#111",
    color: "white",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "600",
  },

  secondaryBtn: {
    padding: "12px 20px",
    border: "1px solid #ddd",
    color: "#111",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "600",
  },
};

export default ProjectCard;