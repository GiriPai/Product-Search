import React, { useRef, useCallback } from "react";
import ProductCard from "./ProductCard";

const Products = ({ products, isLoading, hasNextPage, setPage }) => {
  const intObserver = useRef();
  const lastProductRef = useCallback(
    (product) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((products) => {
        if (products[0].isIntersecting && hasNextPage) {
          setPage((prev) => prev + 1);
        }
      });

      if (product) intObserver.current.observe(product);
    },
    [isLoading, hasNextPage, setPage]
  );

  let content = products.map((product, i) => {
    if (products.length === i + 1) {
      return (
        <ProductCard
          ref={lastProductRef}
          key={i + product.id}
          product={product}
        />
      );
    }
    return <ProductCard key={i + product.id} product={product} />;
  });
  return content;
};

export default Products;
