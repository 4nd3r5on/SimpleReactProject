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
                    <li style={{textDecoration: "line-through"}}>Make some other blocks</li>
                    <ul>
                        <li style={{textDecoration: "line-through"}}>Make about us</li>
                        <li style={{textDecoration: "line-through"}}>Make contacts</li>
                        <li style={{textDecoration: "line-through"}}>Make feedback</li>
                    </ul>
                    <li style={{textDecoration: "line-through"}}>Make navigation in side menu</li>
                    <li style={{textDecoration: "line-through"}}>Make login modal window</li>
                </ul>
                <h3>Who we are:</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    )
}

export default AboutUs