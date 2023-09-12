// import React from 'react'

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./Container/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
