import profilePicture from '../assets/profile-picture.png'
import '../styles/Header.css'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Header() {
    return (
      <header>
          <div className="header-jumbotron">
              <img src={profilePicture}/>
              <h3>ASEP DILIGENT</h3>
              <p>Programmer - Content Creator - Dreamer</p>
              <div className="socialMedia">
                <a href=""><FaInstagram /></a>
                <a href=""><FaTiktok /></a>
                <a href=""><FaYoutube /></a>
              </div>
          </div>
      </header>
    )
  }

export default Header