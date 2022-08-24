import axios from "axios";

export const api = axios.create();

export const getProductsPage = async (
  searchTerm = "",
  page,
  pageSize,
  options = {}
) => {
  const response = await api.get(
    `/backend/search/products?searchTerm=${searchTerm}&page=${page}&itemPerPage=${pageSize}`,
    options
  );
  return response.data;
};
