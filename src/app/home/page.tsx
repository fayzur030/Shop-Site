'use client'

import ProductCart from '@/component/ProductCart'
import { Product } from '@/types/ProductType'
import { useEffect, useState } from 'react'
import { Pagination, Select } from 'antd'

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [perPage, setPerPage] = useState(30)
  const [sortBy, setSortBy] = useState('')

  const fetchProducts = async (
    page: number,
    categorySlug: string,
    sort: string
  ) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://shop.sprwforge.com/api/v1/products?page=${page}${
          categorySlug ? '&category=' + categorySlug : ''
        }${sort ? '&sortby=' + sort : ''}`
      )

      const data = await res.json()
      const result = data.data.result

      setProducts(result.data)
      setTotal(result.total)
      setPerPage(result.per_page)
    } catch (error) {
      console.error('Error fetching products', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts(currentPage, '', sortBy)
  }, [currentPage, sortBy])

  return (
    <section>
      <div className='md:mt-24'>
        <div className='flex justify-end mb-3 items-center gap-2'>
          <h2>Sort by</h2>
          <Select
            value={sortBy}
            placeholder='Sort by'
            style={{ width: 120 }}
            onChange={(value) => {
              setCurrentPage(1)
              setSortBy(value)
            }}
            options={[
              { label: 'Feature', value: '' },
              { label: 'Price: Low to High', value: 'price_low_to_high' },
              { label: 'Price: High to Low', value: 'price_high_to_low' },
              { label: 'Avg customar revew', value: 'Avg customar revew' },
            ]}
          />
        </div>
        <div className='flex-1'>
          {loading ? (
            <p className='text-center py-10'>Loading...</p>
          ) : (
            <>
              {/* Product Grid */}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
                {products.map((product) => (
                  <ProductCart key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination + Sort */}
              <div className='flex justify-between items-center mt-6'>
                {/* Pagination */}
                <Pagination
                  current={currentPage}
                  pageSize={perPage}
                  total={total}
                  onChange={(page) => setCurrentPage(page)}
                  showSizeChanger={false}
                  showLessItems
                />

                {/* Sort By Dropdown */}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default HomePage
