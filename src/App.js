import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home.js";
import { RqSuperheroes } from "./components/RqSuperheroes.js";
import { SuperHeroes } from "./components/SuperHeroes.js";

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroes />}></Route>
          <Route path="/rq-super-heroes" element={<RqSuperheroes />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
