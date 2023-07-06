import React, { useRef, useState, useEffect } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm('service_kdcavg6', 'template_fu3qtc3', form.current, 'yJzztjQLyS3v4JJW2')
      .then((result) => {
        console.log(result.text);
        setIsMessageSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    let timeout;
    if (isMessageSent) {
      timeout = setTimeout(() => {
        setIsMessageSent(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isMessageSent]);

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Contact options */}
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>mb9299471@gmail.com</h5>
          <a href="mailto:mb9299471@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messanger</h4>
          <h5>Mubashir Bashir</h5>
          <a href="https://m.me/profilelink" target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>0340-9299471</h5>
          <a href="https://wa.me/+923409299471?text=urlencodedtext" target='_blank'>Send a message</a>
        </article>
        </div>

        {isMessageSent && (
          <div className="success-message">
            <p>Message sent successfully!</p>
          </div>
        )}

        <form ref={form} onSubmit={sendEmail}>
          {/* Form fields */}
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' required rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

       
      </div>
    </section>
  );
};

export default Contact;

