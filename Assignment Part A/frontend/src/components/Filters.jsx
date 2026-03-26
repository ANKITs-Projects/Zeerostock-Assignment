
function Filters({ filters, onChange }) {
  const handlePriceChange = (key, value) => {
    if (
      key === "minPrice" &&
      filters.maxPrice &&
      Number(value) > Number(filters.maxPrice)
    ) {
      alert("Invalid price range");
      return;
    }

    if (
      key === "maxPrice" &&
      filters.minPrice &&
      Number(value) < Number(filters.minPrice)
    ) {
      alert("Invalid price range");
      return;
    }

    onChange({ ...filters, [key]: value });
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <select
        value={filters.category}
        onChange={(e) =>
          onChange({ ...filters, category: e.target.value })
        }
      >
        <option value="">All Categories</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={(e) =>
          handlePriceChange("minPrice", e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={(e) =>
          handlePriceChange("maxPrice", e.target.value)
        }
      />
    </div>
  );
}

export default Filters;