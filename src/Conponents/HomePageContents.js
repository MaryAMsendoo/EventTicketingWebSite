import React from 'react';
import OuterImage from '../Assets/Images/Outer-image.svg'

function HomePageContents() {
    return (
        <div>
            <div id="carouselExample" class="carousel slide" data-bs-ride="false">
                <div class="carousel-inner">
                    <div class="carousel-item active container-fluid">
                        <div className='row'>
                        <div className='home_pageImage col-lg-6'>
                            <img alt='' src={OuterImage}></img>
                        </div>
                        <div class="text-container col-lg-6">
                            <h1>SBS MTV The Kpop</h1>
                            <h1>Show Ticket Package</h1>
                            <p>Look no further! Our SBS Show tickets are the simplest way for
                                you to experience a live kpop recording.</p>
                            <button class="pink_button" type="button">Get Ticket</button>
                            <button class="light_button" type="button">Learn More</button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item container-fluid">
                        <h1>Another Content will go in here incase of any...</h1>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HomePageContents;