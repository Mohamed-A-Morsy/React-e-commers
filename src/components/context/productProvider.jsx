
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const productsContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let { data } = await axios.get('https://fakestoreapi.com/products');
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <productsContext.Provider value={{ product }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductProvider;