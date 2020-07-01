import React from "react";
import ContactForm from "./ContactForm";

function Contact(props) {
    return (
        <div className="contact">
        <div className="container">
            <h2>Contact</h2>
            <ContactForm></ContactForm>
        </div>
        </div>
    );
}

export default Contact;