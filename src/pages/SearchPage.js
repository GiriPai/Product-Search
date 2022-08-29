import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import Alert from "../components/common/Alert";
import ErrorMarkup from "../components/common/ErrorMarkup";
import Loader from "../components/common/Loader";
import Products from "../components/feature/Products";
import SearchInput from "../components/feature/SearchInput";
import SearchStarterUI from "../components/feature/SearchStarterUI";
import { DEFAULTS } from "../constants/defaults.constants";
import useProductSearch from "../hooks/useProductSearch";

const SearchPage = () => {
  const pageSize = DEFAULTS.PAGE_SIZE;
  const [page, setPage] = useState(DEFAULTS.PAGE);
  const [searchTerm, setSearchTerm] = useState("");

  const topRef = useRef();
  const [showTopBtn, setShowTopBtn] = useState(false);

  const { isLoading, isError, results, hasNextPage } = useProductSearch(
    page,
    pageSize,
    searchTerm
  );

  const setSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    topRef.current.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  };

  return (
    <>
      <div
        className=" bg-light py-3 row d-flex justify-content-center"
        ref={topRef}
      >
        <div className="col-xs-12 col-sm-8  col-lg-6 d-flex align-items-center px-4">
          <SearchInput
            searchTerm={searchTerm}
            setSearch={setSearch}
            clearSearch={clearSearch}
          />
        </div>
      </div>

      <div className="container my-3">
        {!searchTerm && <SearchStarterUI />}
        {searchTerm && !isLoading && !isError && !results.length && (
          <Alert variant="info">
            <p className="text-muted fst-italic ">
              No results found. Try searching with different keyword...
            </p>
          </Alert>
        )}

        {isError && <ErrorMarkup />}

        <div
          id="top"
          className="m-3 row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4"
        >
          <Products
            products={results}
            isLoading={isLoading}
            hasNextPage={hasNextPage}
            setPage={setPage}
          />
        </div>
        {showTopBtn && (
          <button type="button" id="fab__scroll_to_top" onClick={scrollToTop}>
            <FontAwesomeIcon size="sm" icon={faUpLong} />
          </button>
        )}

        {isLoading && (
          <Loader helperText="Please wait while we load products for you..." />
        )}
      </div>
    </>
  );
};

export default SearchPage;
