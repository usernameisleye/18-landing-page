import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const toggleNavbar = () =>{
        setShow(!show);
    }

    return ( 
        <nav className="navbar">
            <div className="nav-links">
                <a href="/">
                    <img src="./images/LogoBlack.png" alt="18_logo" className="" />
                </a>

                <div className="links-navigation">
                    <ul role="list" className={`links ${show ? "show" : "" }`}>
                        <span onClick={toggleNavbar}>Close</span>
                        <li><a href="#aboutus">About Us</a></li>
                        <li><a href="#howitworks">How it works</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                    </ul>
                </div>
            </div>

            <button className="navbar-toggle" aria-hidden="false" onClick={toggleNavbar}>
                <img src="./images/Combined_Shape.png" alt="Navbar toggle button" />
                <span className="visually-hidden">Menu</span>
            </button>

            <div className="nav-buttons">
                <Link to="/login">
                    <button className="login">Login</button>
                </Link>
                
                <Link to="/signup">
                    <button className="signup">Sign Up</button>
                </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;