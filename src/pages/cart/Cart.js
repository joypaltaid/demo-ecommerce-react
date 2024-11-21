import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // Import the useCart hook
import { useUser } from "../../context/UserContext";
import { useEffect } from "react";

const Cart = () => {
  const { isLoggedIn } = useUser();
  const { cartItems, setCartItems, calculateTotalPrice } = useCart(); // Use the hook to get cartItems and setCartItems

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          if (type === 'increment' && item.quantity < item.stock) {
            return { ...item, quantity: item.quantity + 1 };
          } else if (type === 'decrement' && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  

  return (
    <>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {cartItems.length === 0 ? (
            <div className="p-6">
              <div>No Product in Your Cart</div>
              <Link to="/products" className="text-indigo-600 hover:text-indigo-900">
                View Products
              </Link>
            </div>
          ) : (
            <table className="min-w-full table-fixed">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">Product</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">Quantity</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">Price</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">Total</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={`/assets/images/${item.image}`} alt={item.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          {item.stock === 0 && (
                            <div className="text-sm text-red-500">Out of stock</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => handleQuantityChange(item.id, 'decrement')}
                          className="px-3 py-1 bg-gray-300 rounded-l"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 border">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 'increment')}
                          className="px-3 py-1 bg-gray-300 rounded-r"
                          disabled={item.quantity >= item.stock}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900">Rs. {item.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900">Rs. {(item.price * item.quantity)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button onClick={() => handleRemove(item.id)} className="text-red-600 hover:text-red-900">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="mt-8 flex justify-end">
          <div className="text-right">
            <div className="text-lg font-bold mb-2">Total: Rs. {calculateTotalPrice()}</div>
            { isLoggedIn ? ( <Link to="/cart/checkout" className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
              Place Order
            </Link>):
              ( <Link to="/login" className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                Login to Purchase
              </Link>)
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
