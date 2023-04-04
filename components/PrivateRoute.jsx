import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isLogggedIn } from '../authentication';

const Privateroute=()=> {


    // return isLoggedIn() ? <Outlet /> : <Navigate href={"/login"} />

    if(isLogggedIn()) {
        return <Outlet />
    }
    else{
        return <Navigate href="/login" />;
    }

  
}

export default Privateroute