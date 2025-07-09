import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import LearningPath from './components/LearningPath';
export default function App() {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen font-sans">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            {<Hero />}
            {<About /> }
            <LearningPath className="hidden sm:block" />
            {<Skills/>}
            {<Projects />}
            {<Contact /> }
            {<Footer /> }
          </>
        } />
      </Routes>
    </div>
  );
}
