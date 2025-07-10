import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';
import ProductCard from '../components/productCard'; // Ensure path matches actual filename casing

function HomePage() {
  const [products, setProducts] = useState([]);

  // ✅ Fetch all products from the API
  async function getAllProducts() {
    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data); // Don't use data.data unless API response is wrapped
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-[90%] mx-auto py-8">
        <h2 className="flex justify-center items-center text-cyan-400 text-xl font-bold mb-4">
          Current Products
          <Rocket className="w-5 h-5 ml-2 text-cyan-400" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
