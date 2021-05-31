import React from "react";
import "./AboutUs.css"

function AboutUs() {
    return(
        <div className="AboutUs">
            <h2>About us</h2>
            <div className="dark-div">
                <h3>Our development plan:</h3>
                <ul>
                    <li style={{textDecoration: "line-through"}}>Make a cool header</li>
                    <li style={{textDecoration: "line-through"}}>Make a swipeable carousel with animation</li>
                    <li style={{textDecoration: "line-through"}}>Make a beautiful side menu</li>
                    <li style={{textDecoration: "line-through"}}>Make indicator for carousel</li>
                    <li>Make some other blocks</li>
                    <ul>
                        <li>Make about us</li>
                        <li>Make contacts</li>
                        <li style={{textDecoration: "line-through"}}>Make feedback</li>
                    </ul>
                    <li>Make scroll animations</li>
                    <li>Make navigation in side menu</li>
                    <li>Make login modal window</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutUs