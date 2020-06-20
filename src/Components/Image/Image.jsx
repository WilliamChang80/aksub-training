import React from "react";

const Image = ({ source, name }) => {
  return <img src={source} className={name} alt="product" />;
};

export default Image;
