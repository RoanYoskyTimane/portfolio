import { useState } from 'react';
import './styles/Contact.css';

function Contact({ scrollToSection,darkMode }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="section-title">Let's Work Together</h2>
                <div className="section-divider"></div>
                <p className="section-description">
                    Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
                </p>

                <div className="contact-form">
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="form-input"
                    />
                    <textarea
                        rows="6"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-textarea"
                    ></textarea>
                    <div className="form-submit">
                        <button onClick={handleSubmit} className="submit-button">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;