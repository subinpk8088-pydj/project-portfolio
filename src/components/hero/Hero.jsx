import { useEffect } from "react";

const animationStyles = `
  @keyframes slideFromLeft {
    from { opacity: 0; transform: translateX(-70px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideFromRight {
    from { opacity: 0; transform: translateX(70px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .hero-tag {
    animation: slideFromLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
    animation-delay: 0.1s;
    opacity: 0;
  }

  .title-line { display: block; overflow: hidden; }

  .title-line-1 {
    animation: slideFromLeft 0.85s cubic-bezier(0.22,1,0.36,1) forwards;
    animation-delay: 0.3s;
    opacity: 0;
  }
  .title-line-2 {
    animation: slideFromRight 0.85s cubic-bezier(0.22,1,0.36,1) forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }
  .title-line-3 {
    animation: slideFromLeft 0.85s cubic-bezier(0.22,1,0.36,1) forwards;
    animation-delay: 0.7s;
    opacity: 0;
  }

  .hero-subtitle {
    animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards;
    animation-delay: 0.9s;
    opacity: 0;
  }

  .hero-btn-primary {
    animation: slideFromLeft 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
    animation-delay: 1.1s;
    opacity: 0;
  }
  .hero-btn-secondary {
    animation: slideFromRight 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
    animation-delay: 1.25s;
    opacity: 0;
  }

  @media (max-width: 768px) {
    .title-line-2 { animation-name: slideFromLeft; }
  }
`;

function Hero() {
  return (
    <>
      <style>{animationStyles}</style>
      <section id="home" style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.content}>
          <p className="hero-tag" style={styles.tag}>
            FULL STACK DEVELOPER • DJANGO • REACT • REST APIs
          </p>

          <h1 style={styles.title}>
            <span className="title-line title-line-1">Building scalable</span>{" "}
            <span className="title-line title-line-2">business applications</span>{" "}
            <span className="title-line title-line-3">& modern web systems</span>
          </h1>

          <p className="hero-subtitle" style={styles.subtitle}>
            Showcase of ERP platforms, billing systems, inventory management
            applications, authentication workflows, and responsive web interfaces
            developed using React, Django, MySQL, and modern frontend technologies.
          </p>

          <div style={styles.buttons}>
            <a href="#projects" className="hero-btn-primary" style={styles.primaryBtn}>
              Explore Projects
            </a>

            <a href="#contact" className="hero-btn-secondary" style={styles.secondaryBtn}>
              Contact
            </a>
          </div>
        </div>
      </section>
    </>
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