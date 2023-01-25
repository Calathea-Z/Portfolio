import '../styles/portfolio.css'
import ShoeString from '../assets/shoestring_mockup.png'
import RandomDogIMG from '../assets/random_dog_mock.png'
import DeliveryApp from '../assets/delivery_app_mockup.png'




const data = [
  {
    id: 1,
    image: DeliveryApp,
    title: 'To Your Door (Delivery App Case Study)',
    description: "This app was built by reverse engineering popular delivery apps. This app was developed with React Native using React Redux and is optimized for mobile devices. It has a user friendly database built using Sanity that can easily be added to by anyone, and is styled using Tailwind.CSS",
    github: 'https://github.com/Calathea-Z/To-Your-Door-Delivery-App-Case-Study-',
    demo: 'https://youtube.com/shorts/h0LDTesEako?feature=share'
  },
  // {
  //   id: 2,
  //   image: ShoeString,
  //   title: 'ShoeString (MERN Stack)',
  //   description: "ShoesString is a digital guest book for the world allowing users to comment about local spots of interest and share their experiences with friends.I built the full stack application with one teammate using React, Node.js, Express.js, and MongoDB.",
  //   github: 'https://github.com/Calathea-Z/ShoeString-Frontend',
  //   demo: 'https://shoestring.netlify.app'
  // },
  {
    id: 3,
    image: RandomDogIMG,
    title: 'Random Dog App (React, Node.js)',
    description: " The Random Dog App was created to encourage adoption of dogs in need and also to provide some joy at anytime of the day. This app was built using React. It calls an API and outputs photos of random dogs. The user can be more specific and select by breed if they so choose.",
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
