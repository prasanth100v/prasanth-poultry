const products = [
  { name: "Broiler Chicken", price: "₹180 / kg" },
  { name: "Country Chicken", price: "₹450 / kg" },
  { name: "Fresh Eggs", price: "₹7 / egg" },
];

export default function Products() {
  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((p, i) => (
          <div key={i} className="card">
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

