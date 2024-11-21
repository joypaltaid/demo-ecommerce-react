import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserManagement.css';

function UserManagement() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Customer',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setModalOpen(false);
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <img className="h-8 w-auto" src="logo.png" alt="Logo" />
                <span className="ml-2 text-xl font-bold">Admin Dashboard</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Orders</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Settings</a>
            </div>
          </div>
        </div>
      </nav>

      {/* User Management Section */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">User Management</h1>

        {/* Search and Filter */}
        <div className="mb-4 flex justify-between">
          <input type="text" placeholder="Search users..." className="border border-gray-300 rounded px-4 py-2" />
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Customer</option>
          </select>
        </div>

        {/* User Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700"><input type="checkbox" /></th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">User ID</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Role</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 px-4"><input type="checkbox" /></td>
                <td className="py-2 px-4 text-sm text-gray-700">001</td>
                <td className="py-2 px-4 text-sm text-gray-700">Jane Smith</td>
                <td className="py-2 px-4 text-sm text-gray-700">jane@example.com</td>
                <td className="py-2 px-4 text-sm text-gray-700">Customer</td>
                <td className="py-2 px-4 text-sm text-gray-700">
                  <button className="text-indigo-600 hover:text-indigo-900" onClick={() => setModalOpen(true)}>Edit</button>
                  <button className="text-red-600 hover:text-red-900 ml-2">Delete</button>
                </td>
              </tr>
              {/* Repeat for more users */}
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
      </main>

      {/* Edit User Modal */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <form onSubmit={handleFormSubmit}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
              />

              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
              />

              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
              >
                <option>Customer</option>
                <option>Admin</option>
              </select>

              <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 mt-4">Save Changes</button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">&copy; 2024 Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default UserManagement;
