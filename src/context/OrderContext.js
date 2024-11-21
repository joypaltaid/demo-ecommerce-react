import React, { createContext, useContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([]);

    const placeOrder = (orderData) => {
        const newOrder = { ...orderData, id: orders.length + 1, date: new Date().toLocaleDateString(), status: 'Pending' };
        setOrders((prevOrders) => [...prevOrders, newOrder]);
    };
    
    const getOrderDetails = (orderId) => {
        return orders.find(order => order.id === parseInt(orderId));
    };

    const cancelOrder = (id) => {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === id ? { ...order, status: "Cancelled" } : order
          )
        );
      };
      

    return(
        <OrderContext.Provider value={{orders, placeOrder,cancelOrder, getOrderDetails}}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => useContext(OrderContext);