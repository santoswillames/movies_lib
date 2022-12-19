import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          {" "}
          <Link to="/">Movies</Link>
        </h2>
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">Buscar</Link>
      </nav>
      <h2>Movies</h2>
      <Outlet />
    </div>
  );
}

export default App;
