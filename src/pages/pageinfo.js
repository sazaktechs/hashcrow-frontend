import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Routes, useParams }
   from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { CircleLoader, circleLoader } from 'react-spinners';

import logo from "../hashcrow192.png";



import validator from 'validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const PageInfo = () => {

   const element = <FontAwesomeIcon icon={faMagnifyingGlass} />
   const bars = <FontAwesomeIcon icon={faBars} />
   const question = <FontAwesomeIcon icon={faQuestion} />
   const check = <FontAwesomeIcon icon={faCheck} />
   const xmark = <FontAwesomeIcon icon={faXmark} />

   const [urlTitle, setTitle] = useState('');
   const [urlError, setUrlError] = useState(null);
   const [example, setExample] = useState(null);
   var url = useState('');

   const [selectedOption, setSelectedOption] = useState('');
   const [disabledValue, setDisabled] = useState(false);
   const [handlesubmit, setHandleSubmit] = useState('handleSubmit');

   const [isUpToDate, setIsUpToDate] = useState(null);

   const url_param = useParams();
   let counter = 1;
   const [isLoading, setState] = useState([]);
   var url = useState('');
   const [posts, setPosts] = useState([]);

   const [posts2, setPosts2] = useState([]);


   const [isLoadingError, setIsLoadingError] = useState(false);

   const hash = url_param.hash;

   const code = url_param.code;


   const [dropDownContent, setDropDownContent] = useState("dropdown-content-none");

   var src2 = "https://hashed-web-page-files.s3.us-west-2.amazonaws.com/" + hash + ".html"


   const changeDropDownContent = () => {
      
      
      if (dropDownContent == "dropdown-content-none") {
         setDropDownContent("dropdown-content");
         
      }
      else {
         setDropDownContent("dropdown-content-none");
      }
   };

   const pageInfo = async (url_param) => {
      //showpage
      url = "https://api.hashcrow.click/snapshot_info?hash=" + url_param.hash + "&code=" + url_param.code;
      setIsLoadingError(false);

      fetch(url)
         .then((response) => response.json())
         .then((response) => {

            setPosts(response);
            setState({ isLoading: true, Spinner: false })

         }
         )
         .catch((err) => {

            setIsLoadingError(true)

         });
   };

   const upToDate = async () => {
      //showpage
      url = "https://api.hashcrow.click/check?hash=" + hash + "&url=" + posts[0].url;

      setIsLoadingError(false);
      setState({ isLoading: true, Spinner2: true })
      fetch(url)
         .then((response2) => response2.json())
         .then((response2) => {
            
            setPosts2(response2);
         }
         )
         .catch((err) => {
            
            setIsLoadingError(true)
         })
         .finally(() => {
            setState({ isLoading: true, Spinner2: false })


            


            if (posts2[0].current === "Old!") {
               
               setIsUpToDate("Old!");
            } else if (posts2[0].current === "up-to-date") {
               
               setIsUpToDate("up-to-date");
            }
         });
   };

   const changeIsUpToDate = () => {
      setIsUpToDate("Old!");
   };


   const downloadTxtFile = (e) => {
      e.preventDefault();
      // Disable download button
      disableDownloadButton();
      fetch('https://hashed-web-page-files.s3.us-west-2.amazonaws.com/' + posts[0].hash + ".html", {
         method: 'GET',
         headers: {
            'Content-Type': 'application/html',
         },
      })
         .then((response) => response.blob())
         .then((blob) => {



            // Create blob link to download
            const url = window.URL.createObjectURL(
               new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
               'download',
               posts[0].hash + '.html',
            );

            // Append to html link element page
            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);

            // Enable button until download
            enableDownloadButton();

         });

   };

   const downloadButton = useRef();

   const enableDownloadButton = () => {
      downloadButton.current.disabled = false;
   };

   const disableDownloadButton = () => {
      downloadButton.current.disabled = true;
   };


   return (

      <div>
         <main>
            <div className='main'>

               <div class="navbar">

                  <a className="img" href="/"><img className="img" src={logo} alt="crow" /></a>
                  <a className="logo-text" href="/">Hashcrow</a>

                  <a className="right-nav-link" href="/contact">Contact</a>
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
               <div className='main-container-pageinfo'>  
                  <div class="main-content-pageinfo">

                     {
                        useEffect(
                           () => {
                              pageInfo(url_param);

                           }, []
                        )
                     }


                     {
                        (isLoadingError) ?
                           <div className="page-info">
                              <h2>Error! Try again later</h2>
                           </div>


                           : null
                     }

                     {
                        (isLoading.isLoading && posts.message != null) ?

                           <div className="page-info">

                              <h2>{posts.message}</h2>
                           </div>

                           : null
                     }


                     {

                        (isLoading.isLoading && posts.message == null && !isLoadingError) ?

                           <div>

                              <div className="page-info">
                                 <div className='table-container'>
                                    
                                    <table className='page-info-table'>
                                       <tr>
                                          <th className="snapshot-version-header">Snapshot Version:</th>
                                          <th>Up-to-date: <span className="question-container">{question}
                                             <span class="tooltiptext">This section indicates whether the content of this web page has changed since it was archived. You can verify the current state of this version by clicking the 'Up-to-date' button.</span>
                                          </span></th>
                                          <th>Url</th>
                                          <th>Permanent Link</th>
                                          <th>Archived Date</th>
                                       </tr>
                                       <tr>
                                          <td>{counter}</td>
                                          <td>

                                             {
                                                (isLoading.Spinner2) ?

                                                   <div className="spinner-page-info">
                                                      <div className='color-ring'>
                                                         <ColorRing
                                                            visible={true}
                                                            height="40"
                                                            width="40"
                                                            ariaLabel="blocks-loading"
                                                            wrapperStyle={{}}
                                                            wrapperclassName="blocks-wrapper"
                                                            colors={['#04aa6d', '#04aa6d', '#04aa6d', '#04aa6d', '#04aa6d', /*'#f47e60', '#f8b26a', '#abbd81', '#849b87'*/]}
                                                         />
                                                      </div>

                                                   </div>

                                                   : null
                                             }

                                             {
                                                   (posts2.length !== 0 && !isLoading.Spinner2) ?
                                                   (posts2[0].current === "Old!")
                                                      ? <div className='xmark'>{xmark}</div>
                                                      : <div className='check'>{check}</div>
                                                   : <div></div>
                                             }

                                          </td>
                                          <td><a href={posts[0].url}>{posts[0].url}</a></td>
                                          <td>{<a href={'/' + posts[0].hash + '/' + posts[0].code} >https://hashcrow.click/{posts[0].hash + '/' + posts[0].code}</a>}</td>
                                          <td>{posts[0].created_date}</td>
                                       </tr>


                                    </table>

                                    <table className='page-info-table-small'>
                                       <tr>
                                          <th className="snapshot-version-header">Snapshot Version:</th><td>{counter}</td>
                                       </tr>
                                       <tr>
                                          <th>Up-to-date: <span className="question-container">{question}
                                             <span class="tooltiptext">This section indicates whether the content of this web page has changed since it was archived. You can verify the current state of this version by clicking the 'Up-to-date' button.</span>
                                          </span></th><td>

                                             {

                                                (isLoading.Spinner2) ?

                                                   <div className="spinner-page-info-small">
                                                      <div className='color-ring'>
                                                         <CircleLoader
                                                            type="Circles"
                                                            color="#00BFFF"
                                                            height={100}
                                                            width={100}
                                                         />
                                                      </div>

                                                   </div>

                                                   : null
                                             }

                                             {
                                                
                                                   (posts2.length !== 0 && !isLoading.Spinner2) ?
                                                   (posts2[0].current === "Old!")
                                                      ? <div className='xmark'>{xmark}</div>
                                                      : <div className='check'>{check}</div>
                                                   : <div></div>
                                             }

                                          </td>
                                       </tr>
                                       <tr>
                                          <th>Url:</th><td><a href={posts[0].url}>{posts[0].url}</a></td>
                                       </tr>
                                       <tr>
                                          <th>Permanent Link:</th><td>{<a href={'/' + posts[0].hash + '/' + posts[0].code} >https://hashcrow.click/{posts[0].hash + '/' + posts[0].code}</a>}</td>
                                       </tr>
                                       <tr>
                                          <th>Created Date:</th><td>{posts[0].created_date}</td>
                                       </tr>
                                    </table>



                                    <div className="button-container">

                                       <div className='page-info-button'>
                                          <button className="button" onClick={upToDate}>Up-to-date</button>
                                          <a target='_blank' href={'/' + posts[0].hash + '/raw'}><button className='button'>Show Raw</button></a>
                                          <button ref={downloadButton} className='button' onClick={downloadTxtFile}>Download</button>

                                       </div>

                                    </div>
                                 </div>

                              </div>

                           </div>

                           : null

                     }



                     {
                        (isLoading.rawpage && isLoading.isLoading && posts.message == null) ?
                           <div>

                              <iframe style={{ width: "100%", height: "1000px" }} src={isLoading.rawPageHash} title="description"></iframe>
                           </div>
                           : null
                     }


                  </div>
               </div>
            </div>

         </main>

         <>
            <iframe style={{ width: "100%", height: "1000px" }} src={src2} title="description"></iframe>
         </>

      </div >
   );
};

export default PageInfo;