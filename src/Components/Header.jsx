import '../styles/header.css';
import Resume from '../Components/Resume';
import profilePhoto from '../assets/profile.jpg';
import HeaderSocials from '../Components/HeaderSocials'

const Header= () => {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1> Zach Sykes</h1>
          <h5 className="text-light">
            FullStack Developer
          </h5>
          <Resume />
          <HeaderSocials />
          <div className='profile__photo'>
            <img src={profilePhoto} alt="Zach Sykes" />
          </div>

          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header