import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import Detail from "./Detail/detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
