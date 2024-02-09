import "./Card.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  productImage: string;
  productName: string;
  price: number;
}

function Card() {
  return (
    <>
      <div className="cardbox">
        <div className="productimg">
          <img
            src={`https://www.pexels.com/photo/black-fujifilm-dslr-camera-90946/`}
            width={100}
            height={100}
            alt="productImg"
          />
        </div>
        <div className="productdiscription">
            <p>This is the image of the product and here is the discription</p>
            <br />
            <p>RS 12000</p>
        </div>
        <div className="bttntocart">
            <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Card;
