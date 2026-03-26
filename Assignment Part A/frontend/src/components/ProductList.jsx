
function ProductList({ data }) {
  if (data.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
          <h4>{item.title}</h4>
          <p>Category: {item.category}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;