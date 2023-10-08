import React, { useContext } from "react";
import { productsContext } from "../context/productProvider";
import { useParams } from "react-router-dom";

export default function Details() {
  const {product}=useContext(productsContext)
const {id}= useParams()
console.log(id);
 const data= product.find((item)=>{
    return item.id == id;
  })
  console.log(data);
  return (
    <div>
      <div className="content container mt-5 pt-5">
        <div className="row mt-5">
          <div className="col-md-4">
           <div >
            <img className="w-100" src={data?.image} alt="" />
           </div>
          </div>
          <div className="col-md-8">
                <h4>{data?.title}</h4>
                <p>{data?.description}</p>
                <span>{data?.price}</span>
                <button className="btn btn-primary">Add to cart</button>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
