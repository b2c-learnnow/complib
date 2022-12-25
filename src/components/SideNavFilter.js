import React, { useState, useEffect } from "react";
import { Font } from "../config/Font";
import styled from "styled-components";
import { Colors } from "../config/Colors";

const Divider = styled.div`
  width: 100%;
  background: rgb(240, 240, 240);
  height: 1px;
`;
const Heading = styled.p({
  fontSize: Font.Medium,
  fontWeight: "500",
  textTransform: "uppercase",
});

export default function SideNavFilter(props) {
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    const nav = document.getElementById("navbar").clientHeight;
    setNavHeight(nav);
    console.log("Nav Height", nav, navHeight);
  });
  return (
    <div
      className="my-1 sticky-top border-end"
      style={{
        height: `calc(100vh - ${navHeight + "px"} )`,
        top: navHeight + "px",
      }}
    >
      <div className="p-3">
        <p style={{ fontSize: Font.Normal, fontWeight: "500" }}>Filter</p>
      </div>
      <Divider />
      <div className="p-3 py-2">
        <p
          style={{
            fontSize: Font.ExtraSmall,
            fontWeight: "450",
            color: Colors.Grey,
            textTransform: "uppercase",
          }}
        >
          Categories
        </p>

        <Heading>{props.selectedCategory}</Heading>
      </div>
      <Divider />
      {/* Accordion */}
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button px-3 py-3 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <Heading>Price</Heading>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFour">
            <button
              class="accordion-button px-3 py-3 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <Heading>Brand</Heading>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button px-3 py-3 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <Heading>Discount</Heading>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button px-3 py-3 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <Heading>AVAILABILITY</Heading>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      {/* Accordion */}
    </div>
  );
}
