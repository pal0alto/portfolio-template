import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jb7u6n8', 'template_4hd43p7', form.current, 'v5zuLC_uVLuVWKU7r')
      .then((result) => {
        alert("Email sent successfully!");
      }, (error) => {
        alert("There was an error! Please try to send an email manually.");
      });

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>altugky@gmail.com</h5>
            <a href="mailto:altugky@gmail.com" target='_blank'>Send an email</a>
          </article>
          <article className="contact__option">
            <CiLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Altug Kaya</h5>
            <a href="https://www.linkedin.com/in/altu%C4%9F-kaya-6b6a52184/" target='_blank'>Connect with me</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+90 (554) 170 1574</h5>
            <a href="https://api.whatsapp.com/send?phone=905541701574" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTINS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact