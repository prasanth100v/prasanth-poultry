const products = [
  {
    name: "Broiler Chicken",
    price: "₹180 / kg",
    img: "/broiler.jpg",
  },
  {
    name: "Country Chicken",
    price: "₹450 / kg",
    img: "/country.jpg",
  },
  {
    name: "Fresh Eggs",
    price: "₹7 / egg",
    img: "/eggs.jpg",
  },
];

export default function Products() {
  return (
    <section className="products">
      <h2>Our Products</h2>

      <div className="product-grid">
        {products.map((p, i) => (
          <div key={i} className="card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
