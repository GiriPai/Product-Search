import React from "react";
/**
 *
 * variant =  primary | secondary | success | danger | warning | info | light | dark
 */
const Alert = ({ children, variant = "primary" }) => {
  return (
    <div className={`text-center alert alert-${variant}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;
