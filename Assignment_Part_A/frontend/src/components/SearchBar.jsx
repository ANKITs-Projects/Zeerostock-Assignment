
function SearchBar({ filters, onChange }) {
  return (
    <input
  type="text"
  placeholder="Search product..."
  value={filters.q}
  onChange={(e) =>
    onChange({ ...filters, q: e.target.value })
  }
  style={{
    width: "100%",
    maxWidth: "400px",
    padding: "12px 16px",
    margin: "10px 0",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }}
  onFocus={(e) => {
    e.target.style.border = "1px solid #007bff";
    e.target.style.boxShadow = "0 0 8px rgba(0,123,255,0.3)";
  }}
/>
  );
}

export default SearchBar;