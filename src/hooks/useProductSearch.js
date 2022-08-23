import { useState, useEffect } from "react";
import { getProductsPage } from "../api/apiClient";
import { DEFAULTS } from "../constants/defaults.constants";

const useProductSearch = (
  page = DEFAULTS.PAGE,
  pageSize = DEFAULTS.PAGE_SIZE,
  searchTerm = ""
) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getProductsPage(searchTerm, page, pageSize, { signal })
      .then((data) => {
        console.log(data);

        setResults((prev) => [...prev, ...data.data.products]);
        setHasNextPage(page !== data.paging.page);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: e.message });
      });

    return () => controller.abort();
  }, [searchTerm, page, pageSize]);

  return { isLoading, isError, error, results, hasNextPage };
};

export default useProductSearch;
