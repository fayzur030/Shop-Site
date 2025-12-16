'use client'

import { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { Category } from '@/types/CategoriesProps'
import { SidebarProps } from '@/types/SidebarProps'

const { Sider } = Layout

const Sidebar: React.FC<SidebarProps> = ({ onCategoryClick }) => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          'https://shop.sprwforge.com/api/v1/products?all_categories=true&sidebar_data=true'
        )
        const data = await res.json()
        setCategories(data?.all_categories || data?.data?.all_categories || [])
      } catch (error) {
        console.error('Error fetching categories', error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className='bg-gray-500'>
      {' '}
      <Sider
        width={330}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          backgroundColor: '#F3F4F6',
          padding: '16px 48px',
          overflowY: 'auto',
        }}
      >
        <h2 className='text-gray-600  text-sm md:text-base mb-4 md:mt-16'>
          Showing 1 to 30 of 406 results
        </h2>

        <div className='border-r border-gray-300 md:mt-10'>
          {categories.length === 0 ? (
            <p className='text-black'>Loading categories...</p>
          ) : (
            <ul className='space-y-2 text-gray-800 text-base'>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    className=' scursor-pointer hover:text-gray-500'
                    onClick={() => onCategoryClick?.(cat.slug)}
                  >
                    {cat.title}
                  </button>

                  {cat.in_footer_child && cat.in_footer_child.length > 0 && (
                    <ul className='ml-4 mt-1 space-y-1'>
                      {cat.in_footer_child.map((child) => (
                        <li key={child.id}>
                          <button
                            className='cursor-pointer hover:text-gray-500'
                            onClick={() => onCategoryClick?.(child.slug)}
                          >
                            {child.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Sider>
    </div>
  )
}

export default Sidebar
