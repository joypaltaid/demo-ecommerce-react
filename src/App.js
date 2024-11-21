import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import ProductDetails from "./components/Product/ProductDetails";
import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/cart/CheckOut";
import MyAccount from "./pages/user/MyAccount";
import FAQ from "./pages/FAQs/FAQ";
import ProductManagement from "./pages/admin/ProductManagement";
import SignUp from "./pages/user/SignUp";
import OrderDetails from "./components/Order/OrderDetails";
import OrderConfirmation from "./components/Order/OrderConfirm";
import UserManagement from "./pages/admin/UserManagement";
import SignIn from "./pages/user/SignIn";
import OrdersManagement from "./pages/admin/OrdersManagement";
import Settings from "./pages/admin/Settings";
import { UserProvider } from "./context/UserContext";
import { ProductProvider } from "./context/ProductContext";
import { OrderProvider } from "./context/OrderContext";
import { CartProvider } from "./context/CartContext";
import DashBoard from "./pages/admin/DashBoard";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminNav from "./pages/admin/AdminNav";

export default function App() {

  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <OrderProvider>
            <BrowserRouter>
              <div className="bg-gray-100">
                <NavBar/>
                  <div className="bg-gray-100 min-h-[70vh]">
                  <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/product/:productId" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/cart/checkout" element={<CheckOut />} />
                  <Route path="/myaccount" element={<MyAccount />} />
                  <Route path='/faq' element={<FAQ />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<SignIn />} />
                  <Route path="/order/:orderId" element={<OrderDetails />} />
                  <Route path='/order/orderConfirm' element={<OrderConfirmation />} />
                   {/* Admin Routes */}
                  <Route path="/admin/dashboard" element={<DashBoard />} />
                  <Route path="/admin/productManagement" element={<ProductManagement />} />
                  <Route path="/admin/userManagement" element={<UserManagement />} />
                  <Route path="/admin/ordersManagement" element={<OrdersManagement />} />
                  <Route path="/admin/settings" element={<Settings />} /> 
                </Routes>
                  </div>
                <Footer />
              </div>
            </BrowserRouter>
          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  )
}
