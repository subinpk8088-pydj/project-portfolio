import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyPortfolio</div>

      <div
        style={{
          ...styles.links,
          display: menuOpen ? "flex" : "",
        }}
      >
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>

      <button
        style={styles.menuBtn}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#111",
    color: "white",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
  menuBtn: {
    display: "none",
    background: "none",
    border: "none",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  },
};

export default Navbar;