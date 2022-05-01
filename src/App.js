import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Basic from "./comp/basic";
import ToDo from "./comp/todo";
import Dude from "./comp/dude";
import Me from "./comp/me";
import Currency from "./comp/currency";
import CanvasEx from "./comp/canvas";

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
            </li>
            <li>
              <Link to="/basic">Recoil basic</Link>
            </li>
            <li>
              <Link to="/currency">Recoil Currency</Link>
            </li>
            <li>
              <Link to="/todo">Recoil ToDo</Link>
            </li>
            <li>
              <Link to="/me">Recoil Me</Link>
            </li>
            <li>
              <Link to="/dude">Recoil dude</Link>
            </li>
            <li>
              <Link to="/canvas">Recoil canvas</Link>
            </li> */}
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
          {/* <Route path="/" element={<div>Home</div>} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/me" element={<Me />} />
          <Route path="/dude" element={<Dude />} />
          <Route path="/canvas" element={<CanvasEx />} /> */}
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
