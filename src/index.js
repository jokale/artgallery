import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    <Router>
    <App />
    <Navbar/>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/work" component={Work} />
  </Router> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
