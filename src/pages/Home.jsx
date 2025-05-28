import { useEffect, useState } from 'react';
import SidebarFilters from '../components/SidebarFilters';
import ProductGrid from '../components/ProductGrid';
import { initialProducts } from '../data/initialProducts';
import '../styles/Home.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceRange, setPriceRange] = useState('All'); // updated

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('products')) || [];
    setProducts([...initialProducts, ...saved]);
  }, []);

  const filteredProducts = products.filter((p) => {
    const inCategory = categoryFilter === 'All' || p.category === categoryFilter;

    let inPrice = true;
    if (priceRange !== 'All') {
      const [min, max] = priceRange.split('-').map(Number);
      inPrice = p.price >= min && p.price <= max;
    }

    return inCategory && inPrice;
  });

  return (
    <div className="home-page" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 250px', maxWidth: '300px' }}>
        <SidebarFilters
          category={categoryFilter}
          setCategory={setCategoryFilter}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>

      <div style={{ flex: '3 1 600px' }}>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
