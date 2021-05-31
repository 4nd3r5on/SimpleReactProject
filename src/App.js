import React, {useRef, useState} from "react"
import './App.css';
import Header from "./Header/Header";
import Content from "./Content/Content";
import Menu from "./Menu/Menu"
import {useSwipeable} from "react-swipeable";

function App() {
    const ref = useRef(null);
    const [opacity, setOpacity] = useState(0);
    const [menu, setMenu] = useState(0);
    function MenuCloser() {
        if(menu === 380) {
            setMenu(0)
            setTimeout(() => { setOpacity(0) }, 100);

        } else {
            setMenu(380)
            setOpacity(100)
        }
    }
    const handlers = useSwipeable({
        onSwipedRight: () => MenuCloser(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    const ContentStyle = {
        width: "calc(100% - " + menu + "px)"
    };
    const MenuStyle = {
        width: menu,
        maxWidth: "100vw",
        opacity: opacity + "%"
    };
    return (
        <div className="App">
            <div className="container">

            </div>
            <Header menu={MenuCloser}/>
            <div className="horizontal-container">
                <div className="content-container" style={ContentStyle}>
                    <Content/>
                </div>
                <div className="menu-container" style={MenuStyle} ref={ref} {...handlers}>
                    <Menu/>
                </div>
            </div>
        </div>
    );
}

export default App;
