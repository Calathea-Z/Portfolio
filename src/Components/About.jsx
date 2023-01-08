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
           <p>I am a software engineer with a background in fast-paced & high volume kitchen management where I've gained eight years of experience building and cultivating dynamic teams. I’m passionate about finding elegant and efficient solutions to difficult problems.
          </p>
          
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
