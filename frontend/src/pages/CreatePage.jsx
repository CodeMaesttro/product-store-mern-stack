import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ fixed typo: useNavigation → useNavigate

function CreatePage() {
  const navigate = useNavigate(); // ✅ correct usage
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    imageUrl: "",
    description: "", 
  });

  const submitProduct = async (e) => {
    e.preventDefault();

    const serializedData = {
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
      imageUrl: newProduct.imageUrl,
      description: newProduct.description, 
    };

    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serializedData),
      });

      if (response.ok) {
        const data = await response.json(); 
        console.log("Product created", data.product);
        navigate("/"); 
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Product submission error", error);
    }
  };

  return (
    <div className='w-full h-screen bg-black text-white'>
      <div className='border-2 border-blue-400 p-6 max-w-xl mx-auto mt-10'>
        <h2 className='text-center font-bold mb-4 text-xl'>Create a New Product</h2>

        <form
          onSubmit={submitProduct}
          className='dark:bg-gray-950 p-4 rounded border border-gray-500/25 shadow-lg'
        >
          <input
            type='text'
            placeholder='Enter product name'
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className='border border-gray-500/25 w-full px-4 py-2 rounded mb-2'
          />

          <input
            type='number'
            min={0}
            placeholder='Enter product price'
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className='border border-gray-500/25 w-full px-4 py-2 rounded mb-2'
          />

          <input
            type='url'
            placeholder='Enter product image URL'
            value={newProduct.imageUrl}
            onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
            className='border border-gray-500/25 w-full px-4 py-2 rounded mb-2'
          />

          <input
            type='number'
            min={0}
            placeholder='Enter product stock'
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            className='border border-gray-500/25 w-full px-4 py-2 rounded mb-2'
          />

          <textarea
            placeholder='Enter product description'
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            rows={5}
            className='border border-gray-500/25 w-full px-4 py-2 rounded mb-4'
          />

          <button
            type='submit'
            className='w-full px-4 py-2 rounded shadow-lg bg-green-600 font-bold hover:bg-green-800 transition-all'
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
