import '../styles/about.css'
import profileTwo from '../assets/profile2.png';
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
            <img src={profileTwo} alt='Profile'/>
          </div>
        </div>
        <div className='about__content'>
          {/* <div className='about__cards'>
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

          </div> */}
           <p>I am a musician turned software engineer with a background working in fast-paced & high volume kitchen management where I gained eight years of experience building and cultivating dynamic teams. When I'm not furthering my development skills you'll most likely find me at a concert, riding my bike, or planning my next trip to travel somewhere new. I currently reside in Asheville, North Carolina (I am open to relocating) where I work with my coding partner, Suzie the French Bulldog. 
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
