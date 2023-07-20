
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productdetail/:id" element={<ProductDetailPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
