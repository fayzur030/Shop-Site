import './globals.css'
import Sidebar from '@/common/Sidebar'
import AppHeader from '@/common/Navbar'
import MainNavbar from '@/common/Main-Navbar'
import AppFooter from '@/common/Footer'

export const metadata = {
  title: 'My App',
  description: 'Next.js + Ant Design Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <AppHeader />
        <MainNavbar />
        <div
          style={{ display: 'flex', minHeight: 'calc(100vh - 64px - 70px) ' }}
          className='mt-10 '
        >
          <Sidebar />
          <main style={{ flex: 1, padding: '24px' }} className='bg-[#F3F4F6]'>
            {/* <Breadcrumbs /> */}
            {children}
          </main>
        </div>
        <AppFooter />
      </body>
    </html>
  )
}
