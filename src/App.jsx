import "./App.css";
import Header from "./components/Header";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Photos />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
