import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="layout">
        <Sidebar />

        <Routes>
          <Route
            path="/"
            element={
              <Home search={search} />
            }
          />

          <Route
            path="/video/:id"
            element={<VideoPlayer />}
          />
        </Routes>
      </div>
        <footer className="footer">
          © 2025 YouTube Clone • Made by Ishita
       </footer>
    </BrowserRouter>
  );
}

export default App;