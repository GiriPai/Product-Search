import React, { useState } from "react";
import Products from "../components/feature/Products";
import SearchInput from "../components/feature/SearchInput";
import { DEFAULTS } from "../constants/defaults.constants";
import useProductSearch from "../hooks/useProductSearch";

const SearchPage = () => {
  const [page, setPage] = useState(DEFAULTS.PAGE);
  const [pageSize, setPageSize] = useState(DEFAULTS.PAGE_SIZE);
  const [searchTerm, setSearchTerm] = useState("ring");

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

      <div className="m-3 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {isError ? (
          <p className="text-center text-danger">Something went wrong</p>
        ) : (
          <Products
            products={results}
            isLoading={isLoading}
            hasNextPage={hasNextPage}
            setPage={setPage}
          />
        )}

        {Boolean(results.length) && isLoading && (
          <p className="center">Loading More Products...</p>
        )}
      </div>
    </>
  );
};

export default SearchPage;
