import {useState, useEffect} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './styles/Contact.css';

function Contact({ scrollToSection,darkMode }) {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_TOKEN);
    const [showSuccess, setShowSucess] = useState(false);

    useEffect(()=>{
        if(state.succeeded){
            setShowSucess(true);

            const timer = setTimeout(()=>{
                setShowSucess(false);
            }, 5000)
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]
    )

    if (showSuccess) {
        return (
            <section id="contact" className="contact">
                <div className="contact-container">
                    <h2 className="section-title">Thanks for reaching out!</h2>
                    <p className="section-description">I'll get back to you as soon as possible.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="section-title">Let's Work Together</h2>
                <div className="section-divider"></div>
                <p className="section-description">
                    Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="form-input"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-input"
                            required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-input"
                    />
                    <textarea
                        rows="6"
                        name="message"
                        placeholder="Message"
                        className="form-textarea"
                        required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <div className="form-submit">
                        <button type="submit" 
                            disabled={state.submitting} 
                            className="submit-button">
                            {state.submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;