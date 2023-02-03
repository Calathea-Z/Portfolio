import '../styles/portfolio.css'
import ShoeString from '../assets/shoestring_mockup.png'
import RandomDogIMG from '../assets/random_dog_mock.png'
import DeliveryApp from '../assets/delivery_app_mockup.png'
import MelodiusDemoPhoto from '../assets/melodius_mockup.png'




const data = [
  {
    id: 1,
    image: MelodiusDemoPhoto,
    title: "Melodious",
    description: "My playlist generator app is a unique and innovative solution for music lovers who are looking for personalized playlists. The app leverages the power of Spotify and OpenAI APIs to deliver artists suggestions based on the user's input prompt. It allows the user to input any sort of prompt they want and get back artist suggestions that can be used to build their playlists. The app also serves as a spotify controller, making it convenient for users to play music directly from the app. With its user-friendly interface and advanced features, the playlist generator is a perfect tool for anyone looking to enhance their music listening experience.",
    github: 'https://github.com/Calathea-Z/Melodious',
    demo: 'https://melodius.vercel.app/',
  },
  {
    id: 2,
    image: DeliveryApp,
    title: 'To Your Door (Delivery App Case Study)',
    description: "This app was built through reverse-engineering of top delivery apps. Built with React Native, it's fast and easy to use on your mobile device. The database is a breeze to update thanks to Sanity.io and it looks great using Tailwind.css styling.",
    github: 'https://github.com/Calathea-Z/To-Your-Door-Delivery-App-Case-Study-',
    demo: 'https://youtube.com/shorts/h0LDTesEako?feature=share'
  },
  {
    id: 3,
    image: ShoeString,
    title: 'ShoeString (MERN Stack)',
    description: "ShoesString is a digital guest book for people all over the world to share their thoughts on cool spots and experiences with their friends. My teammate and I built the app using React, Next.js, Node.js, Express.js, and MongoDB in a one week sprint",
    github: 'https://github.com/Calathea-Z/ShoeString-frontend-v2',
    demo: 'https://shoe-string-frontend-v2.vercel.app/'
  },
  {
    id: 4,
    image: RandomDogIMG,
    title: 'Random Dog (React, Node.js)',
    description: "Random Dog was developed with the aim of promoting canine adoption and spreading happiness through its user-friendly interface. Utilizing React technology, the app accesses a API to showcase photographs of diverse breeds of dogs in a random manner. User have the option to further refine their selection by specifying a specific breed of their preference.",
    github: 'https://github.com/Calathea-Z/Find-A-Dog',
    demo: 'https://randomdogphoto.netlify.app' 
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article key={ id } className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={ image } alt={title} className='port-photo' />
          </div>
          <h3>{ title }</h3>
          <h5 className="portfolio__description">{description}</h5>
          <div className="portfolio__item-cta">
            <a href={ github } className='btn' target='_blank'>GitHub</a>
            <a href={ demo } className='btn btn-primary' target='_blank'>Demo</a>
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
