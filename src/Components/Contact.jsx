import '../styles/contact.css'
import {HiOutlineMail} from 'react-icons/hi'

const Contacts = () => {
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          < HiOutlineMail />
          <h4>Email</h4>
          <h5>zsykes21@gmail.com</h5>
          <a href='mailto:zsykes21@gmail.com'>Send a message</a>
        </article>
      </div>
     </div>
     <form action=''>
      <input type='text' name='name' placeholder='Your Full Name' required />
      <input type='email' name='email' placeholder='Your Email' required />
      <textarea name='message' rows='7' placeholder='Your Message' required />
      <button type='submit' className='btn btn-primary'>Send Message</button>
     </form>
    </section>
  )
}

export default Contacts
