const HowItWorks = () => {
    const works = [
        {
            id: 1,
            src: "icon_1",
            header: "Shared Cloud Libraries",
            body: "Navigate to the Your work panel in the left sidebar. Select the library you want to share. Select the Share icon in the upper right to share the library.",
            alt: "Shared icon"
        },
        {
            id: 2,
            src: "icon_2",
            header: "Free developer handoff, right inside",
            body: "Cloud Inspector makes it easy for developers to get the information they need to turn pixels into code — all in the browser and, most importantly, for free.",
            alt: "Free developer icon"
        },
        {
            id: 3,
            src: "icon_3",
            header: "Real-time collaborative editing",
            body: "Room Service helps you build real-time collaborative features. Add real-time data sync! Let use edit the same data at the same time.",
            alt: "Real-time icon"
        },
        {
            id: 4,
            src: "icon_4",
            header: "Integrations with the Cloud API",
            body: "Unlocking that value requires an iPaaS that delivers the transformation power of APIs and integration.",
            alt: "Integration icon"
        }
    ];

    return ( 
        <section id="howitworks" className="how-it-works">
            <div className="how-it-works_left">
                <div className="header">
                    <p>How it works</p>
                    <h2>Building the best space for collaboration.</h2>
                </div>

                <ul>
                    {works.map(work => (
                      <li key={work.id}>
                        <div className="work">
                            <img src={`./images/${work.src}.png`} alt={work.alt} />

                            <div className="_details">
                                <h3>{ work.header }</h3>
                                <p>{ work.body }</p>
                            </div>
                        </div>
                      </li>  
                    ))}
                </ul>
            </div>

            <div className="how-it-works_right">
                <img src="./images/Illustration_3.png" alt="How it works image" />
            </div>
        </section>
     );
}
 
export default HowItWorks;