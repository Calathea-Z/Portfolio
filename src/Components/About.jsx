import '../styles/about.css'
import suziePhoto from '../assets/suzie.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolder2Line} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={suziePhoto} alt='Alternate Profile Image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>2+</small>
            </article>

            <article className='about__card'>
              <RiFolder2Line className='about__icon' />
              <h5>Projects</h5>
              <small>3+</small>
           </article>

          </div>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis odit nesciunt nostrum! Qui veniam ea quasi, sequi laboriosam odio error accusantium deserunt, maiores eum dolorum illum, quaerat quam optio non!
          </p>
          
          <a href='contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
