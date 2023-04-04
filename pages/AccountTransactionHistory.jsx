import React from "react";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Base from "../../components/Base";
import userContext from "../../context/userContext";
import { transactionLogs } from "../../services/customer-service";

function AccountTransactionHistory() {
  const object = useContext(userContext);
  const [data, setHistory] = useState([]);
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(data));
  }, [data]);
  const { acctID } = useParams();
  useEffect(() => {
    transactionLogs(acctID).then((data) => {
      console.log(data);
      setHistory({ ...data });
    });
  }, []);

  const viewTransactionHistory = () => {
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
                          <b>Transaction Type:</b>
                          <li className="list-group-item center">
                            {data.transacType}
                          </li>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <b>Transaction Status</b>
                        <li className="list-group-item center">
                          {data.transacStatus}
                        </li>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <b>Initial Balance:</b>
                        <li className="list-group-item center">
                          {data.initBal}
                        </li>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <b>Final Balance:</b>
                        <li className="list-group-item center">
                          {data.finalBal}
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
  return <Base>{viewTransactionHistory()}</Base>;
}

export default AccountTransactionHistory;
