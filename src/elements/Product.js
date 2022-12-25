import React from "react";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";
export default function Product({
  image,
  label,
  price,
  discount,
  name,
  containerWidth,
  containerClass,
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <Link
      to={"/product?id=1001"}
      className={`m-3 ${containerClass}`}
      style={{
        width: containerWidth ? containerWidth : "150px",
        maxWidth: "175px",
        textDecoration: "none",
        color: "black",
      }}
    >
      {/* Label Space */}
      
      
      <div
        className="d-flex justify-content-center"
        style={{ width: "150px", height: "150px" }}
      >
        <img src={image} alt="none" />
      </div>

      <AiFillStar style={{ color: "rgb(248, 220, 9)" }} />
      <AiFillStar style={{ color: "rgb(248, 220, 9)" }} />
      <AiFillStar style={{ color: "rgb(248, 220, 9)" }} />
      <AiFillStar style={{ color: "rgb(248, 220, 9)" }} />
      <AiOutlineStar />
      {/* <p className="border-bottom pb-2">Rating</p> */}
      <p style={{ fontSize: Font.Small }} className="py-2">
        {name}
      </p>
      <p
        style={{
          fontSize: discount ? Font.Small : Font.ExtraLarge,
          color: discount ? Colors.Grey : Colors.Primary,
        }}
        className="pb-2"
      >
        {" "}
        <span
          style={{
            textDecoration: discount ? "line-through" : "none",
            fontWeight: discount ? "none" : 500,
          }}
        >
          {" "}
          $ {price}{" "}
        </span>
        {discount && (
          <span
            className="mx-2"
            style={{
              color: Colors.Primary,
              fontSize: Font.ExtraLarge,
              fontWeight: "500",
            }}
          >
            $ {price - discount}
          </span>
        )}
      </p>
   
    </Link>
   
  );
}
