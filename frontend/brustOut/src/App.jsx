import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";

import AboutUs from "./pages/aboutUs.jsx";
import LoginPage from "./pages/loginPage.jsx";
import SignUp from "./pages/signUp.jsx";
import HeroPage from "./pages/heroPage.jsx";
import ListenerOnboarding from "./pages/ListenerOnboarding.jsx";
import ListenerProfile from "./pages/ListenerProfile";
import UserToListener from "./pages/UserToListener";

function Home() {
  return <HeroPage />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/listener-onboarding" element={<ListenerOnboarding />} />
        <Route path="/listener" element={<ListenerProfile />} />
        <Route path="/listener/:id" element={<UserToListener />} />
      </Route>
    </Routes>
  );
}
