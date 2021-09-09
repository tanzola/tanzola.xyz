import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Projects from './components/projects/Projects.js';
import ProjectDetail from './components/projects/ProjectDetail.js';

function App() {
    return (
        <div style={{ height: '100vh', backgroundColor: 'black' }}>
            <div style={{ height: 'auto', backgroundColor: 'black' }}>
                <React.StrictMode>
                    <Router>
                        <Navbar />
                        <Switch>
                            <Route path="/projects/:name" component={ProjectDetail} />
                            <Route path="/projects" exact component={Projects} />
                            <Route path="/about"><div><p>About</p></div></Route>
                            <Route path="/"><p>Hello</p></Route>
                        </Switch>
                    </Router>
                </React.StrictMode>
            </div>
        </div>
    );
}

export default App;