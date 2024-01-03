import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                <Switch>
                    <Route path="/projects/:name" component={ProjectDetail} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/about" exact component={About} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </div>
        <Router>
            <Footer />                
        </Router>
        </React.StrictMode>
    );
}

export default App;
