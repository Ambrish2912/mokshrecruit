import React, { useRef, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import WhoWeServe from './pages/WhoWeServe'
import Contact from './pages/Contact'
import './App.css'

// Component to handle loading bar on route changes
function AppContent() {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Start loading bar on route change
    if (ref.current) {
      ref.current.continuousStart();
      
      // Complete loading bar after a short delay to simulate loading
      const timer = setTimeout(() => {
        if (ref.current) {
          ref.current.complete();
        }
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Loading Bar */}
      <LoadingBar
        color="#39608f"
        ref={ref}
        height={3}
        shadow={true}
        transitionTime={300}
      />
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/who-we-serve" element={<WhoWeServe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
