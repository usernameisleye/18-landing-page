const Pricing = () => {
    const plans = [
        {
            id: 1,
            price: 49,
            src: "49",
            info: "A pay-once license, just for you",
            pros: [
                "The Mac app yours to keep",
                "Beautiful White_level",
                "One year of saving Cloud"
            ]
        },
        {
            id: 2,
            price: 99,
            src: "99",
            info: "Pro account, just for you",
            pros: [
                "The Mac app yours to keep",
                "One year of Mac updates",
                "One year of saving to Cloud",
                "A personal Cl workspace",
                "All tools, just for you"
            ]
        },
        {
            id: 3,
            price: 299,
            src: "299",
            info: "A subscription for the whole team",
            pros: [
                "Access to the Mac for all",
                "A shared Cloud workspace",
                "Free Cloud access for unlimited period",
                "Easy team management",
                "No license key required"
            ]
        },
    ]

    return ( 
        <section id="pricing" className="pricing">
            <div className="pricing_top">
                <div className="pricing_top_image">
                    <img src="./images/Illustration_4.png" alt="Pricing image" />
                </div>

                <div className="pricing_top_details">
                    <div className="header">
                        <p>Pricing</p>
                        <h2>Select a membership level the right price for you.</h2>
                    </div>

                    <p>Prices listed in USD. Taxes may apply. By using program you agree to our terms and policies.</p>
                </div>
            </div>

            <div className="pricing_bottom">
                {plans.map(plan => (
                    <article key={plan.id} className="plan">
                        <div className="plan_details">
                            <div className="price">
                                <span className="currency">$</span>
                                <img src={`./images/${ plan.src }.png`} alt={ plan.price } />
                                <span className="month">/mo</span>
                            </div>

                            <p>{ plan.info }</p>

                            <ul>
                                { plan.pros.map(pro => (
                                    <li key={pro}>{ pro }</li>
                                )) }
                            </ul>
                        </div>

                        <button>Join</button>
                    </article>
                ))}
            </div>
        </section>
     );
}
 
export default Pricing;