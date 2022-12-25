import ProductImage from "../assets/images/product1.jpeg";
import Product from "../elements/Product";
import HeaderNormal from "../elements/HeaderNormal";
import React, { useState } from "react";

export default function FeaturedProducts(props) {
  const [data, setData] = useState(props.data || []);
  return (
    <div className="container my-5">
      <HeaderNormal>{props.Title}</HeaderNormal>
      <div className="inline-flex">
        {data.map((item) => (
          <Product {...item} />
        ))}
      </div>
    </div>
  );
}
