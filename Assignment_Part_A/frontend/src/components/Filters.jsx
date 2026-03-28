import { useState } from "react";

function Filters({ filters, onChange, clearFilter }) {
  const [minPrice, setMinprice] = useState("");
  const [maxPrice, setMaxprice] = useState("");

  const handlePriceChange = () => {
    if (minPrice > maxPrice) {
      alert("Price is not valied..");
      return;
    }

    onChange({ ...filters, minPrice: +minPrice, maxPrice: +maxPrice });
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center",
        margin: "15px 0",
      }}
    >
      {/* Category Dropdown */}
      <select
        value={filters.category}
        onChange={(e) => onChange({ ...filters, category: e.target.value })}
        style={{
          padding: "10px 14px",
          fontSize: "15px",
          color: "rgba(0, 0, 0, 0.75)",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          cursor: "pointer",
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
        onFocus={(e) => {
          e.target.style.border = "1px solid #007bff";
          e.target.style.boxShadow = "0 0 6px rgba(0,123,255,0.3)";
        }}
      >
        <option value="">All Categories</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>

      {/* Min Price */}
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) =>
          setMinprice(e.target.value === "" ? "" : Number(e.target.value))
        }
        style={{
          width: "120px",
          padding: "10px 12px",
          fontSize: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
        onFocus={(e) => {
          e.target.style.border = "1px solid #28a745";
          e.target.style.boxShadow = "0 0 6px rgba(40,167,69,0.3)";
        }}
      />

      {/* Max Price */}
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxprice(e.target.value)}
        style={{
          width: "120px",
          padding: "10px 12px",
          fontSize: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
        onFocus={(e) => {
          e.target.style.border = "1px solid #dc3545";
          e.target.style.boxShadow = "0 0 6px rgba(220,53,69,0.3)";
        }}
      />
      <button
        onClick={handlePriceChange}
        style={{
          width: "120px",
          cursor: "pointer",
          padding: "10px 12px",
          fontSize: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          backgroundColor: "rgba(69, 66, 66, 0.71)",
        }}
      >
        Filter Price
      </button>

      <button
        onClick={(e) => {
          setMinprice("");
          setMaxprice("");
          clearFilter({ q: "", category: "", minPrice: "", maxPrice: "" });
        }}
        style={{
          width: "120px",
          cursor: "pointer",
          padding: "10px 12px",
          fontSize: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          backgroundColor: "rgba(69, 66, 66, 0.71)",
        }}
      >
        Clear Filter
      </button>
    </div>
  );
}

export default Filters;
