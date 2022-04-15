import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Services,
  CompanyHistory,
  Location,
  Contact,
  Whoops404,
} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/history" element={<CompanyHistory />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/companyhistory" element={<CompanyHistory />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
export default App;
