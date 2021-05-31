import React from "react";
import "./Header.css";
import Logo from "./Logo/Logo";


function Header({menu}) {
    function ChangeMenu(event) {
        event.preventDefault()
        menu()
    }
    return(
        <div className="Header">
            <div className="container">
                <Logo/>
                <div className="sidebar-button-container">
                    <div className="sidebar-button" onClick={event => ChangeMenu(event)}>
                        <svg className="menu-icon" version="1.1" id="icon-menu" xmlns="http://www.w3.org/1999/xlink" x="0"
                             y="0" width="37" height="37"
                             viewBox="0 0 37 37" space="preserve">
                            <path className="_2y-e" d="M8,26h21v-1.8H8V26z M8,11v1.8h21V11H8z
                M8,19.2h21v-1.8H8V19.2z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header