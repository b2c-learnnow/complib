import React, { useState, useEffect } from "react";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import ProductImage from "../assets/images/product1.jpeg";
import Product from "../elements/Product"
import _ from "lodash";

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
        id: "4",
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
        id: "4",
        name: "Slim Fit Denim Scratched High Quality Men's",
        price: "9.00",
        rating: "4",
        label: "New",
        image: ProductImage,
    },

];

// function Product4({ image, name, discount, category, price }) {
//   return (
//     <div className=" w-100 m-0 p-0 row border mb-3" style={{ maxHeight: "350px" }}>
//       <div className="col-4">
//         <img src={image} style={{ height: '120px'}} alt="none" />
//       </div>
//       <div className="col-8">
//         <p style={{ fontWeight: "600", fontSize: Font.Large }}>{name}</p>
//         <p>
//           <span
//             style={{
//               fontWeight: discount ? "normal" : "600",
//               fontSize: discount ? Font.Medium : Font.Normal,
//               color: discount ? Colors.Grey : Colors.Primary,
//               textDecoration: discount ? 'line-through' :"none"
//             }}
//           >
//             {price}
//           </span>
//           {discount && (
//             <span
//               style={{
//                 fontWeight: "600",
//                 fontSize: Font.Normal,
//                 color: Colors.Primary,
//               }}
//             >
//               {price - discount}
//             </span>
//           )}
//         </p>
//         <p style={{ color: Colors.Grey, fontSize: Font.Medium }}>{category}</p>
//         <p>Rating</p>
//       </div>
//     </div>
//   );
// }

export default function SearchResult(props) {
    const [result, setResult] = useState([])
    useEffect(() => {
        const modifiedData = _.chunk(data, 5)
        console.log("Modified Data", modifiedData)
        setResult(modifiedData)
        console.log('Result', result)
    }, [])
    return (
        <div className=" mx-0 mb-0 ps-4">

            {props.selectedCategory.toLowerCase() != 'All Categories'.toLowerCase() && (
                <div style={{ backgroundColor: 'rgb(240,240,240)' }} className="w-100 p-4 d-flex align-item-center justify-content-center">
                    <h3>{props.selectedCategory}</h3>
                </div>
            )}

            <div className="">
                {result.map((product) => (
                    <div className="d-flex">
                        {product.map((item) => (
                            <div style={{ flex: 1 / 5 }}>
                                <Product {...item} key={item.id} containerClass="w-100" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
