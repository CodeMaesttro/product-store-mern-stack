import { PenBox, Trash2 } from "lucide-react";
import {
  Dialog,
  Button,
  Flex,
  Text,
  TextField,
  TextArea
} from "@radix-ui/themes";

function ProductCard({ product, setShowModal, setProductId }) {
  function handleDeleteProduct(id) {
    setShowModal(true);
    setProductId(id);
  }

  return (
    <div className="border border-gray-500/25 bg-gray-950 rounded shadow-lg">
      <div>
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="overflow-hidden rounded-t h-50 w-full h-18"
        />
        <div className="p-1 text-white">
          <h4 className="font-bold">{product?.name}</h4>
          <p>${product?.price}</p>
          <p className="line-clamp-3">{product?.description}</p>

          <div className="flex space-x-2 mt-2">
            {/* ✅ Edit Dialog */}
            <Dialog.Root>
              <Dialog.Trigger>
                <PenBox
                  size={18}
                  className="p-1 bg-blue-400 text-black rounded cursor-pointer"
                />
              </Dialog.Trigger>

              <Dialog.Content maxWidth="400px">
                <Dialog.Title>Edit Product</Dialog.Title>

                <Flex direction="column" gap="3">
                  <TextField.Root
                    defaultValue={product?.name}
                    placeholder="Update product name"
                    variant="soft"
                    size="1"
                  />
                  <TextField.Root
                    defaultValue={product?.price}
                    placeholder="Update product price"
                    size="1"
                    type="number"
                    variant="soft"
                  />
                  <TextField.Root
                    defaultValue={product?.stock}
                    placeholder="Update product stock"
                    size="1"
                    type="number"
                    variant="soft"
                  />
                  <TextField.Root
                    defaultValue={product?.imageUrl}
                    placeholder="Update product image URL"
                    size="1"
                    type="url"
                    variant="soft"
                  />
                  <TextArea
                    defaultValue={product?.description}
                    size="3"
                    placeholder="Update product description…"
                    variant="soft"
                    rows={5}
                  />
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button>Save</Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>

            {/* 🗑️ Delete Button */}
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
