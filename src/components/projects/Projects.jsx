import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.header}>
        <p style={styles.small}>MY WORK</p>

        <h2 style={styles.title}>Featured Projects</h2>

        <p style={styles.subtitle}>
          Selected projects focused on modern frontend experiences,
          scalable architecture, and clean UI development.
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          key={project.id}
          style={{
            ...styles.projectContainer,
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          }}
        >
          <div style={styles.imageWrapper}>
            <img
              src={project.image}
              alt={project.title}
              style={styles.image}
            />
          </div>

          <div style={styles.content}>
            <p style={styles.category}>{project.category}</p>

            <h3 style={styles.projectTitle}>{project.title}</h3>

            <p style={styles.description}>{project.description}</p>

            <p style={styles.tech}>
              <strong>Technologies:</strong> {project.tech}
            </p>

            <div style={styles.buttons}>
              <a href={project.live} style={styles.liveBtn}>
                Live Preview
              </a>

              <a href={project.github} style={styles.githubBtn}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 10%",
    background: "#f7f7f7",
  },

  header: {
    textAlign: "center",
    marginBottom: "80px",
  },

  small: {
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#666",
  },

  title: {
    fontSize: "3rem",
    margin: "10px 0",
  },

  subtitle: {
    maxWidth: "700px",
    margin: "0 auto",
    color: "#555",
    lineHeight: "1.7",
  },

  projectContainer: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    marginBottom: "120px",
    flexWrap: "wrap",
  },

  imageWrapper: {
    flex: 1,
    minWidth: "300px",
  },

  image: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },

  content: {
    flex: 1,
    minWidth: "300px",
  },

  category: {
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#666",
    marginBottom: "10px",
  },

  projectTitle: {
    fontSize: "2.2rem",
    marginBottom: "20px",
  },

  description: {
    color: "#444",
    lineHeight: "1.8",
    marginBottom: "20px",
  },

  tech: {
    marginBottom: "25px",
  },

  buttons: {
    display: "flex",
    gap: "15px",
  },

  liveBtn: {
    padding: "12px 20px",
    background: "black",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
  },

  githubBtn: {
    padding: "12px 20px",
    border: "1px solid black",
    color: "black",
    textDecoration: "none",
    borderRadius: "6px",
  },
};

export default Projects;