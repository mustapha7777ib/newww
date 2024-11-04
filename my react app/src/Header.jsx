import React from 'react';
import logo1 from "./images/image-hero-desktop.jpg"
import BodyComponent from './BodyComponent';
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
            <BodyComponent/>
        </>
    );
}
export default Header;