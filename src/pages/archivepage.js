import React, { useState, useRef } from 'react';
import { ColorRing } from 'react-loader-spinner';
import validator from 'validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ArchivePage = () => {

   const element = <FontAwesomeIcon icon={faMagnifyingGlass} />
   const bars = <FontAwesomeIcon icon={faBars} />

   let counter = 1;
   const [isLoading, setState] = useState([]);
   const [urlTitle, setTitle] = useState('');
   const [urlError, setUrlError] = useState(null);
   const [example, setExample] = useState(null);
   var url = useState('');
   const [posts, setPosts] = useState([]);
   const [selectedOption, setSelectedOption] = useState('archive');
   const [disabledValue, setDisabled] = useState(false);
   const [handlesubmit, setHandleSubmit] = useState('handleSubmit');

   const [dropDownContent, setDropDownContent] = useState("dropdown-content-none");

   const changeDropDownContent = () => {
      console.log("dropdown-test");
      console.log(dropDownContent);
      if (dropDownContent == "dropdown-content-none") {
         setDropDownContent("dropdown-content");
         console.log("dropdown");
      }
      else {
         setDropDownContent("dropdown-content-none");
      }
   };

   const archivePage = async (urlTitle) => {

      url = "https://api.hashcrow.click/hashurl?url=" + urlTitle;
      // url = "http://localhost:8000/hashurl?url=" + urlTitle;


      fetch(url)
         .then((response) => response.json())
         .then((response) => {

            setPosts(response);
            setState({ isLoading: true, Spinner: false })
            console.log(response);
            setDisabled(false);
            // enableButton();
            console.log("Archiving")

         }
         )
         .catch((err) => {
            console.log("Error")
            console.log(err)
            setState({ isLoadingError: true })
            setDisabled(false);
            // enableButton();

         });
   };

   const listPages = async (urlTitle) => {

      url = "https://api.hashcrow.click/listpages?url=" + urlTitle;
      // url = "http://localhost:8000/listpages?url=" + urlTitle;


      fetch(url)
         .then((response) => response.json())
         .then((response) => {
            console.log("response test");
            console.log(response);
            setPosts(response);
            console.log("posts test");
            console.log(posts[0]);
            setState({ isLoadingListPages: true, Spinner: false })
            setDisabled(false);
            // enableButton();

         }
         )
         .catch((err) => {
            setState({ isLoadingError: true })
            setDisabled(false);
            // enableButton();

         });

   };

   const handleSubmit = (e) => {

      e.preventDefault();
      if (urlTitle === "" || urlError !== null || disabledValue === true) {
         // setState({ isLoadingError: true });
      }

      else if (selectedOption === "archive") {

         console.log(selectedOption);
         console.log(urlTitle);

         archivePage(urlTitle);

         setState({ Spinner: true });
         setDisabled(true);
         // disableButton();
      } else if (selectedOption === "list") {
         console.log(selectedOption);
         console.log(urlTitle);
         listPages(urlTitle);
         setState({ Spinner: true });
         setDisabled(true);
         // disableButton();
      }
      // else if (document.activeElement.name === "btnList") {
      //    listPages(urlTitle);
      //    setState({ Spinner: true });
      //    // disableButton();
      // }
      // else if (document.activeElement.name === "btnArchive") {
      //    archivePage(urlTitle);
      //    setState({ Spinner: true });
      //    // disableButton();
      // }

   };

   // const downloadTxtFile = (e) => {
   //    e.preventDefault();
   //    const element = document.createElement("a");
   //    const file = new Blob([posts[0].html]);
   //    element.href = URL.createObjectURL(file);
   //    element.download = posts[0].hash + ".html";
   //    element.click();
   // };

   const downloadTxtFile = (e) => {
      e.preventDefault();
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
         });
   };

   const handleChange = (e) => {
      setSelectedOption(e.target.value);
      // console.log(selectedOption);
   };


   const inputRef = useRef();

   // const buttonRefArchive = useRef();
   // const buttonRefList = useRef();

   // const // disableButton();
   //    buttonRefArchive.current.disableButton();
   //    buttonRefList.current.disableButton();
   // }
   // const // enableButton();
   //    buttonRefArchive.current.enableButton();
   //    buttonRefList.current.enableButton();
   // }

   var regex = new RegExp("^(http[s]?:\\/\\/){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");

   const validateUrl = (url) => {
      if (validator.isURL(url) && regex.test(url)) {
         setUrlError(null);
         // enableButton();
      } else if (url === "") {
         setUrlError(null);
         // enableButton();
      }
      else {
         setUrlError('Enter Valid Url!');
         setExample('Example: https://hashcrow.click/');

         // disableButton();
      }
   }

   const twoCallsUrl = e => {

      setTitle(e.target.value);
      validateUrl(e.target.value);
   }

   return (

      <div>
         
         <main>
            <div className='main'>

               <div class="navbar">

                  <a className="img" href="/"><img className="img" src="hashcrow192.png" alt="crow" /></a>
                  <a className="logo-text" href="/">Hashcrow</a>

                  <a className="right-nav-link" href="/contact">Contact</a>
                  <a className="right-nav-link" href="/about">About</a>
                  <a className="right-nav-link link-selected" href="/">Home</a>

                  <div className="dropdown">
                     <a class="dropbtn" onClick={changeDropDownContent} >{bars}</a>   {/*href={"javascript:void(0)"}*/}
                     <div class={dropDownContent}>
                        <a href="/">Home</a>
                        <a href="/contact">Contact</a>
                        <a href="/about">About</a>
                     </div>
                  </div>
               </div>
               <div className="main-container">
                  <div class="main-content">
                     <div className="paragraph">
                        <p className="paragraph1">Web content that is available today may
                           disappear tomorrow. Archive securely with HashCrow now!</p>
                     </div>

                     <div className="form">
                        <form onSubmit={handleSubmit}>

                           <div className="search-bar">
                              <div class="selection-container">
                                 <select name="select" class="select" value={selectedOption} onChange={handleChange}>
                                    <option value="archive">Archive</option>
                                    <option value="list">List</option>
                                 </select>
                              </div>

                              <input disabled={disabledValue} type="text" placeholder="Ex: https://www.example.com/" aria-label="Search" value={urlTitle}
                                 onChange={(e) => twoCallsUrl(e)} handleChange />

                              <div className="icon-container" onClick={handleSubmit}>
                                 <div id='icon'>{element}</div>
                              </div>

                           </div>

                           {
                              (urlError === null) ?
                                 null
                                 : <div className='urlError'>
                                    <div className='urlErrorValid'>Enter Valid Url!</div>
                                    {/* <span className='urlErrorExample'>Example: https://hashcrow.click/</span> */}
                                 </div>
                           }

                           {
                              (isLoading.isLoading && posts.message != null) ?
                                 <div className='archived-page'>
                                    <h2>{posts.message}</h2>
                                 </div>
                                 : null
                           }

                           {
                              (isLoading.isLoadingListPages && posts[0] == 0) ?
                                 <div className='archived-page'>
                                    <h2>This url has not been archived before!</h2>
                                 </div>
                                 : null

                           }

                           {
                              (isLoading.isLoadingError) ?

                                 <div className="archived-page">
                                    <h2>Error!</h2>
                                 </div>

                                 : null
                           }

                           {
                              (isLoading.Spinner) ?

                                 <div className="spinner">

                                    <ColorRing
                                       visible={true}
                                       height="80"
                                       width="80"
                                       ariaLabel="blocks-loading"
                                       wrapperStyle={{}}
                                       wrapperclassName="blocks-wrapper"
                                       colors={['#04aa6d', '#04aa6d', '#04aa6d', '#04aa6d', '#04aa6d', /*'#f47e60', '#f8b26a', '#abbd81', '#849b87'*/]}
                                    />
                                 </div>

                                 : null
                           }

                           { }

                           {/* <div className='form-button-container'>
                        <button name="btnArchive" ref={buttonRefArchive} type="submit">Archive</button>
                        <button name="btnList" ref={buttonRefList} type="submit">List</button>
                     </div> */}

                        </form>



                     </div>


                     {
                        (!isLoading.isLoadingListPages && !isLoading.isLoading && !isLoading.isLoadingError && !isLoading.isLoadingListPages) ?
                           <div className='archived-page'>


                              {/* <div className='table-container'>
                                 <tr className='table-header'></tr>
                                 <table className='all-version-table'>

                                 </table>
                              </div> */}

                           </div>

                           :
                           <div></div>

                     }


                     {

                        (isLoading.isLoading && posts.message == null) ?

                           <div className="archived-page">

                              <div className='table-container'>
                                 <tr className='table-header'>Archived Page Info</tr>
                                 <table className='all-version-table'>
                                    <tr>
                                       <th>Permanent Link</th>
                                       <td>{<a target='_blank' href={'/' + posts[0].hash + '/' + posts[0].code} >https://hashcrow.click/{posts[0].hash + '/' + posts[0].code}</a>}</td>
                                    </tr>
                                    <tr>
                                       <th>Created Date</th>
                                       <td>{posts[0].created_date}</td>
                                    </tr>
                                 </table>
                              </div>

                              {/* <div className="button-container">

                                    <div>
                                       <a target='_blank' href={'/' + posts[0].hash + '/raw'}><button className='button'>Show Raw</button></a>
                                       <button className='button' onClick={downloadTxtFile}>Download</button>

                                    </div>

                                 </div> */}

                           </div>
                           : null

                     }






                     {

                        (isLoading.isLoadingListPages && posts.message == null && posts[0] !== 0) ?

                           <div className='archived-page'>


                              <div className='table-container'>
                                 <tr className='table-header'>All Snapshots</tr>
                                 <table className='all-version-table'>
                                    {

                                       posts[1].map((post) => {
                                          return (
                                             <div className="mt-5" key={post.code}>

                                                <div className="mt-5" key="second">

                                                   <tr>
                                                      <th>Version {counter++}</th>

                                                   </tr>
                                                   <tr>
                                                      <td className="permanent-link-td">{<a target="_blank" href={post.hash + '/' + posts[0].code}>{'https://hashcrow.click/' + post.hash + '/' + posts[0].code}</a>}</td>
                                                   </tr>
                                                   <tr>

                                                      <th>Created Date</th>
                                                   </tr>
                                                   {post['content'].map((post2) => {
                                                      return (
                                                         <tr>
                                                            <td className="created-date-td">{post2.created_date}</td>
                                                         </tr>
                                                      );
                                                   })}

                                                   <br></br>
                                                   <br></br>

                                                </div>

                                             </div>
                                          );
                                       })
                                    }
                                 </table>
                              </div>

                           </div>
                           : null

                     }




                  </div>
               </div>
            </div>


            {/* <div className="second-part">



               <div className="bottom-links">
                  <div>
                     <a id="archive" href="">Archive</a>
                     <a id="snapshot" href="">Snapshots</a>
                     <a id="trends" href="/trends">Trends</a>
                  </div>
               </div>
               







            </div> */}
         </main>

         <footer className='main-footer'>
            <a target="_blank" href="https://sazaktechs.com/">©SazakTechs</a>

         </footer>
      </div >
   );
};

export default ArchivePage;
