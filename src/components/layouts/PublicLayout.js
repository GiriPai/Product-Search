import React from "react";

const PublicLayout = ({ children }) => {
  return (
    <>
      <nav className="nav navbar-light bg-light">
        <div className="container text-center p-3">
          <h3> Quinbay</h3>
        </div>
      </nav>
      <div className="container">{children}</div>
    </>
  );
};

export default PublicLayout;
