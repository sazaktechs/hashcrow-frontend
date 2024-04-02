import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    const bars = <FontAwesomeIcon icon={faBars} />

    const [dropDownContent, setDropDownContent] = useState("dropdown-content-none");

    const changeDropDownContent = () => {
        
        
        if (dropDownContent == "dropdown-content-none") {
            setDropDownContent("dropdown-content");
            
        }
        else {
            setDropDownContent("dropdown-content-none");
        }
    };

    return (
        <div class="about">
            <main>
                <div className='main'>

                    <div class="navbar navbar-about">

                        <a className="img" href="/"><img className="img" src="hashcrow192.png" alt="crow" /></a>
                        <a className="logo-text" href="/">Hashcrow</a>

                        <a className="right-nav-link link-selected" href="/contact">Contact</a>
                        <a className="right-nav-link" href="/about">About</a>
                        <a className="right-nav-link" href="/">Home</a>

                        <div className="dropdown">
                            <a class="dropbtn" onClick={changeDropDownContent} >{bars}</a>   {/*href={"javascript:void(0)"}*/}
                            <div class={dropDownContent}>
                                <a href="/">Home</a>
                                <a href="/contact">Contact</a>
                                <a href="/about">About</a>
                            </div>
                        </div>

                    </div>
                    <div className="main-container-about">
                        <div class="about-body">

                            <h1>Get in Touch with HashCrow</h1>
                            <p>Welcome to HashCrow, your go-to platform for preserving web content with ease and precision.</p>

                            <h2>Support</h2>
                            <p>Our support team is here to assist you with any inquiries or issues you may have. Whether you have questions about archiving URLs, accessing archived snapshots, or need technical assistance, we're here to help. Reach out to us via email at <a className="mailto" href="mailto:hello@sazaktechs.com">hello@sazaktechs.com</a></p>




                        </div>
                    </div>
                </div>

            </main>
            <footer className="contact-body-footer">
                <a target="_blank" href="https://sazaktechs.com/">©SazakTechs</a>

            </footer>
        </div>
    );
};

export default Contact;