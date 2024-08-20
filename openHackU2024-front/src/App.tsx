import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
//import "./App.css";

import Settings from "./Settings";
import Share from "./Share";
import Home from "./Home";
import MenuBar from "./components/menuBar";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/share" element={<Share />} />
              </Routes>
              <MenuBar />
          </div>
      </BrowserRouter>
  );
}

export default App;