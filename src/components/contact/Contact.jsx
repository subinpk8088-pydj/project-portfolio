function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.left}>
        <p style={styles.smallTitle}>CONTACT</p>

        <h2 style={styles.heading}>
          Let’s discuss projects, systems, and development opportunities
        </h2>

        <p style={styles.description}>
          Open to collaborating on modern web applications, frontend systems,
          backend architecture, and scalable business platforms.
        </p>

        <div style={styles.contactInfo}>
          <div style={styles.infoCard}>
            <h4>Email</h4>
            <p>subinsuresh8088@gmail.com</p>
          </div>

          <div style={styles.infoCard}>
            <h4>Location</h4>
            <p>Kannur, Kerala</p>
          </div>

          <div style={styles.infoCard}>
            <h4>Phone</h4>
            <p>9496313744</p>
          </div>
        </div>
      </div>

      <div style={styles.right}>
        <form style={styles.form}>
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

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
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
  },

  input: {
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    fontSize: "1rem",
    outline: "none",
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
  },
};

export default Contact;