import '../styles/header.css'
import Resume from '../Components/Resume'

const Header= () => {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1> Zach Sykes</h1>
          <div className="text-light">
            FullStack Developer
          </div>
          <Resume />
        </div>
      </header>
    </div>
  )
}

export default Header