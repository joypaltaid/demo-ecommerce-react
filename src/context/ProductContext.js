import React, { createContext, useState, useEffect, useContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        // Fetch product data
        const fetchProductData = async () => {
          try {
            const response = await fetch('/assets/products/products.json');
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            alert(error);
          }
        };
    
        fetchProductData();
    },[]);
    
    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);