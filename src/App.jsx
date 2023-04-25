// Components import
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import AboutUs from "./components/AboutUs"
import HowItWorks from "./components/HowItWorks"
import Pricing from "./components/Pricing"

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <HowItWorks />
        <Pricing />
      </main>
    </div>
  )
}

export default App
