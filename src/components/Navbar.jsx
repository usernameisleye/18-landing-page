import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const toggleNavbar = () =>{
        setShow(!show);
    };

    const links = [
        {
            id: 1,
            to: "#aboutus",
            body: "About Us"
        },
        {
            id: 2,
            to: "#howitworks",
            body: "How it works"
        },
        {
            id: 3,
            to: "#pricing",
            body: "Pricing"
        },
        {
            id: 4,
            to: "#faqs",
            body: "FAQs"
        }
    ];
    
    const buttons = [
        {
            id: 1,
            to: "/login",
            class: "login",
            body: "Login"
        },
        {
            id: 2,
            to: "/signup",
            class: "signup",
            body: "Sign Up"
        }
    ]

    return ( 
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">
                    <img src="./images/LogoBlack.png" alt="18_logo" className="" />
                </Link>

                <div className="links-navigation">
                    <ul role="list" className={`links ${show ? "show" : "" }`}>
                        <span onClick={toggleNavbar}>Close</span>

                        {links.map(link => (
                            <li key={ link.id } onClick={toggleNavbar}>
                                <a href={link.to}>{ link.body }</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <button className="navbar-toggle" aria-hidden="false" onClick={toggleNavbar}>
                <img src="./images/Combined_Shape.png" alt="Navbar toggle button" />
                <span className="visually-hidden">Menu</span>
            </button>

            <div className={`nav-buttons ${show ? "show" : "" }`}>
                
                {buttons.map(button => (
                    <Link key={ button.id } to={ button.to } onClick={toggleNavbar}>
                        <button className={ button.class }>{ button.body }</button>
                    </Link>
                ))}
            </div>
        </nav>
     );
}
 
export default Navbar;