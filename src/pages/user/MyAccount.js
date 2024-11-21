import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOrder } from "../../context/OrderContext";
import { useUser } from "../../context/UserContext";

const MyAccount = () => {
  const { orders } = useOrder();
  const { me, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    
  },[orders]);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("File selected:", file);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src="profile.jpg"
                alt="Profile"
              />
              <input
                type="file"
                className="text-sm text-gray-600"
                onChange={handleFileChange}
              />
            </div>
            <p className="text-lg text-gray-700">Name: {me?.name}</p>
            <p className="text-lg text-gray-700">Email: {me?.email}</p>
            {/* <button
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
              onClick={handleEditInformation}
            >
              Edit Information
            </button> */}
          </div>

          {/* <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
            <form className="space-y-4" onSubmit={handleChangePassword}>
              <div>
                <label
                  htmlFor="current-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
              >
                Change Password
              </button>
            </form>
          </div> */}

          <div>
            <h2 className="text-2xl font-semibold mb-4">Order History</h2>
            <ul className="divide-y divide-gray-200">
              {orders.map((order) => (
                <li key={order.id} className="py-4 flex justify-between">
                  <span>
                    Order #{order.id} - Rs. {order.total}
                  </span>
                  <Link to={`/order/${order.id}`} className="text-indigo-600 hover:text-indigo-900">
                    View Details
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            onClick={handleLogout}
            >
            Log Out
          </button>
        </div>
      </main>
    </>
  );
};

export default MyAccount;
