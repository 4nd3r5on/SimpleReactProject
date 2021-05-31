import React, {useState, useRef, useEffect, useLayoutEffect} from "react";
import { compose, withProps } from "recompose";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs,
} from "react-google-maps";
import "./Map.css"

function Map(){
    const [height, setHeight] = useState(0)
    const [center] = useState({ lat: -34.397, lng: 150.644 })
    const MyRef = useRef("map")

    //Map content
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
    )((props =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={center}
        >
        </GoogleMap>
    ));

    //<Marker
    //                 position={center}
    //             />


    function updateHeight(){
        setHeight(MyRef.current.offsetWidth);

        console.log(MyRef.current.offsetWidth)
    }
    const style = {
        height: height
    }
    useEffect(() => {
        // Update the document title using the browser API
        setHeight(MyRef.current.offsetWidth);

        console.log(MyRef.current.offsetWidth)
    });
    useLayoutEffect(() => {
        function updateSize(){
            setHeight(MyRef.current.offsetWidth);
            console.log(MyRef.current.offsetWidth)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
    }, []);

    return(
        <div className="Map" style={style} ref={MyRef} onLoad={() => updateHeight()}>
            <div className="container">
                <div className="heading-text">Map</div>
                <div className="map-content">
                    <MapContent
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLT0yiIBSyM_l0PvIp7cH1rbPnfPfcETM&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        defaultCenter={center}
                    />
                </div>
            </div>
        </div>
    )
}

export default Map