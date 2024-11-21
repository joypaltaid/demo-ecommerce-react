import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useProducts } from "../../context/ProductContext";
import { useUser } from "../../context/UserContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products } = useProducts();
  const {me, isLoggedIn} = useUser();

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [review, setReview] = useState('');
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const foundProduct = products.find(p => p.id.toString() === productId);
    setProduct(foundProduct);
    setMainImage(foundProduct?.image);
  }, [products, productId]);

  const handleQuantityChange = (type) => {
    if (type === 'increment' && quantity < product.stock) {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (product && !isAddedToCart) {
      addToCart(product, quantity);
      setIsAddedToCart(true);
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review && isLoggedIn) {
      const newReview = { 
        name: me.name, 
        comment: review, 
      };
      const updatedProduct = { 
        ...product, 
        reviews: [...(product?.reviews || []), newReview] 
      };

      setProduct(updatedProduct);
      setReview('');

      // Update the product data on the server or local storage if needed
    }
  };

  return (
    <>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <div className="w-full h-64 flex justify-center items-center bg-gray-100">
              <img
                id="main-image"
                className="object-contain h-full"
                src={`/assets/images/${mainImage}`}
                alt="Product"
              />
            </div>
            <div className="flex space-x-2 mt-4">
              {product?.images?.map((img, index) => (
                <img
                  key={index}
                  src={`/assets/images/${img}`}
                  className="w-16 h-16 object-cover cursor-pointer"
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold">{product?.title}</h1>
            <p className="mt-4 text-xl font-semibold text-indigo-600">Rs. {product?.price}</p>
            <p className="mt-4 text-gray-600">{product?.description}</p>
            {product?.stock > 0 ? (
              <div className="mt-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                <div className="flex items-center mt-2">
                  <button onClick={() => handleQuantityChange('decrement')} className="px-3 py-1 bg-gray-300 rounded-l">-</button>
                  <span className="px-3 py-1 border">{quantity}</span>
                  <button onClick={() => handleQuantityChange('increment')} className="px-3 py-1 bg-gray-300 rounded-r">+</button>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-red-600">Out of Stock</p>
            )}
            <button
              onClick={handleAddToCart}
              disabled={isAddedToCart || product?.stock === 0}
              className={`mt-6 w-full py-2 px-4 rounded ${isAddedToCart ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
            >
              {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {product?.reviews?.map((rev, index) => (
              <div key={index} className="border p-4 rounded-lg shadow">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={rev.image || '/assets/images/default-profile.png'}
                    alt="Profile"
                  />
                  <div>
                    <p className="text-gray-700 font-bold">{rev.name}</p>
                    <p className="text-gray-600">{rev.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isLoggedIn ? (
            <form onSubmit={handleReviewSubmit} className="mt-6 space-y-4">
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Write your review..."
              />
              <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded">Submit Review</button>
            </form>
          ) : (
            <p className="mt-6 text-red-600">Please log in to submit a review.</p>
          )}
        </section>
      </main>
    </>
  );
}

export default ProductDetails;
