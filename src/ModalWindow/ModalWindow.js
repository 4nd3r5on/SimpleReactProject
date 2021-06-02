import React, {useContext, useState} from "react";
import Context from "../Context";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./ModalWindow.css"

function ModalWindow({show}) {
    const [window, setWindow] = useState("login")
    const { modalChange } = useContext(Context);

    function onOutClick(event) {
        event.preventDefault();
        console.log(event.currentTarget);
        if(event.target === event.currentTarget) {

            modalChange()
        }
    }

    function Content() {
        function Login(){
            return(
                <div className="LoginWindow">
                    <h2>Login</h2>
                    <div className="back-btn" onClick={() => modalChange()}>&#8656;</div>
                    <div className="inputs">
                        <div className="input-headers-container">
                            <div className="input-item"><div className="input-header">Username:</div></div>
                            <div className="input-item"><div className="input-header">Password:</div></div>
                        </div>
                        <div className="inputs-container">
                            <div className="input-item"><input type="text" className="input"/></div>
                            <div className="input-item"><input type="password" className="input"/></div>
                        </div>
                    </div>
                    <button className="submit-btn">SUBMIT</button>
                    <div className="already" onClick={() => setWindow("singin")}>Don't have account?</div>
                </div>
            )
        }
        function Singin(){
            return(
                <div className="LoginWindow">
                    <h2>Sing in</h2>
                    <div className="back-btn" onClick={() => modalChange()}>&#8656;</div>
                    <div className="inputs">
                        <div className="input-headers-container">
                            <div className="input-item"><div className="input-header">E-mail:</div></div>
                            <div className="input-item"><div className="input-header">Username:</div></div>
                            <div className="input-item"><div className="input-header">Password:</div></div>
                        </div>
                        <div className="inputs-container">
                            <div className="input-item"><input type="text" className="input"/></div>
                            <div className="input-item"><input type="text" className="input"/></div>
                            <div className="input-item"><input type="password" className="input"/></div>
                        </div>
                    </div>
                    <button className="submit-btn">SUBMIT</button>
                    <div className="already" onClick={() => setWindow("login")}>Already have account?</div>
                </div>
            )
        }
        if(window === "singin"){
            return(
                <Singin/>
            )
        } else{
            return(
                <Login/>
            )
        }
    }

    return(
        <CSSTransition
            in={show===true}
            timeout={1000}
            classNames="modal"
            unmountOnExit>
            <div className="ModalWindow" onClick={event => onOutClick(event)}>
                <Content/>
            </div>
        </CSSTransition>
    )
}

export default ModalWindow