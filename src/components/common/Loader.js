import React from "react";

const Loader = ({ helperText = "Loading..." }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">{helperText}</span>
        </div>
        <p className="px-3 text-muted">{helperText}</p>
      </div>
    </>
  );
};

export default Loader;
