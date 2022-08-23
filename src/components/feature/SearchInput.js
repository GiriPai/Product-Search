import { faSearch, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchInput = ({ setSearch, clearSearch, searchTerm }) => {
  return (
    <>
      <input
        className="form-control"
        type="text"
        value={searchTerm}
        onChange={setSearch}
        placeholder="Type something to start searching... "
        autoFocus
      />
      {searchTerm ? (
        <button
          className="btn btn-link"
          style={{ marginLeft: "-3rem" }}
          onClick={clearSearch}
        >
          <FontAwesomeIcon
            size="lg"
            icon={faXmarkCircle}
            className="text-muted"
          />
        </button>
      ) : (
        <button className="btn" style={{ marginLeft: "-3rem" }}>
          <FontAwesomeIcon size="lg" icon={faSearch} className="text-muted" />
        </button>
      )}
    </>
  );
};

export default SearchInput;
