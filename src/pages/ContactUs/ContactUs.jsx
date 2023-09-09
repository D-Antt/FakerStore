import React from 'react';
import './ContactUs.css'; // Make sure to create and import the CSS file

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <textarea placeholder="Write your message here!"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
