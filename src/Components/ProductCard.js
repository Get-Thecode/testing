import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="images/watch.jpg" alt="product iamge" />
        </div>
        <div className="product-details">
          <h6 className="brand">AmazFit</h6>
          <h5 className="product-title">G10</h5>
          <p className="price">$10999</p>
        </div>
      </div>
      <Link to="/cart" className="button signup">
        Add to Cart
      </Link>
    </div>
  );
};

export default ProductCard;
