import React from 'react';
import logo1 from "./images/image-hero-desktop.jpg"
import body from './body.jsx';
function Header(){
    return (
        <>
            <div className='flex1'>
                <div className='flex1b'>
                    <span>
                        <h1>crowdfund</h1>
                    </span>
                    <span>
                        <p>About</p>
                        <p>Discover</p>
                        <p>Get Started</p>
                    </span>
                </div>
            </div>
            <body/>
        </>
    );
}
export default Header;