import { Link } from "react-router-dom";
import '../styles/Header.css'

function Header(props) {

  return (
    <header>
      <div className="nav-style">
        <div className='home'>
          <Link to="/">HOME</Link>
        </div>
        <div className="test">
          <div>
            <Link to="/about">ABOUT</Link>
          </div>
          <div>
            <Link to="/projects">PROJECTS</Link>
          </div>  
        </div>
      </div>
    </header>
  );
}

export default Header;