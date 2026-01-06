import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";

import AboutUs from "./pages/aboutUs.jsx";
import LoginPage from "./pages/loginPage.jsx";
import SignUp from "./pages/signUp.jsx";
import Header from "./components/header.jsx";
import HeroPage from "./pages/heroPage.jsx";

function Home() {
  return (
    <>
      <HeroPage />
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
