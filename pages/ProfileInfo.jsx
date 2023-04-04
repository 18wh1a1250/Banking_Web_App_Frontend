import React, { useContext } from "react";
import Base from "../../components/Base";
import userContext from "../../context/userContext";

function ProfileInfo() {
  const divstyle = {
    position: "absolute",
    marginleft: "50%",
    marginright: "500%",
    margintop: "10%",
    paddingright: "8.5%",
  };
  const object = useContext(userContext);
  return (
    <userContext.Consumer>
      {(user) => (
        <Base>
          <div>
            <div className="container" style={divstyle}>
              <div className="row">
                <div className="col-md-7 offset-md-3 border rounded p-3 mt-3 shadow">
                  <h3 className="text-center m-6">
                    {object.user.data.name}'s profile
                  </h3>
                  <div className="card">
                    <div className="card-header">
                      <ul className="list-group list-group-flush">
                        <div className="row">
                          <div className="col-md-4">
                            <b> Account Id:</b>
                            <li className="list-group-item ">
                              {object.user.data.acctID}
                            </li>
                          </div>
                          <div className="col-md-4">
                            <b>Account Number:</b>
                            <li className="list-group-item center">
                              {object.user.data.accountNo}
                            </li>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <b>IFSC Code:</b>
                            <li className="list-group-item center">
                              {object.user.data.ifscCode}
                            </li>
                          </div>
                          <div className="col-md-4">
                            <b>Mobile Number:</b>
                            <li className="list-group-item center">
                              {object.user.data.mobileno}
                            </li>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <b>Email: </b>
                          <li className="list-group-item center">
                            {object.user.data.email}
                          </li>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <b>City: </b>
                            <li className="list-group-item center">
                              {object.user.data.city}
                            </li>
                          </div>
                          <div className="col-md-4">
                            <b>State: </b>
                            <li className="list-group-item center">
                              {object.user.data.state}
                            </li>
                          </div>
                          <div className="col-md-4">
                            <b>Country: </b>
                            <li className="list-group-item center">
                              {object.user.data.country}
                            </li>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Base>
      )}
    </userContext.Consumer>
  );
}

export default ProfileInfo;

// import React from "react";
// import Base from "../../components/Base"
// import axios from "axios";
// import { useState, useEffect } from "react";
// import {Link} from "react-router-dom";

// function ProfileInfo(props){
//     const [profile, setProfile] = useState('');

//     useEffect(()=>{
//         loadProfile();
//     }, []);

//     const loadProfile = async()=>{
//         await axios.get(`http://localhost:9090/api/v1/auth/login/${localStorage.getItem("data").token}`)
//         .then(res =>{
//             console.log(res.data)
//             axios.get(`http://localhost:9090/api/customers/${res.data}`)
//             .then(response => {
//                 setProfile(response.data)
//                 console.log(response.data);
//             })
//         }).catch(error=>{
//             console.log(error);
//         })
//     };
//     const divstyle={
//         position:"absolute",
//         marginleft: "50%",
//         marginright: "500%",
//         margintop : "10%",
//         paddingright: "8.5%",
//     }
//     return(
//         <Base>
//         <div>
//             <div className="container" style={divstyle}>
//                 <div className="row">
//                     <div className="="col-md-7 offset-md-3 border rounded p-3 mt-3 shadow>
//                         <h3 className="text-center m-6">{profile.name}</h3>
//                         <div className="card">
//                             <div className="card-header">
//                                 <ul className="list-group list-group-flush">
//                                     <div className="row">
//                                         <div className="col-md-4">
//                                         <b> Customer id:</b>
//                                         <li className="list-group-item center">
//                                                 {profile.customerId}
//                                         </li>
//                                     </div>
//                                     <div className="col-md-4">
//                                         <b> Account Id:</b>
//                                         <li className="list-group-item center">
//                                                 {profile.acctID}
//                                         </li>
//                                     </div>
//                                     <div className="col-md-4">
//                                         <b> Name:</b>
//                                         <li className="list-group-item center">
//                                                 {profile.name}
//                                         </li>
//                                     </div>
//                                     </div>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </Base>
//     )
// }

// export default ProfileInfo;

// // import React, {useState} from 'react'
// // import {Link} from 'react-router-dom';
// // import email from '../components/email.png'
// // import lock from "../components/icon.jpg";
// // import profile from "../components/lock.png";
// // function PatientLogin() {

// //     const [emaillog, setEmaillog] = useState(" ");
// //     const [passwordlog, setPasswordlog] = useState(" ");

// //     return (
// //         <form>
// //             <div className='main'>
// //                 <div className='sub-main'>
// //                     <div>
// //                         <div className='imgs'>
// //                             <div className='container-image'>
// //                                 <img src={profile} alt='profile' className='profile'/>
// //                             </div>
// //                         </div>
// //                         <div>
// //                             <h1 className='LHeader'>Login</h1>
// //                             <div>
// //                                 <img src={email} alt="emial" className='email' />
// //                                 <input type="email" placeholder='Enter Email-id' className='fill' onChange={(event) => setEmaillog(event.target.value) }/>
// //                             </div>
// //                             <div className='second-input'>
// //                                 <img src={lock} alt='password' className='email' />
// //                                 <input type="password" placeholder='Enter Password' className='fill' onChange={(event) => setPasswordlog(event.target.value) }/>
// //                             </div>
// //                             {/* HERE WITH THE HELP OF LINK PROVIDED BY REACT-ROUTER WE CAN NAVIGATE TO OTHER PAGES
// //                                 IN LINK WE HAVE TO PASS LOCATION OF THE NAVIGATING PAGE AS PATH IS DEFINED IN THE APP.JS*/}
// //                             <div className='login-btn'>
// //                                 <Link to='/home'>
// //                                     <button type="button">Login</button>
// //                                 </Link>
// //                             </div>
// //                             <div className='reg-link'>
// //                                 <Link className='link' to='/registration'>
// //                                     <li>Register Now</li>
// //                                 </Link>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </form>
// //     )
// // }

// // export default PatientLogin
