
function ProductList({ data }) {
  if (data.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div style={{display:"flex", flexWrap: "wrap", justifyContent:"center", gap: "25px"}}>
      {data.map(item => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px",  width: "200px", height : "auto", backgroundColor: "#8d41b190 ", borderRadius: "10px" }}>
          <img src={item.image} alt="" style={{ width: "200px", height : "200px", objectFit: "cover" }}/>
          <h4>{item.title}</h4>
          <p>Category: {item.category}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;