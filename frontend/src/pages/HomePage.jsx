import { Rocket } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ConfirmModal from "../components/ConfirmModal";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(null);

  // Fetch all products from the API
  async function getAllProducts() {
    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data.data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="h-screen m-0 overflow-auto">
      <div className="w-[90%] mx-auto">
        <h2 className="text-center flex justify-center items-center text-cyan-400 text-xl font-bold mb-4">
          Current Products
          <Rocket size={18} className="ml-2 text-cyan-400" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                setShowModal={setShowModal}
                setProductId={setProductId}
              />
            ))}
        </div>
      </div>

      {showModal && (
        <ConfirmModal
          setShowModal={setShowModal}
          productId={productId}
          refreshProducts={getAllProducts} // ✅ Pass the refresh function
        />
      )}
    </div>
  );
}

export default HomePage;
