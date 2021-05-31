import React from "react";
import "./Feedback.css"

function Feedback(){
    return(
        <div className="Feedback">
            <h2>Feedback</h2>
            <div className="dark-div">
                <div className="feedback-container">
                    <form action="">
                        <div className="input-container-container">
                            <div className="input-container">
                                <div className="help">Name:</div>
                                <input type="text" className="input"/>
                            </div>
                            <div className="input-container">
                                <div className="help">Email:</div>
                                <input type="text" className="input"/>
                            </div>
                        </div>
                        <div className="textarea-n-submit">
                            <textarea name="" id="" cols="30" rows="10" placeholder="enter your message here" className="textarea"></textarea>
                            <button type={"submit"} className="submit-btn">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{height: "20px"}}></div>
        </div>
    )
}

export default Feedback