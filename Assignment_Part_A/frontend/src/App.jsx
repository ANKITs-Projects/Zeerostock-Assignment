import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";

function App() {
  const [filters, setFilters] = useState({
    q: "",
    category: "",
    minPrice: "",
    maxPrice: ""
  });

  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  
  const fetchData = async (updatedFilters) => {
    try {
      let url = "https://zeerostock-assignment-9xfv.vercel.app/search?";

      Object.keys(updatedFilters).forEach(key => {
        if (updatedFilters[key]) {
          url += `${key}=${updatedFilters[key]}&`;
        }
      });

      const res = await fetch(url);
      const result = await res.json();

      setData(result.data);
      setError("");
    } catch (error) {
      setError("Internal server error please try again");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(filters);
    }, 300);

    return () => clearTimeout(timer)
  }, [filters]);

  const handleChange = (newFilters) => {
    setFilters(newFilters);
  };

  
  useEffect(() => {
    fetchData({});
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Inventory Search</h2>

      <SearchBar filters={filters} onChange={handleChange} />
      <Filters filters={filters} onChange={handleChange} clearFilter={setFilters}/>

      <ProductList data={data} />
    </div>
  );
}

export default App;