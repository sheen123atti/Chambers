import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Data from './Data';

export default function App() {
  
  return (
    <div className='App'>
      <header className='Headerr'>
        <Data/>
      </header>
      <footer><Footer/></footer>
    </div>
  )
}



/*
import React, { Component } from 'react';  
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import Home from './components/Home';  
import Contact from './components/Contact';  
import About from './components/About';  
import './App.css';  
   
class App extends Component {  
  render() {  
    return (  
       <Router>  
           <div className="App">  
            <ul className="App-header">  
              <li>  
                <Link to="/">Home</Link>  
              </li>  
              <li>  
                <Link to="/about">About Us</Link>  
              </li>  
              <li>  
                <Link to="/contact">Contact Us</Link>  
              </li>  
            </ul>  
           <Routes>  
                 <Route exact path='/' element={< Home />}></Route>  
                 <Route exact path='/about' element={< About />}></Route>  
                 <Route exact path='/contact' element={< Contact />}></Route>  
          </Routes>  
          </div>  
       </Router>  
   );  
  }  
}  
export default App;
*/