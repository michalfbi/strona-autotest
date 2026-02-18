import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home";
import { CarPurchaseAssistance } from "./pages/CarPurchaseAssistance";
import { Services } from "./pages/Services";
import { ForBusiness } from "./pages/ForBusiness";
import { CaseStudies } from "./pages/CaseStudies";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { CarPreparation } from "./pages/CarPreparation";
import { CallPopup } from "./components/ui/CallPopup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pomoc-w-zakupie" element={<CarPurchaseAssistance />} />
            <Route path="/uslugi" element={<Services />} />
            <Route path="/dla-firm" element={<ForBusiness />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/cennik" element={<Pricing />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/przygotowanie-do-sprzedazy" element={<CarPreparation />} />
          </Routes>
        </Layout>
        <CallPopup />
      </BrowserRouter>
    </div>
  );
}

export default App;