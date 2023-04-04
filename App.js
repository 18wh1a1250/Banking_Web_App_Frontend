import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Base from './components/Base';
import About from './pages/AboutUs';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
// import AccountDetails from './pages/Customer-routes/AddAccount';
// import Services from './pages/Services';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Privateroute from './components/PrivateRoute';
import AccountTransactionHistory from './pages/Customer-routes/AccountTransactionHistory'
import FundtransferbtwAccounts from "./pages/FundTransferbtwAccounts"
import ThirdPartyFundTransfer from './pages/ThirdPartyFundTransfer';
import Transactions from './pages/Withdraw';
import ProfileInfo from './pages/Customer-routes/ProfileInfo';
import Registration from './pages/Registration';
import CustomerDashboard from './pages/Customer-routes/CustomerDashboard';
import Slides from "./components/slides"
import CustomerProvider from './context/UserProvider';
import AccountDetails from './pages/Customer-routes/AccountDetails';
import AddAccount from './pages/Customer-routes/AddAccount';
import UserProvider from './context/UserProvider';
import Withdraw from './pages/Withdraw';
import Deposit from './pages/Deposit';


function App() {
  return (
<>
    <UserProvider>
  <BrowserRouter>
  <ToastContainer position="bottom-center" />

  <Routes>
    <Route  path="/" exact element= {<Home />} />
    <Route  path="/login" element= {<Login />} />
    <Route  path="/signup" element= {<Registration />} />
    <Route  path="/about" element= {<About />} />
    <Route  path="/contactus" element= {<ContactUs />} />
    


    <Route path="/customer" element={<Privateroute />} >
        <Route path="dashboard" element={<CustomerDashboard />} />
        {/* <Route path = "accountdetails/:id" element={<AccountDetails/>}/> */}
        <Route path="accountdetails/:acctID" element={<AccountDetails />} />
        <Route  path="withdraw" element= {<Withdraw/>} />
        <Route path="deposit" element={<Deposit/>}/>
        <Route  path="transactionshistory/:acctID" element= {<AccountTransactionHistory />} />
        <Route  path="fundtransferbtw2" element= {<FundtransferbtwAccounts />} />
        <Route  path="thirdPartytransfer" element= {<ThirdPartyFundTransfer />} />
        <Route  path="profileinfo" element= {<ProfileInfo />} />
    

    </Route>

  </Routes>
  
  </BrowserRouter>
  </UserProvider>

    
</>
  );
}

export default App;






















// import React from 'react';
// import './App.css';
// import Navbar from './components/NavBar';
// import { BrowserRouter,Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/about';
// import Blogs from './pages/blogs';
// import Covid from './pages/AccountTransactionHistory';
// import DoctorLogin from './pages/Login';
// import PatientLogin from './pages/ProfileInfo';
// import Registration from './pages/registration';

// function App() {
// return (
// 	<BrowserRouter>
// 	{/* <Navbar /> */}
// 	<Routes>
//     <Route path='/' exact element={<Navbar/>}></Route>
// 		<Route path='/about' element ={<About/>} />
// 		<Route path='/blogs' element ={<Blogs/>} />
//     <Route path='/covid' element={<Covid/>} />
//     <Route path='/doc-sign-up' element={<DoctorLogin/>} />
//     <Route path='/pat-sign-up' element={<PatientLogin/>} />
//     <Route path='/registration' element={<Registration/>}/>
// 	</Routes>
// 	</BrowserRouter>
// );
// }

// export default App;
