import React from "react";

function Contact(props) {
    return (
        <div className="contact">
        <div className="container">
            <h2>Contact</h2>
            <form
            action="https://formspree.io/mgenlpky"
            method="POST"
            >
            <label>Name</label><br></br>
                <input type="text" name="_replyto"/>
            <br></br>
            <label>Email</label><br></br>
                <input type="text" name="_replyto"/>
            <br></br>
            <label>Message:</label><br></br>
                <textarea name="message"></textarea>
            <br></br>
            <button type="submit">Send</button>
            </form>
        </div>
        </div>
    );
}

export default Contact;