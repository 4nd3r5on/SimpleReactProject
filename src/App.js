import React, {useRef, useState, createRef} from "react"
import Context from "./Context";
import './App.css';
import Header from "./Header/Header";
import Content from "./Content/Content";
import Menu from "./Menu/Menu"
import {useSwipeable} from "react-swipeable";
import ModalWindow from "./ModalWindow/ModalWindow";

function App() {
    const ref = useRef(null);
    const [modal, setModal] = useState(false)


    const topRef = createRef();
    const aboutUsRef = createRef();
    const contactsRef = createRef();
    const feedbackRef = createRef();
    function scrollToTopRef() {
        return topRef.current.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    }
    function scrollToAboutUsRef() {
        return aboutUsRef.current.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    }
    function scrollToContactsRef() {
        return contactsRef.current.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    }
    function scrollToFeedbackRef() {
        return feedbackRef.current.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    }


    function modalChange() {
        console.log(modal)
        modal === false ? setModal( true ) : setModal( false )
    }


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
        <Context.Provider value={{ modalChange }}>
            <div className="App">
                <ModalWindow close={modalChange} show={modal}/>
                <Header menu={MenuCloser}/>
                <div className="horizontal-container">
                    <div className="content-container" style={ContentStyle}>
                        <Content
                            topRef={topRef}
                            aboutUsRef={aboutUsRef}
                            contactsRef={contactsRef}
                            feedbackRef={feedbackRef}/>
                    </div>
                    <div className="menu-container" style={MenuStyle} ref={ref} {...handlers}>
                        <Menu
                            scrollToTopRef={scrollToTopRef}
                            scrollToAboutUsRef={scrollToAboutUsRef}
                            scrollToContactsRef={scrollToContactsRef}
                            scrollToFeedbackRef={scrollToFeedbackRef}
                            ChangeModal={modalChange}
                            MenuCloser={MenuCloser}/>
                    </div>
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
