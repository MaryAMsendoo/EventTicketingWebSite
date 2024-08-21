import React from 'react';
import Images1 from '../Assets/Images/ticket-2 1.svg';
import Images2 from '../Assets/Images/Eventick.png';

function Navbar() {
    return (
        <div id='navbar_section'>
            <nav className='navbar  navbar-expand-lg navbar-dark'>
                <a className='navbar-brand' href='#c'><spans><img alt='' src={Images1}></img><img alt='' src={Images2}></img></spans></a>
                <button className='navbar-toggler' type="button" data-bs-target="#navbarTogglerDemo02"
                    data-bs-toggle="collapse" aria-controls="navbarTogglerDemo02">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#shadules">Schedule</a></li>
                        <li class="nav-item"><a class="nav-link" href="#blogSection">Speakers</a></li>
                        <li class="nav-item"><a class="nav-link" href="#createEvent">Ticket</a></li>
                        <li class="nav-item"><a class="nav-link" href="#footerSection">Contact</a></li>
                        <li class="nav-item login"><a class="nav-link login" href="#c">Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
} export default Navbar;