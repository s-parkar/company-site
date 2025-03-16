import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import WebView from './components/WebView'
import './App.css'

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const handleQuoteClick = () => {
    setIsQuoteModalOpen(true)
  }

  return (
    <Router>
      <div className="app">
        <Navbar onQuoteClick={handleQuoteClick} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<WebView url="/about" title="About Us" />} />
          <Route path="/services" element={<WebView url="/services" title="Services" />} />
          <Route path="/projects" element={<WebView url="/projects" title="Projects" />} />
          <Route path="/contact" element={<WebView url="/contact" title="Contact" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
