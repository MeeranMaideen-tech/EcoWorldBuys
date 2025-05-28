// export default function SidebarFilters({ categoryFilter, setCategoryFilter, priceFilter, setPriceFilter }) {
//   return (
//     <div className="mb-6 space-y-4">
//       <div>
//         <label className="block font-semibold mb-1">Category</label>
//         <select
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//           className="w-full border border-neutral-300 rounded p-2"
//         >
//           <option value="All">All</option>
//           <option value="Personal Care">Personal Care</option>
//           <option value="Accessories">Accessories</option>
//           <option value="Kitchen">Kitchen</option>
//         </select>
//       </div>

//       <div>
//         <label className="block font-semibold mb-1">Max Price</label>
//         <input
//           type="range"
//           min={0}
//           max={100}
//           value={priceFilter}
//           onChange={(e) => setPriceFilter(Number(e.target.value))}
//           className="w-full"
//         />
//         <p className="text-sm text-neutral-600">Up to ${priceFilter}</p>
//       </div>
//     </div>
//   );
// }
import '../styles/SidebarFilters.css';

export default function SidebarFilters({ categoryFilter, setCategoryFilter, priceFilter, setPriceFilter }) {
  return (
    <div className="sidebar-filters">
      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Accessories">Accessories</option>
          <option value="Kitchen">Kitchen</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price">Max Price</label>
        <input
          id="price"
          type="range"
          min={0}
          max={100}
          value={priceFilter}
          onChange={(e) => setPriceFilter(Number(e.target.value))}
        />
        <p style={{ fontSize: '14px', color: '#666' }}>Up to ${priceFilter}</p>
      </div>
    </div>
  );
}

