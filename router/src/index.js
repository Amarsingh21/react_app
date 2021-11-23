
import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, BrowserRouter as Router } from 'react-router-dom' 
import Headernav from './headernav'
import App from './App'; //RightSide
import About from './About'  //Bottom
import Contact from './Contact' //Center
import Admin from './Admin' //Center
import './App.css'
  
const routing = (  
  <Router>  
    <div>
      <Headernav />
      <div className="maindiv">
        <div className="indexpage">
          <h1>React Router Index page LeftMenu</h1>  
        </div>
        <div>
        <Contact/>
        <Admin />
        </div>
        <App />
      </div>
      <About />
      {/* <Route path="/" component={App} />   */}
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} /> 
      {/* <Route path="/admin" component={Admin} /> */}
    </div>  
  </Router>
)  
ReactDOM.render(routing, document.getElementById('root'));