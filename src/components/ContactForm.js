import './ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact" id="contact">
      <h2>JOIN OUR <span className="red">TEAM</span></h2>
      <p>We're always on the lookout for new talent. Think you have what it takes to join our ranks?</p>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">SEND</button>
      </form>
    </section>
  );
}