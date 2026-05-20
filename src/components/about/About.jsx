function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.left}>
        <p style={styles.smallTitle}>ABOUT</p>

        <h2 style={styles.heading}>
          Developing scalable full stack applications with modern web
          technologies
        </h2>

        <p style={styles.description}>
          Full stack developer experienced in building ERP systems, billing
          platforms, inventory management applications, authentication systems,
          and responsive business web applications using Django, React, MySQL,
          PostgreSQL, and REST APIs.
        </p>

        <div style={styles.statsContainer}>
          <div style={styles.statBox}>
            <h3 style={styles.statNumber}>2+</h3>
            <p style={styles.statText}>Years Experience</p>
          </div>

          <div style={styles.statBox}>
            <h3 style={styles.statNumber}>10+</h3>
            <p style={styles.statText}>Projects Built</p>
          </div>

          <div style={styles.statBox}>
            <h3 style={styles.statNumber}>5+</h3>
            <p style={styles.statText}>Core Technologies</p>
          </div>
        </div>
      </div>

      <div style={styles.right}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Backend Development</h3>

          <p style={styles.cardText}>
            Django, REST APIs, authentication systems, database workflows,
            scalable backend architecture, and API integration.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Frontend Development</h3>

          <p style={styles.cardText}>
            React.js, JavaScript, responsive UI development, component
            architecture, and modern frontend design systems.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Database & Systems</h3>

          <p style={styles.cardText}>
            MySQL, PostgreSQL, Django ORM, inventory systems, billing
            workflows, and management platform development.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "flex",
    justifyContent: "space-between",
    gap: "80px",
    padding: "120px 10%",
    background: "#ffffff",
    flexWrap: "wrap",
  },

  left: {
    flex: 1,
    minWidth: "320px",
  },

  right: {
    flex: 1,
    minWidth: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },

  smallTitle: {
    textTransform: "uppercase",
    letterSpacing: "3px",
    color: "#666",
    marginBottom: "20px",
    fontSize: "0.9rem",
  },

  heading: {
    fontSize: "clamp(2rem, 5vw, 4rem)",
    lineHeight: "1.2",
    marginBottom: "30px",
    color: "#111",
  },

  description: {
    fontSize: "1.05rem",
    lineHeight: "1.9",
    color: "#444",
    marginBottom: "50px",
    maxWidth: "700px",
  },

  statsContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  statBox: {
    background: "#f5f5f5",
    padding: "25px",
    borderRadius: "16px",
    minWidth: "160px",
  },

  statNumber: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#111",
  },

  statText: {
    color: "#666",
  },

  card: {
    background: "#111",
    color: "white",
    padding: "35px",
    borderRadius: "20px",
  },

  cardTitle: {
    fontSize: "1.4rem",
    marginBottom: "15px",
  },

  cardText: {
    lineHeight: "1.8",
    opacity: 0.85,
  },
};

export default About;