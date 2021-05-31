import React from "react"
import "./Menu.css"

function Menu() {
    return(
        <div className="Menu">
            <div className="container">
                <h2>Places:</h2>
                <div className="MenuItem">Top</div>
                <div className="MenuItem">About Us</div>
                <div className="MenuItem">Contacts</div>
                <div className="MenuItem">Feedback</div>
            </div>
        </div>
    )
}
export default Menu