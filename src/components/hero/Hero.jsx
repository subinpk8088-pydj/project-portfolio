function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <p style={styles.tag}>Frontend Developer</p>

        <h1 style={styles.title}>
          I build modern <br /> React web experiences
        </h1>

        <p style={styles.subtitle}>
          Clean UI. Scalable code. Real-world projects using React, JavaScript,
          and modern frontend tools.
        </p>

        <div style={styles.buttons}>
          <a href="#projects" style={styles.primaryBtn}>
            View Projects
          </a>

          <a href="#contact" style={styles.secondaryBtn}>
            Contact Me
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
    alignItems: "center",
    padding: "0 10%",
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
    background: "rgba(0,0,0,0.55)",
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "700px",
  },

  tag: {
    letterSpacing: "2px",
    textTransform: "uppercase",
    opacity: 0.8,
    marginBottom: "10px",
  },

  title: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.85,
    marginBottom: "30px",
  },

  buttons: {
    display: "flex",
    gap: "15px",
  },

  primaryBtn: {
    padding: "12px 20px",
    background: "white",
    color: "black",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  secondaryBtn: {
    padding: "12px 20px",
    border: "1px solid white",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
  },
};

export default Hero;