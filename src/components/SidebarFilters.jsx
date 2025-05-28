import './SidebarFilters.css';

const SidebarFilters = ({ category, setCategory, priceRange, setPriceRange }) => {
  return (
    <div className="sidebar">
      <h3>Category</h3>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Accessories">Accessories</option>
        <option value="Kitchen">Kitchen</option>
      </select>

      <h3>Price Range</h3>
      <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
        <option value="All">All</option>
        <option value="0-10">Up to $10</option>
        <option value="10-20">$10 - $20</option>
        <option value="20-30">$20 - $30</option>
        <option value="30-100">$30 - $100</option>
      </select>
    </div>
  );
};

export default SidebarFilters;
