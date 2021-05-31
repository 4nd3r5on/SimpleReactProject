import React from "react";
import "./Feedback.css"
import {compose, withProps} from "recompose";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

function Feedback(){

    const MapContent = compose(
        withProps({
            googleMapURL:
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyBLT0yiIBSyM_l0PvIp7cH1rbPnfPfcETM&v=3.exp&libraries=geometry,drawing,places",
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `100%` }} />,
            mapElement: <div style={{ height: `100%` }} />
        }),
        withScriptjs,
        withGoogleMap
    )((props) => (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
            {props.isMarkerShown && (
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
            )}
        </GoogleMap>
    ));

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