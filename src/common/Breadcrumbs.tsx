'use client'
import { Breadcrumb } from 'antd'

export default function Breadcrumbs() {
  return (
    <Breadcrumb style={{ marginBottom: '16px' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  )
}
