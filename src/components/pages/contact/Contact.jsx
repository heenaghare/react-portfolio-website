import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', { // Update this to your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="contact" id="contact">     
       <div className="get">Get in Touch</div>
<br></br>
      <div className="max-width">
        <div className="contact-content">

          <div className="column left">
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Heena R Ghare</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Pune, India</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">heenaghare07@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="field name">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="field email">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="field textarea">
                <textarea 
                  name="message"
                  cols="10" 
                  rows="5" 
                  placeholder="Message.." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button className="secondary" type="submit">Send message</button>
              </div>
            </form>
            {status && <div className="form-status">{status}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
