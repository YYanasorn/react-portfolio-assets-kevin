import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className='mb-10 flex items-center justify-between py-3'>
    <div className="flex flex-shrink-0 items-center">My Profile</div>
    
      <div className="m-8 mt-2 flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/yanasorn-yeeduang-51a04a204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin /></a>
        <a href="https://github.com/YYanasorn" className="text-2xl text-white"><FaGithub /></a>
        <FaInstagram />
      </div>
    </nav>
  )
}

export default NavBar
