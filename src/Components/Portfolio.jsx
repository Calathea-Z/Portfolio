import '../styles/portfolio.css'
import BlackjackIMG from '../assets/blackjack_ui.png'
import RandomDogIMG from '../assets/randomdog_ui.png'

const data = [
  {
    id: 1,
    image: BlackjackIMG,
    title: 'Blackjack (JavaScript)',
    github: 'https://github.com/Calathea-Z/black_jack',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: RandomDogIMG,
    title: 'Random Dog App (REACT)',
    github: 'https://github.com/Calathea-Z/project-two-react-app',
    demo: 'https://github.com' 
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
            <a href={ github } className='btn'>GitHub</a>
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
