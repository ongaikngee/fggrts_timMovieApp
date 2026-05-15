import "./css/App.css";
import NavBar from "./components/NavBar";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Favourites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
