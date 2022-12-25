import React, { useState, useEffect, useRef } from "react";
import { Colors } from "../config/Colors";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";

import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import IconButton from "../elements/IconButton";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1261&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1261&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1261&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1261&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1261&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1261&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1261&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1261&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1261&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1261&q=80",
  },
];

const NavigateButton = styled.div`
  width: 30px;
  height: 35px;
  border: 1px solid ${Colors.Primary};
  color: ${Colors.Primary};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${Colors.PrimaryLight};
    transition: 0.3s;
  }
`;

export default function ImageViewer(props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const containerRef = useRef();
  const slider = useRef();
  const [containerWidth, setContainerWidth] = useState(400);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    setContainerWidth(containerRef.current.clientWidth);
    const nav = document.getElementById("navbar").clientHeight;
    setNavHeight(nav);
  }, [activeImageIndex]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: false,
    beforeChange: function (currentSlide, nextSlide) {},
    afterChange: function (currentSlide) {},
  };
  const next = () => slider.current.slickNext();
  const previous = () => slider.current.slickPrev();

  return (
    <>
      <div className="row sticky-top" style={{ top: `${navHeight + 20}px` }}>
        <div className="col-2">
          <div
            className="d-flex flex-column"
            style={{ overflow: "hidden", height: "400px" }}
          >
            <NavigateButton onClick={previous} className="mx-auto mb-2">
              <IoMdArrowDropup />
            </NavigateButton>
            <Slider {...settings} className="h-100 mx-auto" ref={slider}>
              {data.map((item, index) => (
                <div
                  onClick={() => setActiveImageIndex(index)}
                  className={`mb-1 p-1 border-radius width-height-60px ${
                    activeImageIndex === index
                      ? "border-active"
                      : "border-inactive"
                  }`}
                >
                  <img src={item.image} className="w-100 h-100" />
                </div>
              ))}
            </Slider>
            <NavigateButton onClick={next} className="mx-auto">
              <IoMdArrowDropdown />
            </NavigateButton>
          </div>
        </div>
        <div
          style={{ height: "400px", position: "relative" }}
          className="col-10 px-0 mx-0"
          ref={containerRef}
        >
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                width: containerWidth,
                height: 400,
                src: data[activeImageIndex].image,
              },
              largeImage: {
                src: data[activeImageIndex].image,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>
        <div className="w-100 mt-3 px-0" style={{ height: "100px" }}>
          <div className="d-flex mx-0">
            <div className="me-2" style={{ flex: 1 / 2 }}>
              <IconButton
                hover={Colors.PrimaryLight}
                background={Colors.PrimaryLight2}
                color={Colors.Primary}
                className="w-100 py-3"
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                <span className="mx-auto">
                  <AiOutlineShoppingCart className="me-4 mb-1" />
                  Add To Cart
                </span>
              </IconButton>
            </div>
            <div className="ms-2" style={{ flex: 1 / 2 }}>
              <Link to={"/address"}>
                <IconButton
                  background={Colors.Primary}
                  hover={Colors.PrimaryDark}
                  color="white"
                  className="w-100 py-3"
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  <span className="mx-auto">
                    {" "}
                    <BsFillHandbagFill className="me-4 mb-1" />
                    Buy Now
                  </span>
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
