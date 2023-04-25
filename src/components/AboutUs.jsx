const AboutUs = () => {
    return ( 
        <section id="aboutus" className="about-us">
            <div className="about-us_left">
                <img src="./images/Illustration_2.png" alt="About us image" />
            </div>

            <div className="about-us_right">
                <div className="header">
                    <p>About Us</p>
                    <h2>Faster, friendlier feedback loops make life easier.</h2>
                </div>

                <p>Add a Viewer to your team so they can see everything you share, or invite people to individual documents. It’s up to you. Stakeholders can check out designs in their web browser, test prototypes and leave feedback for free.</p>

                <ul role="info">
                    <li>Shared Cloud Libraries, for a single source of truth</li>
                    <li>Prototype previews for user testing and research</li>
                    <li>Easy organization with projects</li>
                    <li>Free developer handoff, right inside the browser</li>
                    <li>Two-factor authentication and SSO</li>
                </ul>
            </div>
        </section>
     );
}
 
export default AboutUs;