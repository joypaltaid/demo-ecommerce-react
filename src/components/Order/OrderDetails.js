import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOrder } from "../../context/OrderContext";

const OrderDetails = () => {
  const { orderId } = useParams();
  const { getOrderDetails, cancelOrder } = useOrder();
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const orderData = getOrderDetails(orderId);
    setOrder(orderData);
  }, [orderId, getOrderDetails]);

  // const handleCancelOrder = () => {
  //   cancelOrder(orderId);
  //   setOrder((prevOrder) => ({ ...prevOrder, status: "Cancelled" }));
  //   navigate('/myaccount');
  // };

  if (!order) {
    return <p>Loading order details...</p>;
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Order #{order.id} Details</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="mb-4">
          <p className="text-lg text-gray-700">Order Date: {order.date}</p>
          <p className="text-lg text-gray-700">Total Amount: Rs. {order.total}</p>
          <p className="text-lg text-gray-700">Status: {order.status}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
        <div className="mb-4">
          <p className="text-lg text-gray-700">{order.name}</p>
          <p className="text-lg text-gray-700">{order.address}</p>
          <p className="text-lg text-gray-700">{order.city}, {order.zip}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Items Ordered</h2>
        <ul className="divide-y divide-gray-200">
          {order.items.map((item, index) => (
            <li key={index} className="py-4 flex justify-between">
              <span>{item.name}</span>
              <span>Rs. {item.price} x {item.quantity}</span>
            </li>
          ))}
        </ul>

        {/* {order.status !== "Cancelled" && (
          <button 
            onClick={handleCancelOrder} 
            className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Cancel Order
          </button>
        )} */}
      </div>
    </main>
  );
}

export default OrderDetails;
