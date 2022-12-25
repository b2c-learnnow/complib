import React from "react";
import ProductType1 from "../elements/ProductType1";
import Cctv from "../assets/images/cctv.png";

export default function ProductSuggestion1() {
  return (
    <div className="container d-flex align-items-center justify-content-between">
      <ProductType1
        background={"#ff8a65"}
        headerText={"Samsung"}
        description={"Cctv Package"}
        image={Cctv}
        width={'100%'}
        className=""
      />
      <ProductType1
        background={"#4db6ac"}
        headerText={"Samsung"}
        description={"Cctv Package"}
        image={Cctv}
        className="mx-4 w-150"
      />
      <ProductType1
        background={"#81c784"}
        headerText={"Samsung"}
        description={"Cctv Package"}
        image={Cctv}
        width={'100%'}
        className=""
      />
    </div>
  );
}
