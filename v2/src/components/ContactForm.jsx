import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // Track if the form was successfully submitted

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only letters for first and last names
    if (name === 'firstName' || name === 'lastName') {
      if (/^[a-zA-Z]*$/.test(value)) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value
        }));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if the first name is empty or too short
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    // Check if the last name is empty or too short
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Check if the email is empty or too short before the "@"
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (formData.email.split('@')[0].length < 2) {
      newErrors.email = 'Email must have at least 2 characters before the "@" symbol';
    }

    // Check if the message is empty or too short
    if (!formData.message) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors); // Set the errors state with the new errors
    return Object.keys(newErrors).length === 0; // Return true if no errors, else false
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Validate the form before submitting
    if (validateForm()) {
      setFormSubmitted(true);  // Set form as successfully submitted
      setErrors({}); // Clear any errors on successful submit

      // You can handle the form data here (e.g., send to an API or email)
      // For now, we just reset the form as a demo.
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } else {
      setFormSubmitted(false); // If validation fails, form is not submitted
    }
  };

  return (
    <>
      <div>
        <div className="contact-form__header">
          <header className="contact-us">
            {formSubmitted ? (
              <div className="success-message">
                <span className="checkmark">&#10003;</span> {/* Checkmark symbol */}
                <p>Your message has been successfully submitted!</p>
              </div>
            ) : (
              <>
                <p>
                  Contact <img src="/images/contact-logo.png" alt="contact logo" className="contact-img" /> for more...
                </p>
                <ul>
                  <li>Personalized programs to fit your every need</li>
                  <li>Stay locked in and get reminders</li>
                  <li>To Become ... STRONGER. FASTER. BETTER.</li>
                </ul>
              </>
            )}
          </header>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">Your First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <label htmlFor="lastName">Your Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            {/* Always show the submit button, but conditionally show success message */}
            <button type="submit" id="submit">Submit Message</button>
          </form>

          <div className="contact-details">
            <h3>Get in Touch. Stay in Touch <img src="/images/contact-logo.png" alt="contact logo" className="contact-img" /></h3>
            <p>Email: <a href="mailto:info@bkathletix.org">info@bkathletix.org</a></p>
            <p>Phone: +1 (800)-343-6734</p>
            <p>Address: 1423 Red Ventures Dr, Fort Mill, SC 29707</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;



