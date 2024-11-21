import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
      to={`/product/${product.id}`}
    >
      <div className="w-full h-48 flex justify-center items-center bg-gray-100">
        <img
          src={`/assets/images/${product.image}`}
          className="max-w-full max-h-full object-contain"
          alt={product.name}
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="mt-2 text-gray-500">{product.description}</p>
        <div className="mt-4">
          <span className="text-xl font-bold">Rs. {product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
