import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import FAQ from './FAQ';
import About from './About';
import Buy from './Buy';
import Sell from './Sell';
import './Navbar.css';

export default function NavBar(props) {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <div>
            <div>
                <BrowserRouter> {/* link is for change of url */}
                    <div className='NavbarLinks'>
                        <div className='company'>CHAMBERS</div>
                        <div className={ isMobile ? 'nav-mobile' : 'split' } 
                            onClick={() => {setIsMobile(false)}}>
                            <div className='HomeLink'>
                                <Link to="/" className='link'>Home</Link>
                            </div>
                            <div className='FAQLink'>
                                <Link to="/faq" className='link'>FAQs</Link>
                            </div>
                            <div className='AboutLink'>
                                <Link to="/about" className='link'>About</Link>
                            </div>
                        </div>
                            <button className='mobile-menu-icon'
                                onClick={() => {setIsMobile(!isMobile)}}>
                                {isMobile ? (<i className='Cross'>
                                    <div className='CrossBar1'></div>
                                    <div className='CrossBar2'></div>
                                </i>) : (<i className='Menu'>
                                    <div className='MenuBar1'></div>
                                    <div className='MenuBar2'></div>
                                    <div className='MenuBar3'></div>
                                </i>) }
                            </button>
                    </div>
                    <Routes>  {/* routes are for display of pages */}
                        <Route path='/' element={<div><Home properties={props.data}/></div>} />
                        <Route path='/faq' element={<div><FAQ /></div>} />
                        <Route path='/about' element={<div><About /></div>} />
                        <Route path='/buy' element={<div><Buy /></div>} />
                        <Route path='/sell' element={<div><Sell /></div>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}
