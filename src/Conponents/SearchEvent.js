import React from 'react';

function SearchEvent() {
    return <div>
        <div id='search_section'>
            <div className='event'>
                <div class="details_content">
                    <p>Search Event</p>
                    <h3>Konser Jazz</h3>
                </div>
            </div>
            <div className='event'>
                <div class="details_content">
                    <p>Place</p>
                    <h3>Indonesia</h3>
                </div>
            </div>
            <div className='event'>
                <div className='details_content'>
                    <p>Time</p>
                    <h3><span class="time">Any Time</span>
                        <span class="dropdown">
                            <button class="btn dropdown-toggle btn-outline-light border-0" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#c">dropdown items</a></li>
                            </ul>
                        </span>
                    </h3>
                </div>
            </div>
        </div>
    </div>
}

export default SearchEvent;