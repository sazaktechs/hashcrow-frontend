import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const About = () => {
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

                        <a className="right-nav-link" href="/contact">Contact</a>
                        <a className="right-nav-link link-selected" href="/about">About</a>
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

                            <h1>Welcome to HashCrow</h1>
                            <p>Welcome to HashCrow, your go-to platform for preserving web content with ease and precision.</p>

                            <h2>Archiving Made Simple</h2>
                            <p>Our website specializes in archiving the content of any given URL, offering you the ability to create a permanent snapshot of webpages for future reference. Whether you're looking to archive a new URL or simply explore the snapshots of a particular website, HashCrow has you covered.</p>

                            <h2>Ensuring Content Integrity</h2>
                            <p>Using state-of-the-art technology, we employ the SHA256 hashing algorithm to ensure the integrity of archived content. Each snapshot comes with a unique permanent link, incorporating the hash of the archived website's content, guaranteeing authenticity and reliability.</p>

                            <h2>User-Friendly Experience</h2>
                            <p>With HashCrow, users have the flexibility to download the archived snapshot as a single HTML page or explore the raw page directly. Whether you're preserving valuable online resources for research, documentation, or historical purposes, HashCrow is here to safeguard your web content efficiently and securely.</p>

                        </div>
                    </div>

                </div>

            </main>
            <footer className="about-body-footer">
                <a target="_blank" href="https://sazaktechs.com/">©SazakTechs</a>

            </footer>
        </div>
    );
};

export default About;