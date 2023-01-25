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
           <p>I am a passionate software engineer with a deep love for coding. My background as a touring musician and kitchen manager has instilled in me a unique perspective on teamwork, problem-solving, and the ability to adapt to new environments. When I'm not coding you'll most likely find me exploring new places, attending concerts, or riding my bike. Travel and new experiences are a huge part of my life. I believe that exposure to different cultures and ways of thinking has helped me to approach problems in new and innovate ways.  Currently, I reside in Asheville, North Carolina, where I work with my coding partner, Suzie the French Bulldog. I am open to relocating and always on the lookout for new opportunities to grow and develop my skills. I am excited to continue my journey in the tech industry and can't wait to see where it takes me next. 
          </p>
          
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
