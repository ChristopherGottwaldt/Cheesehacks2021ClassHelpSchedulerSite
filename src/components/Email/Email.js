import './Email.css'
import React, { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_m9e6cpw', 'template_8epluom', form.current, 'user_cL5eRH8y6NX3DenXxS5s0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
    <form ref={form} onSubmit={sendEmail}>
        <label>Name: </label>
        <input type="text" name="user_name" />
        <label>Email: </label>
        <input type="email" name="to_email" />
        <input type="submit" class = "button" value="Submit" />
    </form>
    );
};
 export default ContactUs;