import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const productsContext = createContext();

const productProvider= ({chidlren}) =>{
  const [product, setProduct] =useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        let { data } = await axios.get(`https://fakestoreapi.com/products`);
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error.massage);
      }
    };
    fetch();
  }, []);

  return <productProvider.Provider value={{product}}>{chidlren}</productProvider.Provider>
}
export default productProvider
