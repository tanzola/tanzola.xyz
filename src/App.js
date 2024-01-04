import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/Home.js';
import Projects from './components/projects/Projects.js';
import ProjectDetail from './components/projects/ProjectDetail.js';
import About from './components/about/About.js';

function App() {
    return (
        <React.StrictMode>
        <div className="page-wrapper">
            {/* <div className="guideline-right" /> */}
            {/* <div className="guideline-left" /> */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/projects/:name" element={<ProjectDetail />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
        <Router>
            <Footer />                
        </Router>
        </React.StrictMode>
    );
}

export default App;
