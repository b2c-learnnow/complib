import React, { useEffect, useState } from "react";
import { Colors } from "../config/Colors";
import HeaderNormal from "../elements/HeaderNormal";
import ProductImage from "../assets/images/product1.jpeg";
import styled from "styled-components";
import { Font } from "../config/Font";
import moment from "moment";
import Timer from "../elements/CountDownTimer";

const Divider = styled.div`
  width: ${(props) => (props.width ? props.width : "50px")};
  background-color: lightgrey;
  height: 1px;
`;

function Product2({
  time,
  stock,
  label,
  price,
  name,
  discount,
  decorationText,
}) {
  const [isMouseInside, setIsMouseInside] = useState("white");
  const mouseEnter = () => {
    console.log("mouse In");
    setIsMouseInside("rgb(185, 190, 238)");
  };

  const mouseOut = () => {
    console.log("mouse Out");
    setIsMouseInside("white");
  };

  return (
    <div
      className="p-5 border mx-2 w-100 border-radius"
      onMouseEnter={mouseEnter}
      style={{ backgroundColor: isMouseInside }}
      onMouseOut={mouseOut}
    >
      <div className="d-flex justify-content-between">
        <div
          style={{ flex: 1 / 2 }}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={ProductImage}
            className="mx-auto"
            style={{ height: "200px" }}
          />
        </div>
        <div style={{ flex: 1 / 2 }}>
          rating
          <Divider className="w-100" />
          <p
            className="my-2"
            style={{ fontSize: Font.Normal, color: Colors.Grey }}
          >
            {name}
          </p>
          <div className="d-flex">
            <span
              style={{
                textDecoration: discount ? "line-through" : "none",
                color: discount ? Colors.Grey : Colors.Primary,
                fontWeight: discount ? "normal" : "500",
              }}
            >
              $ {price}
            </span>
            {discount && (
              <span
                style={{ color: Colors.Primary, fontWeight: "500" }}
                className="mx-2"
              >
                $ {discount}
              </span>
            )}
          </div>
          <p>
            <span style={{ fontSize: Font.ExtraSmall, color: Colors.Grey }}>
              Availability:
            </span>{" "}
            <span style={{ color: Colors.Primary, fontSize: Font.Small }}>
              {" "}
              {stock} In Stock
            </span>
          </p>
          <p
            className="mt-3"
            style={{ fontSize: Font.ExtraSmall, color: Colors.Grey }}
          >
            {decorationText}
          </p>
          <Timer time={time} />
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    id: "1",
    name: "Juicy Couture Juicy Quilted Terry Track Jacket",
    label: "-10%",
    price: "35.90",
    discount: "32.31",
    stock: "1198",
    decorationText: "Hurry Up! Offer ends in",
    // time: moment(new Date()).add(1, "days"),
    time: moment([2021, 8, 20]).add(1, "months"),
    rating: "   ",
    image: ProductImage,
  },
  {
    image: ProductImage,
    id: "2",
    name: "Trans-Weight Hooded Wind And Water Resistant Shell",
    label: "-5%",
    price: "11.90",
    discount: "11.31",
    stock: "299",
    decorationText: "Hurry Up! Offer ends in",
    // time: moment(new Date()).add(1, "days"),
    rating: "",
    time: moment([2021, 8, 20]).add(1, "months"),
  },
];

export default function HotDeals() {
  return (
    <div className="p-5" style={{ backgroundColor: Colors.LightGrey }}>
      <div className="container">
        <HeaderNormal>Hot Deals</HeaderNormal>
        <div className="d-flex my-3">
          {data.map((item) => (
            <Product2 {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
