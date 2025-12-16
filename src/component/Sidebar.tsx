'use client'
import { useEffect, useState } from 'react'
import { SidebarProps } from '../types/SidebarProps'
import { Category } from '../types/CategoriesProps'

const SideBar: React.FC<SidebarProps> = ({ onCategoryClick }) => {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res =
          await fetch(`https://shop.sprwforge.com/api/v1/products?all_categories=true&sidebar_data=true


`)
        const data = await res.json()
        // console.log(data)
        setCategories(data?.all_categories || data?.data?.all_categories || [])
      } catch (error) {
        console.error('Error fetching categories', error)
      }
    }
    fetchCategories()
  }, [])
  return (
    <div className='md:grid grid-cols-12 hidden overflow-y-auto sticky top-0'>
      {' '}
      <div className='w-60 p-2 h-full col-span-12 xl:col-span-10 xl:col-start-2'>
        <h3 className=''>Showing 1 to 30 of 406 results</h3>
        <div className='md:mt-12 border-r'>
          <ul>
            {categories?.map((cat) => (
              <li
                key={cat.id}
                className='mb-2 cursor-pointer hover:text-gray-500'
                onClick={() => onCategoryClick?.(cat.slug)}
              >
                {cat.title}
                {cat.in_footer_child && cat.in_footer_child.length > 0 && (
                  <ul className=' m-1'>
                    {cat.in_footer_child.map((child) => (
                      <li
                        key={child.id}
                        className='mb-1 cursor-pointer hover:text-gray-500'
                        onClick={() => onCategoryClick?.(child.slug)}
                      >
                        {child.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
