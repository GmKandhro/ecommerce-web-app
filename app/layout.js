import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { MyContextProvider } from './context'

export const metadata = {
  title: 'Ecommerce app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className='max-h-screen'>
        <MyContextProvider>
      <Navbar />
      {children}
      <Footer/>
      </MyContextProvider>
      </body>
    </html>
  )
}
