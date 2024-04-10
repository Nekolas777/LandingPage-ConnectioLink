import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Service } from './components/Service/Service'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Features } from "./components/Features/Features";
import { Prices } from "./components/Prices/Prices";

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features/>
        <Service />
        <Testimonials />
        <Prices/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App