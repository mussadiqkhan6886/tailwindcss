import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Business from './sections/Business'
import Footer from './sections/Footer'
import Organize from './sections/Organize'

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Features />
        </section>
        <section>
          <Organize />  
        </section>
        <section>
          <Business />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
  
}

export default App
