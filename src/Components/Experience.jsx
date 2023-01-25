import '../styles/experience.css'
import {FaCheckCircle} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
    
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>React Native</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>Next.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>Tailwind.css</h4>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>Express.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>Flask</h4>
              </div>
            </article>
            <article className='experience__details'>
              < FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>Django</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
