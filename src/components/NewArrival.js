import React from "react";
import { Font } from "../config/Font";
import IconButton from "../elements/IconButton";
import ProductImage from "../assets/images/product1.jpeg";
import Product from "../elements/Product";
import Cctv from "../assets/images/cctv.png";
import ProductType2 from "../elements/ProductType1";
import HeaderNormal from "../elements/HeaderNormal"
import { Colors } from "../config/Colors"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Product3({ discount, image, price, name }) {
  return (
    <div className="d-flex col-4">
      <div
        className="d-flex justify-content-center"
        style={{ width: '120px', height: '100px' }}
      >
        <img src={image} alt="none" />
      </div>
      <div>
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
          <span style={{ textDecoration: discount ? "line-through" : "none", fontWeight: discount ? 'none' : 500 }}>
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
      </div>
    </div>
  )
}

const data = [
  {
    id: "1",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "2",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "3",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "4",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "5",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "6",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "7",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "8",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "1",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "2",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "3",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "4",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "5",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "6",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
];

const data2 = [
  {
    id: "1",
    background: "#81d4fa",

    headerText: "Congrats Class of 2020",
    image: Cctv,
    description: "Use Code: Madinal to 10% Off on items worth $358",
  },
  {
    id: "2",
    background: "#8d6e63",

    headerText: "Congrats Class of 2020",
    image: Cctv,
    description: "Use Code: Madinal to 10% Off on items worth $358",
  },
];

export default function NewArrival() {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
        <h3 style={{ fontSize: Font.Large, fontWeight: "600" }}>
          New Arrivals
        </h3>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ flex: 1.3 / 3 }}
        >
          <IconButton upperCase="uppercase" color="black" background="white">
            {"ACCESSORIES & parts"}
          </IconButton>
          \
          <IconButton upperCase="uppercase" color="black" background="white">
            {"audio & Video"}
          </IconButton>
          \
          <IconButton upperCase="uppercase" color="black" background="white">
            {"Camera & photo"}
          </IconButton>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        {data.map((item) => (
          <Product {...item} key={item.id} />
        ))}
      </div>
      <div className="d-flex">
        {data2.map((item, index) => (
          <>
            <ProductType2 {...item} key={item.id} />
            {index === 0 && <div className="mx-2" />}
          </>
        ))}
      </div>
      <div className="pt-5" />
      <HeaderNormal>Smart Electronics</HeaderNormal>
      <div className="d-flex ">
        {/* <div className="mt-3" style={{ flex: 1 / 4 }}>
          <ProductType2 width="400px" id="2"
            background="#f06292cmd
            "
            height="100%"
            headerText="Congrats Class of 2020"
            image={Cctv}
            description="Use Code: Madinal to 10% Off on items worth $358" />
        </div> */}
        <div className="row flex-wrap mt-3">
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
        </div>
      </div>
      <div className="mt-5" />
        <HeaderNormal>
          Video Games
        </HeaderNormal>
      <div className="d-flex ">
        
        <div className="row flex-wrap mt-3">
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
          <Product3 id="1"
            name="Slim Fit Denim Scratched High Quality Men's"
            price="9.00"
            discount="2.25"
            rating="4"
            label="New"
            image={ProductImage} />
        </div>
        <div className="mt-3 ms-4" style={{ flex: 1 / 4 }}>
          <ProductType2 width="100%" id="2"
            background="#9575cd"
            height="100%"
            headerText="Congrats Class of 2020"
            image={Cctv}
            description="Use Code: Madinal to 10% Off on items worth $358" />
        </div>
      </div>
    </div>
  );
}
