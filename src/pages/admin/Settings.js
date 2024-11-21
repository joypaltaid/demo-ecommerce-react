import React from 'react';

function Settings() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      {/* General Settings */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">General Settings</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
            <input type="text" className="border border-gray-300 rounded px-4 py-2 w-full" defaultValue="Store" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" className="border border-gray-300 rounded px-4 py-2 w-full" defaultValue="admin@store.com" />
          </div>

          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
            Save Changes
          </button>
        </form>
      </div>

      {/* Security Settings */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Security Settings</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input type="password" className="border border-gray-300 rounded px-4 py-2 w-full" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input type="password" className="border border-gray-300 rounded px-4 py-2 w-full" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <input type="password" className="border border-gray-300 rounded px-4 py-2 w-full" />
          </div>

          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
            Update Password
          </button>
        </form>
      </div>
    </main>
  );
}

export default Settings;
