import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Sidebar from './components/Sidebar';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="ml-20 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
