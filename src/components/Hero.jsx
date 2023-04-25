const Hero = () => {
    return ( 
        <header>
            <div className="hero-left">
                <h1 className="hero-header">Always Track & Analyze Your Business Statistics To Succeed.</h1>
                <p className="hero-text">A better way to manage your sales, team, clients & marketing — on a single platform. Powerful, affordable & easy.</p>

                <div className="email">
                    <input 
                    type="email" 
                    placeholder="Enter your email"
                    />

                    <button>Get started</button>
                </div>

                <div className="sponsors">
                    <img src="./images/m_mastercard.png" alt="Mastercard image" />
                    <img src="./images/m_paypall.png" alt="PayPal image" />
                    <img src="./images/m_visa.png" alt="Visa image" />
                </div>
            </div>

            <div className="hero-right">
                <img src="./images/Illustration_1.png" alt="Hero image" />
            </div>
        </header>
     );
}
 
export default Hero;