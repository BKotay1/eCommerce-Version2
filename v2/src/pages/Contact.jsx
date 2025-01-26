import react from 'react';

// src/pages/Contact.jsx
import Header from '../components/header';
import Footer from '../components/Footer';

const Contact = () => (
  <div>
    <Header />
    <div className="contact-form__header">
      <header className="contact-us">
        Contact <img src="/assets/contact-logo.png" alt="contact logo" className="contact-img" /> for more...
        <ul>
          <li>Personalized programs to fit your every need</li>
          <li>Stay locked in and get reminders</li>
          <li>Become... STRONGER. FASTER. BETTER.</li>
        </ul>
      </header>
      <form className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
        <button type="submit" id="submit">Submit Response</button>
      </form>
      <div className="contact-details">
        <h3>Get in Touch. Stay in Touch.</h3>
        <p>Email: <a href="mailto:info@bkathletix.org">info@bkathletix.org</a></p>
        <p>Phone: +1 (800)-343-6734</p>
        <p>Address: 1423 Red Ventures Dr, Fort Mill, SC 29707</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;
