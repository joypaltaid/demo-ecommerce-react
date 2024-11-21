import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
const MobileNav = ({ mobileMenuOpen, toggleMobileMenu }) => {
    const { isLoggedIn } = useUser();
    return (
        <div className={`${mobileMenuOpen ? '' : 'hidden'} md:hidden`}>
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Products</Link>
            <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Contact</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>About</Link>
            <Link to="/cart" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Cart</Link> 
            <Link to="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>FAQs</Link>
            {
                isLoggedIn ? (<Link to="/myaccount" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>My Account</Link>)
                : (<Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>Log In</Link>)
            }
        </div>
    );
}

export default MobileNav;