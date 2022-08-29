import React from "react";

import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "../../hooks/useWindowSize";

const PublicLayout = ({ children }) => {
  const { width } = useWindowSize();

  const tabletVW = 768;
  return (
    <>
      <nav className="nav navbar-light bg-light">
        <div className="container text-center p-3 d-flex justify-content-between  align-items-center">
          <FontAwesomeIcon size="lg" icon={faBars} />
          {width > tabletVW ? <h3> Quinbay</h3> : <h3>Q</h3>}
          <FontAwesomeIcon size="lg" icon={faCartShopping} />
        </div>
      </nav>
      {children}
    </>
  );
};

export default PublicLayout;
