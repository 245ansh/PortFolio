import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import LearningPath from './components/LearningPath';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import CursorFollower from './components/CursorFollower';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <AnimatedBackground>
      <CursorFollower />
      <div className="min-h-screen text-white font-sans">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <LearningPath className="hidden sm:block" />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Reviews />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </AnimatedBackground>
  );
}