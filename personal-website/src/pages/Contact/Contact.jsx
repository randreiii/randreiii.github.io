import React, { useState } from 'react';
import './Contact.css';
import { GrContact } from 'react-icons/gr';


const Contact = () => {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <form
                onSubmit={handleSubmit}>
                <h2>Let's connect <GrContact /></h2>
                <input type="text" placeholder="Email" />
                <textarea placeholder="Message" />
                <button type="submit">Send</button>
                {message && <span>Thank you for reaching out, I will reply shortly </span>}
            </form>
        </div>
    )
}

export default Contact;



