import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home";
import { VinReport } from "./pages/VinReport";
// ... reszta importów

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/raport-vin" element={<VinReport />} />
            {/* reszta tras */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
