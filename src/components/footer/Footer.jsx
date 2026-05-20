import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      style={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Glow */}
      <div style={styles.glowOne}></div>
      <div style={styles.glowTwo}></div>

      <motion.h3
        style={styles.logo}
        whileHover={{
          scale: 1.05,
          rotateX: 8,
          rotateY: -8,
        }}
        transition={{ duration: 0.4 }}
      >
        SUBIN PK
      </motion.h3>

      <p style={styles.text}>
        Full Stack Developer • Django • React • REST APIs
      </p>

      <div style={styles.links}>
  <motion.a
    href="https://github.com/subinpk8088-pydj"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.link}
    whileHover={{
      y: -5,
      scale: 1.08,
    }}
  >
    GitHub
  </motion.a>

  <motion.a
    href="https://linkedin.com/in/subin-pk"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.link}
    whileHover={{
      y: -5,
      scale: 1.08,
    }}
  >
    LinkedIn
  </motion.a>

  <motion.a
    href="https://subindev-seven.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.link}
    whileHover={{
      y: -5,
      scale: 1.08,
    }}
  >
    Portfolio
  </motion.a>
</div>

      <motion.div
        style={styles.line}
        initial={{ width: 0 }}
        whileInView={{ width: "180px" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      ></motion.div>

      <p style={styles.copy}>
        © 2026 Subin PK. All rights reserved.
      </p>
    </motion.footer>
  );
}

const styles = {
  footer: {
    position: "relative",

    background:
      "linear-gradient(180deg, #080808 0%, #050505 100%)",

    color: "white",

    padding: "100px 10% 70px",

    textAlign: "center",

    overflow: "hidden",
  },

  glowOne: {
    position: "absolute",
    width: "320px",
    height: "320px",

    background:
      "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",

    top: "-120px",
    left: "-120px",

    filter: "blur(30px)",
  },

  glowTwo: {
    position: "absolute",
    width: "280px",
    height: "280px",

    background:
      "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",

    bottom: "-100px",
    right: "-100px",

    filter: "blur(30px)",
  },

  logo: {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",

    fontWeight: "800",

    marginBottom: "18px",

    letterSpacing: "4px",

    background:
      "linear-gradient(90deg, #ffffff, #cfcfcf)",

    WebkitBackgroundClip: "text",

    WebkitTextFillColor: "transparent",

    transformStyle: "preserve-3d",

    textShadow:
      "0 10px 30px rgba(255,255,255,0.08)",

    position: "relative",

    zIndex: 2,
  },

  text: {
    color: "#999",

    marginBottom: "40px",

    fontSize: "1.05rem",

    letterSpacing: "1px",

    position: "relative",

    zIndex: 2,
  },

  links: {
    display: "flex",

    justifyContent: "center",

    gap: "30px",

    marginBottom: "45px",

    flexWrap: "wrap",

    position: "relative",

    zIndex: 2,
  },

  link: {
    color: "white",

    textDecoration: "none",

    fontSize: "1rem",

    padding: "14px 24px",

    borderRadius: "999px",

    background:
      "rgba(255,255,255,0.05)",

    border:
      "1px solid rgba(255,255,255,0.08)",

    backdropFilter: "blur(10px)",

    transition: "all 0.3s ease",

    boxShadow:
      "0 10px 25px rgba(0,0,0,0.25)",
  },

  line: {
    height: "1px",

    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",

    margin: "0 auto 30px",
  },

  copy: {
    color: "#666",

    fontSize: "0.92rem",

    letterSpacing: "1px",

    position: "relative",

    zIndex: 2,
  },
};

export default Footer;