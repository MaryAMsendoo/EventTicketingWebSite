import React from 'react';
import '../Assets/CSS/Style.css';
import Navbar from './Navbar';
import HomePageContent from './HomePageContents';


function HomePageComponent() {
    return (
        <div id='header section'>
            <div className='inner_background'>
                <div className='outer_background'>
                   <div className=''>
                   <Navbar />
                   <HomePageContent />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageComponent;