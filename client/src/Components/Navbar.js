import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import img from '../Images/icon.jpeg';
function Navbar() {
  const scrollingElement = (document.scrollingElement || document.body);
  const scrollToBottom = () => {
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
 }
 
  
  return (
    <>
    <header>
    <div class="container">
      <Link to = {`/`}>
        <img class="logo" src={img} href="/" alt="valorant"></img>
      </Link>
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/surveys"}>Surveys</Link></li>
          <li><Link onClick={scrollToBottom}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
    </>
  );
}

export default Navbar;
