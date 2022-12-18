import '../styles/footer.css'
import { FiInstagram } from 'react-icons/fi'
import { TbBrandLinkedin } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa'

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
        <a href='https://www.linkedin.com/in/zach-sykes' target='_blank' rel="noreferrer">< TbBrandLinkedin /></a>
        <a href='https://github.com/Calathea-Z' target='_blank' rel="noreferrer">< FaGithub /></a>
        <a href='https://www.instagram.com/caltheaz/' target='_blank' rel="noreferrer">< FiInstagram /> </a>
      </div>
    </footer>
  )
}

export default Footer
