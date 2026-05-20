import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      style={styles.section}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        style={styles.left}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p style={styles.smallTitle}>CONTACT</p>

        <h2 style={styles.heading}>
          Let’s discuss projects, systems, and development opportunities
        </h2>

        <p style={styles.description}>
          Open to collaborating on modern web applications, frontend systems,
          backend architecture, and scalable business platforms.
        </p>

        <div style={styles.contactInfo}>
          <motion.div
            style={styles.infoCard}
            whileHover={{
              y: -6,
              transition: { duration: 0.3 },
            }}
          >
            <h4>Email</h4>
            <p>subinsuresh8088@gmail.com</p>
          </motion.div>

          <motion.div
            style={styles.infoCard}
            whileHover={{
              y: -6,
              transition: { duration: 0.3 },
            }}
          >
            <h4>Location</h4>
            <p>Kannur, Kerala</p>
          </motion.div>

          <motion.div
            style={styles.infoCard}
            whileHover={{
              y: -6,
              transition: { duration: 0.3 },
            }}
          >
            <h4>Phone</h4>
            <p>9496313744</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={styles.right}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.form
          style={styles.form}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
          />

          <textarea
            placeholder="Project Discussion"
            rows="6"
            style={styles.textarea}
          ></textarea>

          <motion.button
            type="submit"
            style={styles.button}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}

const styles = {
  section: {
    display: "flex",
    justifyContent: "space-between",
    gap: "70px",
    padding: "120px 10%",
    background: "#0f0f0f",
    color: "white",
    flexWrap: "wrap",
  },

  left: {
    flex: 1,
    minWidth: "320px",
  },

  right: {
    flex: 1,
    minWidth: "320px",
  },

  smallTitle: {
    textTransform: "uppercase",
    letterSpacing: "3px",
    color: "#888",
    marginBottom: "20px",
    fontSize: "0.9rem",
  },

  heading: {
    fontSize: "clamp(2rem, 5vw, 4rem)",
    lineHeight: "1.2",
    marginBottom: "30px",
  },

  description: {
    color: "#bbb",
    lineHeight: "1.9",
    marginBottom: "40px",
    maxWidth: "650px",
  },

  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  infoCard: {
    background: "rgba(255,255,255,0.05)",
    padding: "25px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.08)",

    backdropFilter: "blur(12px)",

    transition: "all 0.3s ease",
  },

  form: {
    background: "rgba(255,255,255,0.05)",
    padding: "40px",
    borderRadius: "24px",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backdropFilter: "blur(14px)",

    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
  },

  input: {
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    fontSize: "1rem",
    outline: "none",

    transition: "all 0.3s ease",
  },

  textarea: {
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    fontSize: "1rem",
    outline: "none",
    resize: "none",

    transition: "all 0.3s ease",
  },

  button: {
    padding: "16px",
    border: "none",
    borderRadius: "12px",
    background: "white",
    color: "black",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",

    transition: "all 0.3s ease",
  },
};

export default Contact;