import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Rotating from "./comp/Rotating";
import Carousel from "./comp/Carousel";
import Box from "./comp/Box";
import Letters from "./comp/Letters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li>*/}
            <li>
              <Link to="/rotating">rotating box</Link>
            </li>
            <li>
              <Link to="/carousel">carousel box</Link>
            </li>
            <li>
              <Link to="/box">3D box comp</Link>
            </li>
            <li>
              <Link to="/letters">Word glitch</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={<div>Home</div>} />*/}
          <Route path="/rotating" element={<Rotating />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/letters" element={<Letters />} />
          <Route
            path="/box"
            element={
              <>
                <div>
                  <Box width={300} height={200} depth={100} />
                </div>
                <div>
                  <Box width={100} height={200} depth={100} />
                </div>

                <div>
                  <Box width={50} height={80} depth={250} />
                </div>
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
