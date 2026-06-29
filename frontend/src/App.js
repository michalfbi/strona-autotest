import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home";
import { VinReport } from "./pages/VinReport";
// ... import reszty stron (możesz dodać pozostałe w razie potrzeby)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/raport-vin" element={<VinReport />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
