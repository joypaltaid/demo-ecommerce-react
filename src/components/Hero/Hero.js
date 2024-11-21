import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <header class="bg-gray-800 text-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl font-bold sm:text-5xl animate-bounce">
            Welcome to Our Store
          </h1>
          <p class="mt-4 text-xl sm:text-2xl">
            Find the best products at unbeatable prices
          </p>
          <Link
            to='/products'
            class="mt-6 inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </header>
    </>
  );
};

export default Hero;
