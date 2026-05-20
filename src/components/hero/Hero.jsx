function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <p style={styles.tag}>
          FULL STACK DEVELOPER • DJANGO • REACT • REST APIs
        </p>

        <h1 style={styles.title}>
          Building scalable <br />
          business applications <br />
          & modern web systems
        </h1>

        <p style={styles.subtitle}>
          Showcase of ERP platforms, billing systems, inventory management
          applications, authentication workflows, and responsive web interfaces
          developed using React, Django, MySQL, and modern frontend technologies.
        </p>

        <div style={styles.buttons}>
          <a href="#projects" style={styles.primaryBtn}>
            Explore Projects
          </a>

          <a href="#contact" style={styles.secondaryBtn}>
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
  height: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
  padding: "0 10%",
  paddingTop: "140px",

  backgroundImage:
    "url('https://images.unsplash.com/photo-1623281185000-6940e5347d2e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
},

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background:
      "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.45))",
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "850px",
  },

  tag: {
    letterSpacing: "3px",
    textTransform: "uppercase",
    opacity: 0.85,
    marginBottom: "18px",
    fontSize: "0.9rem",
    fontWeight: "500",
  },

  title: {
    fontSize: "clamp(2.8rem, 6vw, 5rem)",
    fontWeight: "800",
    marginBottom: "25px",
    lineHeight: "1.05",
  },

  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.88,
    marginBottom: "40px",
    lineHeight: "1.8",
    maxWidth: "700px",
  },

  buttons: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "14px 28px",
    background: "white",
    color: "black",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "700",
    transition: "0.3s ease",
  },

  secondaryBtn: {
    padding: "14px 28px",
    border: "1px solid rgba(255,255,255,0.5)",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    backdropFilter: "blur(10px)",
    transition: "0.3s ease",
  },
};

export default Hero;