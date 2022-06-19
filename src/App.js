import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Rotating from "./comp/Rotating";
import Carousel from "./comp/Carousel";
import Box from "./comp/Box";
import Letters from "./comp/Letters";
import Shadow from "./comp/Shadow";
import Buttons from "./comp/Buttons";
import Clip from "./comp/Clip";
import SizeError from "./comp/SizeError";
import Transition from "./comp/Transition";
import Bling from "./comp/Bling";
import Count from "./comp/Count";

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
              <Link to="/buttons">3D buttons</Link>
            </li>
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
            <li>
              <Link to="/shadow">Responsive text shadows</Link>
            </li>
            <li>
              <Link to="/clip">Dynamic Clip Path</Link>
            </li>
            <li>
              <Link to="/sizeerror">Css width errrors</Link>
            </li>
            <li>
              <Link to="/transition">Transition</Link>
            </li>
            <li>
              <Link to="/count">count</Link>
            </li>
            <li>
              <Link to="/bling">bling</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={<div>Home</div>} />*/}
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/rotating" element={<Rotating />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/letters" element={<Letters />} />
          <Route path="/shadow" element={<Shadow />} />
          <Route path="/clip" element={<Clip />} />
          <Route path="/transition" element={<Transition />} />
          <Route path="/count" element={<Count />} />
          <Route path="/bling" element={<Bling />} />

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
      <Routes>
        <Route path="/sizeerror" element={<SizeError />} />
      </Routes>
    </div>
  );
}

export default App;
