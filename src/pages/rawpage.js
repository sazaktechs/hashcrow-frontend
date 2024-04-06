import React from 'react';
import { BrowserRouter as Router, useParams }
    from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../hashcrow192.png";

const bars = <FontAwesomeIcon icon={faBars} />

const RawPage = () => {
    const s3Url = process.env.REACT_APP_S3_URL;
    let { hash } = useParams();

    var src2 = s3Url + hash + ".html"

    return (

        <div>
            <main>
                <div className='main'>

                    <>
                        <iframe style={{ width: "100%", height: "1000px" }} src={src2} title="description"></iframe>
                    </>
                   
                </div>

            </main>

        </div >
    );
};

export default RawPage;

