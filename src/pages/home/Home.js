import Hero from '../../components/Hero/Hero';
import ProductCard from "../../components/Product/ProductCard";
import { useEffect, useState } from 'react';
import { useProducts } from '../../context/ProductContext';

const Home = () => {
    const { products } = useProducts();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Hero/>
            <section class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold mb-8 text-center">Featured Products</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {
                        products.map((product,index) => (
                            <ProductCard key={index} product={product}/>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Home;