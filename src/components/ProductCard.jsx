// export default function ProductCard({ product }) {
//   return (
//     <div className="bg-white rounded-2xl shadow p-4 hover:shadow-md transition">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded-xl mb-4"
//       />
//       <h3 className="text-lg font-heading text-primary">{product.name}</h3>
//       <p className="text-sm text-neutral-600">{product.category}</p>
//       <p className="text-base text-black font-semibold">${product.price.toFixed(2)}</p>
//     </div>
//   );
// }
import '../styles/ProductCard.css';
export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
}
