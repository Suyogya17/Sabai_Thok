import "./Card.css"
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
    id: number;
    productImage: string;
    productName: string;
    price: number;
  }

  

function Card (){
    return(
        <>
         <div className="cardbox">
            
            </div>
        </>
    );
}

export default Card;
