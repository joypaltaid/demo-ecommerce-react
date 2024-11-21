import React, { useState } from 'react';
import './OrdersManagement.css';

function OrdersManagement() {
  const [modalVisible, setModalVisible] = useState(false);

  const orders = [
    { id: 1001, customer: 'John Doe', total: 99.99, status: 'Pending' },
    // Add more orders as needed
  ];

  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Orders Management</h1>

      {/* Search and Filter */}
      <div className="mb-4 flex justify-between">
        <input type="text" placeholder="Search orders..." className="border border-gray-300 rounded px-4 py-2" />
        <select className="border border-gray-300 rounded px-4 py-2">
          <option>All Statuses</option>
          <option>Pending</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>
      </div>

      {/* Order Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700"><input type="checkbox" /></th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Order ID</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Customer</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Total</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id}>
                <td className="py-2 px-4"><input type="checkbox" /></td>
                <td className="py-2 px-4 text-sm text-gray-700">{order.id}</td>
                <td className="py-2 px-4 text-sm text-gray-700">{order.customer}</td>
                <td className="py-2 px-4 text-sm text-gray-700">${order.total.toFixed(2)}</td>
                <td className="py-2 px-4 text-sm text-gray-700">{order.status}</td>
                <td className="py-2 px-4 text-sm text-gray-700">
                  <button onClick={() => setModalVisible(true)} className="text-indigo-600 hover:text-indigo-900">View</button>
                  <button className="text-red-600 hover:text-red-900 ml-2">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing
                <span className="font-medium">1</span>
                to
                <span className="font-medium">10</span>
                of
                <span className="font-medium">50</span>
                results
              </p>
            </div>
            <div>
              <nav className="inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Previous</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">1</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">5</a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Next</a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* View Order Modal */}
      {modalVisible && (
        <div className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-white p-6 rounded shadow-lg w-4/5 max-w-md">
            <span className="close float-right text-2xl cursor-pointer" onClick={() => setModalVisible(false)}>&times;</span>
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <p className="text-sm text-gray-700 mb-2">Order ID: 1001</p>
            <p className="text-sm text-gray-700 mb-2">Customer: John Doe</p>
            <p className="text-sm text-gray-700 mb-2">Total: $99.99</p>
            <p className="text-sm text-gray-700 mb-2">Status: Pending</p>
            {/* Additional order details here */}
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 mt-4">Mark as Shipped</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default OrdersManagement;
