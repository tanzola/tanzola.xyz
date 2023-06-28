import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Projects from './components/projects/Projects.js';
import ProjectDetail from './components/projects/ProjectDetail.js';
import About from './components/about/About.js';
import './App.css'

function App() {
    return (
        <div className="bg-page">
            <div className="bg-content">
                <React.StrictMode>
                    <Router>
                        <Navbar />
                        <Switch>
                            <Route path="/projects/:name" component={ProjectDetail} />
                            <Route path="/projects" exact component={Projects} />
                            <Route path="/about" exact component={About} />
                            <Route path="/"><p>Hello</p></Route>
                        </Switch>
                    </Router>
                </React.StrictMode>
            </div>
        </div>
    );
}

export default App;
