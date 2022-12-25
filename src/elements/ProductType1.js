import React from "react";
import { Font } from "../config/Font";

export default function ProductType1({
  background,
  height,
  className,
  headerText,
  image,
  description,
  width
}) {
  const mouseOver = () => console.log("Mouse Over");
  const mouseOut = () => console.log("Mouse Out");
  return (
    <div
      onMouseEnter={mouseOver}
      onMouseLeave={mouseOut}
      style={{ background: background, width , height: height ? height : "200px" }}
      className={` border-radius p-4 pe-0 ${className}`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="">
          <p
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: '22px',
            }}
          >
            {headerText}
          </p>
          <p style={{ color: "white", fontSize: '20px' }}>
            {description}
          </p>

          <br />
        </div>
        <div style={{ overflow: "hidden", maxWidth: "50%" }}>
          <img src={image} style={{ height: '180px' }} className="ms-5" alt="" />
        </div>
      </div>
    </div>
  );
}
