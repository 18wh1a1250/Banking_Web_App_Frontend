import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Base from "../../components/Base";
import userContext from "../../context/userContext";
import { acctInfo } from "../../services/customer-service";
import { myAxios } from "../../services/helper";

function AccountDetails() {
  const object = useContext(userContext);
  const [data, setAccount] = useState([]);

  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(data));
  }, [data]);
  const { acctID } = useParams();
  useEffect(() => {
    acctInfo(acctID).then((data) => {
      console.log(data);
      setAccount({ ...data });
    });
  }, []);

  const viewAccount = () => {
    return (
      <div>
        <div className="container" style={divstyle}>
          <div className="row">
            <div className="col-md-7 offset-md-3 border rounded p-3 mt-3 shadow">
              <h3 className="text-center m-6">Account Details:</h3>
              <div className="card">
                <div className="card-header">
                  <ul className="list-group list-group-flush">
                    <div className="row">
                      <div className="col-md-4">
                        <b> Account Id:</b>
                        <li className="list-group-item center">
                          {object.user.data.acctID}
                        </li>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <b>Balance:</b>
                          <li className="list-group-item center">
                            {data.balance}
                          </li>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <b>status</b>
                        <li className="list-group-item center">
                          {data.acctStatus}
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
    );
  };

  const divstyle = {
    position: "absolute",
    marginleft: "50%",
    marginright: "500%",
    margintop: "10%",
    paddingright: "8.5%",
  };
  return <Base>{viewAccount()}</Base>;
}

export default AccountDetails;
