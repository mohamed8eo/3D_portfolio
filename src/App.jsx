import LogoSection from './sections/LogoSection'
import Navbar from './components/Navbar'
import FeatureCard from './sections/FeatureCard'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCard />
      <ExperienceSection />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App