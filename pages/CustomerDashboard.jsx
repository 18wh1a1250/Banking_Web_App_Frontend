import React from "react";
import Base from "../../components/Base";

const CustomerDashboard = () => {
  const myStyle = {
    backgroundImage:
      "url('https://img.freepik.com/premium-vector/internet-banking-technology-concept_387612-454.jpg')",
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Base>
      <div style={myStyle}>
        <h1>Welcome to Customer login page</h1>
      </div>
    </Base>
  );
};

export default CustomerDashboard;
