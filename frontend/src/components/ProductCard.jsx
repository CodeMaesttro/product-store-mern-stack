import React from 'react';
import { PenBoxIcon, Trash2Icon } from 'lucide-react';

function ProductCard({ key, product }) {
  return (
    <div className='border border-gray-500/25 bg-gray-950 rounded shadow-lg'>
      <div className='text-white'>
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="overflow-hidden rounded-t h-50 w-full object-cover"
        />
        <div className='p-2'>
          <h4 className='text-lg font-semibold'>{product?.name}</h4>
          <p className='text-sm text-gray-300'>${product?.price}</p>
          <p>{product?.description}</p>

          <div className='flex space-x-2 mt-2'>
            <PenBoxIcon size={18} className='p-1 bg-blue-400 text-black rounded' />
            <Trash2Icon size={18} className='p-1 bg-red-400 text-black rounded' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
