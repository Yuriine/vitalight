import { useLocation } from 'react-router';
import ProductTabs from '../components/ProductTabs'
import { useProductsStore } from '../stores/products';
import { useEffect } from 'react';

export default function Products() {
  const { state } = useLocation();
  const category = state?.category || "Untables";
  const { setActiveCategory } = useProductsStore();
  
  useEffect(() => {
    setActiveCategory(category);    
    window.scrollTo(0, 0);
  }, [category, setActiveCategory]);
  
  return (
    <ProductTabs />
  )
}
