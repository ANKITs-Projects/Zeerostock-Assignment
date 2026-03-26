
function SearchBar({ filters, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search product..."
      value={filters.q}
      onChange={(e) =>
        onChange({ ...filters, q: e.target.value })
      }
    />
  );
}

export default SearchBar;