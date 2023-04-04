import React from "react";
import customerContext from "../context/userContext";
import Base from "../components/Base";

function ThirdPartyFundTransfer(){
    return(
        <customerContext.Consumer>

            {(object)=>(
                <Base>
                <h1>Fund Transferrrrrrrrrr</h1>
                {console.log(object)}
                <h1>Welcome user : {object.user.login && object.customer.data.user.name}</h1>
                </Base>
            )}
        </customerContext.Consumer>
    )
}
export default ThirdPartyFundTransfer