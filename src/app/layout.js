import './globals.css'
import Navbar from './Navbar/Navbar'



export const metadata = {
  title: 'Training',
  description: 'Train',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
