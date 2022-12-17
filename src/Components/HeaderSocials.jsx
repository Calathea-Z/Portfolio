import {IoLogoLinkedin} from 'react-icons/io';
import {GrGithub} from 'react-icons/gr';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='_blank'><IoLogoLinkedin/></a>
        <a href='https://github.com' target='_blank'><GrGithub/></a>
    </div>
  )
}

export default HeaderSocials
 