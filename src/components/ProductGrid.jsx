// import ProductCard from './ProductCard';

// export default function ProductGrid({ products }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {products.length === 0 ? (
//         <p className="text-center text-neutral-500 col-span-full">No products found.</p>
//       ) : (
//         products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))
//       )}
//     </div>
//   );
// }

import ProductCard from './ProductCard';
import '../styles/ProductGrid.css';

export default function ProductGrid({ products }) {
  return (
    <div className="grid">
      {products.length === 0 ? (
        <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888' }}>
          No products found.
        </p>
      ) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
