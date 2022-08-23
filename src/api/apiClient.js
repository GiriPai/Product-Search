import axios from "axios";

const BASE_URI = "https://www.blibli.com";

export const api = axios.create({
  baseURL: BASE_URI,
});

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
