import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();

  // 🔥 CHAT PAGE → PURE OUTLET (NO STYLES, NO HEADER)
  if (location.pathname.startsWith("/chat")) {
    return <Outlet />;
  }

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
