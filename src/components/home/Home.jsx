import axios from "axios";
import React, { useContext} from "react";
import "./style.css"
import { Link } from "react-router-dom";
import {  productsContext } from '../context/productProvider';
export default function Home() {
  const {product}=useContext(productsContext)
  console.log(product);

  return (
    <div className="container my-5 pt-5 d-flex flex-wrap  gap-4 justify-content-center align-items-center">
      {product.map((item, index) => {
        return (
          <Link to={`/details/${item.id}`}  key={index}>
          <div className= "card overflow-hidden card-style" style={{ width: "18rem", height:"30rem" }}>
            <div className="w-100 position-relatve image h-100 d-flex justify-content-center align-items-center">
              
              <img style={{ width: "80%"}} src={item.image} className="card-img-top " alt="..." />
            </div>
            <div className="card-body">
              <h5>{item.category}</h5>
              <p className="card-text">
               {item.title}
              </p>

            </div>
            <div className="btn-div ">
              <button className="btn btn-primary">+</button>
              <button className="btn btn-danger">-</button>
              </div>
          </div>
          </Link>
          
        );
      })}
    </div>
  );
}
