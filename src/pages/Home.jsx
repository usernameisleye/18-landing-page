import AboutUs from "../components/AboutUs";
import FAQs from "../components/FAQs";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";

import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <div className="home">
            <main>
                <Hero />
                <AboutUs />
                <HowItWorks />
                <Pricing />
                <FAQs />
            </main>
            <Footer />
        </div>
     );
}
 
export default Home;