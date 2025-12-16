'use client'
import ProductCart from '@/component/ProductCart'
import { Product } from '@/types/ProductType'
import { useEffect, useState } from 'react'

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const fetchProducts = async (categorySlug: string) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://shop.sprwforge.com/api/v1/products${
          categorySlug ? '?category=' + categorySlug : ''
        }`
      )
      const data = await res.json()
      console.log(data)
      setProducts(data.data.result.data)
    } catch (error) {
      console.error('Error fetching products', error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchProducts('')
  }, [])
  return (
    <section>
      <div className=' md:mt-32'>
        <div className='flex-1'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
              {products?.map((product) => (
                <ProductCart key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HomePage
