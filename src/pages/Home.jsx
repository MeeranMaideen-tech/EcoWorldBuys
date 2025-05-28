// import { useEffect, useState } from 'react';
// import SidebarFilters from '../components/SidebarFilters';
// import ProductGrid from '../components/ProductGrid';
// import { initialProducts } from '../data/initialProducts';

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [categoryFilter, setCategoryFilter] = useState('All');
//   const [priceFilter, setPriceFilter] = useState(100);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem('products')) || [];
//     setProducts([...initialProducts, ...saved]);
//   }, []);

//   const filteredProducts = products.filter((p) => {
//     const inCategory = categoryFilter === 'All' || p.category === categoryFilter;
//     const inPrice = p.price <= priceFilter;
//     return inCategory && inPrice;
//   });

//   return (
//     <div className="md:flex gap-6">
//       <div className="md:w-1/4">
//         <SidebarFilters
//           categoryFilter={categoryFilter}
//           setCategoryFilter={setCategoryFilter}
//           priceFilter={priceFilter}
//           setPriceFilter={setPriceFilter}
//         />
//       </div>

//       <div className="md:w-3/4">
//         <ProductGrid products={filteredProducts} />
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import SidebarFilters from '../components/SidebarFilters';
import ProductGrid from '../components/ProductGrid';
import { initialProducts } from '../data/initialProducts';
import '../styles/Home.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState(100);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('products')) || [];
    setProducts([...initialProducts, ...saved]);
  }, []);

  const filteredProducts = products.filter((p) => {
    const inCategory = categoryFilter === 'All' || p.category === categoryFilter;
    const inPrice = p.price <= priceFilter;
    return inCategory && inPrice;
  });

  return (
    <div className="home-page" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 250px', maxWidth: '300px' }}>
        <SidebarFilters
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
        />
      </div>

      <div style={{ flex: '3 1 600px' }}>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
