import {HiOutlineHome} from 'react-icons/hi'
import {BiUserCircle} from 'react-icons/bi'
import {SiBookstack} from 'react-icons/si'
import {MdOutlineDesignServices} from 'react-icons/md'
import {BiMessageRoundedDetail} from 'react-icons/bi'


import '../styles/nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="#">< HiOutlineHome /></a>
      <a href="#about">< BiUserCircle /></a>
      <a href="#experience">< SiBookstack /></a>
      <a href="#portfolio">< MdOutlineDesignServices /></a>
      <a href="#contact">< BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default Nav