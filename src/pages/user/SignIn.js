import React, { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login } = useUser();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    navigate('/');
    
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <main className="max-w-md w-full px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                required
              />
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account? <Link to='/signup' className="text-indigo-600 hover:text-indigo-900">Sign up</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
