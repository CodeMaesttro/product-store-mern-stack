import { PenBox, Trash2 } from "lucide-react";
import {
  Dialog,
  Button,
  Flex,
  Text,
  TextField,
  TextArea
} from "@radix-ui/themes";
import { useState } from "react";
import { toast } from 'sonner';

function ProductCard({ product, setShowModal, setProductId, refreshProducts }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  function handleDeleteProduct(id) {
    setShowModal(true);
    setProductId(id);
  }

  async function updateProductById(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: updatedProduct.name,
          price: parseFloat(updatedProduct.price),
          stock: Number(updatedProduct.stock),
          imageUrl: updatedProduct.imageUrl,
          description: updatedProduct.description
        })
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Product Updated Successfully!");
        refreshProducts(); // 🟢 Refresh the products list in UI
      } else {
        toast.error("Failed to update product.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating the product.");
    }
  }

  return (
    <div className="border border-gray-500/25 bg-gray-950 rounded shadow-lg">
      <div>
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="overflow-hidden rounded-t w-full h-40 object-cover"
        />
        <div className="p-2 text-white">
          <h4 className="font-bold">{product?.name}</h4>
          <p>${product?.price}</p>
          <p className="line-clamp-3">{product?.description}</p>

          <div className="flex space-x-2 mt-2">
            {/* Edit Dialog */}
            <Dialog.Root>
              <Dialog.Trigger>
                <PenBox
                  size={18}
                  className="p-1 bg-blue-400 text-black rounded cursor-pointer"
                />
              </Dialog.Trigger>

              <Dialog.Content maxWidth="400px">
                <Dialog.Title>Update Product</Dialog.Title>

                <Flex direction="column" gap="3">
                  <TextField.Root
                    placeholder="Product name"
                    variant="soft"
                    size="1"
                    value={updatedProduct.name}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                  />
                  <TextField.Root
                    placeholder="Product price"
                    size="1"
                    type="number"
                    variant="soft"
                    value={updatedProduct.price}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                  />
                  <TextField.Root
                    placeholder="Product stock"
                    size="1"
                    type="number"
                    variant="soft"
                    value={updatedProduct.stock}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, stock: e.target.value })}
                  />
                  <TextField.Root
                    placeholder="Product image URL"
                    size="1"
                    type="url"
                    variant="soft"
                    value={updatedProduct.imageUrl}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, imageUrl: e.target.value })}
                  />
                  <TextArea
                    size="3"
                    placeholder="Product description…"
                    variant="soft"
                    rows={5}
                    value={updatedProduct.description}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
                  />
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Button onClick={() => updateProductById(product._id)}>
                      Update
                    </Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>

            {/* Delete Button */}
            <Trash2
              size={18}
              className="p-1 bg-red-300 text-black rounded cursor-pointer"
              onClick={() => handleDeleteProduct(product?._id)}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
