import React, {useState, useImperativeHandle, useRef, forwardRef} from "react";
import "./Content.css";
import Carousel from "./Carousel/Carousel";
import AboutUs from "./AboutUs/AboutUs";
import Contacts from "./Contacts/Contacts";
import Feedback from "./Feedback/Feedback";
import anonymous1 from "./Carousel/anonymous1.jpg";
import anonymous2 from "./Carousel/anonymous2.jpg";

function Content(props) {
    const [ImagesList] = useState([
        {
            id: 0,
            image: anonymous1,
            title: "Hello, friend!",
            content: "We are anonymous we are here to change the world and make it batter. We are using duckduckgo search engine",
            link: "https://duckduckgo.com/"
        },
        {
            id: 1,
            image: anonymous2,
            title: "We are anonymous",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://github.com/searx/searx"
        },
        {
            id: 2,
            image: anonymous2,
            title: "",
            content: "Что-то приуныл...",
            link: ""
        }
    ]);

    const RefedCarousel = forwardRef((props, ref) => {
        const sectionRef = useRef();
        useImperativeHandle(ref, () => ({
            scrollIntoView: () => {
                sectionRef.current.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            }
        }));
        return(
            <div ref={sectionRef}>
                <Carousel ImagesList={props.ImagesList}/>
            </div>
        )
    })
    const RefedAboutUs = forwardRef((props, ref) => {
        const sectionRef = useRef();
        useImperativeHandle(ref, () => ({
            scrollIntoView: () => {
                sectionRef.current.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            }
        }));
        return(
            <div ref={sectionRef}>
                <AboutUs/>
            </div>
        )
    })
    const RefedContacts = forwardRef((props, ref) => {
        const sectionRef = useRef();
        useImperativeHandle(ref, () => ({
            scrollIntoView: () => {
                sectionRef.current.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            }
        }));
        return(
            <div ref={sectionRef}>
                <Contacts/>
            </div>
        )
    })
    const RefedFeedback = forwardRef((props, ref) => {
        const sectionRef = useRef();
        useImperativeHandle(ref, () => ({
            scrollIntoView: () => {
                sectionRef.current.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            }
        }));
        return(
            <div ref={sectionRef}>
                <Feedback/>
            </div>
        )
    })


    return(
        <div className="Сontent">
            <RefedCarousel ImagesList={ImagesList} ref={props.topRef}/>
            <RefedAboutUs ref={props.aboutUsRef}/>
            <RefedContacts ref={props.contactsRef}/>
            <RefedFeedback ref={props.feedbackRef}/>
        </div>
    )
}

export default Content