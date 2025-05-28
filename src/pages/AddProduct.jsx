// import ProductForm from '../components/ProductForm';

// export default function AddProduct() {
//   return (
//     <div className="max-w-lg mx-auto">
//       <h2 className="text-xl font-heading mb-4">Add New Product</h2>
//       <ProductForm />
//     </div>
//   );
// }

import ProductForm from '../components/ProductForm';
import '../styles/AddProduct.css'; 


export default function AddProduct() {
  return (
    <div className="add-product-page">
      <div>
        <h2 style={{ fontSize: '20px', marginBottom: '16px', color: '#333' }}>Add New Product</h2>
        <ProductForm />
      </div>
    </div>
  );
}
