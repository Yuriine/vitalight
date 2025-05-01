import { Outlet, useLocation } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useEffect } from 'react'

export default function Layout() {
  const location = useLocation();
  
  // Este efecto se ejecutará cada vez que cambie la ruta (location.pathname)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
