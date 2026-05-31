import { Link } from "react-router-dom";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
  <h2>
    <span className="youtube-icon">▶</span> YouTube
  </h2>
</Link>

      <input
        type="text"
        placeholder="Search videos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="profile">
        👤
      </div>
    </nav>
  );
}

export default Navbar;