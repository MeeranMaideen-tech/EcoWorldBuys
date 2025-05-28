// import { useState } from 'react';

// export default function ProductForm() {
//   const [name, setName] = useState('');
//   const [category, setCategory] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!image) {
//       alert("Please upload an image.");
//       return;
//     }

//     const newProduct = {
//       id: Date.now(),
//       name,
//       category,
//       price: parseFloat(price),
//       image: URL.createObjectURL(image),
//     };

//     const existing = JSON.parse(localStorage.getItem('products')) || [];
//     localStorage.setItem('products', JSON.stringify([...existing, newProduct]));

//     alert("Product added!");
//     window.location.href = '/'; // Redirect to homepage
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
//       <input
//         type="text"
//         placeholder="Product Name"
//         className="w-full border border-neutral-300 p-2 rounded"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />

//       <select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         required
//         className="w-full border border-neutral-300 p-2 rounded"
//       >
//         <option value="">Select Category</option>
//         <option value="Personal Care">Personal Care</option>
//         <option value="Accessories">Accessories</option>
//         <option value="Kitchen">Kitchen</option>
//       </select>

//       <input
//         type="number"
//         placeholder="Price"
//         className="w-full border border-neutral-300 p-2 rounded"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         required
//       />

//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setImage(e.target.files[0])}
//         className="w-full"
//         required
//       />

//       <button
//         type="submit"
//         className="bg-primary text-white px-4 py-2 rounded hover:opacity-90 transition"
//       >
//         Add Product
//       </button>
//     </form>
//   );
// }
import '../styles/ProductForm.css';

import { useState } from 'react';

export default function ProductForm() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      category,
      price: parseFloat(price),
      image: URL.createObjectURL(image),
    };

    const existing = JSON.parse(localStorage.getItem('products')) || [];
    localStorage.setItem('products', JSON.stringify([...existing, newProduct]));

    alert("Product added!");
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>Add Product</h2>

      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Accessories">Accessories</option>
        <option value="Kitchen">Kitchen</option>
      </select>

      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <label htmlFor="image">Product Image</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />

      <button type="submit">Add Product</button>
    </form>
  );
}
