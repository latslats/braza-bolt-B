import Hero from './components/Hero'
import Services from './components/Services'
import Featured from './components/Featured'
import Testimonials from './components/Testimonials'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Featured />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </main>
  )
}
