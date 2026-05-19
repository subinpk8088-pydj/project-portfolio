function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <form>
        <input type="text" placeholder="Your Name" />
        <br />
        <input type="email" placeholder="Your Email" />
        <br />
        <textarea placeholder="Message"></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;