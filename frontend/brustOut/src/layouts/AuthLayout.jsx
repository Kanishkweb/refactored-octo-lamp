import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <Header />

      <main className="pt-20 min-h-screen bg-[#020517]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
