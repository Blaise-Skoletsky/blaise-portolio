import './index.css';
import Navbar from './components/Navbar.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Project from './pages/Projects.js';
import {BrowserRouter as Router,
        Routes,
        Route,
      } from "react-router-dom";

  


function App() {
  return (
    <Router>
        <div className="w-full h-screen bg-gradient-to-r from-indigo-500 from-33% via-purple-500 via-33% to-pink-500 to-33%">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/Contact" element={<Contact />} /> 
            <Route path="/Project" element={<Project />} /> 
          </Routes>
        
        </div>
    </Router>
  );
}

export default App;
