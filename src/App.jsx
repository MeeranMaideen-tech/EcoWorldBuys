// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import AddProduct from './pages/AddProduct';

// export default function App() {
//   return (
//     <Router>
//       <div className="p-4 font-body min-h-screen bg-neutral-100">
//         <header className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-heading text-primary">EcoWorldBuy</h1>
//           <nav className="space-x-4">
//             <Link to="/" className="text-primary hover:underline">Home</Link>
//             <Link
//               to="/add"
//               className="border border-primary px-3 py-1 rounded text-primary hover:bg-primary hover:text-white transition"
//             >
//               Add Product
//             </Link>
//           </nav>
//         </header>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/add" element={<AddProduct />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import './App.css';
export default function App() {
  return (
    <Router>
      <div className="container" style={{ flexDirection: 'column', fontFamily: 'sans-serif', backgroundColor: '#f5f5f5' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', padding: '20px' }}>
          <h1 style={{ fontSize: '24px', color: '#007bff', margin: 0 }}>EcoWorldBuy</h1>
          <nav>
            <Link to="/" style={{ color: '#007bff', marginRight: '16px', textDecoration: 'none' }}>Home</Link>
            <Link
              to="/add"
              style={{
                border: '1px solid #007bff',
                padding: '8px 12px',
                borderRadius: '6px',
                color: '#007bff',
                textDecoration: 'none',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#007bff';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#007bff';
              }}
            >
              Add Product
            </Link>
          </nav>
        </header>

        <main style={{ padding: '0 20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddProduct />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
