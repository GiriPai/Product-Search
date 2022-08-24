import React, { useState } from "react";
import Alert from "../components/common/Alert";
import ErrorMarkup from "../components/common/ErrorMarkup";
import Loader from "../components/common/Loader";
import Products from "../components/feature/Products";
import SearchInput from "../components/feature/SearchInput";
import SearchStarterUI from "../components/feature/SearchStarterUI";
import { DEFAULTS } from "../constants/defaults.constants";
import useProductSearch from "../hooks/useProductSearch";

const SearchPage = () => {
  const [page, setPage] = useState(DEFAULTS.PAGE);
  const [pageSize, setPageSize] = useState(DEFAULTS.PAGE_SIZE);
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, isError, error, results, hasNextPage } = useProductSearch(
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

  return (
    <>
      <div className="my-3 row d-flex justify-content-center">
        <div className="col-xs-12 col-sm-8  col-lg-6 d-flex align-items-center ">
          <SearchInput
            searchTerm={searchTerm}
            setSearch={setSearch}
            clearSearch={clearSearch}
          />
        </div>
      </div>

      {!searchTerm && <SearchStarterUI />}
      {searchTerm && !results.length && (
        <Alert variant="info">
          <p className="text-muted fst-italic ">
            No results found. Try searching with different keyword...
          </p>
        </Alert>
      )}

      {isError && <ErrorMarkup />}

      <div className="m-3 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <Products
          products={results}
          isLoading={isLoading}
          hasNextPage={hasNextPage}
          setPage={setPage}
        />
      </div>

      {Boolean(results.length) && isLoading && (
        <Loader helperText="Please wait while we load products for you..." />
      )}
    </>
  );
};

export default SearchPage;
