import React from "react";
import styled from "styled-components";
import Timer from "../components/product-details/Timer";
import { Font } from "../config/Font";
import { Colors } from "../config/Colors";
import { AiFillStar, AiFillGift } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const Header = styled.div`
  font-weight: 600;
  font-size: ${Font.Normal};
`;

const Ribbon = styled.div`
  color: white;
  background: ${Colors.Primary};
  font-size: ${Font.Small};
  display: flex;
  align-items: center;
`;

const GreyText = styled.div`
  color: ${Colors.Grey};
  font-size: ${Font.Small};
`;

const SubHeader = styled.div({
  fontWeight: "500",
  color: "black",
  fontSize: Font.ExtraSmall,
  textTransform: "uppercase",
});

const HeaderSubItem = styled.div`
  font-weight: 500;
  font-size: ${(props) => props.fontSize || Font.Large};
  width: 100%;
  color: rgb(90, 90, 90);
`;

function AddOnProducts(props) {
  return (
    <div className=" border w-100" style={{ height: "250px" }}>
      <HeaderSubItem className="p-3 border-bottom">
        Add on Products
      </HeaderSubItem>
    </div>
  );
}

function Description(props) {
  return (
    <div className="my-3">
      <SubHeader>Description</SubHeader>
      <p
        className="mx-2 mt-1"
        style={{ fontSize: Font.Small, color: "rgb(117,117,117)" }}
      >
        {props.description}
      </p>
    </div>
  );
}

function Specification(props) {
  return (
    <div className="border">
      <HeaderSubItem style={{ color: "black" }} className="p-3">
        Specification
      </HeaderSubItem>
      {props.specification.map((item) => (
        <>
          <HeaderSubItem className="p-3 pb-1 border-top">
            {item.header}
          </HeaderSubItem>
          <table className="mx-4">
            <tbody>
              {item.subItem.map((i) => (
                <tr>
                  <td
                    className="py-2"
                    style={{
                      fontSize: Font.Small,
                      color: "rgb(117, 117, 117)",
                      width: i.headingWidth,
                    }}
                  >
                    {i.header}
                  </td>
                  <td
                    className="py-2"
                    style={{
                      fontSize: Font.Small,
                      color: "rgb(117, 117, 117)",
                    }}
                  >
                    {i.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ))}
    </div>
  );
}

function ReviewAndRating(props) {
  const reviewAndRating = [
    {
      totalRating: "3.4",
      description:
        "Best Camera For the Beginners... Totally Loved it... Better experience.. Happy with the Service... Get the Product on time... Thanks..🙏",
      headerText: "Really Nice",
      date: new Date(),
    },
    {
      totalRating: "3.4",
      description:
        "This is my first Canon eos 1500d Camera and I'm very satisfied with this camera. Thank you so much to the flipkart for nice services.",
      headerText: "Best in the market!",
      date: new Date(),
    },
  ];
  return (
    <div className="mt-3 border">
      <HeaderSubItem style={{ color: "black" }} className="p-3">
        Review And Rating
      </HeaderSubItem>
      <div className="border-bottom" style={{ height: "300px" }} />
      {reviewAndRating.map((item) => (
        <div className="border-bottom p-3">
          <div className="d-flex">
            <Ribbon
              style={{ transform: "scale(0.7)" }}
              className="border-radius px-2"
            >
              <span>{item.totalRating}</span>
              <span style={{ fontSize: Font.ExtraSmall, marginBottom: "3px" }}>
                <AiFillStar className="ms-1 mt-0" />
              </span>
            </Ribbon>
            <HeaderSubItem className="mx-2" style={{ fontSize: Font.Normal }}>
              {item.headerText}
            </HeaderSubItem>
          </div>
          <p
            className="mt-2"
            style={{ fontSize: Font.Small, color: "rgb(117, 117, 117)" }}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Content(props) {
  const {} = props;
  const time = new Date(2021, 8, 20);
  const name = "Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens  (Black)";
  const totalRating = "4.6";
  const totalRatingAndReview = "11,368 Ratings & 1,690 Reviews";
  const price = "1000";
  const discount = "400";
  const offers = [
    {
      id: "1",
      name: "10% off on SBI Credit Card, up to ₹1500. On orders of ₹5000 and above",
      heading: "Bank Offer",
      condition: "",
    },
    {
      id: "2",
      name: "Flat ₹1500 off on SBI Credit Card. On order of ₹30,000 and above",
      heading: "Bank Offer",
      condition: "",
    },
    {
      id: "3",
      name: "Get extra 3% off (price inclusive of discount)",
      heading: "Special Price",
      condition: "",
    },
  ];
  const warranty =
    "Product is covered under one-year standard warranty and one-year additional warranty from the date of Product purchased by the customer. Warranty validation / Warranty period confirmation would be done through either Online Warranty Serial No. Tracking system (Service Edge) or Warranty Card and Customer Invoice date.";
  const highlights = [
    "Effective Pixels: 24.1 MP",
    "Sensor Type: CMOS",
    "WiFi Available",
  ];
  const importantNote =
    "Memory Card is not included in this package. It needs to be purchased separately.";
  const sellerInfo = {
    name: "CORSECA",
    rating: "4.7",
    totalSale: "1000",
    location: "Patna",
    policy: [
      "7 day seller replacement policy/brand assistance",
      "GST invoice available",
    ],
  };

  const addOnProduct = [];
  const description =
    "This Canon Camera gives you the freedom to explore different ways to shoot subjects. It packs a multitude of shooting options which you can incorporate in still images to create art that embodies the exact mood and vision you are going for. Don’t worry about the lighting conditions of a place because this camera’s large-sized sensor is designed to capture picture-perfect shots even in a dimly lit environment. Thanks to its Wi-Fi connectivity and NFC paring options, sharing photos is as simple as it gets.";
  const specification = [
    {
      id: "1",
      header: "In The Box",
      subItem: [
        {
          header: "1 Camera Body, 18 - 55 mm Lens, Battery, Battery Charger",
          description: "",
          headingWidth: "350px",
        },
      ],
    },
    {
      id: "2",
      header: "General",
      subItem: [
        {
          header: "Brand",
          description: "Canon",
          headingWidth: "150px",
        },
        {
          header: "Model Number",
          description: "1500D",
          headingWidth: "150px",
        },
        {
          header: "Brand",
          description: "Canon",
          headingWidth: "150px",
        },
        {
          header: "SLR Variant",
          description: "Body+ 18-55 mm IS II Lens",
          headingWidth: "150px",
        },
        {
          header: "Brand Color",
          description: "Black",
          headingWidth: "150px",
        },
        {
          header: "Type",
          description: "DSLR",
          headingWidth: "150px",
        },
        {
          header: "Effective Pixels",
          description: "24.1 MP",
          headingWidth: "150px",
        },
      ],
    },
    {
      id: "3",
      header: "Sensor Features",
      subItem: [
        {
          header: "Sensor Type",
          description: "CMOS",
          headingWidth: "150px",
        },
        {
          header: "Image Sensor Size",
          description: "22.3 x 14.9 mm",
          headingWidth: "150px",
        },
        {
          header: "ISO Rating",
          description: "100 - 6400 (Max up to 12800)",
          headingWidth: "150px",
        },
      ],
    },
    {
      id: "4",
      header: "Focus Features",
      subItem: [
        {
          header: "Focus Points",
          description: "9-Point Af",
          headingWidth: "150px",
        },
      ],
    },
    {
      id: "5",
      header: "Shutter Features",
      subItem: [
        {
          header: "Shutter Speed",
          description: "1/4000 sec",
          headingWidth: "150px",
        },
        {
          header: "Self-timer",
          description: "1500D",
          headingWidth: "150px",
        },
        {
          header: "Continuous Shots",
          description: "3fps shooting",
          headingWidth: "150px",
        },
      ],
    },
  ];
  return (
    <div className="mx-2">
      {time && <Timer time={time} />}
      <Header>{name}</Header>
      <div className="d-flex my-1 mt-2">
        <Ribbon className="border-radius px-2">
          <span>{totalRating}</span>
          <span style={{ fontSize: Font.ExtraSmall, marginBottom: "3px" }}>
            <AiFillStar className="ms-1 mt-0" />
          </span>
        </Ribbon>
        <GreyText className="mx-2">{totalRatingAndReview}</GreyText>
      </div>
      {discount && (
        <p
          className="mt-2"
          style={{ color: Colors.Tertiary, fontSize: Font.ExtraSmall }}
        >
          Special Price
        </p>
      )}
      <p
        className=""
        style={{ fontSize: "22px", color: "black", fontWeight: "600" }}
      >
        {discount && <span className="mx-2">₹ {price - discount}</span>}
        <span
          style={{
            textDecoration: discount ? "line-through" : "none",
            fontSize: discount ? "16px" : "20px",
            color: discount ? Colors.GreyLight : "black",
            fontWeight: discount ? "normal" : "600",
          }}
        >
          ₹ {price}
        </span>
        {discount && (
          <span
            className="mx-2"
            style={{ fontSize: "16px", color: Colors.Grey }}
          >
            {100 - ((price - discount) / price) * 100}%
          </span>
        )}
      </p>
      {/* Offers */}
      <p
        className="mt-2"
        style={{
          fontWeight: "500",
          color: "black",
          fontSize: Font.ExtraSmall,
          textTransform: "uppercase",
        }}
      >
        Offers
      </p>
      <div className="">
        {offers.map((item) => (
          <p
            className="mt-1"
            key={item.id}
            style={{ color: Colors.Primary, fontSize: `${Font.Small}` }}
          >
            <AiFillGift className="mx-2" />
            <span style={{ fontWeight: 600, color: "black" }}>
              {item.heading}:
            </span>{" "}
            {item.name}
          </p>
        ))}
      </div>
      {/* Delivery */}
      <p
        className="mt-3"
        style={{
          fontWeight: "500",
          color: "black",
          fontSize: Font.ExtraSmall,
          textTransform: "uppercase",
        }}
      >
        Delivery
      </p>
      <div className="mx-2 my-2" style={{ width: "300px" }}>
        <div className="border d-flex border-radius">
          <div
            style={{ flex: 1 / 6 }}
            className="d-flex align-items-center justify-content-center"
          >
            <p
              className="mb-1"
              style={{ color: Colors.Primary, fontSize: Font.ExtraSmall }}
            >
              <GrLocation />
            </p>
          </div>

          <input
            type="text"
            style={{ flex: 3 / 6, outline: "none" }}
            className="border-0"
            placeholder="Pin Code"
          />
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              flex: 2 / 6,
              backgroundColor: Colors.PrimaryLight2,
              color: Colors.PrimaryDark,
            }}
          >
            <p style={{ color: Colors.Primary, fontSize: Font.ExtraSmall }}>
              CHECK
            </p>
          </div>
        </div>
      </div>

      {/* Warranty */}
      {warranty && (
        <>
          <p
            className="mt-3"
            style={{
              fontWeight: "500",
              color: "black",
              fontSize: Font.ExtraSmall,
              textTransform: "uppercase",
            }}
          >
            Warranty
          </p>
          <div className="mx-2">
            <p
              className="mt-1"
              style={{ fontSize: Font.Small, color: "rgb(117, 117, 117)" }}
            >
              {warranty}
            </p>
          </div>
        </>
      )}
      <div className="d-flex justify-content-between">
        {highlights.length && (
          <div>
            <SubHeader className="mt-3">Highlights</SubHeader>
            <div className="mx-2">
              <ul className="mt-1">
                {highlights.map((item) => (
                  <li
                    style={{ fontSize: Font.Small, color: "rgb(117,117,117)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {importantNote && (
          <div className="mt-3" style={{ maxWidth: "300px" }}>
            <SubHeader className="ms-2">Important Note</SubHeader>
            <p
              className="ms-2"
              style={{ fontSize: Font.Small, color: "rgb(117,117,117)" }}
            >
              {importantNote}
            </p>
          </div>
        )}
      </div>
      <SubHeader className="">
        Seller :{" "}
        <span style={{ color: Colors.Primary }}>{sellerInfo.name}</span>
      </SubHeader>
      <div className="mt-1 d-flex justify-content-between">
        <ul className="mt-1">
          <li
            style={{ fontSize: Font.Small, color: "rgb(117,117,117)" }}
            className="d-flex"
          >
            Rating{" "}
            <Ribbon
              style={{ transform: "scale(0.7)" }}
              className="border-radius px-2 mx-2"
            >
              <span>{sellerInfo.rating}</span>
              <span style={{ fontSize: Font.ExtraSmall, marginBottom: "3px" }}>
                <AiFillStar className="ms-1 mt-0" />
              </span>
            </Ribbon>
          </li>
          <li style={{ fontSize: Font.Small, color: "rgb(117,117,117)" }}>
            Total Sales {sellerInfo.totalSale}
          </li>
          <li style={{ fontSize: Font.Small, color: "rgb(117,117,117)" }}>
            Location {sellerInfo.location}
          </li>
        </ul>
        <ul className="mt-1">
          {sellerInfo.policy.map((item) => (
            <li style={{ fontSize: Font.Small, color: "rgb(117,117,117)" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <AddOnProducts addOnProduct={addOnProduct} />
      <Description description={description} />
      <Specification specification={specification} />
      <ReviewAndRating />
    </div>
  );
}
