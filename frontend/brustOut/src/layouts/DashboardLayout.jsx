import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Outlet />
    </div>
  );
}
