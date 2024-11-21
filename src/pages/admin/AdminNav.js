const AdminNav = () => {
    return (
      <>
        {/* Navbar */}
        <nav className="bg-white shadow fixed top-0 w-full z-50">
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
                <a href="#" className="text-gray-700 hover:text-gray-900">Orders</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Users</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Settings</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-16"></div> {/* Offset for the fixed nav */}
      </>
    )
  }
  
  export default AdminNav;
  