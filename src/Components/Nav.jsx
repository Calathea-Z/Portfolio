import {HiOutlineHome} from 'react-icons/hi'
import {BiUserCircle} from 'react-icons/bi'
import {SiBookstack} from 'react-icons/si'
import {MdOutlineDesignServices} from 'react-icons/md'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {useState} from 'react';


import '../styles/nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>< HiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>< BiUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>< SiBookstack /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>< MdOutlineDesignServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>< BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default Nav