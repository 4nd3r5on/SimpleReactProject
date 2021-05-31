import React, {useState} from "react";
import "./Carousel.css";
import { useSwipeable } from "react-swipeable";
import {CSSTransition} from "react-transition-group";


function Carousel(props) {
    const [position, setPosition] = useState(0);
    const handlers = useSwipeable({
        onSwipedLeft: () => Next(),
        onSwipedRight: () => Prev(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    })

    function Prev() {
        if (position === 0) {
            setPosition(props.ImagesList.length-1)
        } else {
            setPosition(position-1)
        }
    }
    function Next() {
        if (props.ImagesList.length  ===  position + 1) {
            setPosition(0)
        } else {
            setPosition(position + 1)
        }
    }

    const Item = ({image}) => {
        const Style = {
            backgroundImage : "url(" + image.image + ")",
            width: "100%",
        };
        if(position === image.id) {
            return(
                <div className="image" style={Style}>
                    <div className="text-container">
                        <a href={image.link}>
                            <div className="title">
                                {image.title}
                            </div>
                        </a>
                        <div className="description">
                            {image.content}
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }
    const Indicator = ({image}) => {
        const Style = {
            borderRadius: "50%",
            backgroundColor: "#eee",
            width: "10px",
            height: "10px",
            margin: "5px"
        }
        const ActiveStyle = {
            borderRadius: "50%",
            backgroundColor: "lightgreen",
            width: "10px",
            height: "10px",
            margin: "5px"
        }
        function changePosition(){
            setPosition(image.id)
        }
        if(position === image.id){
            return(
                <div className="indicator" style={ActiveStyle}></div>
            )
        } else{
            return(
                <div className="indicator" style={Style} onClick={() => changePosition()}></div>
            )
        }
    }


    return(
        <div className="Carousel" {...handlers}>
            <div className="buttons">
                <div className="button" onClick={() => Prev()}>&#10094;</div>
                <div className="button" onClick={() => Next()}>&#10095;</div>
            </div>
            <div className="images">
                    <div className="ItemsContainer">
                        {props.ImagesList.map( element => {
                            return(
                                <CSSTransition
                                in={position === element.id}
                                timeout={5000}
                                classNames="item"
                                unmountOnExit>
                                    <Item image={element} key={element.id}/>
                                </CSSTransition>
                            )
                        })}
                    </div>
            </div>
            <div className="indicator-container">
                {props.ImagesList.map( element => {
                    return(
                        <CSSTransition
                            in={true}
                            timeout={5000}
                            classNames="item"
                            unmountOnExit>
                            <Indicator image={element}/>
                        </CSSTransition>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel