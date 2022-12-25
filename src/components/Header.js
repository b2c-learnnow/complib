import React from "react";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import styled from "styled-components";
import IconButton from "../elements/IconButton";
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom"

const Logo = styled.h1`
  font-size: ${(props) => props.fontSize};
  color: white;
`;

const buttonConfig = {
  className: "mx-2 px-3 py-2",
  style:{ fontWeight: "500" },
  upperCase: "uppercase",
  fontSize: Font.Medium,
  hover: Colors.PrimaryDark,
  background: Colors.Primary,
};

export default function Header() {
  return (
    <div
      id="navbar"
      className="py-3 sticky-top"
      style={{
        backgroundColor: Colors.Primary,
        color: "white",
        fontSize: Font.Medium,
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <Logo fontSize={"25px"} className="mx-3 my-0 p-0">
          LOGO
        </Logo>
        <div className="d-flex">
          <Link to="/">

          <IconButton {...buttonConfig}>Home</IconButton>
          </Link>
          <IconButton {...buttonConfig}>New Product</IconButton>
          <IconButton {...buttonConfig}>Best Sales</IconButton>
          <IconButton {...buttonConfig}>Price Drop</IconButton>
          <IconButton {...buttonConfig}>Contact Us</IconButton>
        </div>
        <div className="mx-3 my-0 p-0 d-flex align-items-center">
          <Link>
            <IconButton {...buttonConfig} style={{ fontSize: '25px' }}>
                <AiOutlineHeart />
            </IconButton>
          </Link>
          <Link to={'/cart'} >
            <IconButton {...buttonConfig} style={{ fontSize: '25px' }}>
                <BsBagCheck />
            </IconButton>
          </Link>
            <p style={{ fontWeight: '600'}}>₹ 0.00</p>
        </div>
      </div>
    </div>
  );
}
