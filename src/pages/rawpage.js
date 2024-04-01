import React from 'react';
import { BrowserRouter as Router, useParams }
    from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../hashcrow192.png";

const bars = <FontAwesomeIcon icon={faBars} />

const RawPage = () => {

    let { hash } = useParams();

    var src2 = "https://hashed-web-page-files.s3.us-west-2.amazonaws.com/" + hash + ".html"




    return (

        <div>
            <main>
                <div className='main'>

                    {/* <div class="navbar">

                        <a className="img" href="/"><img className="img" src={logo} alt="crow" /></a>
                        <a className="logo-text" href="/">Hashcrow</a>

                        <a className="right-nav-link" href="/contact">Contact</a>
                        <a className="right-nav-link" href="/about">About</a>
                        <a className="right-nav-link" href="/">Home</a>

                        <div className="dropdown">
                            <a href="javascript:void(0)" class="dropbtn">{bars}</a>
                            <div class="dropdown-content">
                                <a href="#">Home</a>
                                <a href="#">Contact</a>
                                <a href="#">About</a>
                            </div>
                        </div>
                    </div> */}

                    <>
                        <iframe style={{ width: "100%", height: "1000px" }} src={src2} title="description"></iframe>
                    </>
                   
                </div>


                
            </main>

            {/* <footer className="about-body-footer">
                <a target="_blank" href="https://www.linkedin.com/company/sazaktechs/">Copyright ©  SazakTechs</a>

            </footer> */}
        </div >




    );
};

export default RawPage;

