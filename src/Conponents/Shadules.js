import React from 'react';
import Rantangle1 from '../Assets/Images/Rectangle 12.svg';
import Rantangle2 from '../Assets/Images/Rectangle 12 (1).png';
import Rantangle3 from '../Assets/Images/Rectangle 12 (2).png';
import Rantangle4 from '../Assets/Images/Rectangle 12 (3).png';
import Rantangle5 from '../Assets/Images/Rectangle 12 (4).png';
import Rantangle6 from '../Assets/Images/Rectangle 12 (5).png';


function Shadules() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <h2>Upcoming Events</h2>
                    </li>
                    <li className='grow'></li>
                    <li>
                        <div class="dropdown dropdown_menu">
                            <button className="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Weeks
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#v">dropdown items</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div className="dropdown dropdown_menu">
                            <button className="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">Event Type</button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#c">dropdown items</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div class="dropdown dropdown_menu">
                            <button class="btn border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Any Category
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#c">dropdown items</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className='row'>
                <div class="col-lg-4 col-md-6">
                    <div class="card_box">
                        <img className='card_image' src={Rantangle1} alt=''></img>
                        <div class="content">
                            <div class="date">
                                <p>APR</p>
                                <h1>14</h1>
                            </div>
                            <div class="text_content">
                                <h5>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h5>
                                <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card_box">
                        <img className='card_image' src={Rantangle2} alt=''></img>
                        <div class="content">
                            <div class="date">
                                <p>AUG</p>
                                <h1>20</h1>
                            </div>
                            <div class="text_content">
                                <h5>JYJ 2011 JYJ Worldwide Concert Barcelona</h5>
                                <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card_box">
                        <img className='card_image' src={Rantangle3} alt=''></img>
                        <div class="content">
                            <div class="date">
                                <p>SEP</p>
                                <h1>18</h1>
                            </div>
                            <div class="text_content">
                                <h5>2011 Super Junior SM Town Live '10 World Tour New York City</h5>
                                <p>Directly seated and inside for you to enjoy the show.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card_box">
                        <img className='card_image' src={Rantangle4} alt=''></img>
                        <div class="content">
                            <div class="date">
                                <p>APR</p>
                                <h1>14</h1>
                            </div>
                            <div class="text_content">
                                <h5>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h5>
                                <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4 col-md-6">
                    <div class="card_box">
                        <img className='card_image' src={Rantangle5} alt=''></img>
                        <div class="content">
                            <div class="date">
                                <p>AUG</p>
                                <h1>20</h1>
                            </div>
                            <div class="text_content">
                                <h5>JYJ 2011 JYJ Worldwide Concert Barcelona</h5>
                                <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card_box">
                        <img className='card_image' src={Rantangle6} alt=''></img>
                        <div class="content">
                            <div class="date">
                                <p>SEP</p>
                                <h1>18</h1>
                            </div>
                            <div class="text_content">
                                <h5>2011 Super Junior SM Town Live '10 World Tour New York City</h5>
                                <p>Directly seated and inside for you to enjoy the show.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="outline_blue_btn" type="button">Learn More</button>
        </div>
    )
}

export default Shadules;