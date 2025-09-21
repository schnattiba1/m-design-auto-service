import Logo from "/src/imgs/logo.png";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

function Header() {
    // React State
  const [isOpen, setOpen] = useState(false);

  // Closing the hamburger menu once a link has been clicked
  const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };
  
  return (
    <>
      <header>
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="hamburger-container">
          <Hamburger
            className="hamburger"
            toggled={isOpen}
            toggle={setOpen}
            color="#4B9CD3"
            label="Show Menu"
          />
        </div>
      </header>

      {isOpen && (
        <nav>
          {/* Navigation */}
          <ul className="navigation">
            <li>
              <Link to="/" className="li" onClick={handleCloseMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="li" onClick={handleCloseMenu}>About</Link>
            </li>
            <li>
              <Link to="/contact" className="li" onClick={handleCloseMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
