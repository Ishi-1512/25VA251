function Navbar() {
  return (
    <nav className="navbar">
 <div className="logo-section">

  <div className="logo">
      amazon<span>.in</span>
  </div>

  <div className="location">
  <span className="deliver">
    📍 Deliver to Ishita
  </span>

  <span className="city">
    Ghaziabad 201009
  </span>
</div>

</div>
     <div className="search-bar">

  <select>
    <option>All</option>
  </select>

  <input
    type="text"
    placeholder="Search Amazon.in"
  />

  <button>🔍</button>

</div>
      <div className="nav-links">
        <p>Hello, Ishita</p>
        <p>Returns & Orders</p>
        <h3>🛒 Cart</h3>
      </div>

    </nav>
  );
}

export default Navbar;