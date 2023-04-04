//isLoggedIn=> is logged in. if in local storage we have the token then he is logged in


export const isLogggedIn=()=>{
  let data = localStorage.getItem("data")
  if(data != null){
    return true;
  }
  else{
    return false;
  }
};

//doLogin=> data we pass will be set to local storage

export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data))
    next()
};
//doLogout=> data will be removed from local storage

export const doLogout=(next)=>{
    localStorage.removeItem("data")
    next()
};

// get currentUser
export const getCurrentUserDetail=()=>{
    if(isLogggedIn()){
        return JSON.parse(localStorage.getItem("data")).user;
    }
    else{
        return undefined;
    }
};

export const getToken=()=>{
  if(isLogggedIn()){
    return JSON.parse(localStorage.getItem("data")).token
  }else{
    return null;
  }
}