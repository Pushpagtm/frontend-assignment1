
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/productdetail/:id" element={<ProductDetailPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
