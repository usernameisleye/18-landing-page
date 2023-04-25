import { useEffect, useState } from "react";

const Footer = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const checkScroll = () =>{
            setScrollY(window.scrollY)
        }

        window.addEventListener("scroll", checkScroll)
    }, []);

    if(scrollY === 4410){
        // In progress...
    }

    const socials = [
        {
            id: 1,
            src: "social_fb",
            alt: "Facebook logo"
        },
        {
            id: 2,
            src: "social_tw",
            alt: "Twitter logo"
        },
        {
            id: 3,
            src: "social_gl",
            alt: "Google Plus logo"
        },
        {
            id: 4,
            src: "social_in",
            alt: "LinkedIn logo"
        },
        {
            id: 5,
            src: "social_yt",
            alt: "Youtube logo"
        }
    ];

    const navlinks = [
        {
            id: 1,
            href: "aboutus",
            body: "About us"
        },
        {
            id: 2,
            href: "howitworks",
            body: "How it works"
        },
        {
            id: 3,
            href: "pricing",
            body: "Pricing"
        },
        {
            id: 4,
            href: "faqs",
            body: "FAQs"
        },
    ];

    const others = [
        "Lead generation",
        "Customer engagement",
        "Customer support",
        "Help Center Articles",
        "Outbound Messages",
    ];

    const date = new Date();

    return ( 
        <footer>
            <div className="first">
                <div className="first_image">
                    <a href="/">
                        <img src="./images/LogoWhite.png" alt="18 footer logo" />
                    </a>
                </div>

                <div className="first_mail">
                    <p>Email</p>
                    <p>info@the18.design</p>
                </div>
            </div>

            <div className="second">
                <ul role="list">
                    {socials.map(social => (
                        <li key={social.id}>
                            <a href="/">
                                <img src={`./images/${social.src}.png`} alt={social.alt} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="third">
                <ul role="list">
                    {navlinks.map(navlink => (
                        <li key={ navlink.id }>
                            <a href={`#${ navlink.href }`}>{ navlink.body }</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="fourth">
                <ul role="list">
                    {others.map(other => (
                        <li key={ other }>{ other }</li>
                    ))}
                </ul>
            </div>

            <div className="fifth">
                <h2>Want to recieve our awesome stories?</h2>

                <div className="subscribe">
                    <input
                      type="email"
                      placeholder="Enter your email" 
                    />

                    <button>Subscribe</button>
                </div>
            </div>

            <p className="copyright">© {date.getFullYear()} 18 Design, all rights reserved.</p>
        </footer>
     );
}
 
export default Footer;