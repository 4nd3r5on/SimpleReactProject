import React, {useState, useRef, useContext} from "react"
import "./Menu.css"
import Context from "../Context";

function Menu(props) {
    const { modalChange } = useContext(Context);

    return(
        <div className="Menu">
            <div className="container">
                <h2>Places:</h2>
                <button className="MenuItem" onClick={() => props.scrollToTopRef()}>Top</button>
                <button className="MenuItem" onClick={() => props.scrollToAboutUsRef()}>About Us</button>
                <button className="MenuItem" onClick={() => props.scrollToContactsRef()}>Contacts</button>
                <button className="MenuItem" onClick={() => props.scrollToFeedbackRef()}>Feedback</button>
                <div className="login-btn-container">
                    <button className="login-btn glowing" onClick={() => modalChange()}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Menu