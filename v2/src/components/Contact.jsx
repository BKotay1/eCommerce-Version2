import React from 'react';

const Contact = () => {
  return (
    <div className="contact-form__header">
      <header className="contact-us">
        Contact <img src="./public/images/contact-logo.png" alt="contact logo" className="contact-img" /> for more . . .
        <ul>
          <li>personalized programs to Fit your every need</li>
          <li>To stay locked in and to get reminders</li>
          <li>To Become . . . </li>
          <h2> STRONGER. FASTER. BETTER.</h2>
        </ul>
        <form className="contact-form">
          <label htmlFor="name">your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
          <button type="submit" id="submit" className="submit-button">Submit Response</button>
        </form>
        <div className="contact-details">
          <h3>
            Get in Touch. Stay in Touch with
            <img src="./public/images/contact-details.png" alt="contact details logo" className="contact-img" />
            .
          </h3>
          <div className="contact-footer">
            <p className="text">
              Email:{' '}
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=info@bkathletix.org&su=SUBJECT&body=BODY&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@bkathletix.org
              </a>
            </p>
            <p className="phone-text">Phone: +1 (800)-343-6734</p>
            <p className="address-text"> Mail Address: 1423 Red Ventures Dr, Fort Mill, SC 29707</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Contact;