function Footer() {
  return (
    <footer style={styles.footer}>
      <h3 style={styles.logo}>SUBIN PK</h3>

      <p style={styles.text}>
        Full Stack Developer • Django • React • REST APIs
      </p>

      <div style={styles.links}>
        <a href="#" style={styles.link}>
          GitHub
        </a>

        <a href="#" style={styles.link}>
          LinkedIn
        </a>

        <a href="#" style={styles.link}>
          Portfolio
        </a>
      </div>

      <p style={styles.copy}>
        © 2026 Subin PK. All rights reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#080808",
    color: "white",
    padding: "60px 10%",
    textAlign: "center",
  },

  logo: {
    fontSize: "2rem",
    marginBottom: "15px",
  },

  text: {
    color: "#999",
    marginBottom: "25px",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },

  link: {
    color: "white",
    textDecoration: "none",
  },

  copy: {
    color: "#666",
    fontSize: "0.9rem",
  },
};

export default Footer;