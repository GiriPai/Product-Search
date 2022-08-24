import React from "react";
import Alert from "./Alert";

const ErrorMarkup = ({ errorText = "Something went wrong..." }) => {
  return (
    <Alert variant="danger">
      <p className="text-dark fst-italic fw-bold">{errorText}</p>
    </Alert>
  );
};

export default ErrorMarkup;
