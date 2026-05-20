import { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        ...styles.navbar,
        ...(scrolled ? styles.navbarScrolled : {}),
      }}
    >
      {/* LOGO */}
      <div style={styles.logo}>SUBIN PK</div>

      {/* DESKTOP NAVIGATION */}
      <div style={styles.desktopLinks}>
        <a
          href="#home"
          style={styles.link}
          className="nav-link"
        >
          Home
        </a>

        <a
          href="#about"
          style={styles.link}
          className="nav-link"
        >
          About
        </a>

        <a
          href="#projects"
          style={styles.link}
          className="nav-link"
        >
          Projects
        </a>

        <a
          href="#skills"
          style={styles.link}
          className="nav-link"
        >
          Skills
        </a>

        <a
          href="#contact"
          style={styles.link}
          className="nav-link"
        >
          Contact
        </a>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        style={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <a
            href="#home"
            style={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            style={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#projects"
            style={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#skills"
            style={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>

          <a
            href="#contact"
            style={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",

    padding: "24px 8%",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    zIndex: 1000,

    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",

    background: "transparent",
  },

  navbarScrolled: {
    top: "18px",

    left: "50%",
    transform: "translateX(-50%)",

    width: "86%",

    borderRadius: "24px",

    padding: "16px 4%",

    background: "rgba(12,12,12,0.72)",

    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)",

    border: "1px solid rgba(255,255,255,0.06)",

    boxShadow:
      "0 10px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.05)",
  },

  logo: {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "700",
    letterSpacing: "2px",
    cursor: "pointer",
  },

  desktopLinks: {
    display: "flex",
    gap: "34px",
    alignItems: "center",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: "500",

    opacity: 0.88,

    position: "relative",

    transition: "all 0.3s ease",
  },

  menuButton: {
    display: "none",
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "1.8rem",
    cursor: "pointer",
  },

  mobileMenu: {
    position: "absolute",
    top: "100%",
    right: "5%",

    marginTop: "15px",

    width: "220px",

    background: "rgba(15,15,15,0.95)",

    backdropFilter: "blur(18px)",

    borderRadius: "18px",

    padding: "20px",

    display: "flex",
    flexDirection: "column",
    gap: "18px",

    border: "1px solid rgba(255,255,255,0.08)",

    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },

  mobileLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    opacity: 0.9,
    transition: "0.3s ease",
  },
};

export default Navbar;