import '../styles/portfolio.css'
import ShoeString from '../assets/shoeString.png'
import RandomDogIMG from '../assets/randomdog_ui.png'

const data = [
  {
    id: 1,
    image: ShoeString,
    title: 'ShoeString (MongoDB, Express, React, Node.js)',
    github: 'https://github.com/Calathea-Z/ShoeString-Frontend',
    demo: 'https://shoestring.netlify.app'
  },
  {
    id: 2,
    image: RandomDogIMG,
    title: 'Random Dog App (React, Node.js)',
    github: 'https://github.com/Calathea-Z/Find-A-Dog',
    demo: 'randomdogphoto.netlify.app' 
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={ id } className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={ image } alt={title} />
          </div>
          <h3>{ title }</h3>
          <div className="portfolio__item-cta">
            <a href={ github } className='btn' target='_blank'>GitHub</a>
            <a href={ demo } className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
