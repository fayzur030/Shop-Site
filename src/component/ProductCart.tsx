import React from 'react'
import Image from 'next/image'
import { ProductCartProps } from '@/types/ProductCartInterface'

const BASE_URL = 'https://shop.sprwforge.com/uploads/'

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <div>
      <div className='hover:shadow-lg transition p-2'>
        <div className=' mb-2 rounded overflow-hidden'>
          <Image
            src={`${BASE_URL}${product.image}`}
            alt={product.title}
            width={400}
            height={600}
          />
        </div>
        <h3 className='text-lg font-bold'>{product.title}</h3>
      </div>
    </div>
  )
}

export default ProductCart
