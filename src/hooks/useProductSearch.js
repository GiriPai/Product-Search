import { useEffect, useState } from "react";
import { getProductsPage } from "../api/apiClient";
import { DEFAULTS } from "../constants/defaults.constants";

const useProductSearch = (
  page = DEFAULTS.PAGE,
  pageSize = DEFAULTS.PAGE_SIZE,
  searchTerm = ""
) => {
  const [currSearchTerm, setCurrSearchTerm] = useState("");

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      setIsLoading(false);
      setIsError(false);
      setError({});
      return;
    }

    if (searchTerm !== currSearchTerm) setResults([]);

    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getProductsPage(searchTerm, page, pageSize, { signal })
      .then(({ data }) => {
        if (data.products) {
          setResults((prev) => [...prev, ...data.products]);
          setHasNextPage(page !== data.paging.total_page);
        } else {
          setHasNextPage(false);
        }
        setIsLoading(false);
        setCurrSearchTerm(searchTerm);
      })
      .catch((e) => {
        if (signal.aborted) return;

        setIsLoading(false);
        setResults([]);
        if (e.response.data.code !== 422) {
          setIsError(true);

          setError({ message: e.message });
        }
      });

    return () => controller.abort();
  }, [searchTerm, page, pageSize, currSearchTerm]);

  return { isLoading, isError, error, results, hasNextPage };
};

export default useProductSearch;
