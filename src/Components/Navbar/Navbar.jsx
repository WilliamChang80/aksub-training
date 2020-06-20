import React from "react";

const Navbar = ({ history }) => {
  return (
    <div className="navbar">
      <div onClick={() => history.push({ pathname: "/product" })}>Product</div>
      <div onClick={() => history.push("/payment")}>Payment</div>
    </div>
  );
};

export default Navbar;
