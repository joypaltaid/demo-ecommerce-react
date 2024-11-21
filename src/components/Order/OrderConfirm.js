import { Link, useParams } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <main className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Order Placed Successfully!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for your purchase. Your order has been placed and is being processed.
        </p>

        <Link to='/products' className="block mb-4 text-indigo-600 hover:text-indigo-900">
          Continue Shopping
        </Link>
        {/* <Link to={`/order/${orderId}`} className="block text-indigo-600 hover:text-indigo-900">
          View Order Details
        </Link> */}
      </div>
    </main>
  );
};

export default OrderConfirmation;
