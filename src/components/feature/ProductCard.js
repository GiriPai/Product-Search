import React from "react";
import ImgCarousal from "../common/ImgCarousal";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = React.forwardRef(({ product }, ref) => {
  const productDetails = (
    <>
      <div className="card h-100">
        <ImgCarousal images={product.images} alt={product.name} />
        <div className="card-body">
          <h6 className="card-text text-wrap text-truncate">{product.name}</h6>
          <p className="text-warning fs-4">{product?.price?.priceDisplay}</p>
          {product?.price?.strikeThroughPriceDisplay && (
            <p className="text-decoration-line-through fs-6 ">
              {product?.price?.strikeThroughPriceDisplay}
              <span className="mx-2 badge bg-info">
                {product?.price?.discount}%
              </span>
            </p>
          )}

          {product?.badge?.merchantBadgeUrl && (
            <div className="d-flex align-items-center">
              <img
                src={product?.badge?.merchantBadgeUrl}
                alt={product?.badge?.merchantBadge}
                width="15px"
                className="mr-3"
              />
              <p className="fs-6 ">{product.location}</p>
            </div>
          )}

          {product?.review?.rating && (
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                size="sm"
                icon={faStar}
                className="text-warning mr-1"
              />
              <p className="fs-6">{product.review.rating}</p>
              <p className="text-muted">({product.review.count})</p>
            </div>
          )}
        </div>
      </div>
    </>
  );

  const content = ref ? (
    <div className="col" ref={ref}>
      {productDetails}
    </div>
  ) : (
    <div className="col">{productDetails}</div>
  );

  return content;
});

export default ProductCard;
