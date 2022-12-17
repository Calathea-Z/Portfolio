import '../styles/footer.css'
import { FiInstagram } from 'react-icons/fi'

const Footer  = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://instagram.com'>< FiInstagram /> </a>
      </div>
    </footer>
  )
}

export default Footer
