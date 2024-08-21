import React from "react";
import image1 from '../Assets/Images/ticket-2 1.png';
import image2 from '../Assets/Images/Eventick.png';
import '../Assets/Fonts/Fontawsome/css/all.min.css';

function FooterSection() {
    return (
        <div>
            <div className="row footer_section">
                <div className="col-lg-4 text-light">
                    <img src={image1} alt=""></img>
                    <img src={image2} alt=""></img>
                    <p className="footer_paragraph">Eventick is a global self-service ticketing platform for live experiences
                        that allows anyone to create,
                        share, find and attend events that fuel their passions and enrich their lives.</p>
                    <i className="social-icon fab fa-facebook"></i>
                    <i className="social-icon fab fa-twitter"></i>
                    <i className="social-icon fab fa-linkedin"></i>
                </div>

                <div className="col-lg-2 text-light">
                    <h3>Plan Events</h3>
                    <p className="footer_paragraph">Create and Set Up <br></br>
                        Sell Tickets <br></br>
                        Online RSVP <br></br>
                        Online Events</p>
                </div>

                <div class="col-lg-2 text-light">
                    <h3>Eventick</h3>
                    <p class="footer_paragraph"> About Us <br></br>Press <br></br>Contact Us <br></br> Help Center <br></br> How it Works <br></br>
                        Privacy Terms</p>
                </div>

                <div class="col-lg-4 text-light email_btn"> 
                    <h3>Stay in the loop</h3>
                    <p class="footer_paragraph"> Join our mailing list to stay in the loop with our newest
                        for Event and concert</p>
                    <span class="email"><input class="input" type="email" placeholder="Enter your email address.."></input>
                        <button class="pink_button">Subscribe Now</button></span>
                </div>

                {/* <!-- @copy --> */}
                <p class="copy"> Copyright © 2022 Avi Yansah </p>


            </div>
        </div>

    )
}
export default FooterSection;