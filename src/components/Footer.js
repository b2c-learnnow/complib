import React from "react";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import { MdAddIcCall } from "react-icons/md";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import IconButton from "../elements/IconButton";

const BoldText = styled.p`
  font-weight: 600;
  font-size: ${Font.Medium};
  text-transform: uppercase;
`;
const SubLinks = styled.p`
  font-size: ${Font.ExtraSmall};
  color: ${Colors.Grey};
`;

const Divider = styled.div`
  width: ${(props) => (props.width ? props.width : "50px")};
  background-color: lightgrey;
  height: 1px;
`;

export default function Footer() {
  return (
    <>
      <div className="py-5" style={{ backgroundColor: "rgb(240,240,240)" }}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div style={{ flex: 1 / 4 }}>
              <p style={{ fontSize: "30px", fontWeight: "bold" }}>LOGO</p>
              <p
                className="my-3"
                style={{ fontSize: Font.ExtraSmall, color: Colors.Grey }}
              >
                We are a team of designers and developers that create high
                quality Magento, Prestashop, Opencart.
              </p>
              <p
                className="mt-3"
                style={{
                  fontSize: Font.Small,
                  color: Colors.Grey,
                  textTransform: "uppercase",
                }}
              >
                Need Help
              </p>
              <div className="d-flex align-items-center">
                <MdAddIcCall />
                <p
                  className="mx-3 m-3"
                  style={{ fontWeight: "bold", fontSize: Font.Large }}
                >
                  ( +91 ) 7644015588
                </p>
              </div>
              <BoldText style={{}} className=" ">
                Payments
              </BoldText>
            </div>
            <div className="mt-3">
              <BoldText>Information</BoldText>
              <Divider className="my-3" />
              <SubLinks className="mt-2">Delivery</SubLinks>
              <SubLinks className="mt-2">About Us</SubLinks>
              <SubLinks className="mt-2">Secure Payment</SubLinks>
              <SubLinks className="mt-2">Contact Us</SubLinks>
              <SubLinks className="mt-2">Sitemap</SubLinks>
              <SubLinks className="mt-2">Stores</SubLinks>
            </div>
            <div className="mt-3">
              <BoldText>Custom links</BoldText>
              <Divider className="my-3" />
              <SubLinks className="mt-2">Legal Notice</SubLinks>
              <SubLinks className="mt-2">Price Drop</SubLinks>
              <SubLinks className="mt-2">New Products</SubLinks>
              <SubLinks className="mt-2">Best Sales</SubLinks>
              <SubLinks className="mt-2">Login</SubLinks>
              <SubLinks className="mt-2">My Account</SubLinks>
            </div>
            <div style={{ flex: 1 / 3 }} className="mt-3">
              <BoldText>Sign Up to newsletter</BoldText>
              <Divider className="my-3" />
              <SubLinks className="mt-2">
                You may unsubscribe at any moment. For that purpose, please find
                our contact info in the legal notice.
              </SubLinks>
              <div className="d-flex">
                <input
                  style={{ flex: "8/10" }}
                  type="text"
                  className="form-control mt-4"
                ></input>
                <IconButton
                  background="black"
                  hover={Colors.PrimaryLight}
                  style={{ fontSize: "22px" }}
                  className="px-3 mt-4 ms-3"
                >
                  <AiOutlineMail />
                </IconButton>
              </div>
              <BoldText className="mt-4 mb-3">Follow us</BoldText>
            </div>
          </div>
        </div>
      </div>

      <Divider width="100%" />
      <div style={{ backgroundColor: "rgb(240,240,240)" }}>
        <div className="container">
          <div className="py-3 d-flex align-items-center justify-content-between" style={{ backgroundColor: "rgb(240,240,240)" }}>
            <SubLinks>Copyright 2019 © Pranav. All Rights Reserved</SubLinks>
            <div style={{ flex: 3/10}} className="d-flex justify-content-evenly align-items-center">
                <SubLinks>Service</SubLinks>
                |
                <SubLinks>FAQ</SubLinks>
                |
                <SubLinks>Privacy Policy</SubLinks>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
