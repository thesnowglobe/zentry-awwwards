import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import FloatingImage from './components/FloatingImage'


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <FloatingImage />
    </main>
  )
}

export default App