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
    const MyRef = useRef("map")

    const MapContent = compose(
        withProps({
            googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCDZWSYLIwlKjJA1Vj02PrYIjeqFnANrxw&v=3.exp&libraries=geometry,drawing,places",
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `100%` }} />,
            mapElement: <div style={{ height: `100%` }} />
        }),
        withScriptjs,
        withGoogleMap
    )((props) => (
        <GoogleMap defaultZoom={8} defaultCenter={"lat: 40.854885,lng: -88.081807"}>
            {props.isMarkerShown && (
                <Marker position={"lat: 40.854885,lng: -88.081807"} />
            )}
        </GoogleMap>
    ));

    function updateHeight(){
        setHeight(MyRef.current.offsetWidth);
    }
    const style = {
        height: height
    }
    useLayoutEffect(() => {
        function updateSize(){
            setHeight(MyRef.current.offsetWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
    }, []);

    return(
        <div className="Map" style={style} ref={MyRef} onLoad={() => updateHeight()}>
            <div className="container">
                <div className="heading-text">Map</div>
                <div className="map-content">
                    <MapContent isMarkerShown={true}/>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Map)
