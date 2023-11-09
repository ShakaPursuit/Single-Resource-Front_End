import React from 'react';
import Header from './Header';

function Contact() {
  return (

    <div>
      <Header/>
      <h2>Contact Us</h2>
      <address>
        <p>
          <strong>Address:</strong> 424 Fort Hamilton Drive, New Rochelle, NY 10801
        </p>
        <p>
          <strong>Phone:</strong> Customer Service: (718) 803-1118<br />
          Reservations: (718) 980-5561
        </p>
        <p>
          <strong>Email:</strong> General Inquiries: <a href="mailto:info@livingheungs.com">info@livingheungs.com</a><br />
          Reservations: <a href="mailto:reservations@livingheungs.com">reservations@livingheungs.com</a>
        </p>
      </address>
      <p>
<strong>Opening Hours:</strong><br />
        Monday - Thursday: 11:00 AM - 10:00 PM<br />
        Friday - Saturday: 11:00 AM - 11:00 PM<br />
        Sunday: 12:00 PM - 9:00 PM
      </p>
      <div>
        <strong>Connect With Us:</strong><br />
        <a href="https://www.facebook.com/livingheungs" target="_blank" rel="noopener noreferrer">Facebook</a><br />
        <a href="https://www.twitter.com/livingheungs" target="_blank" rel="noopener noreferrer">Twitter</a><br />
        <a href="https://www.instagram.com/livingheungs" target="_blank" rel="noopener noreferrer">Instagram</a><br />
        <a href="https://www.yelp.com/livingheungs" target="_blank" rel="noopener noreferrer">Yelp</a>
      </div>
    </div>
  );
}

export default Contact;