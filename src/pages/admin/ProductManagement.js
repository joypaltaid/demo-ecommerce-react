import { useState } from 'react';
import './ProductManagement.css';
import AdminNav from './AdminNav';
const ProductManagement = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        stock: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted");
        setModalOpen(false);
    }

    return (
        <>
            <AdminNav/>
            {/* Products Management Section */}
            <main className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold mb-8'>Products Management</h1>
                {/* Search and Filter */}
                <div className="mb-4 flex justify-between">
                    <input type="text" placeholder="Search products..." className="border border-gray-300 rounded px-4 py-2" />
                    <select className="border border-gray-300 rounded px-4 py-2">
                        <option>All Categories</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                    </select>
                </div>
                {/* Add New Product Button */}
                <div className="mb-4">
                    <button onClick={() => setModalOpen(true)} className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Add New Product</button>
                    <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">Bulk Actions</button>
                </div>
                {/* Product Table */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700"><input type="checkbox" /></th>
                                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Product ID</th>
                                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
                                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Price</th>
                                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Stock</th>
                                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="py-2 px-4"><input type="checkbox" /></td>
                                <td className="py-2 px-4 text-sm text-gray-700">001</td>
                                <td className="py-2 px-4 text-sm text-gray-700">Product Name</td>
                                <td className="py-2 px-4 text-sm text-gray-700">$49.99</td>
                                <td className="py-2 px-4 text-sm text-gray-700">100</td>
                                <td className="py-2 px-4 text-sm text-gray-700">
                                    <button className="text-indigo-600 hover:text-indigo-900" onClick={() => setModalOpen(true)}>Edit</button>
                                    <button className="text-red-600 hover:text-red-900 ml-2">Delete</button>
                                </td>
                            </tr>
                            {/* Repeat for more products */}
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
                                    <span className="font-medium">97</span>
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
                                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">10</a>
                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">Next</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Add/Edit Product Modal */}
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
                        <h2 className="text-xl font-bold mb-4">Add/Edit Product</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                                <input
                                    type="text"
                                    name="productName"
                                    value={formData.productName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Stock</label>
                                <input
                                    type="text"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                />
                            </div>
                            <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Save</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductManagement;