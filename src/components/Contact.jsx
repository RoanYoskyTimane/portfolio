import React from "react";

function Contact()
{
    return(
        <section id="contact-me">
            <h2>Contact Me</h2>
            <div className="form">
                <form action="https://formspree.io/f/mnqkqadn" method="POST" className="contact-form">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <textarea name="message" placeholder="Enter Message"></textarea>
                    <button type="submit" className="button-form">Send</button>
                </form>
            </div>
        </section>    
    );    
}

export default Contact;