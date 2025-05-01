import { useLocation } from 'react-router';
import ProductTabs from '../components/ProductTabs'
import { useProductsStore } from '../stores/products';
import { useEffect } from 'react';

export default function Products() {
  const { category } = useLocation().state;
  const { setActiveCategory } = useProductsStore();
  useEffect(() => {
    setActiveCategory(category);
  }, [category]);
  return (
    <ProductTabs />
  )
}
