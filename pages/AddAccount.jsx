// import React, { useEffect } from "react";
// import { CardBody, Card, Form, Input, Label, Button, Container} from "reactstrap";
// import { useState } from "react";
// import { createAccount as doCreateAccount } from "../../services/customer-service";
// import { getCurrentUserDetail } from "../../authentication";
// import { viewBalance } from "../../services/customer-service";
// import { toast } from "react-toastify"

// const AddAccount=()=>{

//   const [user, setUser] = useState()
//   const [account, setAccount] = useState({
//     acctID : '',
//     balance: '',
//     acctStatus: ''
//   })

//   const fieldChanged=(event, property)=>{
//     setAccount({...account,[event.target.name]: event.target.value})
//     // console.log(event.target.name)
//   }
//   useEffect(()=>{
//     setUser(getCurrentUserDetail())
//   }, [])

//   const createAccount=(event)=>{
//     event.preventDefault();
//     // console.log(account)
//     if(account.acctID.trim()===''){
//       alert("acctId is required")
//       return;
//     }if(account.balance.trim()===''){
//       alert("acctId is required")
//       return;
//     }if(account.acctStatus.trim()===''){
//       alert("acctId is required")
//       return;
//     }

//     account['acctID'] = account.acctID
//     doCreateAccount(account).then(data=>{
//       toast.error("account created")
//       console.log(account)
//     }).catch((error)=>{
//       toast.error("error")
//       console.log(error)
//     })
//     viewBalance(account).then(data=>{
//       toast.error("acc")
//       console.log(account.balance)
//     }).catch((error)=>{
//       toast.error("error")
//       console.log(error)
//     })

//   }

//   return(
//     <div className="wrappper">
//       <Card>
//         <CardBody>
//           {/* {JSON.stringify(account)} */}
//           <h3> Enter Account Details</h3>
//           <Form onSubmit={createAccount}>
//             <div className="my-3">
//               <Label for = "title">Account ID</Label>
//               <Input type="text" id="acctID" placeholder="Enter your acctount ID" name="acctID" onChange={fieldChanged}/>
//             </div>
//             <div className="my-3">
//               <Label for = "title">Account Balance</Label>
//               <Input type="text" id="balance" placeholder="Enter your Balance" name="balance" onChange={fieldChanged}/>
//             </div>
//             <div className="my-3">
//               <Label for = "title">Account Status</Label>
//               <Input type="text" id="acctStatus" placeholder="Enter the status" name="acctStatus" onChange={fieldChanged}/>
//             </div>
//             <Container className="text-center">
//               <Button type= "submit" color="primary">Submit</Button>
//             </Container>
//           </Form>
//         </CardBody>
//       </Card>
//     </div>
//   )
// }
// export default AddAccount

// import React from "react";
// import {Link, useNavigate, useParams} from "react-router-dom";
// import axios from 'axios';
// import { useState, useEffect } from "react";

// function AccountDetails(props){
//   const navigate = useNavigate();
//   const[account, setAccount]= useState({
//     customer:""
//   });

//   const {customerId}=useParams();

//   useEffect(()=>{
//     const loadAccount = async()=>{
//       const reqdata = await fetch(`http://localhost:9090/api/customers/${customerId}`);

//       const res = reqdata.json();
//       setAccount(await res);
//     }
//     loadAccount();
//   }, []);
//   const{customer}=account
//   const onInputChange=(e)=>{
//     setAccount({
//       ...customer,
//       [e.target.name]: e.target.value
//     });
//   }
//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     const response=await axios.get(`http://localhost:9090/api/customers/${customerId}`, customer);
//     navigate("/accountDetails");

//   };
//   return(
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//             <h2 className="text-center m-4">Get details</h2>
//             <form onSubmit={(e) => handleSubmit(e)}>
//             <div className="mb-3">
//                 <b><label htmlFor = "customerId" className="form-label">Customer detail</label></b>
//             <input type={"text"} className="form-control" placeholder="Enter customer Id" name="customerId" value={customerId} onchange={onInputChange}></input>
//             </div>
//             <button type="submit" clasName="btn btn-outline-success">Proceed</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )

// }
// export default AccountDetails;

// // import { useEffect } from "react";
// // import { Card,CardBody, CardHeader, Container } from "reactstrap";
// // import BankAccountDetails from "../../components/BankAccountDetails";
// // import Base from "../../components/Base"
// // import { getAccountDetails } from "../../services/AccountDetailsService.jsx";

// // import { FormGroup,Form} from "reactstrap";
// // import {Input, Button} from "reactstrap";
// // import {Col} from "reactstrap";

// // const AccountDetails = ()=>{

// //   useEffect(()=>{
// //     // load bank account details from server

// //     getAccountDetails().then((data)=>{
// //       console.log(data);
// //     }).catch(error=>{
// //       console.log(error)
// //     })

// //   },[])

// //     return (

// //       <Base>

// //       <Container>
// //       <BankAccountDetails />

// //       <Card>

// // <CardHeader>
// //   <h1 className="text-center">Account Details</h1>
// // </CardHeader>
// //         <CardBody>

// //         <Form>

// // <FormGroup>

// // <Col sm={10}>
// //     <label for="email" >Account Details </label>
// //     <Input
// //      type="text"
// //      placeholder="Enter Your Account Number"
// //      id="email"

//     />

//     </Col>

// </FormGroup>
// </Form>

//         </CardBody>
//       </Card>
//       <Container className="text-center">
//     <Button color="success"> Submit </Button>
//     </Container>

//       </Container>

//       </Base>
//     )
// }

// export default AccountDetails;
