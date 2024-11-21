import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useOrder } from '../../context/OrderContext';

const CheckOut = () => {
  const { cartItems, calculateTotalPrice, clearCart } = useCart();
  const { placeOrder } = useOrder();
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Form data extraction
    const form = document.getElementById('checkout-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    
    const formData = new FormData(form);
    const orderData = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      city: formData.get('city'),
      zip: formData.get('zip'),
      items: cartItems,
      total: calculateTotalPrice(),
    };

    // Place order through OrderContext
    placeOrder(orderData);
    clearCart();

    // Navigate to order confirmation
    navigate(`/order/orderConfirm`);
  };

  return (
    <>
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            <form className="bg-white shadow-md rounded-lg p-6 space-y-4" id="checkout-form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"/>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" name="address" id="address" required className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" name="city" id="city" required className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"/>
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input type="text" name="zip" id="zip" required className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"/>
                </div>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <li key={index} className="py-4 flex items-center justify-between">
                    <img src={`/assets/images/${item.image}`} alt={item.name} className="w-16 h-16 rounded" />
                    <div className="flex-1 ml-4">
                      <span className="block">{item.name}</span>
                      <span className="text-sm text-gray-500">Quantity: {item.quantity}</span>
                    </div>
                    <span>Rs. {(item.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Rs. {calculateTotalPrice()}</span>
              </div>
              <button onClick={handlePlaceOrder} className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                Continue
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckOut;
