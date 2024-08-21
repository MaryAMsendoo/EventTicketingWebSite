import React from "react";
import image from '../Assets/Images/image 3.png'


function CreateEvent() {
    return (
        <div className=".create_event_text">
            <div className="image_contianer row">
            <img src={image} alt=""></img>
            <div className="col-lg-6 col-md-6">
                <h1>Make your own Event </h1>
                <p>ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="get_ticket" type="button">Create Event</button>
            </div>
        </div>
        </div>
    )
}

export default CreateEvent;