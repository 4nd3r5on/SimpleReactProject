import React, {useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./Contacts.css";
import Map from "./Map/Map";

function Contacts(){
    const [show, setShow] = useState({type:"text", content:"Contacts"})

    const [scalePhone, setScalePhone] = useState("1.2, 1.2")
    const [scaleTwitter, setScaleTwitter] = useState("1.2, 1.2")
    const [scaleLinkedIn, setScaleLinkedIn] = useState("1.2, 1.2")
    const [scaleYoutube, setScaleYoutube] = useState("1.2, 1.2")

    function Item() {
        return show.type === "text" ? <div className="contact-text">{show.content}</div> : <a className="contact-link" href={show.content}>{show.title}</a>
    }

    function Phone(){
        const Style = {
            transform: "scale(" + scalePhone + ")"
        }
        function ShowPhone() {
            setShow({type:"text", content:"8(800)555-35-35", contact:"phone"})
        }
        if(show.contact === "phone"){
            setScalePhone("1.2, 1.2")
        } else {
            setScalePhone("none")
        }
        return(
            <div className="contact-btn" style={Style} onClick={() => ShowPhone()}>
                <svg x="0px" y="0px" width="80%" height="80%" viewBox="0 0 414.937 414.937" style={{enableBackground: "new 0 0 414.937 414.937"}}>
                    <g>
                        <path fill={"#17fc54"} d="M159.138,256.452c37.217,36.944,80.295,72.236,97.207,55.195c24.215-24.392,39.12-45.614,92.854-2.761
		                                c53.734,42.874,12.696,71.727-10.757,95.363c-27.064,27.269-128.432,1.911-228.909-97.804C9.062,206.71-17.07,105.54,10.014,78.258
		                                c23.46-23.637,52.006-64.879,95.254-11.458c43.269,53.394,22.161,68.462-2.054,92.861
		                                C86.31,176.695,121.915,219.501,159.138,256.452z M213.104,80.203c0,0-11.227-1.754-19.088,6.113
		                                c-8.092,8.092-8.445,22.032,0.082,30.552c5.039,5.039,12.145,6.113,12.145,6.113c13.852,2.598,34.728,6.997,56.944,29.206
		                                c22.209,22.208,26.608,43.084,29.206,56.943c0,0,1.074,7.106,6.113,12.145c8.521,8.521,22.46,8.174,30.552,0.082
		                                c7.861-7.86,6.113-19.087,6.113-19.087c-4.399-28.057-17.999-57.365-41.351-80.716C270.462,98.203,241.153,84.609,213.104,80.203z
		                                M318.415,96.958c40.719,40.719,58.079,86.932,52.428,124.379c0,0-1.972,11.859,5.773,19.604
		                                c8.718,8.718,22.535,8.215,30.695,0.062c5.243-5.243,6.385-13.777,6.385-13.777c4.672-32.361-1.203-97.464-64.647-160.901
		                                C285.605,2.887,220.509-2.988,188.147,1.677c0,0-8.527,1.136-13.777,6.385c-8.16,8.16-8.656,21.978,0.061,30.695
		                                c7.746,7.746,19.604,5.773,19.604,5.773C231.484,38.879,277.696,56.24,318.415,96.958z"/>
                    </g>
                </svg>
            </div>
        )
    }

    function Twitter(){
        const Style = {
            transform: "scale(" + scaleTwitter + ")"
        }
        function ShowTwitter() {
            setShow({type:"link",content:"https://twitter.com/", title:"Twitter", contact:"twitter"})
        }
        if(show.contact === "twitter"){
            setScaleTwitter("1.2, 1.2")
        } else {
            setScaleTwitter("none")
        }
        return(
            <div className="contact-btn" style={Style} onClick={() => ShowTwitter()}>
                <svg className="icon" width="85%" height="85%" viewBox="0 0 36.914 30">
                    <path
                        d="M36.914,3.551a15.169,15.169,0,0,1-4.35,1.193A7.6,7.6,0,0,0,35.9.553a15.187,15.187,0,0,1-4.811,1.838A7.582,7.582,0,0,0,18.18,9.3,21.5,21.5,0,0,1,2.57,1.387,7.579,7.579,0,0,0,4.914,11.5a7.542,7.542,0,0,1-3.432-.946v0.095A7.577,7.577,0,0,0,7.559,18.07a7.621,7.621,0,0,1-3.422.131,7.587,7.587,0,0,0,7.076,5.26,15.194,15.194,0,0,1-9.4,3.241A15.57,15.57,0,0,1,0,26.6,21.439,21.439,0,0,0,11.609,30c13.93,0,21.549-11.541,21.549-21.549q0-.492-0.023-0.981A15.394,15.394,0,0,0,36.914,3.551Z"
                        fill="#2ea3dc"></path>
                </svg>
            </div>
        )
    }

    function LinkedIn(){

        const Style = {
            transform: "scale(" + scaleLinkedIn + ")"
        }
        function ShowLinkedIn() {
            setShow({type:"link",content:"https://www.linkedin.com/", title:"LinkedIn", contact:"linkedin"})
        }
        if(show.contact === "linkedin"){
            setScaleLinkedIn("1.2, 1.2")
        } else {
            setScaleLinkedIn("none")
        }
        return(
                <div className="contact-btn" style={Style} onClick={() => ShowLinkedIn()}>
                    <svg className="icon" width="75%" height="75%" viewBox="0 0 30.001 30">
                        <g>
                            <path
                                d="M27.781,0H2.215A2.188,2.188,0,0,0,0,2.16V27.836A2.191,2.191,0,0,0,2.215,30H27.781A2.2,2.2,0,0,0,30,27.836V2.16A2.192,2.192,0,0,0,27.781,0Z"
                                fill="#047cb7"></path>
                            <path
                                d="M4.448,11.246H8.9V25.563H4.448V11.246ZM6.674,4.129a2.58,2.58,0,1,1-2.58,2.58,2.58,2.58,0,0,1,2.58-2.58"
                                fill="#fff"></path>
                            <path
                                d="M11.689,11.246h4.268V13.2h0.06a4.681,4.681,0,0,1,4.21-2.311c4.506,0,5.338,2.965,5.338,6.82v7.852H21.118V18.6c0-1.658-.031-3.795-2.314-3.795-2.314,0-2.669,1.809-2.669,3.676v7.082H11.689V11.246Z"
                                fill="#fff"></path>
                        </g>
                    </svg>
                </div>
        )
    }

    function Youtube(){
        const Style = {
            transform: "scale(" + scaleYoutube + ")"
        }
        function ShowYoutube() {
            setShow({type:"link",content:"https://www.youtube.com/", title:"YouTube", contact:"youtube"})
        }
        if(show.contact === "youtube"){
            setScaleYoutube("1.2, 1.2")
        } else {
            setScaleYoutube("none")
        }
        return(
            <div className="contact-btn" style={Style} onClick={() => ShowYoutube()}>
                <svg className="icon" focusable="false" viewBox="0 0 29.999 30">
                    <g>
                        <path
                            d="M4.3,4.438a173.048,173.048,0,0,1,21.4,0,4.266,4.266,0,0,1,3.973,3.971,59.594,59.594,0,0,1,0,12.518A4.271,4.271,0,0,1,25.7,24.9a171.763,171.763,0,0,1-21.4,0A4.245,4.245,0,0,1,.33,20.926a59.591,59.591,0,0,1,0-12.518A4.259,4.259,0,0,1,4.3,4.438h0Z"
                            fill="#FF0000" fillRule="evenodd">
                        </path>
                        <polygon
                            points="11.912 10.393 19.908 14.584 11.912 18.721 11.912 10.393 11.912 10.393"
                            fill="#fff" fillRule="evenodd">
                        </polygon>
                    </g>
                </svg>
            </div>
        )
    }

    return(
        <div className="Contacts">
            <h2>Contacts</h2>
            <div className="dark-div">
                <div className="contacts-container">
                    <div className="contact-n-copy">
                        <div className="contact"><Item/></div>
                    </div>
                    <div className="contact-buttons">
                        <Phone/>
                        <Twitter/>
                        <LinkedIn/>
                        <Youtube/>
                    </div>
                    <div className="copy-container">
                        <button className="copy" onClick={() => {navigator.clipboard.writeText(show.content)}}>Copy contact</button>
                    </div>
                </div>
                <Map/>
            </div>
        </div>
    )
}

export default Contacts